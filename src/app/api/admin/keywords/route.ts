import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase-admin";
import { z } from "zod";

const KeywordMapSchema = z.object({
  keyword:      z.string().min(2).max(200),
  page_url:     z.string().startsWith("/"),
  page_type:    z.enum(["blog","condition","procedure","symptom","location","diet"]),
  blog_post_id: z.string().uuid().optional(),
  is_primary:   z.boolean().optional().default(true),
  intent:       z.enum(["informational","navigational","commercial","transactional"]).optional().default("informational"),
  notes:        z.string().max(500).optional(),
});

// ─── GET: keyword map with GSC position data ─────────────────────────────

export async function GET(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);
  const page_type = searchParams.get("page_type");
  const view      = searchParams.get("view") ?? "map";       // "map" | "opportunities"
  const limit     = parseInt(searchParams.get("limit") ?? "200", 10);
  const offset    = parseInt(searchParams.get("offset") ?? "0", 10);

  // Quick-win opportunities view (positions 4–20 from materialized view)
  if (view === "opportunities") {
    const { data, error } = await supabase
      .from("keyword_opportunity_report")
      .select("*")
      .range(offset, offset + limit - 1);

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });
    return NextResponse.json({ success: true, data });
  }

  // Full keyword map
  let query = supabase
    .from("blog_keyword_map")
    .select(
      "id, keyword, page_url, page_type, is_primary, intent, notes, " +
      "current_position, current_clicks, current_impressions, current_ctr, " +
      "position_delta, updated_at",
      { count: "exact" }
    )
    .order("current_position", { ascending: true, nullsFirst: false })
    .range(offset, offset + limit - 1);

  if (page_type) query = query.eq("page_type", page_type);

  const { data, error, count } = await query;

  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

  return NextResponse.json({ success: true, data, total: count, limit, offset });
}

// ─── POST: add keyword mapping ────────────────────────────────────────────

export async function POST(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = KeywordMapSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("blog_keyword_map")
    .upsert(parsed.data, { onConflict: "keyword,page_url" })
    .select()
    .single();

  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

  return NextResponse.json({ success: true, data }, { status: 201 });
}

// ─── DELETE: remove keyword mapping ──────────────────────────────────────

export async function DELETE(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) return NextResponse.json({ success: false, error: "id param required" }, { status: 400 });

  const supabase = createAdminClient();
  const { error } = await supabase.from("blog_keyword_map").delete().eq("id", id);

  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

  return NextResponse.json({ success: true });
}
