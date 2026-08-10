"use client";

import { useEffect, useState, useCallback } from "react";
import { Brain, TrendingUp, Phone, MessageSquare, FileText, Zap, RefreshCw, Users } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-data";

/**
 * Blog → Lead Intelligence
 *
 * Shows which blog posts drive appointment leads.
 * Calls /api/admin/blog-leads which joins gastro_leads
 * (source/condition text) with blog slugs — shows real lead counts
 * when data exists, falls back to intent-score estimates.
 */

interface BlogLeadRow {
  slug: string;
  titleHi: string;
  category: string;
  emoji: string;
  readTimeMins: number;
  tags: string[];
  leadsGenerated: number;      // 0 until real data arrives
  leadScore: number;           // 1-5 estimated lead intent
  primaryCondition: string;
  cta: string;
  hasRealData: boolean;        // true when leadsGenerated comes from CRM
}

// API response shape from /api/admin/blog-leads
interface BlogLeadApiRow {
  slug: string;
  title?: string;
  lead_count: number;
  avg_lead_score: number;
  categories: string[];
  sources: string[];
}

interface BlogLeadsApiResponse {
  success: boolean;
  totalLeads?: number;
  totalBlogLeads?: number;
  blogs?: BlogLeadApiRow[];
}

const LEAD_SCORE_CONFIG: Record<string, number> = {
  "conditions": 5,
  "procedures": 5,
  "symptoms":   4,
  "tests":      3,
  "diet":       2,
  "locations":  5,
};

const CONDITION_MAP: Record<string, string> = {
  "conditions":  "condition treated",
  "procedures":  "procedure enquiry",
  "symptoms":    "symptom concern",
  "tests":       "test booking",
  "diet":        "diet consultation",
  "locations":   "clinic location enquiry",
};

function LeadScoreDots({ score }: { score: number }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {[1,2,3,4,5].map(i => (
        <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: i <= score ? "#27AE60" : "#e2e8f0" }} />
      ))}
    </div>
  );
}

