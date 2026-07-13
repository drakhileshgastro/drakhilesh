"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, MessageCircle, Activity, ShieldCheck, Clock, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR } from "@/lib/constants";

interface ProcedureItem {
  slug: string;
  title: string;
  hindiTitle: string;
  desc: string;
  type: "diagnostic" | "therapeutic";
  image: string;
  duration: string;
  sedation: string;
  recovery: string;
  clinicalNote: string;
  link?: string;
}

const PROCEDURES_DATA: ProcedureItem[] = [
  // Diagnostic
  {
    slug: "endoscopy",
    title: "Upper GI Endoscopy",
    hindiTitle: "एंडोस्कोपी — आहार नली और पेट की जांच",
    desc: "Camera test for stomach, ulcers & acidity.",
    type: "diagnostic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "10 - 15 Mins",
    sedation: "Light Sedation (Painless)",
    recovery: "Same Day (1-2 Hours)",
    clinicalNote: "Essential for evaluating acid reflux, chronic stomach pain, or persistent nausea.",
    link: "/procedures/endoscopy",
  },
  {
    slug: "colonoscopy",
    title: "Colonoscopy",
    hindiTitle: "कोलोनोस्कोपी — बड़ी आंत की जांच",
    desc: "Large intestine examination for polyp and colitis screening.",
    type: "diagnostic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "20 - 30 Mins",
    sedation: "Light Sedation (Painless)",
    recovery: "Same Day (2-3 Hours)",
    clinicalNote: "Recommended for chronic diarrhea, constipation, rectal bleeding, or colitis screening.",
    link: "/procedures/colonoscopy",
  },
  {
    slug: "eus",
    title: "EUS — Endoscopic Ultrasound",
    hindiTitle: "ईयूएस — अग्नाशय और पित्त नली की जांच",
    desc: "Advanced internal ultrasound scan of pancreas and bile ducts.",
    type: "diagnostic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "30 - 40 Mins",
    sedation: "Light Sedation (Painless)",
    recovery: "Same Day",
    clinicalNote: "Combines endoscopy and ultrasound to view deeper tissues and perform needle biopsy (FNA/FNB) without surgery.",
    link: "/procedures/eus",
  },
  {
    slug: "enteroscopy",
    title: "Small Bowel Enteroscopy",
    hindiTitle: "एंटेरोस्कोपी — छोटी आंत की विस्तृत जांच",
    desc: "Deep visual examination of the small intestine.",
    type: "diagnostic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "45 - 60 Mins",
    sedation: "Deep Sedation",
    recovery: "Same Day",
    clinicalNote: "Used to diagnose unexplained bleeding, ulcers, or lesions in the deeper parts of the small bowel.",
    link: "/procedures/enteroscopy",
  },
  {
    slug: "cholangioscopy",
    title: "Cholangioscopy",
    hindiTitle: "कोलांगियोस्कोपी — पित्त नली की लाइव जांच",
    desc: "Direct camera view inside the bile duct + biopsy.",
    type: "diagnostic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "30 - 45 Mins",
    sedation: "Deep Sedation",
    recovery: "24 Hours Admission",
    clinicalNote: "Allows direct visualization of the bile duct system to assess narrowings or take biopsy samples.",
    link: "/procedures/cholangioscopy",
  },
  {
    slug: "ultrasound",
    title: "Ultrasound (Abdomen)",
    hindiTitle: "अल्ट्रासाउंड — पेट की सामान्य जांच",
    desc: "Non-invasive abdominal scanning for organs.",
    type: "diagnostic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "10 - 15 Mins",
    sedation: "No Sedation Needed",
    recovery: "Immediate",
    clinicalNote: "Routine scan to evaluate liver size, gallstones, spleen, and kidney structures.",
  },

  // Therapeutic
  {
    slug: "ercp",
    title: "ERCP — Bile Duct Stone Removal & Stenting",
    hindiTitle: "ईआरसीपी — पित्त नली से पथरी निकालना",
    desc: "Clearing blockages, removing stones, and placing stents.",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "30 - 45 Mins",
    sedation: "Deep Sedation / General",
    recovery: "24 Hours Admission",
    clinicalNote: "Advanced non-surgical way to clear biliary tract blockages, remove stones, or bypass strictures.",
    link: "/procedures/ercp",
  },
  {
    slug: "ehl",
    title: "EHL — Stone Crushing via Cholangioscopy",
    hindiTitle: "ईएचएल — कैमरे से बड़ी पथरी तोड़ना",
    desc: "Breaking difficult bile stones under direct camera vision.",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "30 - 45 Mins",
    sedation: "Deep Sedation",
    recovery: "24 Hours Admission",
    clinicalNote: "Uses electrohydraulic lithotripsy under direct view (SpyGlass) to break massive stones.",
    link: "/procedures/cholangioscopy",
  },
  {
    slug: "polypectomy",
    title: "Polypectomy",
    hindiTitle: "पॉलिपेक्टोमी — पॉलिप निकालना",
    desc: "Removal of polyps during endoscopy/colonoscopy.",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "15 - 30 Mins",
    sedation: "Light Sedation",
    recovery: "Same Day",
    clinicalNote: "Painless removal of precancerous growths directly during scopes, preventing future cancer risk.",
  },
  {
    slug: "tumour-removal",
    title: "ESD & EMR (Endoscopic Tumour Removal)",
    hindiTitle: "ईएसडी और ईएमआर — कैंसर ट्यूमर निकालना",
    desc: "Endoscopic removal of early tumours & large polyps.",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "45 - 90 Mins",
    sedation: "Deep Sedation / GA",
    recovery: "24 - 48 Hours Admission",
    clinicalNote: "Minimally invasive technique to dissect early gastrointestinal cancers without requiring open surgery.",
    link: "/procedures/tumour-removal",
  },
  {
    slug: "gi-bleeding",
    title: "EVL — Variceal Band Ligation",
    hindiTitle: "ईवीएल — ब्लीडिंग रोकने के लिए बैंड लगाना",
    desc: "Banding to stop/prevent liver-related internal bleeding.",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "20 - 30 Mins",
    sedation: "Sedation",
    recovery: "Same Day / Observation",
    clinicalNote: "Life-saving procedure to bind and seal swollen esophageal veins caused by liver cirrhosis.",
    link: "/procedures/gi-bleeding",
  },
  {
    slug: "glue-injection",
    title: "Variceal Glue Injection",
    hindiTitle: "ग्लू इंजेक्शन — पेट के ब्लीडिंग वेन्स का इलाज",
    desc: "Injection treatment for stomach varices.",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "20 - 30 Mins",
    sedation: "Sedation",
    recovery: "Observation required",
    clinicalNote: "Injects cyanoacrylate glue directly into bleeding gastric varices to secure immediate bleeding arrest.",
    link: "/procedures/gi-bleeding",
  },
  {
    slug: "apc",
    title: "APC — Argon Plasma Coagulation",
    desc: "Sealing bleeding points in the GI tract.",
    hindiTitle: "एपीसी — रक्तस्राव रोकने के लिए थर्मल सीलिंग",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "15 - 20 Mins",
    sedation: "Sedation",
    recovery: "Same Day",
    clinicalNote: "Utilizes ionized argon gas and thermal heat to seal active capillary bleeding or small vascular abnormalities.",
    link: "/procedures/gi-bleeding",
  },
  {
    slug: "balloon-dilation",
    title: "Balloon Dilatation",
    hindiTitle: "बलून डाइलेशन — सिकुड़ी आहार नली को चौड़ा करना",
    desc: "Widening narrowed food pipe or intestine.",
    type: "therapeutic",
    image: "/images/doctor-explaining-procedure.png",
    duration: "20 - 30 Mins",
    sedation: "Light Sedation",
    recovery: "Same Day",
    clinicalNote: "Safely inflates a balloon catheter to widen blockages or narrowings (strictures) in the esophagus or bowel.",
  },
];

