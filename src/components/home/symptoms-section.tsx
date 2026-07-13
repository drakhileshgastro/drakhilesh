"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SYMPTOMS_LIST } from "@/lib/constants";
import { cn } from "@/lib/cn";

// ── Medical SVG Illustration Icons for Symptoms ──

function StomachPainIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Torso Outline */}
      <path d="M14 6c0 0 4 2 10 2s10-2 10-2v12c0 4-4 8-10 8s-10-4-10-8V6z" />
      <path d="M14 18c0 6 3 14 10 18s10-12 10-18" />
      {/* Pain Indicator in Abdomen */}
      <circle cx="24" cy="24" r="6" className="stroke-accent fill-accent/10" strokeDasharray="3 3" />
      <path d="M24 21v4M24 27h.01" className="stroke-accent" strokeWidth="2.5" />
    </svg>
  );
}

function GasBloatingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Stomach outline */}
      <path d="M12 24c0-6 4-10 10-10s8 3 10 6c4-1 8 1 8 6s-4 8-10 8-12-1-18-6z" />
      {/* Wavy Gas lines */}
      <path d="M18 20c1.5-2 3-2 4.5 0s3 2 4.5 0" className="stroke-accent" />
      <path d="M16 26c1.5-2 3-2 4.5 0s3 2 4.5 0" className="stroke-accent" />
    </svg>
  );
}

function AcidityIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Esophagus & Chest outline */}
      <path d="M20 6h8v16c0 4 6 6 6 12s-6 8-14 8-14-2-14-8 6-8 6-12V6z" />
      {/* Rising Flame path inside */}
      <path d="M24 38c-3 0-5-2-5-5 0-3 3-5 5-8 2 3 5 5 5 8 0 3-2 5-5 5z" className="stroke-accent fill-accent/10" />
    </svg>
  );
}

function ConstipationIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Colon / Intestinal loop simplified */}
      <path d="M14 34c0-6 2-10 8-10h4c6 0 8 4 8 10v4" />
      <path d="M14 34c-4 0-6-3-6-6s3-6 6-6h20c4 0 6 3 6 6s-3 6-6 6" />
      {/* Blockage Point */}
      <circle cx="24" cy="22" r="3" className="stroke-accent fill-accent" />
    </svg>
  );
}

function DiarrhoeaIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Intestines + downward flow drops */}
      <path d="M16 16c2-4 6-6 10-6s8 2 10 6v6c0 4-4 6-10 6s-10-2-10-6v-6z" />
      <path d="M24 30v12" className="stroke-accent" strokeDasharray="3 3" />
      <path d="M20 34l4 4 4-4" className="stroke-accent" />
      <circle cx="24" cy="42" r="1.5" className="stroke-accent fill-accent" />
    </svg>
  );
}

function BloodInStoolIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Commode / Toilet Bowl outline */}
      <path d="M14 12h20v14c0 6-4 10-10 10H24c-6 0-10-4-10-10V12z" />
      <path d="M10 12h28" />
      <path d="M18 36v4h12v-4" />
      {/* Active Blood Droplet */}
      <path d="M24 18c-2 0-3.5 1.5-3.5 3s3.5 5 3.5 5 3.5-3.5 3.5-5-1.5-3-3.5-3z" className="stroke-red-600 fill-red-100" />
    </svg>
  );
}

function VomitingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Head silhouette leaning down */}
      <path d="M34 14a8 8 0 10-14 6v4" />
      <path d="M20 24h-4a4 4 0 00-4 4v8" />
      {/* Nausea / Vomiting flow */}
      <path d="M20 28l-8 8" className="stroke-accent" />
      <path d="M18 31l-5 5" className="stroke-accent" />
      <path d="M22 28l-6 10" className="stroke-accent" />
    </svg>
  );
}

function DifficultySwallowingIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Throat outline */}
      <path d="M18 10c2 2 4 6 4 10v18c0 4-4 4-4 4h12s-4 0-4-4V20c0-4 2-8 4-10h-8z" />
      {/* Obstruction Arrow in throat */}
      <path d="M24 16l4 4m0-4l-4 4" className="stroke-accent" strokeWidth="2.5" />
      <circle cx="28" cy="18" r="4" className="stroke-accent fill-accent/15" />
    </svg>
  );
}

function WeightLossIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Weight Scale dial structure */}
      <rect x="10" y="10" width="28" height="28" rx="6" />
      <circle cx="24" cy="20" r="6" />
      {/* Downward indicator arrow */}
      <path d="M24 17v6M21 21l3 3 3-3" className="stroke-accent" />
    </svg>
  );
}

function JaundiceIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-primary group-hover:scale-105 transition-transform duration-200" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Human Eye outline */}
      <path d="M8 24s8-10 16-10 16 10 16 10-8 10-16 10-16-10-16-10z" />
      {/* Highlighted Iris */}
      <circle cx="24" cy="24" r="6" className="stroke-amber-500 fill-amber-100" />
      <circle cx="24" cy="24" r="2.5" className="fill-forest" />
    </svg>
  );
}

function getSymptomIcon(slug: string) {
  switch (slug) {
    case "stomach-pain": return <StomachPainIcon />;
    case "gas-bloating": return <GasBloatingIcon />;
    case "acidity": return <AcidityIcon />;
    case "constipation": return <ConstipationIcon />;
    case "diarrhoea": return <DiarrhoeaIcon />;
    case "blood-in-stool": return <BloodInStoolIcon />;
    case "vomiting": return <VomitingIcon />;
    case "difficulty-swallowing": return <DifficultySwallowingIcon />;
    case "weight-loss": return <WeightLossIcon />;
    case "jaundice": return <JaundiceIcon />;
    default: return <StomachPainIcon />;
  }
}

export default function SymptomsSection() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Symptom Assessment
          </span>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest mb-4 leading-tight">
            लक्षण जिन्हें कभी अनदेखा न करें
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            Select your symptom to learn more, understand potential causes, and find evidence-based treatment options.
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {SYMPTOMS_LIST.map((symptom) => {
            return (
              <Link
                key={symptom.slug}
                href={`/symptoms/${symptom.slug}`}
                className="group rounded-2xl p-6 text-center transition-all duration-200 flex flex-col items-center justify-between cursor-pointer border min-h-[190px] bg-white border-border hover:border-primary hover:shadow-sm"
              >
                {/* SVG Illustration wrapper */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl border border-border/50 bg-bg-sand/20 mb-5 transition-all duration-200 group-hover:border-primary group-hover:bg-white shadow-2xs">
                  {getSymptomIcon(symptom.slug)}
                </div>
                
                <div className="flex-1 flex flex-col justify-center">
                  <p className="font-hindi text-forest text-base font-bold leading-snug mb-1">
                    {symptom.hindiLabel}
                  </p>
                  <p className="font-sans text-muted text-xs uppercase tracking-wider font-semibold">
                    {symptom.label}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* View all */}
        <div className="text-center mt-12">
          <Link
            href="/symptoms"
            className="inline-flex items-center gap-2 px-6 py-3 text-primary hover:text-primary-dark font-display font-bold text-sm transition-all hover:gap-3 cursor-pointer"
          >
            सभी लक्षण देखें — View All Symptoms <ArrowRight size={16} />
          </Link>
        </div>

        {/* Reassurance strip */}
        <div className="mt-16 bg-bg-sand/30 border border-border rounded-3xl p-8 text-center max-w-2xl mx-auto shadow-xs">
          <p className="font-hindi text-forest text-base font-semibold mb-2">
            अगर आपको अपनी समस्या नहीं मिली, तो भी घबराएं नहीं।
          </p>
          <p className="font-sans text-muted text-sm leading-relaxed mb-6">
            Not sure what's wrong? Dr. Akhilesh Yadav will diagnose your problem in the first consultation and guide you with care.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
