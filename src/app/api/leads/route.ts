import { NextRequest, NextResponse } from "next/server";
import { createLead, type CreateLeadInput } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { patient_name, patient_phone, patient_city, condition, preferred_date, source } = body;

    if (!patient_name || !patient_phone || !patient_city || !condition) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    const input: CreateLeadInput = {
      patient_name: patient_name.trim(),
      patient_phone: patient_phone.trim(),
      patient_city: patient_city.trim(),
      condition,
      preferred_date: preferred_date || undefined,
      source: source || "Website Form",
    };

    const result = await createLead(input);

    if (!result.success) {
      console.error("Lead creation failed:", result.error);
      return NextResponse.json({ success: false, error: result.error }, { status: 500 });
    }

    // Fire WhatsApp acknowledgement — non-blocking, don't wait for it
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drakhileshgastro.com";
    fetch(`${baseUrl}/api/whatsapp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: `91${patient_phone.trim().replace(/^0/, "")}`,
        patientName: patient_name.trim(),
        leadId: result.lead_id,
        type: "acknowledgement",
      }),
    }).catch((err) => console.error("WhatsApp ack failed:", err));

    return NextResponse.json({ success: true, lead_id: result.lead_id });
  } catch (err) {
    console.error("POST /api/leads error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
