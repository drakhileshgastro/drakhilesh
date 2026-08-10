"use client";

import { useState, useCallback, useEffect } from "react";
import { CheckCircle, XCircle, AlertCircle, RefreshCw, FileText, Shield, ClipboardList } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-data";

/**
 * SOP Compliance Audit
 *
 * Audits all blog posts against the v2.0 content pipeline SOPs:
 * - E-E-A-T requirements (Dr. Akhilesh mentions, internal links, FAQs)
 * - NMC/ASCI medical compliance (no dosage, no diagnostic claims)
 * - AEO requirements (6+ FAQs, sections array, tip section last)
 * - Brand voice (Hindi content present, no forbidden phrases)
 * - Technical SEO (metaTitle ≤60, metaDescription ≤155, readTimeMins is number)
 *
 * This is a client-side audit running against the static blog-data.ts.
 * In Phase 4, it will also audit posts from the Supabase blog_posts table.
 */

interface AuditResult {
  slug: string;
  titleHi: string;
  emoji: string;
  category: string;
  checks: AuditCheck[];
  score: number;
  maxScore: number;
  status: "pass" | "warn" | "fail";
}

interface AuditCheck {
  label: string;
  status: "pass" | "warn" | "fail";
  detail?: string;
  dimension: "EEAT" | "Medical" | "AEO" | "SEO" | "Format";
}

const FORBIDDEN_WORDS = [
  "delve", "leverage", "robust", "paradigm", "tapestry",
  "navigate", "underscore", "foster", "harness",
  "game-changer", "in conclusion", "to summarize",
  "crucial", "ensure", "innovative", "comprehensive",
];

const MEDICAL_FORBIDDEN = [
  /\d+\s*mg/i,
  /take \d+/i,
  /100%\s*cure/i,
  /painless/i,
  /diagnos/i,
];

