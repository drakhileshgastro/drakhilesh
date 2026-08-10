"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog-data";
import { Eye, Plus, Sparkles, Clock, Tag, RefreshCw, ListTodo, CheckCircle2, Circle, Send, Search, Filter } from "lucide-react";

interface QueueItem {
  id: string;
  keyword: string;
  secondary_kws: string[];
  target_category: string;
  priority: number;
  status: string;
  requested_by: string;
  notes: string | null;
  created_at: string;
}

const STATUS_CONFIG: Record<string, { color: string; bg: string; label: string }> = {
  pending:     { color: "#f59e0b", bg: "#fffbeb", label: "Pending" },
  researching: { color: "#3b82f6", bg: "#eff6ff", label: "Researching" },
  writing:     { color: "#8b5cf6", bg: "#f5f3ff", label: "Writing" },
  reviewing:   { color: "#f97316", bg: "#fff7ed", label: "Reviewing" },
  published:   { color: "#22c55e", bg: "#f0fdf4", label: "Published" },
  rejected:    { color: "#94a3b8", bg: "#f8fafc", label: "Rejected" },
};

function StatusPill({ status }: { status: string }) {
  const cfg = STATUS_CONFIG[status] ?? STATUS_CONFIG.pending;
  return (
    <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 99, background: cfg.bg, color: cfg.color }}>
      {cfg.label}
    </span>
  );
}

