import { NextRequest, NextResponse } from "next/server";

const WA_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const WA_PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

interface SendWhatsAppParams {
  to: string;          // phone with country code, no +
  patientName: string;
  leadId: string;
  type?: "acknowledgement" | "confirmation" | "reminder" | "review";
  appointmentDate?: string;
  appointmentTime?: string;
}

function buildMessage(params: SendWhatsAppParams): string {
  const { patientName, leadId, type, appointmentDate, appointmentTime } = params;
  const mapsLink = "https://maps.google.com/?q=Orchid+Medical+Centre+HB+Road+Ranchi";
  const reviewLink = "https://g.page/orchid-medical-centre-ranchi/review";

  switch (type) {
    case "confirmation":
      return `Namaskar ${patientName} ji,\n\nAapka appointment confirm ho gaya hai.\n\n📅 Date: ${appointmentDate}\n⏰ Time: ${appointmentTime}\n\nDoctor: Dr. Akhilesh Yadav\nClinic: Orchid Medical Centre, HB Road, Ranchi\nMaps: ${mapsLink}\n\nKuch badalna ho toh reply karein.\n— Dr. Akhilesh Yadav Team`;

    case "reminder":
      return `Namaskar ${patientName} ji,\n\nKal ${appointmentDate} ko ${appointmentTime} baje aapka appointment hai.\n\nPata: Orchid Medical Centre, HB Road, Ranchi\nMaps: ${mapsLink}\n\nKoi sawaal ho toh reply karein.`;

    case "review":
      return `Namaskar ${patientName} ji,\n\nUmeed hai aap theek hain aur hamare clinic mein theek experience raha.\n\nAgar aap hamare service se khush hain toh please Google par ek review dein — isse aur logon ko sahi doctor dhundhne mein madad milti hai:\n${reviewLink}\n\nBahut shukriya!\n— Dr. Akhilesh Yadav Team`;

    default: // acknowledgement
      return `Namaskar ${patientName} ji,\n\nAapka appointment request mil gaya hai. Hamari team aapko 2 ghante ke andar call karegi appointment confirm karne ke liye.\n\n📋 Request ID: ${leadId}\n👨‍⚕️ Doctor: Dr. Akhilesh Yadav — Gastroenterologist\n🏥 Clinic: Orchid Medical Centre, HB Road, Ranchi\n\nKisi bhi sawaal ke liye yahan reply karein.\n— Dr. Akhilesh Yadav Team`;
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as SendWhatsAppParams;

    if (!WA_TOKEN || !WA_PHONE_ID) {
      // Graceful degradation — WhatsApp not configured yet
      console.warn("WhatsApp API not configured. Set WHATSAPP_ACCESS_TOKEN and WHATSAPP_PHONE_NUMBER_ID.");
      return NextResponse.json({ success: false, reason: "WhatsApp not configured" });
    }

    const message = buildMessage(body);
    const phone = body.to.replace(/[^0-9]/g, "");

    const payload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: phone,
      type: "text",
      text: { preview_url: false, body: message },
    };

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${WA_PHONE_ID}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${WA_TOKEN}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      console.error("WhatsApp API error:", data);
      return NextResponse.json({ success: false, error: data }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data.messages?.[0]?.id });
  } catch (err) {
    console.error("WhatsApp route error:", err);
    return NextResponse.json({ success: false, error: "Internal error" }, { status: 500 });
  }
}
