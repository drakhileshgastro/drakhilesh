"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, MessageCircle, Calendar, Bot } from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import { trackPhoneClick, trackWhatsAppClick } from "@/lib/analytics";

export default function MobileBottomBar() {
  const pathname = usePathname();
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  const handlePhoneClick = () => {
    trackPhoneClick(pathname || "mobile_bottom_bar");
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick(pathname || "mobile_bottom_bar");
  };

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-[0_-6px_20px_rgba(0,0,0,0.12)] pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-4 h-16 max-w-md mx-auto">
        {/* Instant Phone Call */}
        <a
          href={`tel:${DOCTOR.phone.replace(/\s+/g, "")}`}
          onClick={handlePhoneClick}
          className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-emerald-700 active:bg-emerald-50 transition-colors"
          aria-label="Call Dr. Akhilesh Yadav OPD Clinic"
        >
          <div className="relative">
            <Phone size={19} className="text-emerald-600" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </div>
          <span className="text-[11px] font-semibold tracking-tight">Call OPD</span>
        </a>

        {/* WhatsApp Direct Consultation */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleWhatsAppClick}
          className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-emerald-600 active:bg-emerald-50 transition-colors"
          aria-label="WhatsApp Dr. Akhilesh Yadav"
        >
          <MessageCircle size={19} className="text-[#25D366]" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Appointment CTA */}
        <Link
          href="/book"
          className="flex flex-col items-center justify-center gap-1 bg-gradient-to-r from-emerald-600 to-teal-700 text-white shadow-sm active:opacity-90 transition-opacity"
          aria-label="Book Appointment"
        >
          <Calendar size={18} className="text-white" />
          <span className="text-[11px] font-bold tracking-tight">Book Slot</span>
        </Link>

        {/* AI Medical Assistant */}
        <button
          type="button"
          className="flex flex-col items-center justify-center gap-1 text-slate-700 hover:text-emerald-700 active:bg-slate-100 transition-colors"
          onClick={() => {
            const chatBtn = document.getElementById("chatbot-trigger");
            if (chatBtn) chatBtn.click();
          }}
          aria-label="Open AI Health Assistant"
        >
          <Bot size={19} className="text-slate-600" />
          <span className="text-[11px] font-medium tracking-tight">AI Help</span>
        </button>
      </div>
    </div>
  );
}
