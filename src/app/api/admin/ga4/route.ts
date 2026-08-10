/**
 * GET /api/admin/ga4
 * Fetches real GA4 data via Google Analytics Data API v1beta.
 *
 * Setup:
 *  - Uses same GOOGLE_SERVICE_ACCOUNT_KEY as GSC (JSON string)
 *  - Requires GA4_PROPERTY_ID env var (numeric, e.g. "123456789")
 *    Find it: GA4 Admin → Property settings → Property ID
 *  - Grant the service account "Viewer" access in GA4:
 *    GA4 Admin → Account Access Management → Add user (service account email)
 *
 * Query params:
 *  ?days=28         — lookback window (default 28)
 *  ?report=summary  — site summary (sessions, users, pageviews)
 *  ?report=pages    — top pages by sessions
 *  ?report=devices  — device breakdown
 *  ?report=sources  — traffic sources / channels
 *  ?report=cities   — top cities
 */

import { NextRequest, NextResponse } from "next/server";
import { createAdminClient } from "@/lib/supabase-admin";

// ── JWT / OAuth helpers (re-uses pattern from gsc.ts) ───────────────────────

interface ServiceAccountKey {
  type: string;
  project_id: string;
  private_key_id: string;
  private_key: string;
  client_email: string;
  token_uri: string;
}

function b64url(buf: ArrayBuffer): string {
  const arr = new Uint8Array(buf);
  let str = "";
  for (const byte of arr) str += String.fromCharCode(byte);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

async function signRS256(data: string, pemKey: string): Promise<string> {
  const pem    = pemKey.replace(/-----[^-]+-----/g, "").replace(/\s/g, "");
  const der    = Uint8Array.from(atob(pem), c => c.charCodeAt(0));
  const key    = await crypto.subtle.importKey("pkcs8", der.buffer, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const enc    = new TextEncoder();
  const sigBuf = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, enc.encode(data));
  return b64url(sigBuf);
}

async function getGA4AccessToken(sa: ServiceAccountKey): Promise<string> {
  const now  = Math.floor(Date.now() / 1000);
  const header  = b64url(new TextEncoder().encode(JSON.stringify({ alg: "RS256", typ: "JWT" })).buffer);
  const payload = b64url(new TextEncoder().encode(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly",
    aud: sa.token_uri,
    exp: now + 3600,
    iat: now,
  })).buffer);
  const sig = await signRS256(`${header}.${payload}`, sa.private_key);
  const jwt = `${header}.${payload}.${sig}`;

  const res = await fetch(sa.token_uri, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }),
  });
  const json = await res.json();
  if (!json.access_token) throw new Error("GA4 token error: " + JSON.stringify(json));
  return json.access_token;
}

// ── GA4 Data API helper ───────────────────────────────────────────────────────

