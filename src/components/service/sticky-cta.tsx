"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface StickyCTAProps {
  title: string;
}

export default function StickyCTA({ title }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${title} ke baare me jankari chahiye.`
  )}`;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg py-4 transition-all duration-300 transform hidden sm:block",
        visible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-green-600 animate-pulse" />
          <div>
            <p className="text-forest font-sans font-bold text-sm leading-none">{title}</p>
            <p className="text-muted text-[10px] uppercase font-semibold font-sans mt-1">Specialist Consultation</p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center border border-border bg-bg-sand p-1 rounded-2xl gap-1">
          <a
            href={`tel:${DOCTOR.phone}`}
            className="flex items-center justify-center gap-1.5 px-4 h-10 text-primary text-xs font-bold hover:bg-primary-50 transition-colors bg-white border border-border rounded-xl shadow-xs"
          >
            <Phone size={13} />
            Call Now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 h-10 text-primary text-xs font-bold hover:bg-primary-50 transition-colors bg-white border border-border rounded-xl shadow-xs"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
          <Link
            href="/book"
            className="flex items-center justify-center px-4 h-10 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-dark transition-colors shadow-xs"
          >
            Book Appointment
          </Link>
        </div>

      </div>
    </div>
  );
}
