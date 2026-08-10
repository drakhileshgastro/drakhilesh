"use client";

import { useEffect, useState, useCallback } from "react";
import { Search, TrendingUp, TrendingDown, Minus, Plus, Trash2, RefreshCw, Filter, AlertTriangle } from "lucide-react";

interface KwRow {
  id: string;
  keyword: string;
  page_url: string;
  page_type: string;
  is_primary: boolean;
  intent: string;
  current_position: number | null;
  current_clicks: number;
  current_impressions: number;
  current_ctr: number | null;
  position_delta: number | null;
  updated_at: string;
}

interface OpportunityRow {
  keyword: string;
  url: string;
  title_hi: string | null;
  avg_position: number;
  total_clicks: number;
  total_impressions: number;
  avg_ctr_pct: number;
  days_tracked: number;
}

function DeltaBadge({ delta }: { delta: number | null }) {
  if (delta === null) return <span style={{ color: "#94a3b8", fontSize: 10 }}>—</span>;
  if (Math.abs(delta) < 0.5) return <Minus size={12} style={{ color: "#94a3b8" }} />;
  if (delta < 0) return (
    <span style={{ display: "flex", alignItems: "center", gap: 2, color: "#22c55e", fontSize: 10, fontWeight: 700 }}>
      <TrendingUp size={11} /> {Math.abs(delta).toFixed(1)}
    </span>
  );
  return (
    <span style={{ display: "flex", alignItems: "center", gap: 2, color: "#f87171", fontSize: 10, fontWeight: 700 }}>
      <TrendingDown size={11} /> {delta.toFixed(1)}
    </span>
  );
}

function PositionBadge({ pos }: { pos: number | null }) {
  if (pos === null) return <span style={{ color: "#94a3b8", fontSize: 11 }}>—</span>;
  const color = pos <= 3 ? "#22c55e" : pos <= 10 ? "#f59e0b" : pos <= 20 ? "#f97316" : "#f87171";
  return (
    <span style={{ color, fontWeight: 700, fontSize: 12, fontFamily: "monospace" }}>
      #{Math.round(pos)}
    </span>
  );
}