export default function ProceduresSection() {
  const [activeTab, setActiveTab] = useState<"diagnostic" | "therapeutic">("diagnostic");
  const [activeSlug, setActiveSlug] = useState<string>("endoscopy");

  const filteredProcedures = PROCEDURES_DATA.filter((p) => p.type === activeTab);
  const activeProc = PROCEDURES_DATA.find((p) => p.slug === activeSlug) || PROCEDURES_DATA[0];

  const handleTabChange = (tab: "diagnostic" | "therapeutic") => {
    setActiveTab(tab);
    const firstOfTab = PROCEDURES_DATA.find((p) => p.type === tab);
    if (firstOfTab) {
      setActiveSlug(firstOfTab.slug);
    }
  };

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${activeProc.title} ke baare me jankari chahiye.`
  )}`;

  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Advanced Endoscopy &amp; Scopes
          </span>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest mb-3 leading-tight">
            Procedures &amp; Endoscopic Treatments
          </h2>
          <p className="font-hindi text-primary text-base sm:text-lg font-semibold">
            आधुनिक एंडोस्कोपिक जांच और इलाज — बिना बड़े ऑपरेशन के
          </p>
        </div>

        {/* Diagnostic / Therapeutic Switch Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-bg-sand p-1.5 rounded-2xl inline-flex gap-1 border border-border/50">
            <button
              onClick={() => handleTabChange("diagnostic")}
              className={cn(
                "px-6 py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2",
                activeTab === "diagnostic"
                  ? "bg-white text-primary shadow-xs border border-border"
                  : "text-muted hover:text-forest"
              )}
            >
              <Activity size={14} /> Diagnostic Scopes (जांच)
            </button>
            <button
              onClick={() => handleTabChange("therapeutic")}
              className={cn(
                "px-6 py-3 rounded-xl font-sans font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2",
                activeTab === "therapeutic"
                  ? "bg-white text-primary shadow-xs border border-border"
                  : "text-muted hover:text-forest"
              )}
            >
              <ShieldCheck size={14} /> Therapeutic Treatments (इलाज)
            </button>
          </div>
        </div>

        {/* Split screen content layout */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column — Interactive List (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredProcedures.map((proc) => {
              const isActive = proc.slug === activeSlug;
              return (
                <div key={proc.slug} className="space-y-3">
                  {/* List Item Row */}
                  <button
                    onClick={() => setActiveSlug(proc.slug)}
                    className={cn(
                      "w-full flex items-start justify-between gap-4 p-5 rounded-2xl border transition-all text-left cursor-pointer",
                      isActive
                        ? "bg-bg-sand/30 border-primary shadow-xs"
                        : "bg-white border-border/60 hover:border-primary-light hover:bg-bg-sand/10"
                    )}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={cn(
                          "w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5",
                          isActive
                            ? "border-primary bg-primary text-white"
                            : "border-border text-transparent"
                        )}
                      >
                        <CheckCircle2 size={12} className="fill-current" />
                      </div>
                      <div>
                        <h3 className="text-forest font-sans font-bold text-base leading-snug">
                          {proc.title}
                        </h3>
                        <p className="font-hindi text-primary text-xs mt-1 font-semibold">
                          {proc.hindiTitle}
                        </p>
                        <p className="font-sans text-muted text-xs leading-relaxed mt-1">
                          {proc.desc}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                      <span className="text-[9px] bg-white border border-border text-forest px-2.5 py-1 rounded-lg font-sans font-bold uppercase tracking-wider hidden sm:inline-block">
                        {proc.duration}
                      </span>
                      <ArrowRight
                        size={15}
                        className={cn(
                          "text-muted transition-all",
                          isActive ? "translate-x-1 text-primary" : "group-hover:text-forest"
                        )}
                      />
                    </div>
                  </button>

                  {/* Mobile expansion container (visible only below lg size) */}
                  {isActive && (
                    <div className="lg:hidden bg-bg-sand/30 border border-t-0 border-primary -mt-4 rounded-b-2xl p-5 space-y-4">
                      {/* Image */}
                      <div className="aspect-[16/10] bg-primary-light rounded-xl overflow-hidden relative shadow-xs">
                        <img
                          src={proc.image}
                          alt={proc.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Info grid */}
                      <div className="grid grid-cols-3 gap-2.5">
                        <div className="bg-white border border-border rounded-xl p-3 text-center shadow-xs">
                          <Clock className="text-primary mx-auto mb-1" size={15} />
                          <span className="text-[8px] text-muted uppercase tracking-wider block font-bold">Duration</span>
                          <span className="text-xs font-bold text-forest block mt-0.5">{proc.duration}</span>
                        </div>
                        <div className="bg-white border border-border rounded-xl p-3 text-center shadow-xs">
                          <Shield className="text-primary mx-auto mb-1" size={15} />
                          <span className="text-[8px] text-muted uppercase tracking-wider block font-bold">Sedation</span>
                          <span className="text-xs font-bold text-forest block mt-0.5 leading-none">{proc.sedation.split(" ")[0]}</span>
                        </div>
                        <div className="bg-white border border-border rounded-xl p-3 text-center shadow-xs">
                          <Sparkles className="text-primary mx-auto mb-1" size={15} />
                          <span className="text-[8px] text-muted uppercase tracking-wider block font-bold">Recovery</span>
                          <span className="text-xs font-bold text-forest block mt-0.5 leading-none">{proc.recovery.split(" ")[0]}</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted font-sans leading-relaxed border-t border-border/40 pt-3">
                        <strong>Clinical Note:</strong> {proc.clinicalNote}
                      </p>

                      {proc.link && (
                        <div className="pt-2 flex flex-col sm:flex-row gap-2">
                          <Link
                            href={proc.link}
                            className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-white font-sans font-bold text-xs uppercase tracking-wider rounded-xl text-center"
                          >
                            Read Full Guide <ArrowRight size={12} />
                          </Link>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column — Sticky Preview Card (lg:col-span-5) */}
          <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-28">
            <div className="bg-white border border-border rounded-3xl p-6 shadow-sm space-y-6">
              
              {/* Dynamic Image */}
              <div className="aspect-[16/10] bg-primary-light rounded-2xl overflow-hidden relative shadow-xs border border-border/20">
                <img
                  src={activeProc.image}
                  alt={activeProc.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title & Notes */}
              <div>
                <h3 className="text-forest font-sans font-bold text-xl leading-tight">
                  {activeProc.title}
                </h3>
                <p className="font-hindi text-primary text-xs mt-1.5 font-bold uppercase tracking-wider">
                  {activeProc.hindiTitle}
                </p>
                <p className="font-sans text-muted text-sm leading-relaxed mt-3">
                  {activeProc.clinicalNote}
                </p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-3 gap-3 pt-2 border-t border-border/40">
                <div className="bg-bg-sand/30 border border-border rounded-xl p-3 text-center">
                  <Clock className="text-primary mx-auto mb-1.5" size={16} />
                  <span className="text-[8px] text-muted uppercase tracking-wider block font-bold">Duration</span>
                  <span className="text-xs font-bold text-forest block mt-0.5">{activeProc.duration}</span>
                </div>
                <div className="bg-bg-sand/30 border border-border rounded-xl p-3 text-center">
                  <Shield className="text-primary mx-auto mb-1.5" size={16} />
                  <span className="text-[8px] text-muted uppercase tracking-wider block font-bold">Sedation</span>
                  <span className="text-xs font-bold text-forest block mt-0.5 leading-none">{activeProc.sedation.split(" ")[0]}</span>
                </div>
                <div className="bg-bg-sand/30 border border-border rounded-xl p-3 text-center">
                  <Sparkles className="text-primary mx-auto mb-1.5" size={16} />
                  <span className="text-[8px] text-muted uppercase tracking-wider block font-bold">Recovery</span>
                  <span className="text-xs font-bold text-forest block mt-0.5 leading-none">{activeProc.recovery.split(" ")[0]}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2 border-t border-border/40">
                {activeProc.link && (
                  <Link
                    href={activeProc.link}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs"
                  >
                    Read Detailed Guide <ArrowRight size={14} />
                  </Link>
                )}
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl"
                >
                  <MessageCircle size={14} /> Enquire on WhatsApp
                </a>
              </div>

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
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Painless &amp; Safe</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> 15–30 Mins Procedure</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 size={14} className="text-primary" /> Same-day Discharge</span>
          </div>
        </div>

      </div>
    </section>
  );
}
