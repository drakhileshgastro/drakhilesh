"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { trackPhoneClick, trackWhatsAppClick, trackEvent } from "@/lib/analytics";

export default function AnalyticsProvider() {
  const pathname = usePathname();
  const depthFired = useRef<Set<number>>(new Set());

  // Reset scroll milestones on page navigation
  useEffect(() => {
    depthFired.current = new Set();
  }, [pathname]);

  // Auto-track tel: and wa.me link clicks site-wide via event delegation
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const anchor = (e.target as Element).closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href") ?? "";
      if (href.startsWith("tel:")) {
        trackPhoneClick(pathname);
      } else if (href.includes("wa.me") || href.includes("whatsapp")) {
        trackWhatsAppClick(pathname);
      }
    };
    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, [pathname]);

  // Scroll depth: fire at 25%, 50%, 75%, 90%
  useEffect(() => {
    const thresholds = [25, 50, 75, 90];
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      if (total <= window.innerHeight) return;
      const pct = Math.round((scrolled / total) * 100);
      for (const t of thresholds) {
        if (pct >= t && !depthFired.current.has(t)) {
          depthFired.current.add(t);
          trackEvent("scroll_depth", { depth: t, page: pathname });
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return null;
}
