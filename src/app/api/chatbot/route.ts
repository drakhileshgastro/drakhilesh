import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { DOCTOR } from "@/lib/constants";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SYSTEM_PROMPT = `You are ${DOCTOR.name}'s virtual assistant at drakhileshgastro.com. Dr. Akhilesh is a Gastroenterologist and Hepatologist at ${DOCTOR.hospital}, HB Road, Ranchi, Jharkhand.

You help patients from Jharkhand, Bihar, and Chhattisgarh understand digestive and liver conditions and guide them to book an appointment.

Rules:
1. Respond in Hindi when the patient writes in Hindi. Use simple, conversational language — no medical jargon. For English input, respond in English.
2. Never diagnose — always say "In symptoms ke liye Dr. Akhilesh se milna zaroori hai."
3. When patient shows appointment intent (says "appointment", "book", "milna hai", "dikha na hai", etc.), gently collect their Name and Mobile Number and tell them our team will call within 2 hours.
4. Clinic hours: Mon–Sat, 10am–2pm and 5pm–8pm.
5. Appointment phone: ${DOCTOR.phone}
6. For emergencies: "Kripya turant Orchid Medical Centre ke emergency number par call karein: ${DOCTOR.phone}"
7. If asked about something outside medical / clinic scope: "Iske baare mein humari team se WhatsApp par baat karein."
8. Keep responses short and warm — 2-4 sentences max unless explaining a medical condition.
9. Never provide clinical diagnosis or specific prescriptions.
10. Always end with encouragement and a clear next action.`;

// Extract patient info from message history
function extractPatientInfo(messages: Array<{ role: string; content: string }>) {
  const text = messages.map((m) => m.content).join(" ");
  const phoneMatch = text.match(/\b[6-9]\d{9}\b/);
  const namePatterns = [
    /(?:mera naam|my name is|main|I am|I'm)\s+([A-Za-zऀ-ॿ]+(?:\s+[A-Za-zऀ-ॿ]+)?)/i,
    /([A-Za-zऀ-ॿ]{3,}\s+[A-Za-zऀ-ॿ]{3,})/,
  ];
  let name: string | null = null;
  for (const pattern of namePatterns) {
    const m = text.match(pattern);
    if (m) { name = m[1].trim(); break; }
  }
  return { phone: phoneMatch ?? null, name };
}

export async function POST(req: NextRequest) {
  try {
    const { messages, session_id } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
    }

    // Keep last 10 messages, filter to user/assistant roles only
    const history = messages
      .slice(-10)
      .filter((m: { role: string }) => m.role === "user" || m.role === "assistant");

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: history,
    });

    const reply = response.content[0].type === "text" ? response.content[0].text : "";

    // Save session to DB (best-effort, non-blocking)
    if (session_id) {
      const { name, phone } = extractPatientInfo(messages);
      const allMessages = [...messages, { role: "assistant", content: reply, ts: new Date().toISOString() }];

      supabase.from("chat_sessions").upsert({
        session_id,
        messages: allMessages,
        patient_name: name,
        patient_phone: phone,
        source: "website",
        status: phone ? "converted" : "active",
        updated_at: new Date().toISOString(),
      }, { onConflict: "session_id" }).then(({ error }) => {
        if (error && !error.message?.includes("relation")) {
          console.error("Chat session save error:", error.message);
        }
      });
    }

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chatbot API error:", err);
    return NextResponse.json(
      { reply: `Abhi chatbot unavailable hai. WhatsApp karein: wa.me/${DOCTOR.whatsappNumber}` },
      { status: 200 }
    );
  }
}
