import { NextRequest, NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { createAdminClient } from "@/lib/supabase-admin";
import { z } from "zod";

// ─── Schema mirrors BlogPost interface in blog-data.ts ───────────────────

const BlogSectionSchema = z.object({
  heading: z.string(),
  type:    z.enum(["text","list","tip"]),
  content: z.string(),
  list:    z.array(z.string()).optional(),
});

const FaqSchema = z.object({
  q: z.string(),
  a: z.string(),
});

const ImagePromptSchema = z.object({
  featured: z.string(),
  og:       z.string(),
  card:     z.string(),
}).optional();

const BlogPostInputSchema = z.object({
  slug:             z.string().regex(/^[a-z0-9-]+$/, "Slug: lowercase hyphens only"),
  title_hi:         z.string().min(5),
  title_en:         z.string().min(5),
  excerpt_hi:       z.string().min(20),
  excerpt_en:       z.string().min(20),
  category:         z.enum(["conditions","procedures","symptoms","diet","locations","tests"]),
  read_time_mins:   z.number().int().min(1).max(60),
  published_at:     z.string().regex(/^[A-Z][a-z]+ \d{4}$/),   // "August 2026"
  emoji:            z.string().min(1).max(4),
  image:            z.string().optional(),
  tags:             z.array(z.string()).min(3).max(8),
  meta_title:       z.string().max(60),
  meta_description: z.string().max(155),
  sections:         z.array(BlogSectionSchema).min(3),
  faqs:             z.array(FaqSchema).min(6).optional(),
  image_prompt:     ImagePromptSchema,
  source:           z.enum(["pipeline","manual","import"]).optional().default("manual"),
  primary_keyword:  z.string().optional(),
  status:           z.enum(["draft","published","archived"]).optional().default("published"),
});

const PatchBlogSchema = z.object({
  id:      z.string().uuid(),
  status:  z.enum(["draft","published","archived"]).optional(),
  primary_keyword: z.string().optional(),
  ai_audit_score:  z.number().int().min(0).max(2).optional(),
  ai_audit_flags:  z.record(z.string(), z.unknown()).optional(),
}).refine(
  (d) => d.status || d.primary_keyword !== undefined || d.ai_audit_score !== undefined,
  { message: "At least one field to update required" }
);

// ─── GET: list blogs ─────────────────────────────────────────────────────

export async function GET(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  const supabase = createAdminClient();
  const { searchParams } = new URL(req.url);
  const category = searchParams.get("category");
  const status   = searchParams.get("status") ?? "published";
  const limit    = parseInt(searchParams.get("limit") ?? "100", 10);
  const offset   = parseInt(searchParams.get("offset") ?? "0", 10);
  const slug     = searchParams.get("slug");  // single post lookup

  // Single post detail
  if (slug) {
    const { data, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) return NextResponse.json({ success: false, error: error.message }, { status: 404 });
    return NextResponse.json({ success: true, data });
  }

  // List with optional filters
  let query = supabase
    .from("blog_posts")
    .select(
      "id, slug, title_hi, title_en, category, status, source, primary_keyword, " +
      "read_time_mins, published_at, emoji, tags, meta_title, ai_audit_score, created_at, updated_at",
      { count: "exact" }
    )
    .order("created_at", { ascending: false })
    .range(offset, offset + limit - 1);

  if (status !== "all") query = query.eq("status", status);
  if (category)         query = query.eq("category", category);

  const { data, error, count } = await query;

  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

  return NextResponse.json({ success: true, data, total: count, limit, offset });
}

// ─── POST: publish a blog manually ───────────────────────────────────────

export async function POST(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = BlogPostInputSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const supabase = createAdminClient();

  // Duplicate slug check
  const { data: existing } = await supabase
    .from("blog_posts")
    .select("id")
    .eq("slug", parsed.data.slug)
    .maybeSingle();

  if (existing) {
    return NextResponse.json(
      { success: false, error: `Slug "${parsed.data.slug}" already exists` },
      { status: 409 }
    );
  }

  const d = parsed.data;

  const { data, error } = await supabase
    .from("blog_posts")
    .insert({
      slug:             d.slug,
      title_hi:         d.title_hi,
      title_en:         d.title_en,
      excerpt_hi:       d.excerpt_hi,
      excerpt_en:       d.excerpt_en,
      category:         d.category,
      read_time_mins:   d.read_time_mins,
      published_at:     d.published_at,
      emoji:            d.emoji,
      image:            d.image ?? null,
      tags:             d.tags,
      meta_title:       d.meta_title,
      meta_description: d.meta_description,
      sections:         d.sections,
      faqs:             d.faqs ?? [],
      image_prompt:     d.image_prompt ?? null,
      source:           d.source,
      primary_keyword:  d.primary_keyword ?? null,
      status:           d.status,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }

  // Auto-add to keyword map if primary_keyword provided
  if (d.primary_keyword && data.id) {
    await supabase.from("blog_keyword_map").upsert({
      keyword:      d.primary_keyword,
      page_url:     `/blog/${d.slug}`,
      page_type:    "blog",
      blog_post_id: data.id,
      is_primary:   true,
      intent:       "informational",
    }, { onConflict: "keyword,page_url" });
  }

  return NextResponse.json({ success: true, data }, { status: 201 });
}

// ─── PATCH: update blog status or metadata ────────────────────────────────

export async function PATCH(req: NextRequest) {
  const auth = await requireAdmin();
  if (!auth.ok) return auth.response;

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = PatchBlogSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, error: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  const { id, ...updates } = parsed.data;
  const supabase = createAdminClient();

  const { data, error } = await supabase
    .from("blog_posts")
    .update(updates)
    .eq("id", id)
    .select()
    .single();

  if (error) return NextResponse.json({ success: false, error: error.message }, { status: 500 });

  return NextResponse.json({ success: true, data });
}
