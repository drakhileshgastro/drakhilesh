import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

const TIME_SLOT_MAP: Record<string, string> = {
  "Morning (10am–2pm)": "10:00:00",
  "Evening (5pm–8pm)": "17:00:00",
};

export async function POST(req: NextRequest) {
  try {
    const cookieStore = await cookies();

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll: () => cookieStore.getAll(),
          setAll: () => {},
        },
      }
    );

    // Verify CRM session
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ success: false, error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const { lead_id, confirmed_date, confirmed_time } = body;

    if (!lead_id || !confirmed_date || !confirmed_time) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
    }

    // Compute ISO timestamp in IST (+05:30)
    const timeStr = TIME_SLOT_MAP[confirmed_time] ?? "10:00:00";
    const confirmed_datetime = `${confirmed_date}T${timeStr}+05:30`;

    // Fetch lead details for WhatsApp
    const { data: lead, error: fetchError } = await supabase
      .from("gastro_leads")
      .select("patient_name, patient_phone, condition")
      .eq("lead_id", lead_id)
      .single();

    if (fetchError || !lead) {
      return NextResponse.json({ success: false, error: "Lead not found" }, { status: 404 });
    }

    // Update lead — status + confirmed_datetime (columns that always exist)
    const { error: updateError } = await supabase
      .from("gastro_leads")
      .update({ status: "Confirmed", confirmed_datetime })
      .eq("lead_id", lead_id);

    if (updateError) {
      console.error("Appointment confirm update error:", updateError);
      return NextResponse.json({ success: false, error: updateError.message }, { status: 500 });
    }

    // Also mark confirmation_sent=true (silently skip if column not migrated yet)
    (async () => {
      try {
        await supabase
          .from("gastro_leads")
          .update({ confirmation_sent: true })
          .eq("lead_id", lead_id);
      } catch {}
    })();

    // Format date for human-readable WhatsApp message
    const [year, month, day] = confirmed_date.split("-").map(Number);
    const dateObj = new Date(year, month - 1, day);
    const formattedDate = dateObj.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    // Send WhatsApp confirmation to patient (non-blocking)
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://drakhileshgastro.com";
    const cleanPhone = lead.patient_phone.trim().replace(/^0/, "").replace(/^\+91/, "");
    fetch(`${baseUrl}/api/whatsapp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: `91${cleanPhone}`,
        patientName: lead.patient_name,
        leadId: lead_id,
        type: "confirmation",
        appointmentDate: formattedDate,
        appointmentTime: confirmed_time,
      }),
    }).catch((err) => console.error("WhatsApp confirmation failed:", err));

    return NextResponse.json({
      success: true,
      lead_id,
      patient_name: lead.patient_name,
      confirmed_datetime,
      formatted_date: formattedDate,
      formatted_time: confirmed_time,
    });
  } catch (err) {
    console.error("POST /api/appointments/confirm error:", err);
    return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
  }
}
