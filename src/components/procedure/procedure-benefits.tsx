import { CheckCircle2 } from "lucide-react";

interface ProcedureBenefitsProps {
  title: string;
  benefits: string[];
}

export default function ProcedureBenefits({ title, benefits }: ProcedureBenefitsProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Outcomes &amp; Benefits
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            {title} के फायदे और प्रभावशीलता
          </h2>
          <p className="font-sans text-muted text-base mt-3">
            Key advantages of undergoing this procedure under specialist supervision.
          </p>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white border border-border rounded-2xl p-6 shadow-xs flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle2 className="text-primary" size={16} />
              </div>
              <p className="font-sans text-forest/90 text-sm sm:text-base leading-relaxed">
                {benefit}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
