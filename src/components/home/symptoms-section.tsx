"use client";

import Link from "next/link";
import { 
  ArrowRight, Flame, Wind, Scale, HelpCircle, AlertCircle, Frown, Droplet, 
  TrendingDown, Eye, Activity, HeartPulse
} from "lucide-react";
import { SYMPTOMS_LIST } from "@/lib/constants";

function getSymptomIcon(slug: string) {
  const iconProps = { className: "text-primary", size: 20 };
  switch (slug) {
    case "stomach-pain": return <Activity {...iconProps} />;
    case "gas-bloating": return <Wind {...iconProps} />;
    case "acidity": return <Flame {...iconProps} />;
    case "constipation": return <Frown {...iconProps} />;
    case "diarrhoea": return <Droplet {...iconProps} />;
    case "blood-in-stool": return <HeartPulse {...iconProps} />;
    case "vomiting": return <AlertCircle {...iconProps} />;
    case "difficulty-swallowing": return <AlertCircle {...iconProps} />;
    case "weight-loss": return <TrendingDown {...iconProps} />;
    case "jaundice": return <Eye {...iconProps} />;
    default: return <HelpCircle {...iconProps} />;
  }
}

export default function SymptomsSection() {
  return (
    <section className="bg-bg-sand py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Symptom Assessment
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-4 leading-tight">
            आज आप किस समस्या से परेशान हैं?
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            Select your symptom to learn more, understand potential causes, and find evidence-based treatment options.
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {SYMPTOMS_LIST.map((symptom) => (
            <Link
              key={symptom.slug}
              href={`/symptoms/${symptom.slug}`}
              className="group bg-white border border-border rounded-2xl p-6 text-center hover:border-primary hover:shadow-sm transition-all duration-200 flex flex-col items-center justify-between"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border mb-4 group-hover:border-primary group-hover:bg-primary-50 transition-colors duration-200">
                {getSymptomIcon(symptom.slug)}
              </div>
              <div className="flex-1 flex flex-col justify-center">
                <p className="font-hindi text-forest text-base font-semibold leading-snug mb-1">
                  {symptom.hindiLabel}
                </p>
                <p className="font-sans text-muted text-xs uppercase tracking-wider font-medium">
                  {symptom.label}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-10">
          <Link
            href="/symptoms"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
          >
            सभी लक्षण देखें — View All Symptoms <ArrowRight size={16} />
          </Link>
        </div>

        {/* Reassurance strip */}
        <div className="mt-16 bg-white border border-border rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-sm">
          <p className="font-hindi text-forest text-base font-semibold mb-2">
            अगर आपको अपनी समस्या नहीं मिली, तो भी घबराएं नहीं।
          </p>
          <p className="font-sans text-muted text-sm leading-relaxed mb-6">
            Not sure what's wrong? Dr. Akhilesh Yadav will diagnose your problem in the first consultation and guide you with care.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
