import { ShieldCheck, Stethoscope, ChevronDown, Check, UserPlus, Heart, Search, FileText } from "lucide-react";

interface DiagnosisTreatmentProps {
  title: string;
  treatments: string[];
  diagnosisSteps?: { title: string; subtitle: string }[];
}

export default function DiagnosisTreatment({
  title,
  treatments,
  diagnosisSteps = [
    { title: "Clinical Consultation", subtitle: "Detailed evaluation of symptoms, history, and physical checkup." },
    { title: "Advanced Blood Tests", subtitle: "Liver panel, blood counts, or disease markers if indicated." },
    { title: "Ultrasound & Scanning", subtitle: "FibroScan or ultrasound mapping of digestive organs." },
    { title: "Specialized Tests", subtitle: "Endoscopy/Colonoscopy if deeper lining evaluation is needed." },
  ],
}: DiagnosisTreatmentProps) {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
            Care Pathway
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest leading-tight font-hindi mt-2">
            जांच और उपचार प्रक्रिया — Diagnosis &amp; Treatment
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Clinical protocols followed for accurate assessment and recovery pathways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Block — Diagnosis Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary">
                <Stethoscope size={18} />
              </div>
              <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider">
                1. How We Diagnose
              </h3>
            </div>

            {/* Vertical Visual Timeline */}
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-[13px] top-2 bottom-2 w-[1.5px] bg-border/60" />
              
              {diagnosisSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-4">
                  {/* Step dot */}
                  <div className="absolute -left-[31px] w-6 h-6 bg-white border-2 border-primary rounded-full flex items-center justify-center z-10 text-[9px] font-bold text-primary font-sans">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-forest font-sans font-bold text-sm leading-snug">{step.title}</h4>
                    <p className="text-muted text-xs font-sans mt-0.5 leading-relaxed">{step.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block — Treatments Timeline */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary">
                <ShieldCheck size={18} />
              </div>
              <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider">
                2. Treatment Approach
              </h3>
            </div>

            {/* Vertical Visual Timeline for Treatments */}
            <div className="relative pl-8 space-y-8">
              <div className="absolute left-[13px] top-2 bottom-2 w-[1.5px] bg-border/60" />
              
              {treatments.slice(0, 4).map((step, idx) => (
                <div key={idx} className="relative flex gap-4">
                  {/* Step dot */}
                  <div className="absolute -left-[31px] w-6 h-6 bg-white border-2 border-accent rounded-full flex items-center justify-center z-10 text-[9px] font-bold text-accent font-sans">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-forest font-sans font-bold text-sm leading-snug">Clinical Care Stage 0{idx + 1}</h4>
                    <p className="text-muted text-xs font-sans mt-0.5 leading-relaxed">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
