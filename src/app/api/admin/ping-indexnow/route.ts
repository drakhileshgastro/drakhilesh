/**
 * POST /api/admin/ping-indexnow
 * Triggers an IndexNow ping for one or more URLs so Bing/Naver/Seznam/Yandex
 * pick up changes immediately.
 *
 * Body (JSON):
 *   { slug: string }          — pings /blog/<slug>, /blog, /sitemap.xml
 *   { paths: string[] }       — pings arbitrary paths (e.g. ["/conditions/acidity", "/locations/dhanbad"])
 *   { all: true }             — pings all published site URLs in bulk
 *
 * Auth:
 *   Authorization: Bearer <supabase_session_token> OR
 *   x-admin-key: <INDEXNOW_KEY or SUPABASE_SERVICE_ROLE_KEY>
 */

import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import {
  pingNewBlog,
  pingIndexNow,
  pingAllSitemapUrls,
  DEFAULT_INDEXNOW_KEY,
} from "@/lib/indexnow";

function adminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } },
  );
}

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  // Auth: check Bearer token or x-admin-key header
  const adminKey = req.headers.get("x-admin-key");
  const validAdminKey =
    (process.env.INDEXNOW_KEY && adminKey === process.env.INDEXNOW_KEY) ||
    adminKey === DEFAULT_INDEXNOW_KEY ||
    (process.env.SUPABASE_SERVICE_ROLE_KEY && adminKey === process.env.SUPABASE_SERVICE_ROLE_KEY);

  if (!validAdminKey) {
    const token = req.headers.get("Authorization")?.replace("Bearer ", "");
    if (!token) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }
    const supabase = adminClient();
    const { data: { user }, error: authErr } = await supabase.auth.getUser(token);
    if (authErr || !user) {
      return NextResponse.json({ success: false, error: "Invalid session" }, { status: 401 });
    }
  }

  let body: { slug?: string; paths?: string[]; all?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 });
  }

  try {
    if (body.all) {
      // Bulk ping all site URLs
      const result = await pingAllSitemapUrls();
      return NextResponse.json({
        success: result.ok,
        count: result.count,
        engine: "IndexNow (Bing, Naver, Seznam, Yandex)",
        endpoints: result.endpoints,
        status: result.status,
        error: result.error,
      });
    }

    if (body.slug) {
      // Blog post ping: /blog/<slug>, /blog, /sitemap.xml
      const result = await pingNewBlog(body.slug);
      return NextResponse.json({
        success: result.ok,
        pinged: [`/blog/${body.slug}`, "/blog", "/sitemap.xml"],
        engine: "IndexNow (Bing, Naver, Seznam, Yandex)",
        status: result.status,
        error: result.error,
      });
    }

    if (body.paths && Array.isArray(body.paths) && body.paths.length > 0) {
      const result = await pingIndexNow(body.paths);
      return NextResponse.json({
        success: result.ok,
        count: result.count,
        pinged: body.paths,
        engine: "IndexNow (Bing, Naver, Seznam, Yandex)",
        status: result.status,
        error: result.error,
      });
    }

    return NextResponse.json({ success: false, error: "Provide { slug }, { paths: [] }, or { all: true }" }, { status: 400 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
