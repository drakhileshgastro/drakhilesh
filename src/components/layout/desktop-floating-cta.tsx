"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function DesktopFloatingCTA() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <div className="hidden lg:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-white/95 backdrop-blur-md border border-border p-2.5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      
      {/* Call Now */}
      <a
        href={`tel:${DOCTOR.phone}`}
        className="flex items-center gap-1.5 px-4 h-11 border border-border hover:border-primary text-forest hover:text-primary transition-all text-xs font-bold bg-bg-sand/30 rounded-xl"
        title="Call Doctor"
      >
        <Phone size={14} className="text-primary" />
        <span>Call</span>
      </a>

      {/* WhatsApp */}
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 px-4 h-11 border border-border hover:border-green-600 text-forest hover:text-green-600 transition-all text-xs font-bold bg-bg-sand/30 rounded-xl"
        title="WhatsApp Consultation"
      >
        <MessageCircle size={14} className="text-whatsapp" />
        <span>WhatsApp</span>
      </a>

      {/* Book Appointment CTA */}
      <Link
        href="/book"
        className="flex items-center gap-1.5 px-5 h-11 bg-primary text-white hover:bg-primary-dark transition-all text-xs font-bold rounded-xl shadow-xs"
      >
        <Calendar size={14} />
        <span>Book Appointment</span>
      </Link>

    </div>
  );
}
