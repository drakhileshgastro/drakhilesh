import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Clock, MessageCircle, ShieldCheck, HeartHandshake, HelpCircle } from "lucide-react";
import { PROCEDURES_LIST } from "@/lib/constants";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";

export const metadata: Metadata = {
  title: "Advanced Endoscopy & Diagnostic Procedures | Ranchi",
  description: "Learn about Upper GI Endoscopy, Colonoscopy, ERCP, EUS, and Enteroscopy procedures performed under light sedation by Dr. Akhilesh Yadav, Ranchi.",
  alternates: { canonical: "https://drakhileshgastro.com/procedures" },
};

// Help map standard icons to procedures
import { Eye, Search, Activity, Radio, Disc, PlusCircle } from "lucide-react";

const PROCEDURE_ICONS: Record<string, any> = {
  "endoscopy": Eye,
  "colonoscopy": Search,
  "ercp": Activity,
  "eus": Radio,
  "enteroscopy": Disc,
  "gi-bleeding-treatment": PlusCircle,
};

export default function ProceduresIndexPage() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe endoscopic procedures ke baare me Dr. Akhilesh Yadav se consult karna hai."
  )}`;

  return (
    <>
      <article className="min-h-screen pb-16 sm:pb-0 bg-white">
        
        {/* Hero Section */}
        <section className="bg-bg-sand/30 py-16 lg:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
              Clinical Procedures
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-forest leading-tight font-hindi">
              आधुनिक एंडोस्कोपिक जांच और इलाज — Advanced Endoscopy
            </h1>
            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Diagnostic and therapeutic procedures performed using advanced imaging scopes and pain-free sedation at Orchid Medical Centre, Ranchi.
            </p>
          </div>
        </section>

        {/* Procedures Index Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PROCEDURES_LIST.map((proc) => {
                const IconComponent = PROCEDURE_ICONS[proc.slug] || HelpCircle;
                return (
                  <div 
                    key={proc.slug} 
                    className="bg-white border border-border/80 rounded-3xl p-6 shadow-2xs hover:border-primary-light transition-all flex flex-col justify-between"
                  >
                    <div>
                      {/* Icon & Title */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center text-primary">
                          <IconComponent size={20} />
                        </div>
                        <div>
                          <h3 className="text-forest font-sans font-bold text-base leading-tight">
                            {proc.title}
                          </h3>
                          <span className="font-hindi text-muted text-xs block mt-0.5">
                            {proc.hindiTitle}
                          </span>
                        </div>
                      </div>

                      {/* Clinical Benefit Badge */}
                      <div className="mb-4 bg-bg-sand/35 border border-border/40 rounded-xl p-3">
                        <span className="text-[9px] text-primary uppercase font-bold tracking-wider block font-sans">Primary Benefit</span>
                        <span className="text-xs font-semibold text-forest block font-sans mt-0.5">{proc.benefit}</span>
                      </div>

                      {/* Description */}
                      <p className="text-muted text-xs leading-relaxed font-sans mb-6">
                        {proc.description}
                      </p>
                    </div>

                    {/* Learn More link */}
                    <div className="pt-4 border-t border-border/40">
                      <Link
                        href={`/procedures/${proc.slug}`}
                        className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                      >
                        Learn about procedure <ArrowRight size={13} />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Reassurance Block */}
        <section className="bg-bg-sand/35 py-16 border-t border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
            <div className="text-center">
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-2">Patient Comfort Standards</span>
              <h2 className="text-2xl font-display font-bold text-forest leading-tight font-hindi">बिना दर्द और भय के सुरक्षित जांच — High Quality Standards</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              
              <div className="flex gap-3.5 items-start bg-white p-5 rounded-2xl border border-border/60">
                <ShieldCheck className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-forest font-sans font-bold text-sm">Strict Sterilization Protocols</h4>
                  <p className="text-muted text-xs mt-1 leading-relaxed">
                    Every scope undergoes rigorous, international-standard multi-level chemical disinfection to guarantee 100% safety and zero infection transmission.
                  </p>
                </div>
              </div>

              <div className="flex gap-3.5 items-start bg-white p-5 rounded-2xl border border-border/60">
                <HeartHandshake className="text-primary mt-0.5 flex-shrink-0" size={18} />
                <div>
                  <h4 className="text-forest font-sans font-bold text-sm">Sedation-Guided Painless Experience</h4>
                  <p className="text-muted text-xs mt-1 leading-relaxed">
                    Most endoscopic and colonoscopic procedures are performed under light conscious sedation, ensuring the patient experiences absolutely no pain or discomfort.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Booking CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-12 shadow-sm grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="md:col-span-5 w-full">
                <div className="aspect-[4/5] bg-primary-light rounded-2xl overflow-hidden relative shadow-xs max-w-xs mx-auto">
                  <img
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-border px-3 py-1 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
                  Consult Ranchi's Specialist
                </div>
                
                <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                  एंडोस्कोपी और जांच के लिए आज ही समय बुक करें
                </h2>
                
                <p className="font-sans text-muted text-base leading-relaxed">
                  Book a specialized clinical consultation with Dr. Akhilesh Yadav to evaluate if an endoscopy, colonoscopy, or ultrasound is required.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                  >
                    <Clock size={15} /> Book Appointment
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

                <p className="text-xs text-muted font-sans font-medium uppercase tracking-wider mt-2 block">
                  ORCHID MEDICAL CENTRE, RANCHI · OPD DAILY (SUN CLOSED)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Floating conversion bar */}
        <StickyCTA title="Procedure Guide & Consultations" />

      </article>
    </>
  );
}