function runAudit(post: typeof BLOG_POSTS[0]): AuditResult {
  const checks: AuditCheck[] = [];

  // ── SEO Checks ───────────────────────────────────────────────────────
  checks.push({
    dimension: "SEO",
    label: "metaTitle ≤ 60 chars",
    status: post.metaTitle.length <= 60 ? "pass" : "fail",
    detail: `${post.metaTitle.length} chars`,
  });
  checks.push({
    dimension: "SEO",
    label: "metaDescription ≤ 155 chars",
    status: post.metaDescription.length <= 155 ? "pass" : "fail",
    detail: `${post.metaDescription.length} chars`,
  });
  checks.push({
    dimension: "SEO",
    label: "Slug: lowercase + hyphens only",
    status: /^[a-z0-9-]+$/.test(post.slug) ? "pass" : "fail",
    detail: post.slug,
  });
  checks.push({
    dimension: "SEO",
    label: "Has tags (3–8)",
    status: post.tags.length >= 3 && post.tags.length <= 8 ? "pass" : "warn",
    detail: `${post.tags.length} tags`,
  });

  // ── Format Checks ────────────────────────────────────────────────────
  checks.push({
    dimension: "Format",
    label: "sections is array (not content string)",
    status: Array.isArray(post.sections) && post.sections.length > 0 ? "pass" : "fail",
    detail: `${post.sections?.length ?? 0} sections`,
  });
  checks.push({
    dimension: "Format",
    label: "Last section is type:tip (CTA)",
    status: post.sections[post.sections.length - 1]?.type === "tip" ? "pass" : "fail",
  });
  checks.push({
    dimension: "Format",
    label: "readTimeMins is a number",
    status: typeof post.readTimeMins === "number" && !isNaN(post.readTimeMins) ? "pass" : "fail",
    detail: String(post.readTimeMins),
  });
  checks.push({
    dimension: "Format",
    label: "titleHi + titleEn both present",
    status: post.titleHi?.length > 3 && post.titleEn?.length > 3 ? "pass" : "fail",
  });
  checks.push({
    dimension: "Format",
    label: "excerptHi + excerptEn both present",
    status: post.excerptHi?.length > 10 && post.excerptEn?.length > 10 ? "pass" : "fail",
  });

  // ── AEO Checks ───────────────────────────────────────────────────────
  const faqCount = post.faqs?.length ?? 0;
  checks.push({
    dimension: "AEO",
    label: "FAQs ≥ 6 items",
    status: faqCount >= 6 ? "pass" : faqCount >= 4 ? "warn" : "fail",
    detail: `${faqCount} FAQs`,
  });
  checks.push({
    dimension: "AEO",
    label: "Has list section (scannability)",
    status: post.sections.some(s => s.type === "list") ? "pass" : "warn",
  });
  checks.push({
    dimension: "AEO",
    label: "Has imagePrompt field",
    status: post.imagePrompt ? "pass" : "warn",
    detail: post.imagePrompt ? "featured + og + card" : "missing",
  });

  // ── E-E-A-T Checks ───────────────────────────────────────────────────
  const allContent = post.sections.map(s => s.content).join(" ") + (post.faqs?.map(f => f.a).join(" ") ?? "");
  const doctorMentions = (allContent.match(/Dr\.?\s*Akhilesh/gi) ?? []).length;
  const orchidMentions = (allContent.match(/Orchid/gi) ?? []).length;

  checks.push({
    dimension: "EEAT",
    label: "Dr. Akhilesh mentioned ≥ 3 times",
    status: doctorMentions >= 3 ? "pass" : doctorMentions >= 1 ? "warn" : "fail",
    detail: `${doctorMentions} mentions`,
  });
  checks.push({
    dimension: "EEAT",
    label: "Orchid Medical Centre mentioned",
    status: orchidMentions >= 2 ? "pass" : orchidMentions >= 1 ? "warn" : "fail",
    detail: `${orchidMentions} mentions`,
  });

  const hasDisclaimer = allContent.toLowerCase().includes("educational") || allContent.toLowerCase().includes("disclaimer");
  checks.push({
    dimension: "EEAT",
    label: "Educational disclaimer present",
    status: hasDisclaimer ? "pass" : "fail",
  });

  // Internal links (count markdown-style or href patterns)
  const linkCount = (allContent.match(/href=|\/blog\/|\/conditions\/|\/procedures\/|\/symptoms\//gi) ?? []).length;
  checks.push({
    dimension: "EEAT",
    label: "Internal links ≥ 5",
    status: linkCount >= 5 ? "pass" : linkCount >= 3 ? "warn" : "fail",
    detail: `~${linkCount} detected`,
  });

  // ── Medical Compliance ────────────────────────────────────────────────
  const contentLower = allContent.toLowerCase();

  const hasDosage    = MEDICAL_FORBIDDEN.some(p => p.test(allContent));
  const has100Cure   = /100%\s*cure/i.test(allContent);
  const hasPainless  = /painless/i.test(allContent);
  checks.push({
    dimension: "Medical",
    label: "No dosage advice",
    status: !hasDosage ? "pass" : "fail",
  });
  checks.push({
    dimension: "Medical",
    label: "No 100% cure / painless claim",
    status: !has100Cure && !hasPainless ? "pass" : "fail",
  });

  // AI writing pattern check (Tier 1A)
  const foundAiWords = FORBIDDEN_WORDS.filter(w => contentLower.includes(w.toLowerCase()));
  checks.push({
    dimension: "Medical",
    label: "No Tier-1A AI writing patterns",
    status: foundAiWords.length === 0 ? "pass" : foundAiWords.length <= 2 ? "warn" : "fail",
    detail: foundAiWords.length > 0 ? `Found: ${foundAiWords.slice(0, 3).join(", ")}` : undefined,
  });

  // Score
  const score    = checks.filter(c => c.status === "pass").length;
  const maxScore = checks.length;
  const pct      = (score / maxScore) * 100;
  const status   = pct >= 85 ? "pass" : pct >= 65 ? "warn" : "fail";

  return { slug: post.slug, titleHi: post.titleHi, emoji: post.emoji, category: post.category, checks, score, maxScore, status };
}

const DIM_COLORS: Record<string, string> = {
  EEAT: "#3b82f6", Medical: "#ef4444", AEO: "#8b5cf6", SEO: "#27AE60", Format: "#f59e0b",
};

export default function SopAudit() {
  const [results, setResults]    = useState<AuditResult[]>([]);
  const [loading, setLoading]    = useState(true);
  const [expanded, setExpanded]  = useState<string | null>(null);
  const [dimFilter, setDimFilter]= useState<string>("all");
  const [statusFilter, setStatus]= useState<string>("all");

  const run = useCallback(() => {
    setLoading(true);
    setTimeout(() => {
      const res = BLOG_POSTS.map(runAudit);
      setResults(res);
      setLoading(false);
    }, 200);
  }, []);

  useEffect(() => { run(); }, [run]);

  const passing  = results.filter(r => r.status === "pass").length;
  const warnings = results.filter(r => r.status === "warn").length;
  const failing  = results.filter(r => r.status === "fail").length;
  const avgScore = results.length > 0
    ? Math.round(results.reduce((s, r) => s + (r.score / r.maxScore) * 100, 0) / results.length)
    : 0;

  const filtered = results.filter(r => {
    if (statusFilter !== "all" && r.status !== statusFilter) return false;
    if (dimFilter !== "all") {
      const failingDim = r.checks.filter(c => c.status !== "pass" && c.dimension === dimFilter);
      if (failingDim.length === 0) return false;
    }
    return true;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Header */}
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
        <div>
          <h2 style={{ fontWeight: 800, fontSize: 18, color: "#0f172a", margin: 0 }}>SOP Compliance Audit</h2>
          <p style={{ color: "#64748b", fontSize: 12, marginTop: 3 }}>Automated audit of all {BLOG_POSTS.length} blog posts against v2.0 pipeline SOPs</p>
        </div>
        <button onClick={run} style={{ display: "flex", alignItems: "center", gap: 5, padding: "8px 12px", border: "1px solid #e2e8f0", borderRadius: 10, background: "#fff", fontSize: 12, cursor: "pointer", color: "#64748b" }}>
          <RefreshCw size={13} /> Re-Audit
        </button>
      </div>

      {/* Summary stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12 }}>
        {[
          { label: "Passing (≥85%)", value: passing, color: "#22c55e", icon: <CheckCircle size={15} /> },
          { label: "Warnings (65–84%)", value: warnings, color: "#f59e0b", icon: <AlertCircle size={15} /> },
          { label: "Failing (<65%)", value: failing, color: "#ef4444", icon: <XCircle size={15} /> },
          { label: "Avg Compliance", value: `${avgScore}%`, color: "#27AE60", icon: <Shield size={15} /> },
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

      {/* SOP dimension legend */}
      <div style={{ background: "#fff", borderRadius: 14, border: "1px solid #e2e8f0", padding: "14px 16px" }}>
        <p style={{ fontWeight: 700, fontSize: 12, color: "#374151", marginBottom: 10 }}>Audit Dimensions</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {Object.entries(DIM_COLORS).map(([dim, color]) => (
            <div key={dim} style={{ display: "flex", alignItems: "center", gap: 5, padding: "4px 10px", borderRadius: 99, background: `${color}12`, border: `1px solid ${color}30` }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: color }} />
              <span style={{ fontSize: 11, fontWeight: 700, color }}>{dim}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 4 }}>
          {(["all","pass","warn","fail"] as const).map(s => (
            <button key={s} onClick={() => setStatus(s)}
              style={{ padding: "6px 12px", border: "1px solid", borderColor: statusFilter === s ? "#27AE60" : "#e2e8f0", borderRadius: 8, background: statusFilter === s ? "#f0fdf4" : "#fff", fontSize: 11, fontWeight: 700, cursor: "pointer",
                color: statusFilter === s ? "#27AE60" : "#64748b" }}>
              {s === "all" ? "All" : s.charAt(0).toUpperCase() + s.slice(1)} {s !== "all" && `(${results.filter(r => r.status === s).length})`}
            </button>
          ))}
        </div>
        <select value={dimFilter} onChange={e => setDimFilter(e.target.value)}
          style={{ padding: "6px 10px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 11, background: "#fff" }}>
          <option value="all">All Dimensions</option>
          {Object.keys(DIM_COLORS).map(d => <option key={d} value={d}>{d} Issues</option>)}
        </select>
        <span style={{ fontSize: 11, color: "#94a3b8", marginLeft: "auto" }}>{filtered.length} posts</span>
      </div>

      {/* Results list */}
      {loading ? (
        <div style={{ background: "#fff", borderRadius: 16, border: "1px solid #e2e8f0", padding: 40, textAlign: "center", color: "#94a3b8", fontSize: 13 }}>
          Running audit…
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {filtered.map(r => {
            const pct      = Math.round((r.score / r.maxScore) * 100);
            const isOpen   = expanded === r.slug;
            const barColor = r.status === "pass" ? "#22c55e" : r.status === "warn" ? "#f59e0b" : "#ef4444";
            const failList = r.checks.filter(c => c.status !== "pass");

            return (
              <div key={r.slug} style={{ background: "#fff", borderRadius: 14, border: `1px solid ${r.status === "fail" ? "#fecaca" : r.status === "warn" ? "#fde68a" : "#e2e8f0"}`, overflow: "hidden" }}>
                <button onClick={() => setExpanded(isOpen ? null : r.slug)}
                  style={{ width: "100%", background: "none", border: 0, cursor: "pointer", padding: "12px 16px", textAlign: "left", display: "flex", gap: 12, alignItems: "center" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{r.emoji}</span>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                      <span style={{ fontWeight: 700, fontSize: 13, color: "#0f172a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{r.titleHi}</span>
                      <span style={{ fontSize: 10, background: "#f1f5f9", color: "#64748b", padding: "1px 7px", borderRadius: 99, flexShrink: 0, fontWeight: 700 }}>{r.category}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ flex: 1, height: 5, background: "#f1f5f9", borderRadius: 99, overflow: "hidden" }}>
                        <div style={{ width: `${pct}%`, height: "100%", background: barColor, borderRadius: 99 }} />
                      </div>
                      <span style={{ fontSize: 11, fontWeight: 800, color: barColor, flexShrink: 0, width: 35 }}>{pct}%</span>
                      <span style={{ fontSize: 10, color: "#94a3b8", flexShrink: 0 }}>{r.score}/{r.maxScore}</span>
                    </div>
                  </div>
                  {r.status !== "pass" && (
                    <span style={{ fontSize: 10, color: r.status === "fail" ? "#ef4444" : "#f59e0b", flexShrink: 0, fontWeight: 700 }}>
                      {failList.length} issue{failList.length !== 1 ? "s" : ""}
                    </span>
                  )}
                  {r.status === "pass" && <CheckCircle size={16} style={{ color: "#22c55e", flexShrink: 0 }} />}
                  <span style={{ color: "#94a3b8", fontSize: 16, flexShrink: 0, fontWeight: 300 }}>{isOpen ? "−" : "+"}</span>
                </button>

                {isOpen && (
                  <div style={{ borderTop: "1px solid #f1f5f9", padding: "12px 16px" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                      {r.checks.map((c, i) => (
                        <div key={i} style={{
                          display: "flex", alignItems: "center", gap: 5, padding: "5px 10px", borderRadius: 8,
                          background: c.status === "pass" ? "#f0fdf4" : c.status === "warn" ? "#fffbeb" : "#fef2f2",
                          border: `1px solid ${c.status === "pass" ? "#bbf7d0" : c.status === "warn" ? "#fde68a" : "#fecaca"}`,
                        }}>
                          <div style={{ width: 7, height: 7, borderRadius: "50%", background: DIM_COLORS[c.dimension] ?? "#94a3b8", flexShrink: 0 }} />
                          {c.status === "pass" ? <CheckCircle size={11} style={{ color: "#22c55e", flexShrink: 0 }} /> :
                           c.status === "warn" ? <AlertCircle size={11} style={{ color: "#f59e0b", flexShrink: 0 }} /> :
                           <XCircle size={11} style={{ color: "#ef4444", flexShrink: 0 }} />}
                          <span style={{ fontSize: 11, color: "#374151", fontWeight: 600 }}>{c.label}</span>
                          {c.detail && <span style={{ fontSize: 10, color: "#94a3b8" }}>({c.detail})</span>}
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 10, display: "flex", gap: 8 }}>
                      <a href={`/blog/${r.slug}`} target="_blank" rel="noreferrer"
                        style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#27AE60", textDecoration: "none", padding: "5px 10px", border: "1px solid #bbf7d0", borderRadius: 8 }}>
                        <FileText size={11} /> View Post
                      </a>
                      <a href={`/admin/blog`}
                        style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 11, color: "#64748b", textDecoration: "none", padding: "5px 10px", border: "1px solid #e2e8f0", borderRadius: 8 }}>
                        <ClipboardList size={11} /> Edit in CMS
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
