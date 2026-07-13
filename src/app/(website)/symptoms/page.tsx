import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Clock, MessageCircle, AlertTriangle, ShieldCheck, HeartHandshake, HelpCircle } from "lucide-react";
import { SYMPTOMS_LIST } from "@/lib/constants";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";

export const metadata: Metadata = {
  title: "Digestive, Stomach & Liver Symptoms Guide | Ranchi",
  description: "Understand common digestive symptoms like stomach pain, acidity, bloating, jaundice, constipation, and blood in stool. Guide by Dr. Akhilesh Yadav, Ranchi.",
  alternates: { canonical: "https://drakhileshgastro.com/symptoms" },
};

// Help map standard icons to symptoms
import { Flame, Wind, Droplet, TrendingDown, Activity, AlertCircle, Frown, RefreshCw, Eye } from "lucide-react";

const SYMPTOM_ICONS: Record<string, any> = {
  "stomach-pain": Activity,
  "gas-bloating": Wind,
  "acidity": Flame,
  "constipation": RefreshCw,
  "diarrhoea": Droplet,
  "vomiting": Frown,
  "blood-in-stool": AlertTriangle,
  "difficulty-swallowing": AlertCircle,
  "weight-loss": TrendingDown,
  "jaundice": Eye,
};

export default function SymptomsIndexPage() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe digestive symptoms ke baare me Dr. Akhilesh Yadav se consult karna hai."
  )}`;

  return (
    <>
      <article className="min-h-screen pb-16 sm:pb-0 bg-white">
        
        {/* Hero Section */}
        <section className="bg-bg-sand/30 py-16 lg:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
              Symptom Guide
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-forest leading-tight font-hindi">
              लक्षण और उनके संभावित कारण — Symptoms Overview
            </h1>
            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Identify common signs of gastrointestinal, liver, and biliary disorders. Select a symptom below to read detailed educational guides.
            </p>
          </div>
        </section>

        {/* Symptoms Index Grid */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {SYMPTOMS_LIST.map((symptom) => {
                const IconComponent = SYMPTOM_ICONS[symptom.slug] || HelpCircle;
                return (
                  <div 
                    key={symptom.slug} 
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
                            {symptom.label}
                          </h3>
                          <span className="font-hindi text-muted text-xs block mt-0.5">
                            {symptom.hindiLabel}
                          </span>
                        </div>
                      </div>

                      {/* Educational Note */}
                      <p className="text-muted text-xs leading-relaxed font-sans mb-6">
                        Learn about standard causes, alarm signs (red flags), and when you should immediately see a gastroenterology specialist.
                      </p>
                    </div>

                    {/* Learn More link */}
                    <div className="pt-4 border-t border-border/40">
                      <Link
                        href={`/symptoms/${symptom.slug}`}
                        className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                      >
                        Read Symptom Guide <ArrowRight size={13} />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Disclaimer Banner */}
        <section className="bg-bg-sand/35 py-12 border-t border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 flex gap-4 items-start">
            <AlertTriangle className="text-primary flex-shrink-0 mt-0.5" size={20} />
            <div className="space-y-1">
              <span className="text-[10px] text-forest font-sans font-bold uppercase tracking-wider block">Medical Disclaimer</span>
              <p className="text-xs text-muted leading-relaxed font-sans">
                The information provided on this page is for educational and informational purposes only. It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of Dr. Akhilesh Yadav or another qualified healthcare provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read here.
              </p>
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
                  लक्षणों को नजरअंदाज न करें — आज ही सलाह लें
                </h2>
                
                <p className="font-sans text-muted text-base leading-relaxed">
                  Early diagnosis of digestive, stomach, and liver symptoms prevents chronic complications. Schedule a priority OPD consultation with Dr. Akhilesh Yadav.
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
        <StickyCTA title="Symptom Guide & Consultations" />

      </article>
    </>
  );
}
