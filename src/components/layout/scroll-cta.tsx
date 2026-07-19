"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Calendar, Phone } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function ScrollCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed || sessionStorage.getItem("scroll-cta-dismissed")) return;

    function onScroll() {
      const scrollRatio = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollRatio > 0.6) setShow(true);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  function dismiss() {
    setDismissed(true);
    setShow(false);
    sessionStorage.setItem("scroll-cta-dismissed", "1");
  }

  if (!show || dismissed) return null;

  return (
    <div className="fixed bottom-24 right-3 lg:bottom-8 lg:right-6 z-40 w-[260px] animate-in slide-in-from-right-4 duration-300">
      <div className="bg-white border border-primary/25 rounded-2xl shadow-xl p-4 relative">
        <button
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute -top-2 -right-2 w-6 h-6 bg-white border border-border/60 rounded-full flex items-center justify-center text-muted hover:text-forest transition-colors shadow-sm"
        >
          <X size={11} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-2.5 mb-3">
          <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
            <Calendar size={16} className="text-primary" />
          </div>
          <div>
            <p className="text-forest font-display font-bold text-sm leading-tight">Book Appointment</p>
            <p className="text-[10px] text-muted font-hindi mt-0.5">Free callback · 2 घंटे में</p>
          </div>
        </div>

        {/* Availability */}
        <div className="bg-primary-50/30 rounded-xl px-3 py-2 mb-3">
          <p className="text-[10px] text-forest font-sans font-semibold">
            📍 Orchid Medical Centre, Ranchi
          </p>
          <p className="text-[10px] text-muted font-sans mt-0.5">Mon – Sat · 10am – 8pm</p>
        </div>

        {/* CTAs */}
        <div className="space-y-2">
          <Link
            href="/book"
            className="flex items-center justify-center w-full h-9 bg-primary text-white font-display font-semibold text-[11px] uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors"
          >
            Book Online
          </Link>
          <a
            href={`tel:${DOCTOR.phone}`}
            className="flex items-center justify-center gap-1.5 w-full h-9 border border-primary/30 text-primary font-display font-semibold text-[11px] uppercase tracking-wider rounded-xl hover:bg-primary-50 transition-colors"
          >
            <Phone size={11} /> Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
