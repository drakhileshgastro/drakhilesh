import { CheckCircle } from "lucide-react";

interface ProcedureRecoveryProps {
  title: string;
  recoveryGuidelines: string;
}

export default function ProcedureRecovery({ title, recoveryGuidelines }: ProcedureRecoveryProps) {
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Post-Procedure Care
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            {title} के बाद रिकवरी और सावधानियां
          </h2>
          <p className="font-sans text-muted text-base mt-3">
            What to expect in the hours and days following your procedure.
          </p>
        </div>

        <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-10 shadow-xs space-y-6">
          <h3 className="text-forest font-sans font-bold text-lg leading-snug">
            Recovery Guidelines
          </h3>
          <p className="font-sans text-muted text-base leading-relaxed whitespace-pre-line">
            {recoveryGuidelines}
          </p>

          <div className="border-t border-border/60 pt-6 mt-6">
            <h4 className="text-forest font-sans font-bold text-sm uppercase tracking-wider mb-4">
              Standard Recovery Safety Rules:
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-xs text-muted font-sans leading-relaxed">Do not drive or operate machinery for 24 hours post-sedation.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-xs text-muted font-sans leading-relaxed">Have a relative or companion accompany you home.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-xs text-muted font-sans leading-relaxed">Start with light, soft meals before resuming normal diet.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="text-primary mt-0.5 flex-shrink-0" size={16} />
                <span className="text-xs text-muted font-sans leading-relaxed">Take any post-procedure medications exactly as prescribed by Dr. Akhilesh.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