export default function BlogLeadIntel() {
  const [rows, setRows]           = useState<BlogLeadRow[]>([]);
  const [loading, setLoading]     = useState(true);
  const [sortBy, setSortBy]       = useState<"leads"|"score"|"category"|"readTime">("leads");
  const [filter, setFilter]       = useState("all");
  const [usingRealData, setUsingRealData] = useState(false);
  const [totalLeads, setTotalLeads]       = useState(0);
  const [totalBlogLeads, setTotalBlogLeads] = useState(0);

  const load = useCallback(async () => {
    setLoading(true);

    // Build base rows from static blog-data
    const base: BlogLeadRow[] = BLOG_POSTS.map(post => ({
      slug:             post.slug,
      titleHi:          post.titleHi,
      category:         post.category,
      emoji:            post.emoji,
      readTimeMins:     post.readTimeMins,
      tags:             post.tags,
      leadsGenerated:   0,
      leadScore:        LEAD_SCORE_CONFIG[post.category] ?? 3,
      primaryCondition: CONDITION_MAP[post.category] ?? "general",
      cta:              post.category === "conditions" || post.category === "procedures"
        ? "Book Appointment for this condition"
        : post.category === "symptoms"
        ? "Consult doctor about this symptom"
        : "General health enquiry",
      hasRealData: false,
    }));

    // Fetch real lead counts from /api/admin/blog-leads
    try {
      const res  = await fetch("/api/admin/blog-leads?days=90");
      const json = await res.json() as BlogLeadsApiResponse;

      if (json.success && json.blogs && json.blogs.length > 0) {
        const apiMap = new Map(json.blogs.map(b => [b.slug, b]));
        base.forEach(row => {
          const api = apiMap.get(row.slug);
          if (api) {
            row.leadsGenerated = api.lead_count;
            // Weight: real lead count bumps estimated score toward 5
            row.leadScore = Math.min(5, Math.max(row.leadScore, api.lead_count > 0 ? 4 : row.leadScore));
            row.hasRealData = true;
          }
        });
        setUsingRealData(true);
        setTotalLeads(json.totalLeads ?? 0);
        setTotalBlogLeads(json.totalBlogLeads ?? 0);
      }
    } catch { /* use static scoring */ }

    setRows(base);
    setLoading(false);
  }, []);

  useEffect(() => { load(); }, [load]);

  const filtered = rows
    .filter(r => filter === "all" || r.category === filter)
    .sort((a, b) => {
      if (sortBy === "leads")    return b.leadsGenerated - a.leadsGenerated;
      if (sortBy === "score")    return b.leadScore - a.leadScore;
      if (sortBy === "readTime") return b.readTimeMins - a.readTimeMins;
      return a.category.localeCompare(b.category);
    });

  const score5      = rows.filter(r => r.leadScore === 5).length;
  const score4      = rows.filter(r => r.leadScore === 4).length;
  const score3      = rows.filter(r => r.leadScore === 3).length;
  const withLeads   = rows.filter(r => r.leadsGenerated > 0).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>Blog → Lead Intelligence</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>Which blog posts drive appointments — real CRM data + intent scores</p>
        </div>
        <button onClick={load} style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff", fontSize: 12, cursor: "pointer", color: "#64748b" }}>
          <RefreshCw size={13} /> Refresh
        </button>
      </div>

      {/* Data source banner */}
      {!loading && (
        <div style={{
          background: usingRealData ? "#f0fdf4" : "#fefce8",
          border:     `1px solid ${usingRealData ? "#bbf7d0" : "#fde68a"}`,
          borderRadius: 14, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start",
        }}>
          <Brain size={18} style={{ color: usingRealData ? "#27AE60" : "#d97706", flexShrink: 0, marginTop: 1 }} />
          <div>
            {usingRealData ? (
              <>
                <p style={{ fontWeight: 700, color: "#15803d", fontSize: 13, margin: "0 0 2px" }}>
                  ✅ Live CRM Data — Last 90 days
                </p>
                <p style={{ color: "#166534", fontSize: 12, margin: 0, lineHeight: 1.6 }}>
                  {totalBlogLeads} blog-attributed leads out of {totalLeads} total leads.
                  Posts with 💚 show confirmed lead counts from gastro_leads table.
                </p>
              </>
            ) : (
              <>
                <p style={{ fontWeight: 700, color: "#92400e", fontSize: 13, margin: "0 0 2px" }}>Estimated Scores (CRM data unavailable)</p>
                <p style={{ color: "#78350f", fontSize: 12, margin: 0, lineHeight: 1.6 }}>
                  Condition & Procedure pages score 5/5 (highest intent).
                  Symptom pages 4/5. Diet & test posts 2–3/5.
                  As leads accumulate in Supabase, real counts will appear automatically.
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
        {[
          { label: "High Intent (5★)", value: score5,    color: "#27AE60", icon: <Zap size={15} /> },
          { label: "Good Intent (4★)", value: score4,    color: "#f59e0b", icon: <TrendingUp size={15} /> },
          { label: "Awareness (3★)",   value: score3,    color: "#94a3b8", icon: <Brain size={15} /> },
          { label: "Posts w/ Leads",   value: withLeads, color: "#8b5cf6", icon: <Users size={15} /> },
        ].map(s => (
          <div key={s.label} style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: "14px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
              <p style={{ fontSize: 11, color: "#94a3b8", fontWeight: 700, margin: 0 }}>{s.label}</p>
              <div style={{ color: s.color }}>{s.icon}</div>
            </div>
            <p style={{ fontSize: 22, fontWeight: 800, color: s.color, margin: 0 }}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Filters & sort */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <select value={filter} onChange={e => setFilter(e.target.value)}
          style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
          <option value="all">All Categories</option>
          {["conditions","procedures","symptoms","diet","locations","tests"].map(c =>
            <option key={c} value={c}>{c}</option>
          )}
        </select>
        <select value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)}
          style={{ padding: "7px 10px", border: "1px solid #e2e8f0", borderRadius: 10, fontSize: 12, background: "#fff" }}>
          <option value="leads">Sort: Leads Generated</option>
          <option value="score">Sort: Lead Score</option>
          <option value="category">Sort: Category</option>
          <option value="readTime">Sort: Read Time</option>
        </select>
        <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: "auto" }}>{filtered.length} posts</span>
      </div>

      {/* Blog list */}
      {loading ? (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 40, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>Loading…</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map(post => (
            <div key={post.slug} style={{
              background: post.leadsGenerated > 0 ? "#f0fdf4" : "#fff",
              borderRadius: 14,
              border: `1px solid ${post.leadsGenerated > 0 ? "#bbf7d0" : "#e2e8f0"}`,
              padding: "14px 16px",
              display: "flex", gap: 14, alignItems: "flex-start",
            }}>
              <div style={{ fontSize: 28, flexShrink: 0, marginTop: 2 }}>{post.emoji}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: 13, color: "#0f172a", margin: "0 0 2px" }}>{post.titleHi}</p>
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 4 }}>
                      <span style={{ fontSize: 10, background: "#f1f5f9", color: "#64748b", padding: "2px 8px", borderRadius: 99, fontWeight: 700 }}>{post.category}</span>
                      <span style={{ fontSize: 10, color: "#94a3b8" }}>{post.readTimeMins} min read</span>
                      {post.leadsGenerated > 0 && (
                        <span style={{ fontSize: 10, background: "#dcfce7", color: "#15803d", padding: "2px 8px", borderRadius: 99, fontWeight: 800 }}>
                          💚 {post.leadsGenerated} lead{post.leadsGenerated !== 1 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{ flexShrink: 0, textAlign: "right" }}>
                    <p style={{ fontSize: 10, color: "#94a3b8", margin: "0 0 4px" }}>
                      {post.hasRealData ? "Real Intent" : "Est. Intent"}
                    </p>
                    <LeadScoreDots score={post.leadScore} />
                  </div>
                </div>
                <div style={{ marginTop: 8, display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#64748b", background: "#f0fdf4", padding: "4px 10px", borderRadius: 8 }}>
                    <Phone size={11} style={{ color: "#27AE60" }} /> {post.cta}
                  </div>
                  <a href={`/blog/${post.slug}`} target="_blank" rel="noreferrer"
                    style={{ fontSize: 11, color: "#27AE60", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                    <MessageSquare size={11} /> View Post
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
