/**
 * POST /api/admin/ping-indexnow
 * Triggers an IndexNow ping for one or more URLs so Bing/Yandex
 * pick up the new page immediately after publishing.
 *
 * Body (JSON):
 *   { slug: string }          — pings /blog/<slug>, /blog, /sitemap.xml
 *   { paths: string[] }       — pings arbitrary paths (e.g. ["/conditions/acidity"])
 *
 * Called by the blog-indexer agent after a new post is committed.
 * Also works for any new page — diet, conditions, symptoms.
 *
 * Requires env:
 *   INDEXNOW_KEY              — your IndexNow key string
 *   (public/<INDEXNOW_KEY>.txt must exist for ownership verification)
 */

import { NextRequest, NextResponse } from "next/server";
import { createClient }              from "@supabase/supabase-js";
import { pingNewBlog, pingIndexNow } from "@/lib/indexnow";

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // Auth: require valid Supabase session
  const token = req.headers.get("Authorization")?.replace("Bearer ", "");
  if (!token) {
    return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
  }
  const supabase = adminClient();
  const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
  if (authErr || !user) {
    return NextResponse.json({ success: false, error: "Invalid session" }, { status: 401 });
  }

  let body: { slug?: string; paths?: string[] };
  try { body = await req.json(); }
  catch { return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 }); }

  if (!process.env.INDEXNOW_KEY) {
    return NextResponse.json({
      success: false,
      error: "INDEXNOW_KEY not configured",
      setup: [
        "1. Generate a random key: openssl rand -hex 16",
        "2. Add INDEXNOW_KEY=<key> to .env.local",
        "3. Create public/<key>.txt with just the key string",
        "4. Deploy to Vercel",
      ],
    }, { status: 503 });
  }

  try {
    if (body.slug) {
      // Blog post ping: /blog/<slug>, /blog, /sitemap.xml
      await pingNewBlog(body.slug);
      return NextResponse.json({
        success: true,
        pinged: [`/blog/${body.slug}`, "/blog", "/sitemap.xml"],
        engine: "IndexNow (Bing + Yandex)",
      });
    }

    if (body.paths && Array.isArray(body.paths) && body.paths.length > 0) {
      const result = await pingIndexNow(body.paths);
      return NextResponse.json({
        success: result.ok,
        pinged:  body.paths,
        engine:  "IndexNow (Bing + Yandex)",
        status:  result.status,
        error:   result.error,
      });
    }

    return NextResponse.json({ success: false, error: "Provide slug or paths[]" }, { status: 400 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
