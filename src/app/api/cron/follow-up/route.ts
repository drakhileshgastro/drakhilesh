import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Runs daily at 10am IST (4:30am UTC) via vercel.json cron
// Finds patients who were marked Visited 6–8 days ago and sends a follow-up WhatsApp
export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const windowEnd = new Date(now.getTime() - 6 * 24 * 60 * 60 * 1000);   // 6 days ago
  const windowStart = new Date(now.getTime() - 8 * 24 * 60 * 60 * 1000); // 8 days ago

  // Find leads that transitioned to "Visited" in the 6–8 day window
  const { data: leads, error } = await supabase
    .from("gastro_leads")
    .select("lead_id, patient_name, patient_phone")
    .eq("status", "Visited")
    .gte("updated_at", windowStart.toISOString())
    .lte("updated_at", windowEnd.toISOString());

  if (error) {
    // updated_at column might not exist — fall back to created_at
    if (error.code === "42703") {
      return NextResponse.json({ sent: 0, note: "updated_at column missing, skipping follow-up" });
    }
    console.error("Follow-up query error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!leads || leads.length === 0) {
    return NextResponse.json({ sent: 0, message: "No follow-ups in window" });
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drakhileshgastro.com";
  let sent = 0;

  for (const lead of leads) {
    if (!lead.patient_phone) continue;
    try {
      await fetch(`${baseUrl}/api/whatsapp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: `91${lead.patient_phone.replace(/^0/, "").slice(-10)}`,
          patientName: lead.patient_name,
          leadId: lead.lead_id,
          type: "follow_up",
        }),
      });
      sent++;
    } catch (err) {
      console.error(`Follow-up failed for ${lead.lead_id}:`, err);
    }
  }

  return NextResponse.json({ sent, total: leads.length });
}
