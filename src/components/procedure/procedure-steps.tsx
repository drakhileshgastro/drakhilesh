import { StepItemV2 } from "@/lib/types-procedures-v2";

interface ProcedureStepsProps {
  title: string;
  steps: StepItemV2[];
}

export default function ProcedureSteps({ title, steps }: ProcedureStepsProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Step-by-Step
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            प्रक्रिया के दौरान क्या होता है?
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Walkthrough of the clinical steps taken during a {title} procedure.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 items-start">
              
              {/* Step Counter Badge */}
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 font-display font-bold text-sm text-primary bg-white shadow-xs">
                0{idx + 1}
              </div>

              {/* Step Content */}
              <div className="flex-1 bg-white border border-border rounded-2xl p-6 shadow-xs">
                <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider mb-2">
                  {step.phase}
                </h3>
                <p className="font-hindi text-muted text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
