"use client";

import { useEffect, useState, useCallback } from "react";
import { TrendingUp, Eye, MousePointerClick, BarChart3, RefreshCw, AlertTriangle } from "lucide-react";

interface Summary {
  totalClicks: number;
  totalImpressions: number;
  avgPosition: number;
  avgCtr: number;
}

interface PageRow {
  url: string;
  slug: string | null;
  title_hi: string | null;
  title_en: string | null;
  category: string | null;
  clicks_7d: number;
  impressions_7d: number;
  avg_position_7d: number | null;
  clicks_28d: number;
  impressions_28d: number;
  clicks_total: number;
  impressions_total: number;
  avg_position_all: number | null;
  last_synced_date: string | null;
}

interface KeywordRow {
  keyword: string;
  clicks: number;
  impressions: number;
  avg_position: number | null;
  ctr: number;
  page_count: number;
}

function StatCard({ label, value, sub, icon, color }: { label: string; value: string; sub?: string; icon: React.ReactNode; color: string }) {
  return (
    <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: "18px 20px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>{label}</p>
        <div style={{ width: 34, height: 34, borderRadius: 10, background: `${color}18`, display: "flex", alignItems: "center", justifyContent: "center", color }}>{icon}</div>
      </div>
      <p style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", margin: 0 }}>{value}</p>
      {sub && <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 3 }}>{sub}</p>}
    </div>
  );
}

function PositionBar({ pos }: { pos: number | null }) {
  if (!pos) return <span style={{ color: "#cbd5e1", fontSize: 11 }}>—</span>;
  const capped = Math.min(pos, 50);
  const pct = 100 - (capped / 50) * 100;
  const color = pos <= 3 ? "#22c55e" : pos <= 10 ? "#f59e0b" : "#f97316";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div style={{ flex: 1, height: 6, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
        <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 99 }} />
      </div>
      <span style={{ fontSize: 11, fontWeight: 700, color, width: 30, textAlign: "right" }}>#{Math.round(pos)}</span>
    </div>
  );
}

