import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import webpush from "web-push";
import { requireInternalRequest } from "@/lib/auth";

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
    const unauthorized = requireInternalRequest(req);
    if (unauthorized) return unauthorized;

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

    webpush.setVapidDetails(vapidSubject, vapidPublic, vapidPrivate);

    let sent = 0;
    const stale: string[] = [];

    for (const sub of subs) {
      try {
        await webpush.sendNotification(
          { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
          notification
        );
        sent++;
      } catch (err: unknown) {
        const status = (err as { statusCode?: number }).statusCode;
        if (status === 410 || status === 404) {
          stale.push(sub.endpoint); // Subscription expired — clean up
        }
      }
    }

    if (stale.length > 0) {
      try {
        await supabase.from("push_subscriptions").delete().in("endpoint", stale);
      } catch {}
    }

    return NextResponse.json({ success: true, sent, total: subs.length });
  } catch (err) {
    console.error("Push send error:", err);
    return NextResponse.json({ success: false });
  }
}
