import { ShieldCheck, Stethoscope } from "lucide-react";

interface DiagnosisTreatmentProps {
  title: string;
  treatments: string[];
  diagnosisSteps?: string[];
}

export default function DiagnosisTreatment({
  title,
  treatments,
  diagnosisSteps = [
    "Comprehensive physical examination and patient history review.",
    "Blood tests including liver function tests (LFT) and blood counts.",
    "Abdominal ultrasound or FibroScan to evaluate organ health.",
    "Endoscopy or colonoscopy for direct diagnostic visualization (if indicated).",
  ],
}: DiagnosisTreatmentProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Care Pathway
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            जांच और उपचार प्रक्रिया — Diagnosis &amp; Treatment
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Clinical protocols followed for accurate assessment and recovery pathways.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          
          {/* Left Block — Diagnosis */}
          <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <Stethoscope className="text-primary" size={18} />
              </div>
              <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider">
                1. How We Diagnose
              </h3>
            </div>

            <div className="space-y-4">
              {diagnosisSteps.map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-sans font-bold text-primary flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-muted text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block — Treatments */}
          <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-xs space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center">
                <ShieldCheck className="text-primary" size={18} />
              </div>
              <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider">
                2. Treatment Approach
              </h3>
            </div>

            <div className="space-y-4">
              {treatments.map((step, idx) => (
                <div key={idx} className="flex gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center text-[10px] font-sans font-bold text-accent-dark flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-muted text-sm leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
