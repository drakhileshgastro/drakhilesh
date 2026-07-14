import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

const VERIFY_TOKEN = process.env.FACEBOOK_VERIFY_TOKEN;
const PAGE_ACCESS_TOKEN = process.env.FACEBOOK_PAGE_ACCESS_TOKEN;
const APP_SECRET = process.env.FACEBOOK_APP_SECRET;

// Verify Facebook signature to prevent spoofing
function verifySignature(rawBody: string, signature: string | null): boolean {
  if (!APP_SECRET) return true; // Dev mode — set FACEBOOK_APP_SECRET in production
  if (!signature) return false; // Fail closed: secret is set but no signature provided
  const expected = "sha256=" + crypto.createHmac("sha256", APP_SECRET).update(rawBody).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

// GET — Facebook webhook verification challenge
export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const mode = url.searchParams.get("hub.mode");
  const token = url.searchParams.get("hub.verify_token");
  const challenge = url.searchParams.get("hub.challenge");

  if (VERIFY_TOKEN && mode === "subscribe" && token === VERIFY_TOKEN && challenge) {
    return new NextResponse(challenge, { status: 200, headers: { "Content-Type": "text/plain" } });
  }
  return NextResponse.json({ error: "Verification failed" }, { status: 403 });
}

// POST — Facebook Lead Ad submission notification
export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.text();
    const signature = req.headers.get("x-hub-signature-256");

    if (!verifySignature(rawBody, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }

    const body = JSON.parse(rawBody);

    // Only handle Page events
    if (body.object !== "page") {
      return NextResponse.json({ status: "ignored" });
    }

    // Process all leadgen changes async (fire-and-forget style per Facebook best practice)
    processLeads(body).catch((err) => console.error("FB lead processing error:", err));

    // Respond immediately with 200 — Facebook retries if we're slow
    return NextResponse.json({ status: "ok" });
  } catch (err) {
    console.error("Facebook webhook parse error:", err);
    return NextResponse.json({ status: "error" }, { status: 200 }); // Always 200 to stop Facebook retries
  }
}

async function processLeads(body: Record<string, unknown>) {
  const entries = (body.entry as Array<{ changes?: Array<{ field: string; value: Record<string, unknown> }> }>) ?? [];

  for (const entry of entries) {
    for (const change of entry.changes ?? []) {
      if (change.field !== "leadgen") continue;

      const { leadgen_id } = change.value as { leadgen_id: string };
      if (!leadgen_id || !PAGE_ACCESS_TOKEN) continue;

      // Fetch full lead data from Facebook Graph API
      const graphRes = await fetch(
        `https://graph.facebook.com/v18.0/${leadgen_id}?fields=field_data,created_time,form_id&access_token=${PAGE_ACCESS_TOKEN}`
      );
      const leadData = await graphRes.json();

      if (!leadData.field_data || leadData.error) {
        console.error("Facebook Graph API error:", leadData.error);
        continue;
      }

      // Parse field_data into a flat object
      // Facebook field names vary by form — we handle common variants
      const fields: Record<string, string> = {};
      for (const field of leadData.field_data as Array<{ name: string; values: string[] }>) {
        fields[field.name.toLowerCase().replace(/[\s-]/g, "_")] = field.values?.[0] ?? "";
      }

      const patient_name =
        fields.full_name ||
        fields.name ||
        `${fields.first_name ?? ""} ${fields.last_name ?? ""}`.trim() ||
        "Facebook Lead";

      const patient_phone =
        fields.phone_number ||
        fields.phone ||
        fields.mobile_number ||
        fields.mobile ||
        "";

      const patient_city =
        fields.city ||
        fields.location ||
        fields.state ||
        "Ranchi";

      const condition =
        fields.condition ||
        fields.medical_condition ||
        fields.problem ||
        fields.issue ||
        fields.reason ||
        "General Consultation";

      if (!patient_phone) {
        console.warn("Facebook lead missing phone:", leadgen_id);
        continue;
      }

      // Insert via our standard leads API (handles WhatsApp notification + clinic alert)
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://drakhileshgastro.com";
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          patient_name,
          patient_phone: patient_phone.replace(/[^0-9]/g, "").slice(-10), // Last 10 digits
          patient_city,
          condition,
          source: "Facebook",
        }),
      });

      if (!res.ok) {
        console.error("Failed to create Facebook lead:", await res.text());
      }
    }
  }
}
