import { EvaluationStep } from "@/lib/types-symptoms";

interface SymptomEvaluationProps {
  title: string;
  steps: EvaluationStep[];
}

export default function SymptomEvaluation({ title, steps }: SymptomEvaluationProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Clinical Protocols
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            डॉ. अखिलेश इस लक्षण की जांच कैसे करते हैं?
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            How Dr. Akhilesh Yadav evaluates {title} during your clinic consultation.
          </p>
        </div>

        {/* Steps Roadmap */}
        <div className="space-y-6">
          {steps.map((step, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 items-start">
              
              {/* Badge */}
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0 font-display font-bold text-sm text-primary bg-bg-sand/30 shadow-xs">
                0{idx + 1}
              </div>

              {/* Step content */}
              <div className="flex-1 bg-white border border-border rounded-2xl p-6 shadow-xs">
                <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider mb-2">
                  {step.step}
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
