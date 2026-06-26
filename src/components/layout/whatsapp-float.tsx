"use client";

import { MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function WhatsAppFloat() {
  const href = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-[88px] right-4 z-40 flex items-center gap-2 bg-whatsapp text-white pl-3 pr-4 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 group min-h-[52px]"
    >
      <MessageCircle size={22} className="flex-shrink-0" />
      <span className="text-sm font-semibold hidden sm:block">WhatsApp</span>
    </a>
  );
}
