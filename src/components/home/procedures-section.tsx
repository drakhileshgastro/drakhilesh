"use client";

import Link from "next/link";
import { 
  Search, Microscope, Activity, HeartPulse, Compass, ShieldCheck, 
  CheckCircle, ArrowRight, HelpCircle 
} from "lucide-react";
import { PROCEDURES_LIST } from "@/lib/constants";

function getProcedureIcon(slug: string) {
  const iconProps = { className: "text-primary", size: 18 };
  switch (slug) {
    case "endoscopy": return <Search {...iconProps} />;
    case "colonoscopy": return <Microscope {...iconProps} />;
    case "ercp": return <HeartPulse {...iconProps} />;
    case "eus": return <Activity {...iconProps} />;
    case "enteroscopy": return <Compass {...iconProps} />;
    default: return <HelpCircle {...iconProps} />;
  }
}

export default function ProceduresSection() {
  return (
    <section className="bg-bg-sand py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Advanced Procedures
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-4 leading-tight">
            उन्नत तकनीक से इलाज
          </h2>
          <p className="font-sans text-muted text-base max-w-2xl mx-auto leading-relaxed">
            Dr. Akhilesh Yadav performs advanced endoscopic procedures using the latest technology. Most procedures are diagnostic, minimally invasive, and completed within 15 to 30 minutes.
          </p>
        </div>

        {/* Procedure Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCEDURES_LIST.slice(0, 6).map((proc) => (
            <div
              key={proc.slug}
              className="bg-white rounded-2xl border border-border p-6 hover:border-primary hover:shadow-sm transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-10 h-10 border border-border rounded-xl flex items-center justify-center flex-shrink-0 group-hover:border-primary transition-colors duration-200">
                    {getProcedureIcon(proc.slug)}
                  </div>
                  <div>
                    <h3 className="text-forest font-sans font-bold text-base leading-snug">{proc.title}</h3>
                    <p className="font-hindi text-muted text-xs mt-0.5">{proc.hindiTitle}</p>
                  </div>
                </div>

                <p className="font-hindi text-muted text-sm leading-relaxed mb-4">
                  {proc.description}
                </p>

                <div className="flex items-start gap-2 border border-border bg-bg-sand rounded-xl p-3 mb-5">
                  <CheckCircle size={14} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-forest text-xs font-semibold font-sans leading-relaxed">{proc.benefit}</p>
                </div>
              </div>

              <Link
                href={`/procedures/${proc.slug}`}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold font-sans transition-all duration-200 group-hover:text-primary-dark"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-16 text-center border-t border-border/60 pt-10 max-w-3xl mx-auto">
          <p className="text-muted text-sm font-hindi mb-6 leading-relaxed">
            सभी प्रक्रियाएं आधुनिक उपकरणों से, अनुभवी डॉक्टर की देखरेख में की जाती हैं।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs text-forest/80 font-sans font-semibold mb-8">
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Painless &amp; Safe</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> 15–30 Minute Procedure</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Same-day Results</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Comprehensive Consultation</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/procedures"
              className="px-6 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
            >
              All Procedures
            </Link>
            <Link
              href="/book"
              className="px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
            >
              Book Procedure Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
