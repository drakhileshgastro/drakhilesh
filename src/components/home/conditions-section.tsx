"use client";

import Link from "next/link";
import { 
  Flame, ShieldAlert, HeartPulse, Activity, ShieldCheck, AlertCircle, 
  TrendingDown, Heart, HelpCircle, Check, ArrowRight 
} from "lucide-react";
import { CONDITIONS_LIST } from "@/lib/constants";

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
    case "liver-cancer": return <ShieldAlert {...iconProps} />;
    case "liver-transplant": return <Heart {...iconProps} />;
    default: return <HelpCircle {...iconProps} />;
  }
}

export default function ConditionsSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
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

        {/* Conditions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {CONDITIONS_LIST.map((condition) => (
            <Link
              key={condition.slug}
              href={`/conditions/${condition.slug}`}
              className="group bg-white rounded-2xl border border-border p-6 hover:border-primary hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-border mb-4 group-hover:border-primary group-hover:bg-primary-50 transition-colors duration-200">
                  {getConditionIcon(condition.slug)}
                </div>
                <h3 className="font-hindi text-forest font-bold text-base leading-snug mb-1">
                  {condition.hindiTitle}
                </h3>
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

        {/* View all CTA */}
        <div className="text-center mt-10">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
          >
            सभी बीमारियाँ देखें — View All Conditions <ArrowRight size={16} />
          </Link>
        </div>

        {/* Early diagnosis callout */}
        <div className="mt-16 bg-bg-sand border border-border rounded-3xl p-8 lg:p-12 shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-hindi text-forest text-2xl font-bold mb-3">
                समय पर जांच क्यों जरूरी है?
              </h3>
              <p className="font-hindi text-muted text-sm leading-relaxed mb-6">
                कई गंभीर बीमारियाँ शुरुआत में सामान्य लक्षण दिखाती हैं। समय पर सुपर-स्पेशलिस्ट डॉक्टर से परामर्श लेना बड़ी जटिलताओं से बचा सकता है।
              </p>
              <div className="grid grid-cols-2 gap-3">
                {["समय पर जांच", "सही इलाज", "कम खर्च", "जल्दी रिकवरी"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-forest font-hindi">
                    <Check size={14} className="text-primary" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:border-l md:border-border md:pl-8">
              <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-2">Preventive Care</div>
              <p className="text-forest font-bold text-lg font-hindi mb-6">
                देर न करें — अभी अपॉइंटमेंट लें
              </p>
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
