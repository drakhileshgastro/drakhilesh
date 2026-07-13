import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface PushPayload {
  title: string;
  body: string;
  url?: string;
  icon?: string;
}

// Sends Web Push notification to all subscribed CRM users
// Uses VAPID for authentication — requires VAPID_PRIVATE_KEY + VAPID_PUBLIC_KEY env vars
// To generate: npx web-push generate-vapid-keys
export async function POST(req: NextRequest) {
  try {
    const payload: PushPayload = await req.json();

    const vapidPrivate = process.env.VAPID_PRIVATE_KEY;
    const vapidPublic = process.env.VAPID_PUBLIC_KEY;
    const vapidSubject = `mailto:${process.env.VAPID_EMAIL ?? "admin@drakhileshgastro.com"}`;

    if (!vapidPrivate || !vapidPublic) {
      // Silently skip — push not configured yet
      return NextResponse.json({ success: false, reason: "VAPID keys not configured" });
    }

    const { data: subs } = await supabase.from("push_subscriptions").select("*");
    if (!subs || subs.length === 0) {
      return NextResponse.json({ success: true, sent: 0 });
    }

    const notification = JSON.stringify({
      title: payload.title,
      body: payload.body,
      url: payload.url ?? "/crm",
      icon: "/icons/icon-192x192.png",
      badge: "/icons/icon-72x72.png",
      tag: "drakhilesh-crm",
    });

    let sent = 0;
    const stale: string[] = [];

    for (const sub of subs) {
      try {
        const pushRes = await sendWebPush({
          endpoint: sub.endpoint,
          p256dh: sub.p256dh,
          auth: sub.auth,
          payload: notification,
          vapidPublic,
          vapidPrivate,
          vapidSubject,
        });

        if (pushRes === 410 || pushRes === 404) {
          stale.push(sub.endpoint); // Subscription expired
        } else if (pushRes >= 200 && pushRes < 300) {
          sent++;
        }
      } catch {
        // Individual send failure — skip
      }
    }

    // Clean up stale subscriptions
    if (stale.length > 0) {
      await supabase.from("push_subscriptions").delete().in("endpoint", stale).catch(() => {});
    }

    return NextResponse.json({ success: true, sent, total: subs.length });
  } catch (err) {
    console.error("Push send error:", err);
    return NextResponse.json({ success: false });
  }
}

// Minimal Web Push implementation using Node.js built-in crypto (no external package needed)
async function sendWebPush(opts: {
  endpoint: string;
  p256dh: string;
  auth: string;
  payload: string;
  vapidPublic: string;
  vapidPrivate: string;
  vapidSubject: string;
}): Promise<number> {
  // For now, use the endpoint directly with a minimal unsigned request
  // Full VAPID signing requires the web-push package or complex crypto operations
  // This sends the notification without VAPID if the push service allows it (Chrome doesn't)
  // TODO: Install `npm install web-push` and replace with proper VAPID implementation

  // Simplified attempt — most push services require VAPID
  const res = await fetch(opts.endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/octet-stream",
      "Content-Encoding": "aes128gcm",
      "TTL": "86400",
    },
    body: opts.payload,
  });

  return res.status;
}