export default function TrafficStats() {
  const [days, setDays]         = useState(28);
  const [summary, setSummary]   = useState<Summary | null>(null);
  const [pages, setPages]       = useState<PageRow[]>([]);
  const [keywords, setKeywords] = useState<KeywordRow[]>([]);
  const [view, setView]         = useState<"pages"|"keywords">("pages");
  const [loading, setLoading]   = useState(true);
  const [noGsc, setNoGsc]       = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setNoGsc(false);
    try {
      const [sumRes, pageRes, kwRes] = await Promise.all([
        fetch(`/api/admin/gsc?view=summary&days=${days}`),
        fetch(`/api/admin/gsc?view=by-page&days=${days}`),
        fetch(`/api/admin/gsc?view=by-keyword&days=${days}`),
      ]);
      const sumJ  = await sumRes.json();
      const pageJ = await pageRes.json();
      const kwJ   = await kwRes.json();

      if (sumJ.success)  setSummary(sumJ.data);
      else               setNoGsc(true);
      if (pageJ.success) setPages(pageJ.data ?? []);
      if (kwJ.success)   setKeywords(kwJ.data ?? []);
    } catch { setNoGsc(true); }
    finally { setLoading(false); }
  }, [days]);

  useEffect(() => { load(); }, [load]);

  const fmt = (n: number) => n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Traffic Stats</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>Google Search Console data — synced daily at 8:30 AM IST</p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <select value={days} onChange={e => setDays(Number(e.target.value))}
            style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
            <option value={7}>Last 7 days</option>
            <option value={28}>Last 28 days</option>
            <option value={90}>Last 90 days</option>
          </select>
          <button onClick={load} style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff", fontSize: 12, cursor: "pointer", color: "#64748b" }}>
            <RefreshCw size={13} /> Refresh
          </button>
        </div>
      </div>

      {/* GSC not configured warning */}
      {noGsc && (
        <div style={{ background: "#fff7ed", border: "1px solid #fed7aa", borderRadius: 14, padding: "14px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <AlertTriangle size={16} style={{ color: "#f97316", flexShrink: 0, marginTop: 1 }} />
          <div>
            <p style={{ fontWeight: 700, color: "#c2410c", fontSize: 13, margin: 0 }}>GSC Not Connected</p>
            <p style={{ color: "#9a3412", fontSize: 11, marginTop: 4 }}>
              Add <code style={{ background: "#fed7aa", padding: "1px 5px", borderRadius: 4 }}>GOOGLE_SERVICE_ACCOUNT_KEY</code> to Vercel env vars and re-deploy.
              Then add the service account email as Owner in your GSC property. The daily cron will sync data automatically.
            </p>
          </div>
        </div>
      )}

      {/* Summary stats */}
      {summary && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
          <StatCard label="Total Clicks" value={fmt(summary.totalClicks)} sub={`Last ${days} days`} icon={<MousePointerClick size={16} />} color="#27AE60" />
          <StatCard label="Impressions" value={fmt(summary.totalImpressions)} sub="Search result appearances" icon={<Eye size={16} />} color="#3b82f6" />
          <StatCard label="Avg Position" value={`#${summary.avgPosition}`} sub="Average search rank" icon={<TrendingUp size={16} />} color="#f59e0b" />
          <StatCard label="Avg CTR" value={`${(summary.avgCtr * 100).toFixed(1)}%`} sub="Click-through rate" icon={<BarChart3 size={16} />} color="#8b5cf6" />
        </div>
      )}

      {!summary && !loading && !noGsc && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
          {["Total Clicks","Impressions","Avg Position","Avg CTR"].map(l => (
            <div key={l} style={{ background: "#f8fafc", borderRadius: 16, border: "1px solid #e2e8f0", padding: "18px 20px" }}>
              <p style={{ fontSize: 11, color: "#cbd5e1", fontWeight: 700 }}>{l}</p>
              <div style={{ height: 28, background: "#e2e8f0", borderRadius: 6, marginTop: 10, animation: "pulse 2s infinite" }} />
            </div>
          ))}
        </div>
      )}

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #e2e8f0" }}>
        {(["pages","keywords"] as const).map(v => (
          <button key={v} onClick={() => setView(v)}
            style={{ padding: "8px 14px", border: 0, background: "none", fontWeight: 700, fontSize: 12, cursor: "pointer", borderBottom: view === v ? "2px solid #27AE60" : "2px solid transparent", color: view === v ? "#27AE60" : "#64748b", marginBottom: -1 }}>
            {v === "pages" ? `By Page (${pages.length})` : `By Keyword (${keywords.length})`}
          </button>
        ))}
      </div>

      {loading && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 40, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
          Loading traffic data…
        </div>
      )}

      {/* Pages table */}
      {!loading && view === "pages" && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          {pages.length === 0 ? (
            <div style={{ padding: 32, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
              No page traffic data yet. Sync GSC to populate.
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    {["Page","Clicks (7d)","Clicks (28d)","Impressions (28d)","Avg Rank","Last Sync"].map(h => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, color: "#64748b", fontSize: 11, whiteSpace: "nowrap" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {pages.map((page, i) => (
                    <tr key={page.url} style={{ borderBottom: i < pages.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ padding: "10px 14px", maxWidth: 220 }}>
                        <a href={page.url} target="_blank" rel="noreferrer" style={{ color: "#27AE60", fontSize: 11, fontFamily: "monospace", textDecoration: "none", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{page.url}</a>
                        {page.title_hi && <p style={{ color: "#64748b", fontSize: 11, margin: "2px 0 0", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 200 }}>{page.title_hi}</p>}
                      </td>
                      <td style={{ padding: "10px 14px", fontWeight: 700, color: "#0f172a" }}>{(page.clicks_7d ?? 0).toLocaleString()}</td>
                      <td style={{ padding: "10px 14px", color: "#374151" }}>{(page.clicks_28d ?? 0).toLocaleString()}</td>
                      <td style={{ padding: "10px 14px", color: "#64748b" }}>{(page.impressions_28d ?? 0).toLocaleString()}</td>
                      <td style={{ padding: "10px 14px", width: 140 }}><PositionBar pos={page.avg_position_7d} /></td>
                      <td style={{ padding: "10px 14px", color: "#94a3b8", fontSize: 11 }}>
                        {page.last_synced_date ? new Date(page.last_synced_date).toLocaleDateString("en-IN", { day: "2-digit", month: "short" }) : "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* Keywords table */}
      {!loading && view === "keywords" && (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", overflow: "hidden" }}>
          {keywords.length === 0 ? (
            <div style={{ padding: 32, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
              No keyword data yet.
            </div>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#f8fafc", borderBottom: "1px solid #e2e8f0" }}>
                    {["Keyword","Clicks","Impressions","Avg Position","CTR","Pages"].map(h => (
                      <th key={h} style={{ padding: "10px 14px", textAlign: "left", fontWeight: 700, color: "#64748b", fontSize: 11 }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {keywords.map((kw, i) => (
                    <tr key={kw.keyword} style={{ borderBottom: i < keywords.length - 1 ? "1px solid #f1f5f9" : "none" }}>
                      <td style={{ padding: "10px 14px", color: "#0f172a", fontWeight: 600 }}>{kw.keyword}</td>
                      <td style={{ padding: "10px 14px", fontWeight: 700, color: "#27AE60" }}>{kw.clicks.toLocaleString()}</td>
                      <td style={{ padding: "10px 14px", color: "#374151" }}>{kw.impressions.toLocaleString()}</td>
                      <td style={{ padding: "10px 14px", width: 120 }}><PositionBar pos={kw.avg_position} /></td>
                      <td style={{ padding: "10px 14px", color: "#94a3b8" }}>{(kw.ctr * 100).toFixed(1)}%</td>
                      <td style={{ padding: "10px 14px", color: "#94a3b8", fontSize: 11 }}>{kw.page_count} page{kw.page_count !== 1 ? "s" : ""}</td>
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
