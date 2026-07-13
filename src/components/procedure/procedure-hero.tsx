import Link from "next/link";
import { Clock, ShieldAlert, Award, Phone, MessageCircle } from "lucide-react";
import BookingForm from "@/components/service/booking-form";
import { DOCTOR } from "@/lib/constants";

interface ProcedureHeroProps {
  title: string;
  hindiTitle: string;
  duration: string;
  sedation: string;
  recoveryTime: string;
}

export default function ProcedureHero({
  title,
  hindiTitle,
  duration,
  sedation,
  recoveryTime,
}: ProcedureHeroProps) {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${title} ke baare me jankari chahiye.`
  )}`;

  return (
    <section className="bg-white pt-8 pb-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-sans">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/procedures" className="hover:text-primary transition-colors">Procedures</Link>
          <span>/</span>
          <span className="text-primary font-semibold">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block — Title & Trust Badges */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary-light border border-border px-3 py-1.5 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
              {title}
            </div>

            <h1 className="font-hindi text-[2.5rem] sm:text-[3rem] lg:text-[3.25rem] font-bold text-forest leading-tight">
              {title}<br />
              <span className="text-primary font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold block mt-1">
                {hindiTitle}
              </span>
            </h1>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Advanced, painless diagnostic and therapeutic endoscopic procedure performed in Ranchi by expert super-specialist Dr. Akhilesh Yadav.
            </p>

            {/* Quick badges row */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-2 bg-bg-sand border border-border rounded-xl text-xs text-forest font-sans font-bold uppercase tracking-wider shadow-xs">
                <span>⏱ Duration: {duration}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-bg-sand border border-border rounded-xl text-xs text-forest font-sans font-bold uppercase tracking-wider shadow-xs">
                <span>😴 Sedation: {sedation}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-2 bg-bg-sand border border-border rounded-xl text-xs text-forest font-sans font-bold uppercase tracking-wider shadow-xs">
                <span>🔄 Recovery: {recoveryTime}</span>
              </div>
            </div>

            {/* Emergency note / support */}
            <div className="flex items-center gap-3 text-xs text-muted font-sans pt-4">
              <span className="flex items-center gap-1"><Award size={14} className="text-primary" /> Orchid Medical Centre</span>
              <span>•</span>
              <span className="flex items-center gap-1"><ShieldAlert size={14} className="text-primary" /> Safe &amp; Sterile Equipment</span>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Phone size={14} /> Call Clinic
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
              >
                <MessageCircle size={14} /> WhatsApp Info
              </a>
            </div>
          </div>

          {/* Right Block — Booking Form */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-sm">
              <div className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1 font-sans">
                Takes less than 30 seconds
              </div>
              <h2 className="text-forest font-display font-bold text-xl mb-1">अपॉइंटमेंट बुक करें</h2>
              <p className="text-muted text-sm mb-6 font-sans">Direct procedure query · 30-minute callback</p>
              <BookingForm defaultCondition={title} compact />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
