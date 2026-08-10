/**
 * GET /api/admin/blog-leads
 * Joins gastro_leads with blog_posts to show lead intelligence per blog/condition.
 *
 * Logic:
 *  - Each lead has a "condition" field (from CRM intake form) or appointment reason
 *  - Each blog_post has a "category" field (conditions/procedures/symptoms/diet/locations/tests)
 *  - We match leads to blogs by: lead.condition_keyword ↔ blog.primary_keyword or blog.category
 *  - Also groups leads by source_url (UTM or referrer) to show which blog pages drove bookings
 *
 * Returns:
 *  - blogs: [{ blog_slug, blog_title, category, lead_count, conversion_rate, avg_lead_score }]
 *  - summary: { total_blog_leads, top_converting_blog, total_organic_leads }
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase-admin";

export const runtime = "nodejs";

// Condition keyword → category mapping (same as lead-score.ts)
const CONDITION_CATEGORY_MAP: Record<string, string> = {
  "fatty liver":        "conditions",
  "liver":              "conditions",
  "jaundice":           "conditions",
  "piliya":             "conditions",
  "cirrhosis":          "conditions",
  "hepatitis":          "conditions",
  "ibs":                "conditions",
  "acidity":            "conditions",
  "acid reflux":        "conditions",
  "gerd":               "conditions",
  "gallstone":          "conditions",
  "pittashay":          "conditions",
  "pancreatitis":       "conditions",
  "liver cancer":       "conditions",
  "colitis":            "conditions",
  "ulcerative":         "conditions",
  "abdominal":          "conditions",
  "stomach pain":       "conditions",
  "pet dard":           "conditions",
  "ulcer":              "conditions",
  "endoscopy":          "procedures",
  "colonoscopy":        "procedures",
  "ercp":               "procedures",
  "fibroscan":          "procedures",
  "biopsy":             "procedures",
  "gas":                "symptoms",
  "bloating":           "symptoms",
  "constipation":       "symptoms",
  "diarrhea":           "symptoms",
  "vomiting":           "symptoms",
  "bleeding":           "symptoms",
  "weight loss":        "symptoms",
  "diet":               "diet",
};

function detectCategory(text: string): string {
  const t = (text ?? "").toLowerCase();
  for (const [kw, cat] of Object.entries(CONDITION_CATEGORY_MAP)) {
    if (t.includes(kw)) return cat;
  }
  return "general";
}

function detectBlogSlugs(text: string): string[] {
  const t = (text ?? "").toLowerCase();
  const matches: string[] = [];
  if (t.includes("fatty liver"))     matches.push("fatty-liver-reversal-ranchi", "fatty-liver-diet-hindi");
  if (t.includes("jaundice") || t.includes("piliya")) matches.push("jaundice-symptoms-causes");
  if (t.includes("endoscopy"))       matches.push("endoscopy-kya-hota-hai", "painless-endoscopy-ranchi");
  if (t.includes("colonoscopy"))     matches.push("painless-colonoscopy-ranchi-cost-preparation");
  if (t.includes("gerd") || t.includes("acidity") || t.includes("acid reflux")) matches.push("gerd-acid-reflux-cure-ranchi");
  if (t.includes("ibs"))             matches.push("ibs-stress-indian-diet");
  if (t.includes("constipation"))    matches.push("chronic-constipation-cure-indian-diet");
  if (t.includes("gallstone") || t.includes("pittashay")) matches.push("gallstones-dissolve-myths-india");
  if (t.includes("cirrhosis"))       matches.push("liver-cirrhosis-stages-treatment-india");
  if (t.includes("pancreatitis"))    matches.push("acute-chronic-pancreatitis-diet-causes");
  if (t.includes("colitis"))         matches.push("ulcerative-colitis-ibd-diet-management");
  if (t.includes("ercp"))            matches.push("ercp-procedure-cbd-stones-ranchi");
  return matches;
}

export async function GET(req: NextRequest) {
  // Auth
  const supabase = createAdminClient();
  const { data: { user } } = await supabase.auth.getUser(
    req.headers.get("authorization")?.replace("Bearer ", "") ?? ""
  );
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const days = parseInt(searchParams.get("days") ?? "90");
  const since = new Date(Date.now() - days * 86_400_000).toISOString();

  try {
    // Fetch leads from last N days
    const { data: leads, error: leadsErr } = await supabase
      .from("gastro_leads")
      .select("id, condition, notes, source_url, source, created_at, lead_score")
      .gte("created_at", since)
      .order("created_at", { ascending: false })
      .limit(2000);

    if (leadsErr) throw leadsErr;

    // Fetch published blogs
    const { data: blogs, error: blogsErr } = await supabase
      .from("blog_posts")
      .select("id, slug, title_hi, title_en, category, primary_keyword, status")
      .eq("status", "published");

    if (blogsErr) throw blogsErr;

    // Build: blog slug → lead count
    const blogLeadMap: Record<string, {
      slug: string; title_en: string; title_hi: string;
      category: string; primary_keyword: string | null;
      lead_count: number; lead_scores: number[];
    }> = {};

    // Init from DB blogs
    for (const b of blogs ?? []) {
      blogLeadMap[b.slug] = {
        slug: b.slug, title_en: b.title_en, title_hi: b.title_hi,
        category: b.category, primary_keyword: b.primary_keyword,
        lead_count: 0, lead_scores: [],
      };
    }

    // Match leads to blogs
    let totalBlogLeads = 0;
    for (const lead of leads ?? []) {
      const text    = `${lead.condition ?? ""} ${lead.notes ?? ""} ${lead.source_url ?? ""}`;
      const matched = detectBlogSlugs(text);

      // Also match by source_url path
      if (lead.source_url) {
        const m = lead.source_url.match(/\/blog\/([^/?#]+)/);
        if (m) matched.push(m[1]);
      }

      const uniqueMatched = [...new Set(matched)];
      for (const slug of uniqueMatched) {
        if (!blogLeadMap[slug]) {
          blogLeadMap[slug] = {
            slug, title_en: slug.replace(/-/g, " "), title_hi: "",
            category: "blog", primary_keyword: null,
            lead_count: 0, lead_scores: [],
          };
        }
        blogLeadMap[slug].lead_count++;
        blogLeadMap[slug].lead_scores.push(lead.lead_score ?? 0);
        totalBlogLeads++;
      }
    }

    // Build response array
    const result = Object.values(blogLeadMap)
      .filter(b => b.lead_count > 0)
      .map(b => ({
        slug:            b.slug,
        title_en:        b.title_en,
        title_hi:        b.title_hi,
        category:        b.category,
        primary_keyword: b.primary_keyword,
        lead_count:      b.lead_count,
        avg_lead_score:  b.lead_scores.length > 0
          ? Math.round(b.lead_scores.reduce((a, s) => a + s, 0) / b.lead_scores.length)
          : 0,
        url:             `/blog/${b.slug}`,
      }))
      .sort((a, b) => b.lead_count - a.lead_count);

    // Category breakdown
    const byCategory: Record<string, number> = {};
    for (const lead of leads ?? []) {
      const cat = detectCategory(`${lead.condition ?? ""} ${lead.notes ?? ""}`);
      byCategory[cat] = (byCategory[cat] ?? 0) + 1;
    }

    return NextResponse.json({
      success: true,
      days,
      totalLeads:      leads?.length ?? 0,
      totalBlogLeads,
      byCategory,
      topBlog:         result[0] ?? null,
      blogs:           result,
    });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
