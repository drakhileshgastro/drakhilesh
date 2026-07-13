"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight, Activity, ShieldCheck, MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface ProcedureItem {
  title: string;
  desc: string;
  slug?: string;
}

const DIAGNOSTIC_PROCEDURES: ProcedureItem[] = [
  {
    title: "Upper GI Endoscopy",
    desc: "Camera test for stomach, ulcers & acidity · एंडोस्कोपी",
    slug: "endoscopy",
  },
  {
    title: "Colonoscopy",
    desc: "Large intestine examination · कोलोनोस्कोपी",
    slug: "colonoscopy",
  },
  {
    title: "EUS — Endoscopic Ultrasound",
    desc: "Advanced internal ultrasound of pancreas, bile duct & stomach wall",
    slug: "eus",
  },
  {
    title: "EUS-guided FNA & FNB",
    desc: "Needle testing (aspiration/biopsy) of lumps without surgery",
    slug: "eus",
  },
  {
    title: "Small Bowel Enteroscopy",
    desc: "Deep examination of the small intestine",
    slug: "enteroscopy",
  },
  {
    title: "Cholangioscopy",
    desc: "Direct camera view inside the bile duct + biopsy",
    slug: "cholangioscopy",
  },
  {
    title: "Ultrasound (Abdomen)",
    desc: "पेट का अल्ट्रासाउंड",
  },
];

const THERAPEUTIC_PROCEDURES: ProcedureItem[] = [
  {
    title: "ERCP — Bile Duct Stone Removal & Stenting",
    desc: "पित्त नली की पथरी बिना ऑपरेशन निकालना",
    slug: "ercp",
  },
  {
    title: "EHL — Stone Crushing via Cholangioscopy",
    desc: "Breaking difficult bile duct stones under direct camera vision",
    slug: "cholangioscopy",
  },
  {
    title: "Polypectomy",
    desc: "Removal of polyps during endoscopy/colonoscopy",
  },
  {
    title: "ESD & EMR",
    desc: "Endoscopic removal of early tumours & large polyps",
    slug: "tumour-removal",
  },
  {
    title: "EVL — Variceal Band Ligation",
    desc: "Banding to stop/prevent liver-related bleeding",
    slug: "gi-bleeding",
  },
  {
    title: "Variceal Glue Injection",
    desc: "Injection treatment for stomach varices",
    slug: "gi-bleeding",
  },
  {
    title: "APC — Argon Plasma Coagulation",
    desc: "Sealing bleeding points in the GI tract",
    slug: "gi-bleeding",
  },
  {
    title: "Balloon Dilatation",
    desc: "Widening narrowed food pipe or intestine · निगलने में दिक्कत का इलाज",
  },
];

export default function ProceduresSection() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe procedures details ke baare me jankari chahiye."
  )}`;

  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Advanced Endoscopy &amp; Scopes
          </span>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-3 leading-tight">
            Procedures &amp; Endoscopic Treatments
          </h2>
          <p className="font-hindi text-primary text-base sm:text-lg font-semibold">
            आधुनिक एंडोस्कोपिक जांच और इलाज — बिना बड़े ऑपरेशन के
          </p>
        </div>

        {/* Dynamic Double Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Diagnostic */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                <Activity className="text-primary" size={16} />
              </div>
              <div>
                <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider">
                  Diagnostic Procedures
                </h3>
                <p className="font-hindi text-muted text-xs font-medium">जांच — बीमारी का सही पता लगाने के लिए</p>
              </div>
            </div>

            <div className="space-y-4">
              {DIAGNOSTIC_PROCEDURES.map((proc, idx) => (
                <ProcedureRow key={idx} proc={proc} />
              ))}
            </div>
          </div>

          {/* Right Column — Therapeutic */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-border/60 pb-4">
              <div className="w-9 h-9 rounded-xl bg-accent/15 flex items-center justify-center">
                <ShieldCheck className="text-accent-dark" size={16} />
              </div>
              <div>
                <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider">
                  Therapeutic Treatments
                </h3>
                <p className="font-hindi text-muted text-xs font-medium">इलाज — एंडोस्कोपी से, बिना चीर-फाड़ के</p>
              </div>
            </div>

            <div className="space-y-4">
              {THERAPEUTIC_PROCEDURES.map((proc, idx) => (
                <ProcedureRow key={idx} proc={proc} />
              ))}
            </div>
          </div>

        </div>

        {/* Day-Care Note Banner */}
        <div className="mt-16 bg-bg-sand border border-border rounded-3xl p-6 lg:p-8 text-center max-w-4xl mx-auto shadow-xs space-y-4">
          <p className="font-sans text-forest font-bold text-base sm:text-lg">
            Most procedures are day-care — no big operation, no long admission.
          </p>
          <p className="font-hindi text-muted text-sm sm:text-base leading-relaxed">
            ज़्यादातर जांच और इलाज उसी दिन हो जाते हैं — बड़े ऑपरेशन की ज़रूरत नहीं।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-forest/80 font-sans font-semibold pt-2 border-t border-border/60">
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Painless &amp; Safe</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> 15–30 Mins Procedure</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Same-day Discharge</span>
          </div>
        </div>

        {/* Booking CTA row */}
        <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
          >
            Book a Procedure Consultation
          </Link>
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
    </section>
  );
}

function ProcedureRow({ proc }: { proc: ProcedureItem }) {
  const content = (
    <div className="flex items-start justify-between gap-4 p-4 rounded-xl border border-border/50 bg-bg-sand/15 hover:border-primary-light hover:bg-bg-sand/35 transition-all group cursor-pointer text-left">
      <div className="flex items-start gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
        <div>
          <h4 className="text-forest font-sans font-semibold text-sm leading-snug group-hover:text-primary transition-colors">
            {proc.title}
          </h4>
          <p className="text-muted text-[11px] font-sans leading-relaxed mt-0.5">
            {proc.desc}
          </p>
        </div>
      </div>
      {proc.slug && (
        <ArrowRight size={14} className="text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1" />
      )}
    </div>
  );

  if (proc.slug) {
    return <Link href={`/procedures/${proc.slug}`} className="block">{content}</Link>;
  }

  return content;
}
