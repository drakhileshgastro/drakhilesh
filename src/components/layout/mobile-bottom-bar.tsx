"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar, Bot } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function MobileBottomBar() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-[0_-4px_16px_rgba(0,0,0,0.08)] pb-safe">
      <div className="grid grid-cols-4 h-16">
        <a
          href={`tel:${DOCTOR.phone}`}
          className="flex flex-col items-center justify-center gap-1 text-forest hover:text-primary transition-colors active:bg-primary-50"
        >
          <Phone size={20} />
          <span className="text-[10px] font-medium">Call</span>
        </a>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-whatsapp hover:text-green-600 transition-colors active:bg-green-50"
        >
          <MessageCircle size={20} />
          <span className="text-[10px] font-medium">WhatsApp</span>
        </a>
        <Link
          href="/book"
          className="flex flex-col items-center justify-center gap-1 bg-accent text-forest"
        >
          <Calendar size={20} />
          <span className="text-[10px] font-extrabold">Appointment</span>
        </Link>
        <button
          className="flex flex-col items-center justify-center gap-1 text-forest hover:text-primary transition-colors active:bg-primary-50"
          onClick={() => {
            const chatBtn = document.getElementById("chatbot-trigger");
            if (chatBtn) chatBtn.click();
          }}
        >
          <Bot size={20} />
          <span className="text-[10px] font-medium">AI Help</span>
        </button>
      </div>
    </div>
  );
}
