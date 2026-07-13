import { NextRequest, NextResponse } from "next/server";
import { DOCTOR } from "@/lib/constants";

const WA_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const WA_PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

interface SendWhatsAppParams {
  to: string;
  patientName: string;
  leadId: string;
  type?: "acknowledgement" | "confirmation" | "reminder" | "follow_up" | "review" | "clinic_alert" | "raw";
  appointmentDate?: string;
  appointmentTime?: string;
  condition?: string;
  patientCity?: string;
  preferredTime?: string;
  rawMessage?: string;
}

function buildMessage(params: SendWhatsAppParams): string {
  const { patientName, leadId, type, appointmentDate, appointmentTime, condition, patientCity, preferredTime } = params;
  const mapsLink = "https://maps.google.com/?q=Orchid+Medical+Centre+HB+Road+Ranchi";
  const reviewLink = "https://g.page/orchid-medical-centre-ranchi/review";
  const crmLink = "https://drakhileshgastro.com/crm";

  switch (type) {
    case "confirmation":
      return (
        `Namaskar ${patientName} ji 🙏\n\n` +
        `Aapka appointment *confirm* ho gaya hai!\n\n` +
        `📅 *Date:* ${appointmentDate}\n` +
        `⏰ *Time:* ${appointmentTime}\n` +
        `👨‍⚕️ *Doctor:* Dr. Akhilesh Yadav — Gastroenterologist\n` +
        `🏥 *Clinic:* Orchid Medical Centre, HB Road, Ranchi\n` +
        `📍 *Maps:* ${mapsLink}\n\n` +
        `Kripya 10 min pehle aa jayein. Kuch bhi badalna ho toh reply karein.\n` +
        `— Dr. Akhilesh Yadav Team`
      );

    case "reminder":
      return (
        `Namaskar ${patientName} ji 🙏\n\n` +
        `Reminder: *Kal* aapka appointment hai!\n\n` +
        `📅 *Date:* ${appointmentDate}\n` +
        `⏰ *Time:* ${appointmentTime}\n` +
        `🏥 Orchid Medical Centre, HB Road, Ranchi\n` +
        `📍 ${mapsLink}\n\n` +
        `Koi sawaal ho toh reply karein.\n` +
        `— Dr. Akhilesh Yadav Team`
      );

    case "follow_up":
      return (
        `Namaskar ${patientName} ji 🙏\n\n` +
        `Umeed hai aap ab theek feel kar rahe hain!\n\n` +
        `Koi takleef ho ya dobara jaanch karwani ho, toh hum yahaan hain:\n` +
        `📞 ${DOCTOR.phone}\n` +
        `🌐 https://drakhileshgastro.com/book\n\n` +
        `Aur agar experience achha raha, toh Google Review zaroor dein:\n` +
        `⭐ ${reviewLink}\n\n` +
        `— Dr. Akhilesh Yadav Team`
      );

    case "review":
      return (
        `Namaskar ${patientName} ji 🙏\n\n` +
        `Umeed hai aap bilkul theek hain!\n\n` +
        `Agar hamare clinic mein aapka experience achha raha, toh please Google Review dein — isse aur mareezon ko sahi doctor dhundhne mein madad milti hai:\n\n` +
        `⭐ ${reviewLink}\n\n` +
        `Bahut bahut shukriya!\n` +
        `— Dr. Akhilesh Yadav Team`
      );

    case "raw":
      return params.rawMessage ?? "";

    case "clinic_alert":
      return (
        `🔔 *New Appointment Request*\n\n` +
        `👤 *Patient:* ${patientName}\n` +
        `📞 *Phone:* +91${params.to.replace(/^91/, "")}\n` +
        `🩺 *Condition:* ${condition || "Not specified"}\n` +
        `📅 *Preferred Date:* ${appointmentDate || "Not specified"}\n` +
        `⏰ *Time Slot:* ${preferredTime || "Not specified"}\n` +
        `🏙️ *City:* ${patientCity || "Not specified"}\n\n` +
        `Login to CRM → ${crmLink}`
      );

    default: // acknowledgement
      return (
        `Namaskar ${patientName} ji 🙏\n\n` +
        `Aapka appointment request *mil gaya hai!*\n\n` +
        `📋 *Request ID:* ${leadId}\n` +
        `⏳ Hamari team 2 ghante ke andar call karegi appointment confirm karne ke liye.\n\n` +
        `👨‍⚕️ *Doctor:* Dr. Akhilesh Yadav — DM Gastroenterology\n` +
        `🏥 *Clinic:* Orchid Medical Centre, HB Road, Ranchi\n\n` +
        `Kisi bhi sawaal ke liye yahan reply karein.\n` +
        `— Dr. Akhilesh Yadav Team`
      );
  }
}

async function sendToOne(phone: string, message: string): Promise<boolean> {
  if (!WA_TOKEN || !WA_PHONE_ID) return false;
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  const payload = {
    messaging_product: "whatsapp",
    recipient_type: "individual",
    to: cleanPhone,
    type: "text",
    text: { preview_url: false, body: message },
  };
  const res = await fetch(
    `https://graph.facebook.com/v18.0/${WA_PHONE_ID}/messages`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${WA_TOKEN}` },
      body: JSON.stringify(payload),
    }
  );
  return res.ok;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as SendWhatsAppParams;

    if (!WA_TOKEN || !WA_PHONE_ID) {
      console.warn("WhatsApp not configured. Set WHATSAPP_ACCESS_TOKEN and WHATSAPP_PHONE_NUMBER_ID.");
      return NextResponse.json({ success: false, reason: "WhatsApp not configured" });
    }

    const message = buildMessage(body);

    if (body.type === "clinic_alert") {
      // Send to all configured alert numbers (comma-separated)
      const alertNumbers = (process.env.WHATSAPP_ALERT_NUMBERS || "")
        .split(",")
        .map((n) => n.trim())
        .filter(Boolean);

      if (alertNumbers.length === 0) {
        console.warn("No WHATSAPP_ALERT_NUMBERS configured for clinic alerts.");
        return NextResponse.json({ success: false, reason: "No alert numbers configured" });
      }

      const results = await Promise.allSettled(
        alertNumbers.map((num) => sendToOne(num, message))
      );
      const sent = results.filter((r) => r.status === "fulfilled" && r.value).length;
      return NextResponse.json({ success: sent > 0, sent, total: alertNumbers.length });
    }

    // Single recipient
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
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${WA_TOKEN}` },
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