async function runGA4Report(
  token: string,
  propertyId: string,
  body: Record<string, unknown>
): Promise<Record<string, unknown>> {
  const res = await fetch(
    `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );
  if (!res.ok) {
    const err = await res.text();
    throw new Error(`GA4 API ${res.status}: ${err}`);
  }
  return res.json();
}

function dateRange(days: number) {
  const end   = new Date();
  const start = new Date(end.getTime() - days * 86_400_000);
  const fmt   = (d: Date) => d.toISOString().slice(0, 10);
  return { startDate: fmt(start), endDate: fmt(end) };
}

// ── Route handler ──────────────────────────────────────────────────────────────

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const days   = Math.max(1, Math.min(365, parseInt(searchParams.get("days") ?? "28")));
  const report = searchParams.get("report") ?? "summary";

  // Auth check
  const supabase = createAdminClient();
  const { data: { user } } = await supabase.auth.getUser(
    req.headers.get("authorization")?.replace("Bearer ", "") ?? ""
  );
  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  // Check env vars
  const saRaw        = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  const propertyId   = process.env.GA4_PROPERTY_ID;
  if (!saRaw || !propertyId) {
    return NextResponse.json({
      success: false,
      error: "GA4 not configured",
      setup: [
        "Add GOOGLE_SERVICE_ACCOUNT_KEY (same JSON as GSC service account)",
        "Add GA4_PROPERTY_ID (numeric, found in GA4 Admin → Property settings)",
        "Grant service account email 'Viewer' role in GA4 Admin → Account Access",
      ],
    }, { status: 200 }); // 200 so frontend shows setup message, not error
  }

  let sa: ServiceAccountKey;
  try { sa = JSON.parse(saRaw); }
  catch { return NextResponse.json({ success: false, error: "Invalid GOOGLE_SERVICE_ACCOUNT_KEY JSON" }, { status: 500 }); }

  const dr = dateRange(days);

  try {
    const token = await getGA4AccessToken(sa);

    if (report === "summary") {
      const data = await runGA4Report(token, propertyId, {
        dateRanges: [dr],
        metrics: [
          { name: "sessions" },
          { name: "totalUsers" },
          { name: "screenPageViews" },
          { name: "averageSessionDuration" },
          { name: "bounceRate" },
          { name: "newUsers" },
        ],
      }) as { rows?: Array<{ metricValues: Array<{ value: string }> }> };

      const row = data.rows?.[0]?.metricValues ?? [];
      return NextResponse.json({
        success: true,
        report: "summary",
        days,
        data: {
          sessions:            parseInt(row[0]?.value ?? "0"),
          totalUsers:          parseInt(row[1]?.value ?? "0"),
          pageviews:           parseInt(row[2]?.value ?? "0"),
          avgSessionDurationS: parseFloat(row[3]?.value ?? "0"),
          bounceRate:          parseFloat(row[4]?.value ?? "0"),
          newUsers:            parseInt(row[5]?.value ?? "0"),
        },
      });
    }

    if (report === "pages") {
      const data = await runGA4Report(token, propertyId, {
        dateRanges: [dr],
        dimensions: [{ name: "pagePath" }, { name: "pageTitle" }],
        metrics:    [{ name: "sessions" }, { name: "screenPageViews" }, { name: "averageSessionDuration" }],
        orderBys:   [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 20,
      }) as { rows?: Array<{ dimensionValues: Array<{ value: string }>; metricValues: Array<{ value: string }> }> };

      return NextResponse.json({
        success: true,
        report: "pages",
        days,
        data: (data.rows ?? []).map(r => ({
          path:     r.dimensionValues[0].value,
          title:    r.dimensionValues[1].value,
          sessions: parseInt(r.metricValues[0].value),
          views:    parseInt(r.metricValues[1].value),
          avgDur:   parseFloat(r.metricValues[2].value),
        })),
      });
    }

    if (report === "devices") {
      const data = await runGA4Report(token, propertyId, {
        dateRanges: [dr],
        dimensions: [{ name: "deviceCategory" }],
        metrics:    [{ name: "sessions" }, { name: "totalUsers" }],
        orderBys:   [{ metric: { metricName: "sessions" }, desc: true }],
      }) as { rows?: Array<{ dimensionValues: Array<{ value: string }>; metricValues: Array<{ value: string }> }> };

      return NextResponse.json({
        success: true,
        report: "devices",
        days,
        data: (data.rows ?? []).map(r => ({
          device:   r.dimensionValues[0].value,
          sessions: parseInt(r.metricValues[0].value),
          users:    parseInt(r.metricValues[1].value),
        })),
      });
    }

    if (report === "sources") {
      const data = await runGA4Report(token, propertyId, {
        dateRanges: [dr],
        dimensions: [{ name: "sessionDefaultChannelGroup" }],
        metrics:    [{ name: "sessions" }, { name: "totalUsers" }, { name: "conversions" }],
        orderBys:   [{ metric: { metricName: "sessions" }, desc: true }],
      }) as { rows?: Array<{ dimensionValues: Array<{ value: string }>; metricValues: Array<{ value: string }> }> };

      return NextResponse.json({
        success: true,
        report: "sources",
        days,
        data: (data.rows ?? []).map(r => ({
          channel:     r.dimensionValues[0].value,
          sessions:    parseInt(r.metricValues[0].value),
          users:       parseInt(r.metricValues[1].value),
          conversions: parseInt(r.metricValues[2].value),
        })),
      });
    }

    if (report === "cities") {
      const data = await runGA4Report(token, propertyId, {
        dateRanges: [dr],
        dimensions: [{ name: "city" }, { name: "region" }],
        metrics:    [{ name: "sessions" }, { name: "totalUsers" }],
        orderBys:   [{ metric: { metricName: "sessions" }, desc: true }],
        limit: 15,
      }) as { rows?: Array<{ dimensionValues: Array<{ value: string }>; metricValues: Array<{ value: string }> }> };

      return NextResponse.json({
        success: true,
        report: "cities",
        days,
        data: (data.rows ?? []).map(r => ({
          city:     r.dimensionValues[0].value,
          region:   r.dimensionValues[1].value,
          sessions: parseInt(r.metricValues[0].value),
          users:    parseInt(r.metricValues[1].value),
        })),
      });
    }

    return NextResponse.json({ success: false, error: `Unknown report type: ${report}` }, { status: 400 });

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ success: false, error: msg }, { status: 500 });
  }
}
