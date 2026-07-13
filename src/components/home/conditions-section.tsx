"use client";

import Link from "next/link";
import { 
  Flame, ShieldAlert, HeartPulse, Activity, ShieldCheck, AlertCircle, 
  TrendingDown, Heart, HelpCircle, ArrowRight 
} from "lucide-react";
import { CONDITIONS_LIST } from "@/lib/constants";

const categories = [
  {
    name: "Liver Health (लीवर रोग)",
    slugs: ["fatty-liver", "jaundice", "liver-cirrhosis", "hepatitis"],
  },
  {
    name: "Digestive Care (पाचन रोग)",
    slugs: ["ibs", "gerd", "peptic-ulcer", "abdominal-pain", "weight-loss", "ulcerative-colitis"],
  },
  {
    name: "Biliary & Pancreas (पित्त और अग्न्याशय)",
    slugs: ["gallstone", "pancreatitis"],
  },
  {
    name: "Emergency Care (आपातकालीन स्थिति)",
    slugs: ["gi-bleeding"],
  },
];

function getConditionIcon(slug: string) {
  const iconProps = { className: "text-primary", size: 18 };
  switch (slug) {
    case "fatty-liver": return <ShieldCheck {...iconProps} />;
    case "jaundice": return <ShieldAlert {...iconProps} />;
    case "liver-cirrhosis": return <HeartPulse {...iconProps} />;
    case "hepatitis": return <Activity {...iconProps} />;
    case "ibs": return <Activity {...iconProps} />;
    case "gerd": return <Flame {...iconProps} />;
    case "peptic-ulcer": return <ShieldCheck {...iconProps} />;
    case "gallstone": return <AlertCircle {...iconProps} />;
    case "gi-bleeding": return <ShieldAlert {...iconProps} />;
    case "pancreatitis": return <Activity {...iconProps} />;
    case "ulcerative-colitis": return <Activity {...iconProps} />;
    case "abdominal-pain": return <AlertCircle {...iconProps} />;
    case "weight-loss": return <TrendingDown {...iconProps} />;
    default: return <HelpCircle {...iconProps} />;
  }
}

export default function ConditionsSection() {
  return (
    <section className="bg-bg-sand py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Clinical Specialties
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-4 leading-tight">
            हम किन बीमारियों का इलाज करते हैं?
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            Dr. Akhilesh Yadav provides comprehensive, evidence-based care for all major gastroenterology, liver, and biliary disorders.
          </p>
        </div>

        {/* Grouped Conditions */}
        <div className="space-y-12">
          {categories.map((cat) => {
            const catConditions = CONDITIONS_LIST.filter((c) => cat.slugs.includes(c.slug));
            return (
              <div key={cat.name} className="space-y-6">
                <h3 className="font-hindi font-bold text-lg text-primary border-b border-border/60 pb-2">
                  {cat.name}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {catConditions.map((condition) => (
                    <Link
                      key={condition.slug}
                      href={`/conditions/${condition.slug}`}
                      className="group bg-white rounded-2xl border border-border p-6 hover:border-primary hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                    >
                      <div>
                        <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border mb-4 group-hover:border-primary group-hover:bg-primary-50 transition-colors duration-200">
                          {getConditionIcon(condition.slug)}
                        </div>
                        <h4 className="font-hindi text-forest font-bold text-base leading-snug mb-1">
                          {condition.hindiTitle}
                        </h4>
                        <p className="font-sans text-muted text-xs uppercase tracking-wider font-semibold mb-2">
                          {condition.title}
                        </p>
                        <p className="font-hindi text-muted text-xs leading-relaxed line-clamp-2">
                          {condition.description}
                        </p>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-primary text-xs font-semibold font-sans opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Know More <ArrowRight size={12} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-16">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
          >
            सभी बीमारियाँ देखें — View All Conditions <ArrowRight size={16} />
          </Link>
        </div>

      </div>
    </section>
  );
}
