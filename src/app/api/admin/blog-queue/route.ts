import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase-admin";
import { z } from "zod";

const QueueItemSchema = z.object({
  keyword:         z.string().min(2).max(200),
  secondary_kws:   z.array(z.string()).optional().default([]),
  target_category: z.enum(["conditions","procedures","symptoms","diet","locations","tests"]),
  priority:        z.number().int().min(1).max(10).optional().default(5),
  notes:           z.string().max(1000).optional(),
});

const PatchSchema = z.object({
  id:     z.string().uuid(),
  status: z.enum(["pending","researching","writing","reviewing","published","rejected"]).optional(),
  priority: z.number().int().min(1).max(10).optional(),
  notes: z.string().max(1000).optional(),
  research_brief: z.record(z.string(), z.unknown()).optional(),
  blog_post_id: z.string().uuid().optional(),
}).refine(
  (d) => d.status || d.priority || d.notes || d.research_brief || d.blog_post_id,
  { message: "At least one field to update is required" }
);

// ─── GET: list queue items ────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);
  const status   = searchParams.get("status");
  const limit    = parseInt(searchParams.get("limit") ?? "50", 10);
  const offset   = parseInt(searchParams.get("offset") ?? "0", 10);

  let query = supabase
    .from("blog_queue")
    .select(`
      id, keyword, secondary_kws, target_category, priority, status,
      requested_by, notes, blog_post_id,
      gsc_position_at_publish, gsc_clicks_30d,
      created_at, updated_at
    `, { count: "exact" })
    .order("priority", { ascending: false })
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (status) query = query.eq("status", status);

  const { data, error, count } = await query;

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data, total: count, limit, offset });
}

// ─── POST: add new keyword to queue ──────────────────────────────────────

export async function POST(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = QueueItemSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  // Check if keyword is already in queue (non-rejected/published)
  const { data: existing } = await supabase
    .from("blog_queue")
    .select("id, status")
    .eq("keyword", parsed.data.keyword)
    .not("status", "in", '("published","rejected")')
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { success: false, error: `Keyword "${parsed.data.keyword}" is already in queue (status: ${existing.status})` },
      { status: 409 }
    );
  }

  const { data, error } = await supabase
    .from("blog_queue")
    .insert({
      keyword:         parsed.data.keyword,
      secondary_kws:   parsed.data.secondary_kws,
      target_category: parsed.data.target_category,
      priority:        parsed.data.priority,
      notes:           parsed.data.notes ?? null,
      requested_by:    auth.user.email ?? "admin",
      status:          "pending",
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data }, { status: 201 });
}

// ─── PATCH: update queue item status / priority / notes ──────────────────

export async function PATCH(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = PatchSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { id, ...updates } = parsed.data;
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("blog_queue")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, data });
}

// ─── DELETE: remove from queue (admin only) ───────────────────────────────

export async function DELETE(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ success: false, error: "id param required" }, { status: 400 });
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from("blog_queue").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
