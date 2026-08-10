import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { createClient } from "@supabase/supabase-js";
import { DOCTOR } from "@/lib/constants";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const SYSTEM_PROMPT = `You are the appointment assistant for ${DOCTOR.name} at drakhileshgastro.com. ${DOCTOR.hospital}, HB Road, Ranchi, Jharkhand.

YOUR ONLY JOB is to qualify patients and book appointments. You do not discuss, explain, or advise on any medical topic whatsoever.

Rules — follow strictly:
1. Language: Reply in Hindi when the patient writes in Hindi; English for English. Warm, conversational tone.
2. Medical questions: For ANY question about symptoms, conditions, medications, tests, diet, or health — respond ONLY with: "In baaton ke liye Dr. Akhilesh se milna zaroori hai — woh aapko sahi guide karenge. Kya main aapka appointment fix kar sakta hoon?" (English version: "For this, you'll need to consult Dr. Akhilesh directly. Shall I help you book an appointment?"). Never offer any medical information.
3. Appointment intent: As soon as the patient is ready, collect their Name and Mobile Number. Confirm: "Thank you! Our team will call you within 2 hours to confirm your appointment."
4. Proactively ask: If the patient doesn't mention appointment, guide them: "Main aapke liye Dr. Akhilesh ke saath appointment book kar sakta hoon. Kya aap abhi book karna chahenge?"
5. Clinic hours: Mon–Sat, 10am–2pm and 5pm–8pm.
6. Phone: ${DOCTOR.phone}
7. Emergency: "Kripya turant ${DOCTOR.phone} par call karein."
8. Keep every response to 2–3 sentences maximum.
9. Never give clinical diagnoses, prescriptions, test interpretations, or health advice of any kind.
10. If someone insists on medical information, say: "Yeh meri capability ke bahar hai — sirf Dr. Akhilesh aapko sahi answer de sakte hain. Appointment book karein?"`;

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
