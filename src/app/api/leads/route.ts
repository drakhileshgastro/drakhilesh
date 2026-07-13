import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { createLead, type CreateLeadInput } from "@/lib/supabase";
import { internalAuthHeaders } from "@/lib/auth";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      patient_name,
      patient_phone,
      patient_city,
      condition,
      preferred_date,
      preferred_time,
      source,
    } = body;

    if (!patient_name || !patient_phone || !patient_city || !condition) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // ── Lead Deduplication ────────────────────────────────────────
    // If same phone submitted within last 30 days, update notes instead of creating duplicate
    const cleanPhone = patient_phone.trim().replace(/^0/, "").slice(-10);
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();

    const { data: existing } = await supabase
      .from("gastro_leads")
      .select("lead_id, source, status")
      .eq("patient_phone", cleanPhone)
      .gte("created_at", thirtyDaysAgo)
      .in("status", ["New", "Called", "No-answer", "Follow-up"])
      .order("created_at", { ascending: false })
      .limit(1)
      .single();

    if (existing) {
      try {
        await supabase
          .from("gastro_leads")
          .update({
            notes: `Re-enquiry via ${source ?? "Website"} for: ${condition}. Original source: ${existing.source}.`,
          })
          .eq("lead_id", existing.lead_id);
      } catch {}

      // Still fire clinic alert for re-enquiry
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drakhileshgastro.com";
      fetch(`${baseUrl}/api/whatsapp`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...internalAuthHeaders() },
        body: JSON.stringify({
          to: "clinic_alert",
          patientName: patient_name.trim(),
          leadId: existing.lead_id,
          type: "clinic_alert",
          condition,
          patientCity: patient_city.trim(),
          preferredTime: preferred_time || "Not specified",
          appointmentDate: `Re-enquiry (existing lead: ${existing.status})`,
        }),
      }).catch(() => {});

      return NextResponse.json({ success: true, lead_id: existing.lead_id, deduplicated: true });
    }

    // ── Create New Lead ───────────────────────────────────────────
    const input: CreateLeadInput = {
      patient_name: patient_name.trim(),
      patient_phone: cleanPhone,
      patient_city: patient_city.trim(),
      condition,
      preferred_date: preferred_date || undefined,
      preferred_time: preferred_time || undefined,
      source: source || "Website Form",
    };

    const result = await createLead(input);

    if (!result.success) {
      console.error("Lead creation failed:", result.error);
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drakhileshgastro.com";

    // 1. WhatsApp acknowledgement to patient (non-blocking)
    fetch(`${baseUrl}/api/whatsapp`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...internalAuthHeaders() },
      body: JSON.stringify({
        to: `91${cleanPhone}`,
        patientName: patient_name.trim(),
        leadId: result.lead_id,
        type: "acknowledgement",
      }),
    }).catch((err) => console.error("WhatsApp ack failed:", err));

    // 2. WhatsApp clinic alert to doctor + Arvind (non-blocking)
    fetch(`${baseUrl}/api/whatsapp`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...internalAuthHeaders() },
      body: JSON.stringify({
        to: "clinic_alert",
        patientName: patient_name.trim(),
        leadId: result.lead_id,
        type: "clinic_alert",
        condition,
        patientCity: patient_city.trim(),
        appointmentDate: preferred_date || "Not specified",
        preferredTime: preferred_time || "Not specified",
      }),
    }).catch((err) => console.error("WhatsApp clinic alert failed:", err));

    // 3. Browser push notification to logged-in CRM users (non-blocking)
    fetch(`${baseUrl}/api/push/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...internalAuthHeaders() },
      body: JSON.stringify({
        title: `New Lead: ${patient_name.trim()}`,
        body: `${condition} — ${patient_city.trim()}`,
        url: "/crm/leads",
      }),
    }).catch(() => {}); // Silent — push may not be set up

    return NextResponse.json({ success: true, lead_id: result.lead_id });
  } catch (err) {
    console.error("POST /api/leads error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
