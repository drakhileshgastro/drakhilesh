import { CheckCircle2 } from "lucide-react";

interface SymptomLifestyleAdviceProps {
  title: string;
  advice: string[];
}

export default function SymptomLifestyleAdvice({ title, advice }: SymptomLifestyleAdviceProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Lifestyle Advice
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            बचाव और जीवनशैली में सुधार
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Practical lifestyle and self-care steps to manage {title}.
          </p>
        </div>

        {/* Advice Grid */}
        <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-10 shadow-xs space-y-6">
          <p className="font-sans text-forest/90 font-semibold text-base sm:text-lg">
            Daily habits that can help soothe symptoms and support digestion:
          </p>

          <div className="space-y-4">
            {advice.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={18} />
                <p className="font-hindi text-forest text-base leading-relaxed sm:text-lg">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
