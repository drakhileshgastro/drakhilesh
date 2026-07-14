import Link from "next/link";
import { Phone, MessageCircle, Star, ShieldCheck, Clock, Award } from "lucide-react";
import BookingForm from "./booking-form";
import { DOCTOR } from "@/lib/constants";
import {
  LiverIllustration,
  StomachIllustration,
  PancreasIllustration,
} from "@/components/ui/organ-illustrations";

interface ConditionHeroProps {
  title: string;
  h1?: string;
  slug?: string;
  hindiTitle: string;
  metaDescription: string;
  whyChoose: string[];
}

export default function ConditionHero({
  title,
  h1,
  slug,
  hindiTitle,
  metaDescription,
  whyChoose,
}: ConditionHeroProps) {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${title} ke baare me Dr. Akhilesh Yadav se consult karna hai.`
  )}`;

  return (
    <section className="bg-bg-sand/30 pt-12 pb-16 lg:py-20 border-b border-border/40 relative overflow-hidden">
      
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs text-muted mb-8 font-sans">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/conditions" className="hover:text-primary transition-colors">Conditions</Link>
          <span>/</span>
          <span className="text-primary font-semibold">{title}</span>
        </nav>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Block — Title & Trust Metrics */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 bg-white border border-border/60 rounded-2xl p-1 flex items-center justify-center shadow-2xs">
                {slug && ["fatty-liver", "jaundice", "liver-cirrhosis", "hepatitis", "liver-transplant"].includes(slug) ? (
                  <LiverIllustration className="w-full h-full object-contain" />
                ) : slug && ["pancreatitis"].includes(slug) ? (
                  <PancreasIllustration className="w-full h-full object-contain" />
                ) : (
                  <StomachIllustration className="w-full h-full object-contain" />
                )}
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary/20 px-3 py-1 rounded-full text-primary font-display text-[10px] font-bold uppercase tracking-wider">
                  Clinical Specialization
                </div>
                <h1 className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest leading-tight">
                  {h1 || title}
                  <span className="text-primary font-hindi text-xl sm:text-2xl lg:text-[2rem] font-semibold block mt-1">
                    {hindiTitle}
                  </span>
                </h1>
              </div>
            </div>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              {metaDescription}
            </p>

            {/* Premium Trust Metrics Bar */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-border/40 max-w-lg font-sans">
              <div className="space-y-1">
                <div className="flex items-center gap-1">
                  <Star className="text-accent fill-accent" size={16} />
                  <span className="text-forest font-bold text-base">4.9 Rating</span>
                </div>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">Google Verified</span>
              </div>
              <div className="space-y-1 border-l border-border/40 pl-4">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="text-primary" size={16} />
                  <span className="text-forest font-bold text-base">10+ Years</span>
                </div>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">DM Experience</span>
              </div>
              <div className="space-y-1 border-l border-border/40 pl-4">
                <div className="flex items-center gap-1">
                  <Award className="text-primary" size={16} />
                  <span className="text-forest font-bold text-base">4k+ Patients</span>
                </div>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider block">Successfully Cured</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
              >
                <Phone size={13} /> Call {DOCTOR.phone}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl min-h-[48px]"
              >
                <MessageCircle size={13} /> WhatsApp
              </a>
            </div>

          </div>

          {/* Right Block — Photograph + Premium Booking Card */}
          <div className="lg:col-span-5 w-full flex flex-col items-center">
            
            {/* Visual reassurance container */}
            <div className="w-full bg-white border border-border/80 rounded-3xl p-6 lg:p-8 shadow-xs relative">
              
              {/* Card headers */}
              <div className="mb-4">
                <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">
                  Secure Consultation Slot
                </span>
                <h2 className="text-forest font-sans font-bold text-lg leading-tight">अपॉइंटमेंट बुक करें</h2>
                <p className="text-muted text-xs font-sans mt-0.5">30-second booking form · 30-minute callback</p>
              </div>

              {/* Form component */}
              <BookingForm defaultCondition={title} compact />

              {/* Form footnotes */}
              <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between text-[10px] text-muted font-sans font-medium uppercase tracking-wider">
                <div className="flex items-center gap-1">
                  <Clock size={11} className="text-primary" />
                  <span>2-Hour Callback</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck size={11} className="text-primary" />
                  <span>No Spam Guarantee</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
