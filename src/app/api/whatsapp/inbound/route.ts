import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { DOCTOR } from "@/lib/constants";

const VERIFY_TOKEN = process.env.FACEBOOK_VERIFY_TOKEN ?? "drakhilesh_fb_verify_2024";
const WA_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN;
const WA_PHONE_ID = process.env.WHATSAPP_PHONE_NUMBER_ID;

const anthropic = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// GET — WhatsApp webhook verification (same verify token as Facebook)
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN && challenge) {
    return new NextResponse(challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }
  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

// POST — Inbound WhatsApp message handler
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (body.object !== "whatsapp_business_account") {
      return NextResponse.json({ status: "ignored" });
    }

    processMessages(body).catch((err) => console.error("WA inbound processing error:", err));
    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("WA inbound parse error:", err);
    return NextResponse.json({ status: "error" }, { status: 200 });
  }
}

async function sendReply(to: string, message: string) {
  if (!WA_TOKEN || !WA_PHONE_ID) return;
  await fetch(`https://graph.facebook.com/v18.0/${WA_PHONE_ID}/messages`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${WA_TOKEN}` },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to: to.replace(/[^0-9]/g, ""),
      type: "text",
      text: { body: message },
    }),
  });
}

async function getOrCreateSession(phone: string): Promise<{ session_id: string; messages: Array<{ role: string; content: string }> }> {
  const { data } = await supabase
    .from("chat_sessions")
    .select("session_id, messages")
    .eq("patient_phone", phone)
    .eq("source", "whatsapp")
    .eq("status", "active")
    .order("updated_at", { ascending: false })
    .limit(1)
    .single();

  if (data) return { session_id: data.session_id, messages: data.messages ?? [] };

  const session_id = crypto.randomUUID();
  try {
    await supabase.from("chat_sessions").insert([{
      session_id,
      patient_phone: phone,
      source: "whatsapp",
      status: "active",
      messages: [],
    }]);
  } catch {} // Silent if table doesn't exist yet

  return { session_id, messages: [] };
}

async function processMessages(body: Record<string, unknown>) {
  const entries = (body.entry as Array<{ changes: Array<{ value: Record<string, unknown> }> }>) ?? [];

  for (const entry of entries) {
    for (const change of entry.changes ?? []) {
      const value = change.value;
      const messages = (value.messages as Array<{ from: string; type: string; text?: { body: string }; id: string }>) ?? [];

      for (const msg of messages) {
        if (msg.type !== "text" || !msg.text?.body) continue;

        const phone = msg.from; // e.g. "919876543210"
        const userText = msg.text.body.trim();
        const lower = userText.toLowerCase();

        // ── Patient Portal Keywords ─────────────────────────────
        if (lower === "status" || lower === "appointment" || lower === "my appointment") {
          const shortPhone = phone.slice(-10);
          const { data: lead } = await supabase
            .from("gastro_leads")
            .select("patient_name, status, confirmed_datetime, condition")
            .eq("patient_phone", shortPhone)
            .order("created_at", { ascending: false })
            .limit(1)
            .single();

          if (!lead) {
            await sendReply(phone,
              `Namaskar! 🙏 Aapka koi appointment record nahi mila.\n\nAppointment book karne ke liye:\n📞 Call: ${DOCTOR.phone}\n🌐 Website: https://drakhileshgastro.com/book`
            );
          } else {
            const statusEmoji: Record<string, string> = {
              New: "🆕", Called: "📞", Confirmed: "✅", Visited: "🏥", "No-answer": "❌", "Follow-up": "🔔",
            };
            const emoji = statusEmoji[lead.status] ?? "📋";
            let reply = `Namaskar ${lead.patient_name} ji! 🙏\n\n${emoji} *Appointment Status:* ${lead.status}\n🩺 *Condition:* ${lead.condition}`;
            if (lead.confirmed_datetime) {
              const d = new Date(lead.confirmed_datetime).toLocaleDateString("en-IN", {
                weekday: "short", day: "numeric", month: "short", hour: "2-digit", minute: "2-digit",
                timeZone: "Asia/Kolkata",
              });
              reply += `\n📅 *Date/Time:* ${d}`;
            }
            reply += `\n\nKoi sawaal ho toh yahan reply karein ya call karein: ${DOCTOR.phone}`;
            await sendReply(phone, reply);
          }
          continue;
        }

        if (lower === "help" || lower === "menu" || lower === "hi" || lower === "hello" || lower === "namaskar") {
          await sendReply(phone,
            `Namaskar! 🙏 Dr. Akhilesh Yadav ke clinic mein aapka swagat hai!\n\n` +
            `Aap kya jaanna chahte hain?\n\n` +
            `1️⃣ *status* — Apna appointment status jaanein\n` +
            `2️⃣ Koi bhi sawaal poochein (Hindi ya English)\n` +
            `3️⃣ Appointment book karein\n\n` +
            `📞 Direct call: ${DOCTOR.phone}\n` +
            `🌐 Book online: https://drakhileshgastro.com/book`
          );
          continue;
        }

        // ── AI Medical Assistant ────────────────────────────────
        const { session_id, messages: history } = await getOrCreateSession(phone);

        const updatedHistory = [
          ...history.slice(-8),
          { role: "user", content: userText },
        ];

        const aiResponse = await anthropic.messages.create({
          model: "claude-sonnet-4-6",
          max_tokens: 250,
          system: `Aap Dr. Akhilesh Yadav ke WhatsApp assistant hain. ${DOCTOR.name} ek DM Gastroenterologist hain at ${DOCTOR.hospital}, HB Road, Ranchi.
Rules:
1. Short reply dein — 3-4 sentences max.
2. Hindi mein baat karein jab patient Hindi mein likhe.
3. Kabhi diagnosis mat karein — "Doctor se milein" kehein.
4. Appointment ke liye: https://drakhileshgastro.com/book ya call ${DOCTOR.phone}
5. Clinic timing: Mon-Sat, 10am-2pm aur 5pm-8pm.`,
          messages: updatedHistory.filter((m) => m.role === "user" || m.role === "assistant") as Array<{ role: "user" | "assistant"; content: string }>,
        });

        const reply = aiResponse.content[0].type === "text" ? aiResponse.content[0].text : "";
        await sendReply(phone, reply);

        // Save session
        const allMessages = [...updatedHistory, { role: "assistant", content: reply }];
        try {
          await supabase.from("chat_sessions").upsert({
            session_id,
            patient_phone: phone.slice(-10),
            messages: allMessages,
            source: "whatsapp",
            status: "active",
            updated_at: new Date().toISOString(),
          }, { onConflict: "session_id" });
        } catch {}
      }
    }
  }
}
