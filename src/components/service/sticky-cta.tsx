"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/cn";

interface StickyCTAProps {
  title: string;
}

export default function StickyCTA({ title }: StickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${title} ke baare me Dr. Akhilesh Yadav se consult karna hai.`
  )}`;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border/80 shadow-md py-3.5 transition-all duration-300 transform hidden sm:block",
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Left Info */}
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          <div>
            <p className="text-forest font-sans font-bold text-sm leading-none">{title}</p>
            <p className="text-muted text-[10px] uppercase font-bold tracking-wider font-sans mt-1.5">
              Specialist Consultation
            </p>
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2.5 font-sans">
          <a
            href={`tel:${DOCTOR.phone}`}
            className="flex items-center justify-center gap-1.5 px-4 h-10 text-primary hover:bg-primary-50 border border-border/80 bg-white text-xs font-bold rounded-xl transition-all shadow-2xs"
          >
            <Phone size={13} />
            Call Now
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 px-4 h-10 text-primary hover:bg-primary-50 border border-border/80 bg-white text-xs font-bold rounded-xl transition-all shadow-2xs"
          >
            <MessageCircle size={13} />
            WhatsApp
          </a>
          <Link
            href="/book"
            className="flex items-center justify-center gap-1.5 px-5 h-10 bg-primary text-white text-xs font-bold rounded-xl hover:bg-primary-dark transition-all shadow-xs"
          >
            <Calendar size={13} />
            Book Slot
          </Link>
        </div>

      </div>
    </div>
  );
}
