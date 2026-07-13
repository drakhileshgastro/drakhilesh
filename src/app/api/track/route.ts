import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { page, referrer, utm_source, utm_medium, utm_campaign } = await req.json();

    if (!page) return NextResponse.json({ ok: false });

    const ua = req.headers.get("user-agent") ?? "";

    // Best-effort insert — silently fails if table doesn't exist yet
    await supabase.from("page_visits").insert([{
      page: page.slice(0, 500),
      referrer: referrer?.slice(0, 500) ?? null,
      utm_source: utm_source ?? null,
      utm_medium: utm_medium ?? null,
      utm_campaign: utm_campaign ?? null,
      user_agent: ua.slice(0, 500),
    }]);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false });
  }
}
