"use client";

import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { PROCEDURES_LIST } from "@/lib/constants";

const procedureImages: Record<string, string> = {
  endoscopy: "/images/endoscopy-equipment.png",
  colonoscopy: "/images/colonoscopy-equipment.png",
  ercp: "/images/procedure-room.png",
  eus: "/images/procedure-room.png",
  enteroscopy: "/images/procedure-room.png",
};

const procedureDetails: Record<string, { duration: string; sedation: string; recovery: string }> = {
  endoscopy: { duration: "10-15 Mins", sedation: "Light Sedation", recovery: "Same Day" },
  colonoscopy: { duration: "20-30 Mins", sedation: "Light Sedation", recovery: "Same Day" },
  ercp: { duration: "30-45 Mins", sedation: "Deep Sedation", recovery: "24 Hours" },
  eus: { duration: "30-40 Mins", sedation: "Light Sedation", recovery: "Same Day" },
  enteroscopy: { duration: "45-60 Mins", sedation: "Deep Sedation", recovery: "Same Day" },
};

export default function ProceduresSection() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROCEDURES_LIST.slice(0, 5).map((proc) => {
            const img = procedureImages[proc.slug] || "/images/procedure-room.png";
            const details = procedureDetails[proc.slug] || { duration: "15-30 Mins", sedation: "Sedation", recovery: "Same Day" };
            return (
              <div
                key={proc.slug}
                className="bg-white rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  {/* Photo instead of Icon only */}
                  <div className="aspect-[16/10] overflow-hidden bg-bg-sand relative border-b border-border">
                    <img
                      src={img}
                      alt={proc.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6 pb-2">
                    <h3 className="text-forest font-sans font-bold text-lg leading-snug">{proc.title}</h3>
                    <p className="font-hindi text-primary text-sm mt-0.5 font-semibold">{proc.hindiTitle}</p>
                    
                    <p className="font-hindi text-muted text-sm leading-relaxed mt-3 mb-4">
                      {proc.description}
                    </p>

                    {/* Quick Badges */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-[9px] bg-bg-sand border border-border text-forest px-2.5 py-1 rounded-lg font-sans font-bold uppercase tracking-wider">
                        {details.duration}
                      </span>
                      <span className="text-[9px] bg-bg-sand border border-border text-forest px-2.5 py-1 rounded-lg font-sans font-bold uppercase tracking-wider">
                        {details.sedation}
                      </span>
                      <span className="text-[9px] bg-bg-sand border border-border text-forest px-2.5 py-1 rounded-lg font-sans font-bold uppercase tracking-wider">
                        {details.recovery}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <Link
                    href={`/procedures/${proc.slug}`}
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider group-hover:text-primary-dark transition-all duration-200"
                  >
                    Learn More <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            );
          })}
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
              className="px-6 py-3.5 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
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
