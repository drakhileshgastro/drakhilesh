"use client";

import Link from "next/link";
import { HelpCircle, ArrowRight } from "lucide-react";

const QUESTIONS = [
  {
    q: "क्या गैस हमेशा सामान्य होती है?",
    sub: "Is bloating/gas always normal? When to consult a specialist.",
    href: "/symptoms/gas-bloating",
  },
  {
    q: "क्या फैटी लिवर ठीक हो सकता है?",
    sub: "Can fatty liver be reversed? Diet, exercise & medical guide.",
    href: "/conditions/fatty-liver",
  },
  {
    q: "क्या एंडोस्कोपी दर्दनाक होती है?",
    sub: "Does endoscopy hurt? The truth about painless sedation.",
    href: "/procedures/endoscopy",
  },
  {
    q: "क्या पेट दर्द कैंसर का संकेत हो सकता है?",
    sub: "Can stomach pain indicate cancer? Early warning signs explained.",
    href: "/symptoms/stomach-pain",
  },
];

export default function PatientsAsk() {
  return (
    <section className="bg-white py-16 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Patient Guide & Awareness
          </span>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] font-bold text-forest leading-tight">
            मरीजों के आम सवाल (Patients Often Ask)
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Click on common questions below to read detailed, medical-backed explanations in simple language.
          </p>
        </div>

        {/* Question Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {QUESTIONS.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="group bg-bg-sand/30 hover:bg-primary-50/40 p-6 rounded-2xl border border-border/60 hover:border-primary/50 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 bg-primary-50 rounded-xl flex items-center justify-center text-primary mb-4 font-semibold group-hover:bg-primary group-hover:text-white transition-colors">
                  <HelpCircle size={18} />
                </div>
                <h3 className="font-hindi text-forest font-bold text-lg leading-snug mb-2 group-hover:text-primary transition-colors">
                  {item.q}
                </h3>
                <p className="font-sans text-muted text-xs leading-relaxed">
                  {item.sub}
                </p>
              </div>
              
              <div className="mt-6 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary group-hover:translate-x-1 transition-transform">
                Read Guide <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
