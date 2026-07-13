"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function VisitTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Register service worker for PWA
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    }
  }, []);

  useEffect(() => {
    if (!pathname) return;
    const params = new URLSearchParams(window.location.search);
    navigator.sendBeacon(
      "/api/track",
      JSON.stringify({
        page: pathname,
        referrer: document.referrer || null,
        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
      })
    );
  }, [pathname]);

  return null;
}
