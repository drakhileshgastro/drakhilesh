import { AlertTriangle } from "lucide-react";

interface SymptomRedFlagsProps {
  warningRedFlags: string[];
}

export default function SymptomRedFlags({ warningRedFlags }: SymptomRedFlagsProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-red-50/50 border border-red-200 rounded-3xl p-8 lg:p-10 space-y-6 shadow-xs">
          
          <div className="flex items-center gap-2.5 text-red-700">
            <AlertTriangle size={24} className="flex-shrink-0" />
            <h2 className="font-sans font-bold text-base uppercase tracking-wider">
              When to Consult a Doctor (खतरे के लक्षण)
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-red-600 font-sans leading-relaxed">
            Please seek immediate medical attention or schedule an urgent appointment if your symptom is accompanied by any of these warning signs:
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            {warningRedFlags.map((flag, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-red-700/90 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                <span className="font-hindi text-base leading-relaxed">{flag}</span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
