import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { internalAuthHeaders, requireCronRequest } from "@/lib/auth";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Runs every Sunday at 8am IST (2:30am UTC) via vercel.json cron
// Sends weekly performance summary to WHATSAPP_ALERT_NUMBERS
export async function GET(req: NextRequest) {
  const unauthorized = requireCronRequest(req);
  if (unauthorized) return unauthorized;

  const now = new Date();
  const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

  const { data: leads, error } = await supabase
    .from("gastro_leads")
    .select("status, source, condition, patient_city")
    .gte("created_at", weekAgo.toISOString());

  if (error) {
    console.error("Weekly report query error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  const total = leads?.length ?? 0;
  const confirmed = leads?.filter((l) => l.status === "Confirmed" || l.status === "Visited").length ?? 0;
  const visited = leads?.filter((l) => l.status === "Visited").length ?? 0;
  const newLeads = leads?.filter((l) => l.status === "New").length ?? 0;

  // Top source
  const sourceCounts = (leads ?? []).reduce<Record<string, number>>((acc, l) => {
    acc[l.source] = (acc[l.source] ?? 0) + 1;
    return acc;
  }, {});
  const topSource = Object.entries(sourceCounts).sort(([, a], [, b]) => b - a)[0];

  // Top condition
  const condCounts = (leads ?? []).reduce<Record<string, number>>((acc, l) => {
    acc[l.condition] = (acc[l.condition] ?? 0) + 1;
    return acc;
  }, {});
  const topCondition = Object.entries(condCounts).sort(([, a], [, b]) => b - a)[0];

  const conversionRate = total > 0 ? Math.round((confirmed / total) * 100) : 0;

  const weekStart = weekAgo.toLocaleDateString("en-IN", { day: "numeric", month: "short" });
  const weekEnd = now.toLocaleDateString("en-IN", { day: "numeric", month: "short" });

  const message =
    `📊 *Weekly Report — Dr. Akhilesh Clinic*\n` +
    `📅 ${weekStart} to ${weekEnd}\n\n` +
    `📋 *Total Leads:* ${total}\n` +
    `🆕 *New (pending):* ${newLeads}\n` +
    `✅ *Confirmed:* ${confirmed}\n` +
    `🏥 *Visited:* ${visited}\n` +
    `📈 *Conversion Rate:* ${conversionRate}%\n\n` +
    (topSource ? `🔝 *Top Source:* ${topSource[0]} (${topSource[1]} leads)\n` : "") +
    (topCondition ? `🩺 *Top Condition:* ${topCondition[0]} (${topCondition[1]} cases)\n` : "") +
    `\nView CRM → https://drakhileshgastro.com/crm`;

  const alertNumbers = (process.env.WHATSAPP_ALERT_NUMBERS ?? "")
    .split(",")
    .map((n) => n.trim())
    .filter(Boolean);

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drakhileshgastro.com";
  let sent = 0;

  for (const num of alertNumbers) {
    try {
      const res = await fetch(`${baseUrl}/api/whatsapp`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...internalAuthHeaders() },
        body: JSON.stringify({
          to: num,
          patientName: "Team",
          leadId: "report",
          type: "raw",
          rawMessage: message,
        }),
      });
      if (res.ok) sent++;
    } catch (err) {
      console.error("Weekly report send error:", err);
    }
  }

  return NextResponse.json({ sent, total_leads: total, conversion_rate: conversionRate });
}
