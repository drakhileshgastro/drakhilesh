import { AlertCircle } from "lucide-react";

interface ProcedureNeededProps {
  title: string;
  neededSymptoms: string[];
}

export default function ProcedureNeeded({ title, neededSymptoms }: ProcedureNeededProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Indications
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            {title} की आवश्यकता कब होती है?
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            When is this procedure recommended by a gastroenterologist?
          </p>
        </div>

        {/* Symptoms checklist card */}
        <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-10 shadow-xs space-y-6">
          <p className="font-sans text-forest/90 font-semibold text-base sm:text-lg">
            This procedure is commonly recommended to investigate, diagnose, or manage symptoms such as:
          </p>

          <div className="space-y-4">
            {neededSymptoms.map((symptom, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <AlertCircle className="text-primary flex-shrink-0 mt-1" size={18} />
                <p className="font-hindi text-forest text-base leading-relaxed sm:text-lg">
                  {symptom}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
