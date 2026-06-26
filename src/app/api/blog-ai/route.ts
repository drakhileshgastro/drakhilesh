import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { DOCTOR } from "@/lib/constants";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { topic } = await req.json();

    if (!topic) return NextResponse.json({ error: "Topic required" }, { status: 400 });

    const response = await client.messages.create({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{
        role: "user",
        content: `Write a 400-word Hindi health blog post about: "${topic}"

Author: ${DOCTOR.name}, Gastroenterologist at ${DOCTOR.hospital}, Ranchi

Requirements:
- Write in natural, conversational Hindi (not translated English)
- Target audience: rural patients from Jharkhand/Bihar with little medical knowledge
- Start with "यह article..." or a patient scenario
- Include: causes, symptoms, treatment in simple words
- End with: "Ranchi mein appointment ke liye call karein: ${DOCTOR.phone}"
- Format: plain text with Hindi headings starting with ✅ or ❌ or 💊
- No markdown, no asterisks — plain readable text`
      }]
    });

    const draft = response.content[0].type === "text" ? response.content[0].text : "";
    return NextResponse.json({ draft });
  } catch (err) {
    console.error("Blog AI error:", err);
    return NextResponse.json({ error: "AI unavailable" }, { status: 500 });
  }
}
