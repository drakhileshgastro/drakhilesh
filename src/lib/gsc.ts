/**
 * Google Search Console API client
 * Uses service account JWT auth — no external packages required.
 * Requires env var: GOOGLE_SERVICE_ACCOUNT_KEY (JSON string)
 *
 * Setup:
 *  1. Create a service account in Google Cloud Console
 *  2. Enable Search Console API
 *  3. Add service account email as "Owner" in GSC property settings
 *  4. Download JSON key → paste full JSON as GOOGLE_SERVICE_ACCOUNT_KEY env var
 */

interface ServiceAccountKey {
  client_email: string;
  private_key: string;
  private_key_id: string;
  project_id: string;
}

interface GscRow {
  keys: string[];     // [query, page, date, country, device] based on dimensions
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
}

interface GscResponse {
  rows?: GscRow[];
  responseAggregationType?: string;
  error?: { message: string; code: number };
}

export interface GscRecord {
  keyword: string;
  url: string;
  date: string;       // "YYYY-MM-DD"
  clicks: number;
  impressions: number;
  ctr: number;
  position: number;
  country: string;
  device: string;
}

// ─── JWT helpers (Web Crypto API — Node.js 18+) ───────────────────────────

function base64urlEncode(data: Uint8Array | string): string {
  const bytes =
    typeof data === "string"
      ? new TextEncoder().encode(data)
      : data;
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}

async function signRS256(data: string, pemKey: string): Promise<string> {
  // Strip PEM headers and decode base64
  const raw = pemKey
    .replace(/-----BEGIN PRIVATE KEY-----/, "")
    .replace(/-----END PRIVATE KEY-----/, "")
    .replace(/\s/g, "");
  const binaryKey = Uint8Array.from(atob(raw), (c) => c.charCodeAt(0));

  const cryptoKey = await crypto.subtle.importKey(
    "pkcs8",
    binaryKey,
    { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign(
    "RSASSA-PKCS1-v1_5",
    cryptoKey,
    new TextEncoder().encode(data)
  );

  return base64urlEncode(new Uint8Array(signature));
}

async function getAccessToken(sa: ServiceAccountKey): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const expiry = now + 3600;

  const header = base64urlEncode(
    JSON.stringify({ alg: "RS256", typ: "JWT", kid: sa.private_key_id })
  );
  const payload = base64urlEncode(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/webmasters.readonly",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: expiry,
    })
  );

  const signInput = `${header}.${payload}`;
  const sig = await signRS256(signInput, sa.private_key);
  const jwt = `${signInput}.${sig}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GSC token error ${res.status}: ${text}`);
  }

  const { access_token } = (await res.json()) as { access_token: string };
  return access_token;
}

// ─── GSC API calls ────────────────────────────────────────────────────────

const GSC_SITE = "https://drakhileshgastro.com/";
const GSC_API  = `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(GSC_SITE)}/searchAnalytics/query`;

/**
 * Fetch GSC search analytics for a date range.
 * Returns up to 25,000 rows (GSC hard limit per request).
 *
 * @param startDate "YYYY-MM-DD"
 * @param endDate   "YYYY-MM-DD"
 */
export async function fetchGscData(
  startDate: string,
  endDate: string
): Promise<GscRecord[]> {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
  if (!raw) throw new Error("GOOGLE_SERVICE_ACCOUNT_KEY env var not set");

  const sa: ServiceAccountKey = JSON.parse(raw);
  const token = await getAccessToken(sa);

  const body = {
    startDate,
    endDate,
    dimensions: ["query", "page", "date", "country", "device"],
    rowLimit: 25000,
    dataState: "final",
  };

  const res = await fetch(GSC_API, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GSC API error ${res.status}: ${text}`);
  }

  const json: GscResponse = await res.json();

  if (json.error) {
    throw new Error(`GSC API error: ${json.error.message}`);
  }

  return (json.rows ?? []).map((row) => {
    const [keyword, rawUrl, date, country, device] = row.keys;
    // Convert absolute URL to path: "https://drakhileshgastro.com/blog/foo" → "/blog/foo"
    const url = rawUrl.startsWith("https://drakhileshgastro.com")
      ? rawUrl.replace("https://drakhileshgastro.com", "") || "/"
      : rawUrl;

    return {
      keyword:     keyword ?? "",
      url,
      date,
      clicks:      row.clicks ?? 0,
      impressions: row.impressions ?? 0,
      ctr:         row.ctr ?? 0,
      position:    row.position ?? 0,
      country:     country ?? "ind",
      device:      device ?? "DESKTOP",
    };
  });
}

/**
 * Fetch site-level summary (top pages and total traffic).
 * Used by admin dashboard hero stats.
 */
export async function fetchGscSiteSummary(days = 28): Promise<{
  totalClicks: number;
  totalImpressions: number;
  avgPosition: number;
  avgCtr: number;
}> {
  const end   = new Date();
  const start = new Date(end.getTime() - days * 24 * 60 * 60 * 1000);
  const fmt   = (d: Date) => d.toISOString().slice(0, 10);

  const rows = await fetchGscData(fmt(start), fmt(end));

  const totalClicks      = rows.reduce((s, r) => s + r.clicks, 0);
  const totalImpressions = rows.reduce((s, r) => s + r.impressions, 0);
  const avgCtr           = totalImpressions > 0 ? totalClicks / totalImpressions : 0;
  const avgPosition      = rows.length > 0
    ? rows.reduce((s, r) => s + r.position, 0) / rows.length
    : 0;

  return {
    totalClicks,
    totalImpressions,
    avgPosition: Math.round(avgPosition * 10) / 10,
    avgCtr:      Math.round(avgCtr * 10000) / 10000,
  };
}
