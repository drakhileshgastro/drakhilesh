"use client";

import Link from "next/link";
import { Phone, MessageCircle, Calendar, Bot } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function FinalCTA() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left — CTA text */}
          <div>
            <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
              Consultation & Care
            </div>
            <h2 className="font-hindi text-[2.25rem] sm:text-[2.5rem] lg:text-[2.75rem] font-bold text-forest leading-tight mb-4">
              लक्षणों को नज़रअंदाज़ न करें।<br />
              <span className="text-primary">आज ही डॉक्टर से परामर्श लें</span>
            </h2>
            <p className="font-sans text-forest/90 text-base sm:text-lg leading-relaxed mb-6 font-semibold">
              Don't ignore symptoms that keep returning. Talk to Dr. Akhilesh today.
            </p>
            <p className="font-hindi text-muted text-sm mb-8 leading-relaxed">
              देर न करें — पेट और लीवर की गंभीर बीमारियों से बचने के लिए समय पर सुपर-स्पेशलिस्ट डॉक्टर का परामर्श आवश्यक है।
            </p>

            {/* 4 action buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link
                href="/book"
                className="flex items-center gap-4 p-4 bg-primary text-white rounded-2xl hover:bg-primary-dark transition-colors min-h-[64px] shadow-sm cursor-pointer"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                  <Calendar size={18} className="text-white" />
                </div>
                <div className="text-left font-display">
                  <div className="text-[10px] uppercase tracking-wider opacity-85">Schedule Online</div>
                  <div className="text-sm font-semibold">Book Appointment</div>
                </div>
              </Link>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 border border-primary text-primary bg-white rounded-2xl hover:bg-primary-50 transition-colors min-h-[64px] shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <MessageCircle size={18} className="text-primary" />
                </div>
                <div className="text-left font-display">
                  <div className="text-[10px] uppercase tracking-wider opacity-85">Message Us</div>
                  <div className="text-sm font-semibold">WhatsApp Directions</div>
                </div>
              </a>

              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-4 p-4 text-primary bg-white/50 hover:bg-white rounded-2xl transition-all min-h-[64px] hover:shadow-sm"
              >
                <div className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                <div className="text-left font-display">
                  <div className="text-[10px] uppercase tracking-wider opacity-85">Call Directly</div>
                  <div className="text-sm font-semibold">Call Now</div>
                </div>
              </a>

              <button
                className="flex items-center gap-4 p-4 text-forest border border-border bg-white rounded-2xl hover:border-primary transition-all min-h-[64px] shadow-sm cursor-pointer"
                onClick={() => {
                  const chatBtn = document.getElementById("chatbot-trigger");
                  if (chatBtn) chatBtn.click();
                }}
              >
                <div className="w-10 h-10 rounded-full bg-bg-sand flex items-center justify-center flex-shrink-0">
                  <Bot size={18} className="text-primary" />
                </div>
                <div className="text-left font-display">
                  <div className="text-[10px] uppercase tracking-wider opacity-85">Ask Questions</div>
                  <div className="text-sm font-semibold">AI Medical Assistant</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right — Doctor image + stats */}
          <div>
            <div className="bg-white rounded-3xl p-6 border border-border shadow-sm space-y-6">
              {/* Clinical Facility Photo */}
              <div className="aspect-[4/3] bg-primary-light rounded-2xl overflow-hidden relative shadow-sm border border-border/25">
                <img
                  src="/images/procedure-room.png"
                  alt="Orchid Medical Centre Procedure Room"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "4,000+", label: "Patients Treated" },
                  { value: "10+", label: "Years Experience" },
                  { value: "4.9 Rating", label: "Google Verified" },
                  { value: "Hindi", label: "Clear Consultation" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center border border-border rounded-xl p-4 bg-white shadow-xs">
                    <div className="text-xl font-display font-bold text-primary">{stat.value}</div>
                    <div className="text-muted text-[10px] uppercase tracking-wider font-semibold font-sans mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="text-center font-sans text-xs text-muted">
                {DOCTOR.hospital} · {DOCTOR.address}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