function AddToQueueModal({ onClose, onAdded }: { onClose: () => void; onAdded: () => void }) {
  const [keyword,  setKeyword]  = useState("");
  const [category, setCategory] = useState("conditions");
  const [priority, setPriority] = useState(5);
  const [notes,    setNotes]    = useState("");
  const [saving,   setSaving]   = useState(false);
  const [err,      setErr]      = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true); setErr("");
    try {
      const r = await fetch("/api/admin/blog-queue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ keyword, target_category: category, priority, notes: notes || undefined }),
      });
      const j = await r.json();
      if (!j.success) { setErr(typeof j.error === "string" ? j.error : JSON.stringify(j.error)); return; }
      onAdded(); onClose();
    } catch { setErr("Network error"); }
    finally { setSaving(false); }
  }

  return (
    <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 100, display: "flex", alignItems: "center", justifyContent: "center", padding: 16 }}>
      <div style={{ background: "#fff", borderRadius: 20, padding: 24, width: "100%", maxWidth: 480, boxShadow: "0 25px 50px rgba(0,0,0,0.25)" }}>
        <h3 style={{ fontWeight: 800, fontSize: 16, color: "#0f172a", marginBottom: 16 }}>Add Keyword to Pipeline</h3>
        <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div>
            <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 5 }}>Target Keyword *</label>
            <input value={keyword} onChange={e => setKeyword(e.target.value)} required placeholder="e.g. fatty liver treatment Ranchi"
              style={{ width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 13, boxSizing: "border-box" }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 5 }}>Category</label>
              <select value={category} onChange={e => setCategory(e.target.value)}
                style={{ width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 13 }}>
                {["conditions","procedures","symptoms","diet","locations","tests"].map(c =>
                  <option key={c} value={c}>{c}</option>
                )}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 5 }}>Priority (1–10)</label>
              <input type="number" min={1} max={10} value={priority} onChange={e => setPriority(Number(e.target.value))}
                style={{ width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 13, boxSizing: "border-box" }} />
            </div>
          </div>
          <div>
            <label style={{ fontSize: 11, fontWeight: 700, color: "#374151", display: "block", marginBottom: 5 }}>Notes (optional)</label>
            <textarea value={notes} onChange={e => setNotes(e.target.value)} rows={2} placeholder="Any briefing notes for the researcher/writer…"
              style={{ width: "100%", padding: "9px 12px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 13, resize: "vertical", boxSizing: "border-box" }} />
          </div>
          {err && <p style={{ color: "#ef4444", fontSize: 11 }}>{err}</p>}
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 4 }}>
            <button type="button" onClick={onClose}
              style={{ padding: "9px 18px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 13, cursor: "pointer", background: "#f8fafc", color: "#64748b" }}>Cancel</button>
            <button type="submit" disabled={!keyword.trim() || saving}
              style={{ padding: "9px 18px", background: "#27AE60", color: "#fff", border: 0, borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: "pointer", opacity: saving ? 0.6 : 1 }}>
              {saving ? "Adding…" : "Add to Pipeline"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default function BlogManager() {
  const [queueItems, setQueue]  = useState<QueueItem[]>([]);
  const [queueLoading, setQL]   = useState(true);
  const [view, setView]         = useState<"published"|"queue">("published");
  const [showAddModal, setAdd]  = useState(false);
  const [search, setSearch]     = useState("");
  const [catFilter, setCat]     = useState("all");
  const [statusFilter, setSt]   = useState("all");

  // AI generate state (kept from v1)
  const [aiTopic, setAiTopic]   = useState("");
  const [aiLoading, setAiLoad]  = useState(false);
  const [aiDraft, setAiDraft]   = useState("");

  const loadQueue = useCallback(async () => {
    setQL(true);
    try {
      const r = await fetch("/api/admin/blog-queue?limit=100");
      const j = await r.json();
      if (j.success) setQueue(j.data ?? []);
    } catch { /* ignore */ }
    finally { setQL(false); }
  }, []);

  useEffect(() => { loadQueue(); }, [loadQueue]);

  async function generateDraft() {
    if (!aiTopic.trim()) return;
    setAiLoad(true); setAiDraft("");
    try {
      const res = await fetch("/api/blog-ai", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ topic: aiTopic }) });
      const data = await res.json();
      setAiDraft(data.draft ?? "");
    } catch { setAiDraft("AI unavailable. Add your Anthropic API key."); }
    finally { setAiLoad(false); }
  }

  // Pipeline status counts
  const pipelineCounts = {
    pending:     queueItems.filter(q => q.status === "pending").length,
    researching: queueItems.filter(q => q.status === "researching").length,
    writing:     queueItems.filter(q => q.status === "writing").length,
    reviewing:   queueItems.filter(q => q.status === "reviewing").length,
  };
  const inProgress = pipelineCounts.pending + pipelineCounts.researching + pipelineCounts.writing + pipelineCounts.reviewing;

  // Filter published posts
  const filteredPosts = BLOG_POSTS.filter(p => {
    const matchSearch = !search || p.titleHi.toLowerCase().includes(search.toLowerCase()) || p.slug.includes(search.toLowerCase());
    const matchCat    = catFilter === "all" || p.category === catFilter;
    return matchSearch && matchCat;
  });

  // Filter queue
  const filteredQueue = queueItems.filter(q => {
    const matchStatus = statusFilter === "all" || q.status === statusFilter;
    const matchSearch = !search || q.keyword.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Blog Management</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>
            {BLOG_POSTS.length} published · {inProgress} in pipeline
          </p>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button onClick={loadQueue} style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff", fontSize: 12, cursor: "pointer", color: "#64748b" }}>
            <RefreshCw size={13} />
          </button>
          <button onClick={() => setAdd(true)}
            style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "#27AE60", color: "#fff", border: 0, borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer" }}>
            <Plus size={13} /> Add to Queue
          </button>
        </div>
      </div>

      {/* Pipeline summary cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
        {[
          { label: "Pending",     count: pipelineCounts.pending,     icon: <Circle size={14} />,        color: "#f59e0b" },
          { label: "Researching", count: pipelineCounts.researching, icon: <Search size={14} />,        color: "#3b82f6" },
          { label: "Writing",     count: pipelineCounts.writing,     icon: <ListTodo size={14} />,      color: "#8b5cf6" },
          { label: "Reviewing",   count: pipelineCounts.reviewing,   icon: <CheckCircle2 size={14} />,  color: "#f97316" },
        ].map(s => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 12, border: "1px solid #e2e8f0", padding: "12px 14px", display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, background: `${s.color}15`, display: "flex", alignItems: "center", justifyContent: "center", color: s.color, flexShrink: 0 }}>{s.icon}</div>
            <div>
              <p style={{ fontSize: 20, fontWeight: 800, color: "#0f172a", margin: 0, lineHeight: 1 }}>{s.count}</p>
              <p style={{ fontSize: 10, color: "#94a3b8", margin: 0, marginTop: 2 }}>{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View tabs */}
      <div style={{ display: "flex", gap: 8, borderBottom: "1px solid #e2e8f0" }}>
        {(["published","queue"] as const).map(v => (
          <button key={v} onClick={() => setView(v)}
            style={{ padding: "8px 14px", border: 0, background: "none", fontWeight: 700, fontSize: 12, cursor: "pointer", borderBottom: view === v ? "2px solid #27AE60" : "2px solid transparent", color: view === v ? "#27AE60" : "#64748b", marginBottom: -1 }}>
            {v === "published" ? `Published (${BLOG_POSTS.length})` : `Pipeline Queue (${queueItems.length})`}
          </button>
        ))}
      </div>

      {/* Search + filter bar */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ position: "relative", flex: "1 1 200px" }}>
          <Search size={13} style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", color: "#94a3b8" }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder={view === "published" ? "Search posts…" : "Search keywords…"}
            style={{ width: "100%", paddingLeft: 30, paddingRight: 10, paddingTop: 8, paddingBottom: 8, border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff", boxSizing: "border-box" }} />
        </div>
        {view === "published" ? (
          <select value={catFilter} onChange={e => setCat(e.target.value)}
            style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
            <option value="all">All Categories</option>
            {["conditions","procedures","symptoms","diet","locations","tests"].map(c =>
              <option key={c} value={c}>{c}</option>
            )}
          </select>
        ) : (
          <select value={statusFilter} onChange={e => setSt(e.target.value)}
            style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
            <option value="all">All Statuses</option>
            {Object.keys(STATUS_CONFIG).map(s => <option key={s} value={s}>{STATUS_CONFIG[s].label}</option>)}
          </select>
        )}
        <div style={{ display: "flex", alignItems: "center", gap: 5, color: "#94a3b8" }}>
          <Filter size={12} />
          <span style={{ fontSize: 11 }}>{view === "published" ? filteredPosts.length : filteredQueue.length} results</span>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 20, alignItems: "start" }}>
        {/* Main content area */}
        <div>

          {/* Published posts list */}
          {view === "published" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {filteredPosts.map(post => (
                <div key={post.slug} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: "14px 16px", display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{ width: 44, height: 44, background: "linear-gradient(135deg, #1a2e1a, #27AE60)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, flexShrink: 0 }}>
                    {post.emoji}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <p style={{ fontWeight: 700, fontSize: 13, color: "#0f172a", margin: "0 0 3px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{post.titleHi}</p>
                    <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: 3, color: "#94a3b8", fontSize: 11 }}>
                        <Tag size={10} /> {post.category}
                      </span>
                      <span style={{ display: "flex", alignItems: "center", gap: 3, color: "#94a3b8", fontSize: 11 }}>
                        <Clock size={10} /> {post.readTimeMins}min
                      </span>
                      <span style={{ color: "#94a3b8", fontSize: 11 }}>{post.publishedAt}</span>
                      {post.faqs && (
                        <span style={{ fontSize: 11, color: post.faqs.length >= 6 ? "#22c55e" : "#f59e0b" }}>
                          {post.faqs.length} FAQs
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    <span style={{ fontSize: 10, background: "#f0fdf4", color: "#22c55e", fontWeight: 700, padding: "2px 8px", borderRadius: 99 }}>Published</span>
                    <Link href={`/blog/${post.slug}`} target="_blank"
                      style={{ width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e2e8f0", borderRadius: 8, color: "#64748b", textDecoration: "none" }}>
                      <Eye size={13} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pipeline queue */}
          {view === "queue" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {queueLoading ? (
                <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: 32, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>Loading queue…</div>
              ) : filteredQueue.length === 0 ? (
                <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: 32, textAlign: "center" }}>
                  <Send size={24} style={{ color: "#27AE60", margin: "0 auto 10px" }} />
                  <p style={{ color: "#374151", fontWeight: 700, fontSize: 14, margin: "0 0 4px" }}>Queue is empty</p>
                  <p style={{ color: "#94a3b8", fontSize: 12 }}>Add keywords to start the blog pipeline</p>
                </div>
              ) : filteredQueue.map(q => (
                <div key={q.id} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: "14px 16px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 5 }}>
                        <p style={{ fontWeight: 700, fontSize: 13, color: "#0f172a", margin: 0 }}>{q.keyword}</p>
                        <StatusPill status={q.status} />
                      </div>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        <span style={{ fontSize: 10, background: "#f1f5f9", color: "#64748b", padding: "2px 7px", borderRadius: 99, fontWeight: 700 }}>{q.target_category}</span>
                        <span style={{ fontSize: 10, color: "#94a3b8" }}>Priority: {q.priority}/10</span>
                        <span style={{ fontSize: 10, color: "#94a3b8" }}>Added {new Date(q.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short" })}</span>
                      </div>
                      {q.notes && <p style={{ fontSize: 11, color: "#64748b", marginTop: 5, background: "#f8fafc", padding: "4px 8px", borderRadius: 6 }}>{q.notes}</p>}
                    </div>
                    <div style={{ flexShrink: 0, textAlign: "right" }}>
                      <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f1f5f9", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 14, color: "#27AE60" }}>
                        {q.priority}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* AI sidebar */}
        <div style={{ width: 280, display: "flex", flexDirection: "column", gap: 12, flexShrink: 0 }}>
          <div style={{ background: "#0f172a", borderRadius: 16, padding: 18 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <Sparkles size={15} style={{ color: "#a78bfa" }} />
              <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 13, margin: 0 }}>AI Blog Assistant</h3>
            </div>
            <p style={{ color: "#94a3b8", fontSize: 11, marginBottom: 12 }}>Topic डालें — Hindi blog draft generate होगा</p>
            <input value={aiTopic} onChange={e => setAiTopic(e.target.value)} placeholder="e.g. Liver Cirrhosis Diet Tips"
              style={{ width: "100%", padding: "8px 10px", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, fontSize: 12, color: "#fff", marginBottom: 10, boxSizing: "border-box" }} />
            <button onClick={generateDraft} disabled={!aiTopic.trim() || aiLoading}
              style={{ width: "100%", padding: "9px 0", background: "#27AE60", color: "#fff", border: 0, borderRadius: 10, fontSize: 12, fontWeight: 700, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6, opacity: !aiTopic.trim() || aiLoading ? 0.5 : 1 }}>
              <Sparkles size={13} /> {aiLoading ? "Generating…" : "Generate Draft"}
            </button>
          </div>

          {aiDraft && (
            <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <p style={{ fontWeight: 800, fontSize: 12, color: "#0f172a" }}>AI Draft</p>
                <button onClick={() => navigator.clipboard.writeText(aiDraft)}
                  style={{ fontSize: 11, color: "#27AE60", background: "none", border: 0, cursor: "pointer", fontWeight: 700 }}>Copy</button>
              </div>
              <div style={{ maxHeight: 240, overflowY: "auto", fontSize: 11, color: "#64748b", lineHeight: 1.6, whiteSpace: "pre-line" }}>{aiDraft}</div>
            </div>
          )}

          {/* Quick stats */}
          <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: 14 }}>
            <h3 style={{ fontWeight: 800, fontSize: 12, color: "#0f172a", marginBottom: 10 }}>Blog Stats</h3>
            {[
              { label: "Total posts", value: BLOG_POSTS.length },
              { label: "In pipeline",  value: inProgress },
              { label: "With 6+ FAQs", value: BLOG_POSTS.filter(p => (p.faqs?.length ?? 0) >= 6).length },
              { label: "With imagePrompts", value: BLOG_POSTS.filter(p => p.imagePrompt).length },
            ].map(s => (
              <div key={s.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 6, marginBottom: 6, borderBottom: "1px solid #f1f5f9" }}>
                <span style={{ fontSize: 11, color: "#94a3b8" }}>{s.label}</span>
                <span style={{ fontSize: 13, fontWeight: 800, color: "#0f172a" }}>{s.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showAddModal && <AddToQueueModal onClose={() => setAdd(false)} onAdded={loadQueue} />}
    </div>
  );
}
