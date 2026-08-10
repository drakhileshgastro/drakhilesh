import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase-admin";
import { fetchGscSiteSummary } from "@/lib/gsc";

/**
 * GET /api/admin/gsc
 * Returns aggregated GSC data for the admin Traffic Stats screen.
 *
 * Query params:
 *   ?view=summary          — site-level hero stats (clicks, impressions, avg position)
 *   ?view=by-page          — per-page breakdown from blog_traffic_summary view
 *   ?view=by-keyword       — top keywords from gsc_data
 *   ?days=7|28|90          — lookback window (default 28)
 *   ?url=/blog/slug        — filter by specific page URL (for single-post stats)
 */

export async function GET(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { searchParams } = new URL(req.url);
  const view = searchParams.get("view") ?? "summary";
  const days = parseInt(searchParams.get("days") ?? "28", 10);
  const url  = searchParams.get("url");

  const supabase = createAdminClient();
  const sinceDate = new Date(Date.now() - days * 24 * 60 * 60 * 1000)
    .toISOString()
    .slice(0, 10);

  // ── Summary: site-wide hero stats ─────────────────────────────────────
  if (view === "summary") {
    try {
      const summary = await fetchGscSiteSummary(days);
      return NextResponse.json({ success: true, data: summary, days });
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err);
      // Fall back to DB if GSC live fetch fails
      const { data } = await supabase
        .from("gsc_data")
        .select("clicks, impressions, ctr, position")
        .gte("date", sinceDate);

      if (!data || data.length === 0) {
        return NextResponse.json({ success: false, error: `GSC fetch failed: ${msg}` }, { status: 502 });
      }

      const totalClicks      = data.reduce((s, r) => s + (r.clicks ?? 0), 0);
      const totalImpressions = data.reduce((s, r) => s + (r.impressions ?? 0), 0);
      const avgCtr           = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
      const avgPosition      = data.reduce((s, r) => s + (r.position ?? 0), 0) / data.length;

      return NextResponse.json({
        success: true,
        data: { totalClicks, totalImpressions, avgPosition, avgCtr },
        days,
        source: "db_cache",
      });
    }
  }

  // ── By Page: traffic per URL ───────────────────────────────────────────
  if (view === "by-page") {
    let query = supabase
      .from("blog_traffic_summary")
      .select("*");

    if (url) query = query.eq("url", url);

    const { data, error } = await query
      .order("clicks_28d", { ascending: false })
      .limit(100);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    return NextResponse.json({ success: true, data, days });
  }

  // ── By Keyword: top keywords ───────────────────────────────────────────
  if (view === "by-keyword") {
    const { data, error } = await supabase
      .from("gsc_data")
      .select("keyword, clicks, impressions, ctr, position, url")
      .gte("date", sinceDate)
      .order("impressions", { ascending: false })
      .limit(200);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

    // Aggregate by keyword (GSC data has one row per keyword × date × device etc.)
    const agg: Record<string, { keyword: string; clicks: number; impressions: number; positions: number[]; urls: Set<string> }> = {};

    for (const row of (data ?? [])) {
      if (!agg[row.keyword]) {
        agg[row.keyword] = { keyword: row.keyword, clicks: 0, impressions: 0, positions: [], urls: new Set() };
      }
      agg[row.keyword].clicks      += row.clicks ?? 0;
      agg[row.keyword].impressions += row.impressions ?? 0;
      agg[row.keyword].positions.push(row.position ?? 0);
      if (row.url) agg[row.keyword].urls.add(row.url);
    }

    const result = Object.values(agg).map((k) => ({
      keyword:     k.keyword,
      clicks:      k.clicks,
      impressions: k.impressions,
      avg_position: k.positions.length > 0
        ? Math.round((k.positions.reduce((s, p) => s + p, 0) / k.positions.length) * 10) / 10
        : null,
      ctr: k.impressions > 0 ? Math.round((k.clicks / k.impressions) * 10000) / 10000 : 0,
      page_count: k.urls.size,
    })).sort((a, b) => b.clicks - a.clicks);

    return NextResponse.json({ success: true, data: result, days });
  }

  return NextResponse.json({ success: false, error: "Invalid view param" }, { status: 400 });
}
