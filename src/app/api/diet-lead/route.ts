/**
 * POST /api/diet-lead
 * Captures a lead from the diet chart download form.
 *
 * Body: { name, phone, slug, condition }
 *
 * Flow:
 *  1. Validate input
 *  2. Save to gastro_leads (source = "diet_download")
 *  3. Return { success, downloadUrl } — frontend redirects/opens the diet chart
 *
 * Note: Actual PDF is served from /diet-charts/<slug>.pdf in public/ folder.
 *       Until PDFs are generated, we return a WhatsApp share URL as the download link.
 */

import { NextRequest, NextResponse } from "next/server";
import { createClient }               from "@supabase/supabase-js";

function createPublicClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
  return createClient(url, key, { auth: { persistSession: false } });
}

// WhatsApp message template for diet chart lead follow-up
function buildWaMessage(name: string, condition: string): string {
  const msg = `Namaste ${name}! Aapne *${condition} Diet Chart* download karne ki request ki hai. Dr. Akhilesh Yadav ke clinic Orchid Medical Centre, Ranchi se yeh diet chart aapko bheja ja raha hai. Appointment ke liye hume is number par call karein: ${PHONE}.`;
  return encodeURIComponent(msg);
}

const PHONE = "917491925047"; // WhatsApp number without +

// Diet chart PDF paths (add PDFs to public/diet-charts/)
const DIET_PDF_MAP: Record<string, string> = {
  "fatty-liver":       "/diet-charts/fatty-liver.pdf",
  "jaundice":          "/diet-charts/jaundice.pdf",
  "gerd":              "/diet-charts/gerd.pdf",
  "ibs":               "/diet-charts/ibs.pdf",
  "liver-cirrhosis":   "/diet-charts/liver-cirrhosis.pdf",
  "post-endoscopy":    "/diet-charts/post-endoscopy.pdf",
  "pancreatitis":      "/diet-charts/pancreatitis.pdf",
  "gallstone":         "/diet-charts/gallstone.pdf",
  "ulcerative-colitis":"/diet-charts/ulcerative-colitis.pdf",
  "liver-detox":       "/diet-charts/liver-detox.pdf",
};

export async function POST(req: NextRequest) {
  let body: { name?: string; phone?: string; slug?: string; condition?: string };
  try { body = await req.json(); }
  catch { return NextResponse.json({ success: false, error: "Invalid JSON" }, { status: 400 }); }

  const { name, phone, slug, condition } = body;

  if (!name?.trim() || !phone?.trim() || !slug?.trim()) {
    return NextResponse.json({ success: false, error: "name, phone, and slug are required" }, { status: 400 });
  }

  // Basic phone validation
  const cleanPhone = phone.replace(/\D/g, "");
  if (cleanPhone.length < 10) {
    return NextResponse.json({ success: false, error: "Enter a valid 10-digit mobile number" }, { status: 400 });
  }

  // Save lead to Supabase
  const supabase = createPublicClient();
  const { error } = await supabase.from("gastro_leads").insert({
    name:       name.trim(),
    phone:      cleanPhone.slice(-10),
    condition:  condition ?? slug,
    source:     "diet_download",
    source_url: `/diet/${slug}`,
    notes:      `Diet chart download request: ${slug}`,
    lead_score: 2,
    status:     "new",
  });

  if (error) {
    console.error("[diet-lead] Supabase error:", error);
    // Don't block download if DB write fails — still return download URL
  }

  // Determine download URL
  const pdfPath    = DIET_PDF_MAP[slug];
  const pdfExists  = Boolean(pdfPath);
  const downloadUrl = pdfExists
    ? pdfPath
    : `https://wa.me/${PHONE}?text=${buildWaMessage(name.trim(), condition ?? slug)}`;

  return NextResponse.json({
    success:     true,
    downloadUrl,
    type:        pdfExists ? "pdf" : "whatsapp",
    message:     pdfExists
      ? "Your diet chart is ready to download!"
      : "Diet chart will be sent on WhatsApp within 2 minutes.",
  });
}
