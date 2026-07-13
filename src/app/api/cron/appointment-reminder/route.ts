import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Runs daily at 8am IST (2:30am UTC) via vercel.json cron
// Finds confirmed appointments within the next 20–44h window and sends WhatsApp reminders
export async function GET(req: NextRequest) {
  const auth = req.headers.get("authorization");
  const secret = process.env.CRON_SECRET;
  if (secret && auth !== `Bearer ${secret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const windowStart = new Date(now.getTime() + 20 * 60 * 60 * 1000); // +20h
  const windowEnd = new Date(now.getTime() + 44 * 60 * 60 * 1000);   // +44h

  const { data: leads, error } = await supabase
    .from("gastro_leads")
    .select("lead_id, patient_name, patient_phone, condition, confirmed_datetime")
    .eq("status", "Confirmed")
    .gte("confirmed_datetime", windowStart.toISOString())
    .lte("confirmed_datetime", windowEnd.toISOString());

  if (error) {
    console.error("Appointment reminder query error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!leads || leads.length === 0) {
    return NextResponse.json({ sent: 0, message: "No appointments in window" });
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drakhileshgastro.com";
  let sent = 0;

  for (const lead of leads) {
    if (!lead.patient_phone || !lead.confirmed_datetime) continue;

    const apptDate = new Date(lead.confirmed_datetime);
    const formattedDate = apptDate.toLocaleDateString("en-IN", {
      weekday: "long", day: "numeric", month: "long", timeZone: "Asia/Kolkata",
    });
    const hour = new Date(lead.confirmed_datetime).toLocaleString("en-US", { timeZone: "Asia/Kolkata", hour: "numeric", hour12: false });
    const formattedTime = parseInt(hour) < 14 ? "Morning OPD (10am–2pm)" : "Evening OPD (5pm–8pm)";

    try {
      await fetch(`${baseUrl}/api/whatsapp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: `91${lead.patient_phone.replace(/^0/, "").slice(-10)}`,
          patientName: lead.patient_name,
          leadId: lead.lead_id,
          type: "reminder",
          appointmentDate: formattedDate,
          appointmentTime: formattedTime,
        }),
      });
      sent++;
    } catch (err) {
      console.error(`Reminder failed for ${lead.lead_id}:`, err);
    }
  }

  return NextResponse.json({ sent, total: leads.length });
}
