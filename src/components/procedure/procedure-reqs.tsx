import { CheckCircle2 } from "lucide-react";

interface ProcedureReqsProps {
  title: string;
  whenRequired: string[];
}

export default function ProcedureReqs({ title, whenRequired }: ProcedureReqsProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Indications
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            {title} की आवश्यकता कब होती है?
          </h2>
          <p className="font-sans text-muted text-base mt-3">
            When is this procedure recommended by a gastroenterologist?
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="bg-white border border-border rounded-3xl p-8 lg:p-10 shadow-xs space-y-6">
          <p className="font-sans text-forest/90 font-semibold text-base sm:text-lg">
            Dr. Akhilesh Yadav may recommend {title} if you experience any of the following symptoms:
          </p>

          <div className="grid sm:grid-cols-1 gap-4">
            {whenRequired.map((req, index) => (
              <div key={index} className="flex items-start gap-3.5 py-1">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-0.5" size={20} />
                <p className="font-hindi text-forest text-base leading-relaxed sm:text-lg">
                  {req}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
