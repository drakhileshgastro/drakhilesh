import { Info } from "lucide-react";
import { PrepStep } from "@/lib/types-procedures";

interface ProcedurePrepProps {
  title: string;
  preparation: PrepStep[];
}

export default function ProcedurePrep({ title, preparation }: ProcedurePrepProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Patient Guidelines
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            {title} से पहले क्या तैयारी करें?
          </h2>
          <p className="font-sans text-muted text-base mt-3">
            Important preparation steps to ensure procedure success and safety.
          </p>
        </div>

        {/* Preparation Timeline */}
        <div className="relative border-l border-border/80 pl-6 ml-4 space-y-8">
          {preparation.map((prep, index) => (
            <div key={index} className="relative">
              {/* Step indicator dot */}
              <div className="absolute -left-[35px] top-1.5 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-[10px] font-sans font-bold text-white border-2 border-white shadow-sm">
                {index + 1}
              </div>
              
              <div className="bg-bg-sand/30 border border-border rounded-2xl p-6 shadow-xs">
                <h3 className="font-hindi text-forest font-bold text-base mb-1.5">{prep.step}</h3>
                <p className="font-sans text-muted text-sm leading-relaxed">{prep.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout */}
        <div className="mt-12 bg-primary-light/50 border border-primary-light rounded-2xl p-6 flex items-start gap-4 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center flex-shrink-0">
            <Info className="text-primary" size={20} />
          </div>
          <div>
            <p className="font-hindi text-forest font-bold text-sm mb-1">
              कोई संकोच या सवाल हो तो क्लीनिक से संपर्क करें
            </p>
            <p className="font-sans text-muted text-xs leading-relaxed">
              If you have any questions or are unsure about your preparation instructions, please call the Orchid Medical Centre coordinators. Incorrect prep might require rescheduling.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
