import { NextRequest, NextResponse } from "next/server";
import { requireCronRequest } from "@/lib/auth";
import { fetchGscData, GscRecord } from "@/lib/gsc";
import { createAdminClient } from "@/lib/supabase-admin";

/**
 * GSC Sync Cron Job
 * Runs daily at 3:00 UTC (8:30 IST) via vercel.json
 * Fetches yesterday's GSC data and upserts into gsc_data table.
 * Also refreshes blog_keyword_map position snapshots.
 *
 * Protected by CRON_SECRET header (same as other cron routes).
 */

const BATCH_SIZE = 500; // upsert rows per batch to avoid request size limits

export async function GET(req: NextRequest) {
  const unauthorized = requireCronRequest(req);
  if (unauthorized) return unauthorized;

  const supabase = createAdminClient();

  // Fetch yesterday's data (GSC typically has 1-3 day lag; fetch last 3 days with dedup)
  const end   = new Date();
  end.setDate(end.getDate() - 1);
  const start = new Date(end);
  start.setDate(start.getDate() - 2); // 3-day window to catch delayed data

  const fmt  = (d: Date) => d.toISOString().slice(0, 10);
  const startDate = fmt(start);
  const endDate   = fmt(end);

  let rows: GscRecord[] = [];

  try {
    rows = await fetchGscData(startDate, endDate);
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[gsc-sync] fetchGscData error:", msg);
    // Return 200 so Vercel doesn't retry and spam logs — just log the error
    return NextResponse.json({ success: false, error: msg, fetched: 0 }, { status: 200 });
  }

  if (rows.length === 0) {
    return NextResponse.json({ success: true, fetched: 0, upserted: 0 });
  }

  // ─── Batch upsert into gsc_data ──────────────────────────────────────────

  let upserted = 0;
  let errors   = 0;

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE).map((r) => ({
      url:         r.url,
      keyword:     r.keyword,
      date:        r.date,
      clicks:      r.clicks,
      impressions: r.impressions,
      ctr:         r.ctr,
      position:    r.position,
      country:     r.country,
      device:      r.device,
      synced_at:   new Date().toISOString(),
    }));

    const { error } = await supabase
      .from("gsc_data")
      .upsert(batch, {
        onConflict: "url,keyword,date,country,device",
        ignoreDuplicates: false, // update existing rows
      });

    if (error) {
      console.error("[gsc-sync] upsert batch error:", error.message);
      errors++;
    } else {
      upserted += batch.length;
    }
  }

  // ─── Refresh blog_keyword_map position snapshots ─────────────────────────

  try {
    // Get all tracked keywords
    const { data: keywordMap } = await supabase
      .from("blog_keyword_map")
      .select("id, keyword, page_url");

    if (keywordMap && keywordMap.length > 0) {
      for (const kw of keywordMap) {
        // Get average position over last 7 days
        const { data: recent } = await supabase
          .from("gsc_data")
          .select("position, clicks, impressions, ctr")
          .eq("keyword", kw.keyword)
          .eq("url", kw.page_url)
          .gte("date", fmt(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)));

        if (!recent || recent.length === 0) continue;

        const avgPos     = recent.reduce((s, r) => s + (r.position ?? 0), 0) / recent.length;
        const totalClick = recent.reduce((s, r) => s + (r.clicks ?? 0), 0);
        const totalImp   = recent.reduce((s, r) => s + (r.impressions ?? 0), 0);
        const avgCtr     = totalImp > 0 ? totalClick / totalImp : 0;

        // Compare with position 7 days ago
        const { data: older } = await supabase
          .from("gsc_data")
          .select("position")
          .eq("keyword", kw.keyword)
          .eq("url", kw.page_url)
          .lte("date", fmt(new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)))
          .gte("date", fmt(new Date(Date.now() - 14 * 24 * 60 * 60 * 1000)))
          .limit(7);

        let positionDelta: number | null = null;
        if (older && older.length > 0) {
          const oldAvg = older.reduce((s, r) => s + (r.position ?? 0), 0) / older.length;
          positionDelta = Math.round((avgPos - oldAvg) * 10) / 10;
        }

        await supabase
          .from("blog_keyword_map")
          .update({
            current_position:    Math.round(avgPos * 10) / 10,
            current_clicks:      totalClick,
            current_impressions: totalImp,
            current_ctr:         Math.round(avgCtr * 10000) / 10000,
            position_delta:      positionDelta,
          })
          .eq("id", kw.id);
      }
    }
  } catch (kwErr) {
    console.error("[gsc-sync] keyword map refresh error:", kwErr);
    // Non-fatal — gsc_data was already upserted
  }

  return NextResponse.json({
    success:    true,
    period:     `${startDate} → ${endDate}`,
    fetched:    rows.length,
    upserted,
    errors,
  });
}