function AddKeywordForm({ onAdd }: { onAdd: () => void }) {
  const [open, setOpen]     = useState(false);
  const [kw, setKw]         = useState("");
  const [url, setUrl]       = useState("");
  const [type, setType]     = useState("blog");
  const [saving, setSaving] = useState(false);
  const [err, setErr]       = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!kw.trim() || !url.trim()) return;
    setSaving(true); setErr("");
    try {
      const r = await fetch("/api/admin/keywords", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword: kw.trim(), page_url: url.trim(), page_type: type }),
      });
      const j = await r.json();
      if (!j.success) { setErr(j.error ?? "Failed"); return; }
      setKw(""); setUrl(""); setOpen(false);
      onAdd();
    } catch { setErr("Network error"); }
    finally { setSaving(false); }
  }

  if (!open) return (
    <button onClick={() => setOpen(true)}
      style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#27AE60", color: "#fff", border: 0, borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
      <Plus size={13} /> Add Keyword
    </button>
  );

  return (
    <form onSubmit={submit} style={{ display: "flex", flexWrap: "wrap", gap: 8, alignItems: "center", padding: "12px", background: "#f8fafc", borderRadius: 12, border: "1px solid #e2e8f0", marginTop: 8 }}>
      <input value={kw} onChange={e => setKw(e.target.value)} placeholder="Keyword" required
        style={{ flex: "1 1 200px", padding: "7px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 12 }} />
      <input value={url} onChange={e => setUrl(e.target.value)} placeholder="/blog/slug or /conditions/fatty-liver" required
        style={{ flex: "2 1 280px", padding: "7px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 12 }} />
      <select value={type} onChange={e => setType(e.target.value)}
        style={{ padding: "7px 10px", borderRadius: 8, border: "1px solid #cbd5e1", fontSize: 12, background: "#fff" }}>
        {["blog","condition","procedure","symptom","location","diet"].map(t =>
          <option key={t} value={t}>{t}</option>
        )}
      </select>
      <button type="submit" disabled={saving}
        style={{ padding: "7px 14px", background: "#27AE60", color: "#fff", border: 0, borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer", opacity: saving ? 0.6 : 1 }}>
        {saving ? "Saving…" : "Save"}
      </button>
      <button type="button" onClick={() => setOpen(false)}
        style={{ padding: "7px 10px", background: "#f1f5f9", color: "#64748b", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 12, cursor: "pointer" }}>
        Cancel
      </button>
      {err && <p style={{ color: "#ef4444", fontSize: 11, width: "100%" }}>{err}</p>}
    </form>
  );
}

export default function KeywordMapping() {
  const [rows, setRows]         = useState<KwRow[]>([]);
  const [opps, setOpps]         = useState<OpportunityRow[]>([]);
  const [view, setView]         = useState<"map"|"opportunities">("map");
  const [loading, setLoading]   = useState(true);
  const [search, setSearch]     = useState("");
  const [typeFilter, setFilter] = useState("all");

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const [mapRes, oppRes] = await Promise.all([
        fetch("/api/admin/keywords?limit=500"),
        fetch("/api/admin/keywords?view=opportunities&limit=100"),
      ]);
      const mapJson = await mapRes.json();
      const oppJson = await oppRes.json();
      if (mapJson.success) setRows(mapJson.data ?? []);
      if (oppJson.success) setOpps(oppJson.data ?? []);
    } catch { /* ignore */ }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { load(); }, [load]);

  async function deleteKw(id: string) {
    if (!confirm("Remove this keyword mapping?")) return;
    await fetch(`/api/admin/keywords?id=${id}`, { method: "DELETE" });
    setRows(r => r.filter(x => x.id !== id));
  }

  const filtered = rows.filter(r => {
    const matchSearch = !search || r.keyword.toLowerCase().includes(search.toLowerCase()) || r.page_url.toLowerCase().includes(search.toLowerCase());
    const matchType   = typeFilter === "all" || r.page_type === typeFilter;
    return matchSearch && matchType;
  });

  const top10  = filtered.filter(r => r.current_position && r.current_position <= 10).length;
  const pos4to20 = filtered.filter(r => r.current_position && r.current_position > 3 && r.current_position <= 20).length;
  const noData = filtered.filter(r => !r.current_position).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Keyword Mapping</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>Track which pages rank for which keywords — updated daily via GSC</p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <button onClick={load} style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff", fontSize: 12, cursor: "pointer", color: "#64748b" }}>
            <RefreshCw size={13} /> Refresh
          </button>
        </div>
      </div>

      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
        {[
          { label: "Total Keywords", value: rows.length, color: "#27AE60" },
          { label: "Top 10 Rankings", value: top10, color: "#22c55e" },
          { label: "Positions 4–20", value: pos4to20, color: "#f59e0b", badge: "Quick Wins" },
          { label: "No Data Yet", value: noData, color: "#94a3b8" },
        ].map(s => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: "14px 16px" }}>
            <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600, marginBottom: 4 }}>{s.label}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</span>
              {s.badge && <span style={{ fontSize: 9, background: "#fef3c7", color: "#d97706", padding: "2px 6px", borderRadius: 99, fontWeight: 700 }}>{s.badge}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* View tabs */}
      <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #e2e8f0", paddingBottom: 0 }}>
        {(["map","opportunities"] as const).map(v => (
          <button key={v} onClick={() => setView(v)}
            style={{ padding: "8px 14px", border: 0, background: "none", fontWeight: 700, fontSize: 12, cursor: "pointer", borderBottom: view === v ? "2px solid #27AE60" : "2px solid transparent", color: view === v ? "#27AE60" : "#64748b", marginBottom: -1 }}>
            {v === "map" ? `Keyword Map (${rows.length})` : `Quick Wins (${opps.length})`}
          </button>
        ))}
      </div>

      {view === "map" && (
        <>
          {/* Filters */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ position: "relative", flex: "1 1 200px" }}>
              <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search keyword or URL…"
                style={{ width: "100%", paddingLeft: 30, paddingRight: 10, paddingTop: 8, paddingBottom: 8, border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff", boxSizing: "border-box" }} />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <Filter size={13} style={{ color: "#94a3b8" }} />
              <select value={typeFilter} onChange={e => setFilter(e.target.value)}
                style={{ padding: "8px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
                <option value="all">All Types</option>
                {["blog","condition","procedure","symptom","location","diet"].map(t =>
                  <option key={t} value={t}>{t}</option>
                )}
              </select>
            </div>
            <AddKeywordForm onAdd={load} />
          </div>

          {loading ? (
            <div style={{ textAlign: "center", padding: 40, color: "#94a3b8", fontSize: 13 }}>Loading keyword data…</div>
          ) : filtered.length === 0 ? (
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 32, textAlign: "center" }}>
              <AlertTriangle size={24} style={{ color: "#f59e0b", margin: "0 auto 8px" }} />
              <p style={{ color: "#64748b", fontSize: 13 }}>
                {rows.length === 0
                  ? "No keywords tracked yet. Add your first keyword above, or run the GSC sync cron to auto-populate."
                  : "No keywords match your filter."}
              </p>
            </div>
          ) : (
            <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                  <thead>
                    <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                      {["Keyword","Page URL","Type","Position","Δ 7d","Clicks","CTR","Primary?",""].map(h => (
                        <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "#64748b", fontSize: 11, whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((row, i) => (
                      <tr key={row.id} style={{ borderBottom: i < filtered.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                        <td style={{ padding: "10px 12px", color: "#0f172a", fontWeight: 600, maxWidth: 200 }}>
                          <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{row.keyword}</span>
                        </td>
                        <td style={{ padding: "10px 12px", color: "#27AE60", fontFamily: "monospace", fontSize: 11 }}>
                          <a href={row.page_url} target="_blank" rel="noreferrer" style={{ color: "#27AE60", textDecoration: "none" }}>{row.page_url}</a>
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          <span style={{ fontSize: 10, background: "#f1f5f9", color: "#64748b", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>{row.page_type}</span>
                        </td>
                        <td style={{ padding: "10px 12px" }}><PositionBadge pos={row.current_position} /></td>
                        <td style={{ padding: "10px 12px" }}><DeltaBadge delta={row.position_delta} /></td>
                        <td style={{ padding: "10px 12px", color: "#374151", fontWeight: 700 }}>{row.current_clicks.toLocaleString()}</td>
                        <td style={{ padding: "10px 12px", color: "#94a3b8", fontFamily: "monospace" }}>
                          {row.current_ctr !== null ? `${(row.current_ctr * 100).toFixed(1)}%` : "—"}
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          {row.is_primary
                            ? <span style={{ color: "#27AE60", fontSize: 10, fontWeight: 700 }}>✓ Primary</span>
                            : <span style={{ color: "#94a3b8", fontSize: 10 }}>Secondary</span>}
                        </td>
                        <td style={{ padding: "10px 12px" }}>
                          <button onClick={() => deleteKw(row.id)} style={{ background: "none", border: 0, cursor: "pointer", color: "#fca5a5", padding: 4 }}>
                            <Trash2 size={13} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}

      {view === "opportunities" && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          <div style={{ padding: "14px 16px", borderBottom: "1px solid #f1f5f9", background: "#fffbeb" }}>
            <p style={{ fontSize: 12, color: "#92400e", fontWeight: 600, margin: 0 }}>
              ⚡ These keywords rank at positions 4–20 — optimize these pages to move into top 3 and 3× the clicks.
            </p>
          </div>
          {loading ? (
            <div style={{ padding: 32, textAlign: "center", color: "#94a3b8" }}>Loading…</div>
          ) : opps.length === 0 ? (
            <div style={{ padding: 32, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
              No GSC data yet — run the GSC sync cron first (or add GOOGLE_SERVICE_ACCOUNT_KEY env var).
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    {["Keyword","Page","Avg Position","Impressions","Clicks","CTR","Days"].map(h => (
                      <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontWeight: 700, color: "#64748b", fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {opps.map((o, i) => (
                    <tr key={`${o.keyword}-${o.url}`} style={{ borderBottom: i < opps.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ padding: "10px 12px", color: "#0f172a", fontWeight: 600 }}>{o.keyword}</td>
                      <td style={{ padding: "10px 12px", color: "#27AE60", fontFamily: "monospace", fontSize: 11 }}>
                        <a href={o.url} target="_blank" rel="noreferrer" style={{ color: "#27AE60", textDecoration: "none" }}>{o.url}</a>
                      </td>
                      <td style={{ padding: "10px 12px" }}><PositionBadge pos={o.avg_position} /></td>
                      <td style={{ padding: "10px 12px", color: "#374151", fontWeight: 700 }}>{o.total_impressions.toLocaleString()}</td>
                      <td style={{ padding: "10px 12px", color: "#374151" }}>{o.total_clicks.toLocaleString()}</td>
                      <td style={{ padding: "10px 12px", color: "#94a3b8" }}>{o.avg_ctr_pct.toFixed(1)}%</td>
                      <td style={{ padding: "10px 12px", color: "#94a3b8" }}>{o.days_tracked}d</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
