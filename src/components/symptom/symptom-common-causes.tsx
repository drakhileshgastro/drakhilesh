import { HelpCircle, RefreshCw } from "lucide-react";

interface SymptomCommonCausesProps {
  title: string;
  causesLifestyle: string[];
  causesMedical: string[];
}

export default function SymptomCommonCauses({
  title,
  causesLifestyle,
  causesMedical,
}: SymptomCommonCausesProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Etiology / Causes
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            {title} के सामान्य कारण
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Possible triggers and factors related to {title} (lifestyle vs. medical).
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* Lifestyle Factors */}
          <div className="bg-bg-sand/35 border border-border rounded-3xl p-6 lg:p-8 space-y-6 shadow-xs">
            <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary" />
              1. Lifestyle &amp; Dietary Triggers
            </h3>
            <div className="space-y-4">
              {causesLifestyle.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-sans font-bold text-primary flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-muted text-sm sm:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Medical Factors */}
          <div className="bg-bg-sand/35 border border-border rounded-3xl p-6 lg:p-8 space-y-6 shadow-xs">
            <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-accent" />
              2. Medical Conditions
            </h3>
            <div className="space-y-4">
              {causesMedical.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center text-[10px] font-sans font-bold text-accent-dark flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="font-sans text-muted text-sm sm:text-base leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
