import { NextResponse } from "next/server";
import { createSupabaseServer } from "@/lib/supabase-server";

export const revalidate = 3600; // cache for 1h

export async function GET() {
  try {
    const supabase = await createSupabaseServer();
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

    const { count } = await supabase
      .from("gastro_leads")
      .select("*", { count: "exact", head: true })
      .gte("created_at", since);

    return NextResponse.json({ leadsThisWeek: count ?? 0 });
  } catch {
    return NextResponse.json({ leadsThisWeek: 0 });
  }
}
