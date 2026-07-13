import Link from "next/link";
import { Phone, MessageCircle, Calendar, Bot } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export default function FinalCTA() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <section className="bg-primary py-16 lg:py-24 relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left — CTA text */}
          <div>
            <h2 className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white leading-[1.3] mb-4">
              आज ही अपनी समस्या के बारे में<br />
              <span className="text-accent-light">डॉक्टर से बात करें</span>
            </h2>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-8">
              Don't ignore your digestive or liver symptoms. An early consultation with Dr. Akhilesh Yadav
              can prevent serious complications and help you recover faster.
            </p>
            <p className="font-hindi text-white/70 text-sm mb-8">
              देर न करें — पेट और लीवर की बीमारियाँ समय पर जांच से ठीक होती हैं।
            </p>

            {/* 4 action buttons */}
            <div className="grid grid-cols-2 gap-3">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 py-4 bg-accent text-white font-bold text-sm rounded-2xl hover:bg-accent-dark transition-colors min-h-[56px] shadow-lg"
              >
                <Calendar size={18} />
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-80">Schedule Your</div>
                  <div>Book Appointment</div>
                </div>
              </Link>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center justify-center gap-2 py-4 bg-white/15 text-white font-bold text-sm rounded-2xl hover:bg-white/20 transition-colors border border-white/20 min-h-[56px]"
              >
                <Phone size={18} />
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-80">Call Directly</div>
                  <div>Call Now</div>
                </div>
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-4 bg-whatsapp text-white font-bold text-sm rounded-2xl hover:opacity-90 transition-opacity min-h-[56px]"
              >
                <MessageCircle size={18} />
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-80">Message Us</div>
                  <div>WhatsApp</div>
                </div>
              </a>
              <button
                className="flex items-center justify-center gap-2 py-4 bg-white/10 text-white font-bold text-sm rounded-2xl hover:bg-white/15 transition-colors border border-white/15 min-h-[56px]"
                onClick={() => {
                  const chatBtn = document.getElementById("chatbot-trigger");
                  if (chatBtn) chatBtn.click();
                }}
              >
                <Bot size={18} />
                <div className="text-left">
                  <div className="text-[11px] font-normal opacity-80">Ask Questions</div>
                  <div>AI Assistant</div>
                </div>
              </button>
            </div>

            {/* Phone prominent */}
            <div className="mt-6 flex items-center gap-3 text-white">
              <div className="w-10 h-10 bg-white/15 rounded-xl flex items-center justify-center">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-white/70 text-xs font-hindi">अभी कॉल करें</p>
                <a href={`tel:${DOCTOR.phone}`} className="text-white font-bold text-xl hover:text-accent-light transition-colors">
                  {DOCTOR.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right — Doctor image + stats */}
          <div>
            <div className="bg-white/10 rounded-3xl p-6 border border-white/20">
              {/* Doctor photo placeholder */}
              <div className="aspect-[4/3] bg-white/10 rounded-2xl flex items-center justify-center mb-5">
                <div className="text-center">
                  <div className="text-6xl mb-2">👨‍⚕️</div>
                  <p className="text-white font-bold font-hindi">डॉ. अखिलेश यादव</p>
                  <p className="text-white/60 text-sm">DM Gastroenterology</p>
                </div>
              </div>

              {/* Quick info */}
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: "4,000+", label: "Patients Treated" },
                  { value: "10+", label: "Years Experience" },
                  { value: "4.9⭐", label: "Google Rating" },
                  { value: "Hindi", label: "Consultation" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center bg-white/10 rounded-xl p-3">
                    <div className="text-white font-bold text-lg">{stat.value}</div>
                    <div className="text-white/60 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-center">
                <p className="text-white/60 text-xs">
                  {DOCTOR.hospital} · HB Road, Ranchi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
