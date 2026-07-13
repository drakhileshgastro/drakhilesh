import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface SymptomHeroProps {
  title: string;
  hindiTitle: string;
  simpleExplanation: string;
}

export default function SymptomHero({
  title,
  hindiTitle,
  simpleExplanation,
}: SymptomHeroProps) {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${title} ke baare me jankari chahiye.`
  )}`;

  return (
    <section className="bg-white pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-sans">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/symptoms" className="hover:text-primary transition-colors">Symptoms</Link>
          <span>/</span>
          <span className="text-primary font-semibold">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Content & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-light border border-border px-3 py-1.5 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
              Educational Guide
            </div>

            <h1 className="font-hindi text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] font-bold text-forest leading-tight">
              {title}<br />
              <span className="text-primary font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold block mt-1">
                {hindiTitle}
              </span>
            </h1>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              {simpleExplanation}
            </p>

            <div className="bg-primary-light/45 border border-primary-light rounded-2xl p-4 max-w-lg">
              <p className="text-xs text-forest/90 font-sans leading-relaxed font-semibold">
                ⚠️ Medical Disclaimer: This page does not diagnose or replace clinical judgment. Always consult a specialist to understand your specific digestive health.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/book"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
              >
                <Calendar size={15} /> Book Appointment
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
              >
                <MessageCircle size={14} /> WhatsApp
              </a>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Phone size={14} /> Call Now
              </a>
            </div>
          </div>

          {/* Right Column — Doctor Photo */}
          <div className="lg:col-span-5 w-full">
            <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-md mx-auto">
              <img
                src="/dr-akhilesh-improved.png"
                alt="Dr. Akhilesh Yadav"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
