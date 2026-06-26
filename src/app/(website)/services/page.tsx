import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { ALL_SERVICES } from "@/data/services-data";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Gastroenterology Services in Ranchi | Dr. Akhilesh Yadav",
  description: "Complete gastroenterology & hepatology services by Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi. Fatty liver, jaundice, endoscopy, IBS, liver disease and 15 more conditions treated.",
  alternates: { canonical: "https://drakhileshgastro.com/services" },
};

const CATEGORY_COLORS: Record<string, string> = {
  teal: "bg-teal-50 border-teal-light hover:border-teal",
  gold: "bg-gold-light border-gold/30 hover:border-gold",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-14 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-72 h-72 bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-3">All Services</p>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Gastroenterology & Hepatology Services
          </h1>
          <p className="text-gray-muted text-sm font-hindi leading-relaxed mb-6">
            पेट, लिवर और पाचन तंत्र की 15 से अधिक बीमारियों का विशेषज्ञ उपचार
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/book"
              className="px-6 py-3 bg-teal text-white font-bold text-sm rounded-xl hover:bg-teal-dark transition-colors">
              Book Appointment
            </Link>
            <a href={`tel:${DOCTOR.phone}`}
              className="flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-semibold text-sm rounded-xl hover:border-teal transition-colors">
              <Phone size={14} /> Call Now
            </a>
          </div>
        </div>
        <div className="relative h-8 bg-navy mt-8">
          <svg viewBox="0 0 1440 32" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,32 L1440,32 L1440,0 Q720,32 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">15 Conditions</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-bold mb-3">All Conditions We Treat</h2>
            <p className="text-slate text-sm max-w-lg mx-auto font-hindi">
              नीचे किसी भी बीमारी पर click करें — पूरी जानकारी और appointment का option
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ALL_SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`group rounded-2xl p-5 border transition-all duration-200 hover:shadow-md ${CATEGORY_COLORS[service.color] || CATEGORY_COLORS.teal}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm">
                    {service.emoji}
                  </div>
                  <div>
                    <h3 className="text-navy font-bold text-base leading-tight">{service.title}</h3>
                    <p className="text-gray-muted text-xs font-hindi mt-0.5">{service.titleHindi}</p>
                  </div>
                </div>
                <p className="text-slate text-xs leading-relaxed line-clamp-2 mb-4 font-hindi">
                  {service.introHi.substring(0, 100)}...
                </p>
                <div className="flex items-center gap-1 text-teal text-xs font-semibold group-hover:gap-2 transition-all">
                  जानें और appointment लें <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite border-t border-gray-light py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-navy text-2xl font-bold mb-3">अपनी समस्या बताएं — हम call करेंगे</h2>
          <p className="text-slate text-sm font-hindi mb-6">
            Dr. {DOCTOR.nameShort} की team 2 घंटे के अंदर आपको call करेगी।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/book" className="px-8 py-3.5 bg-navy text-white font-bold text-sm rounded-xl hover:bg-navy-dark transition-colors">
              Book Appointment Online
            </Link>
            <a
              href={`https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`}
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-3.5 bg-whatsapp text-white font-bold text-sm rounded-xl"
            >
              WhatsApp करें
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
