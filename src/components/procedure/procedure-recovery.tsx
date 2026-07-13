import { AlertTriangle, Home, Coffee, Move, RefreshCw } from "lucide-react";

interface ProcedureRecoveryProps {
  title: string;
  expectations: string;
  returnHome: string;
  diet: string;
  activity: string;
  warningSigns: string[];
}

export default function ProcedureRecovery({
  title,
  expectations,
  returnHome,
  diet,
  activity,
  warningSigns,
}: ProcedureRecoveryProps) {
  const recoveryBlocks = [
    { icon: RefreshCw, title: "What to Expect", desc: expectations },
    { icon: Home, title: "When to Return Home", desc: returnHome },
    { icon: Coffee, title: "Diet Guidelines", desc: diet },
    { icon: Move, title: "Physical Activity", desc: activity },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Post-Procedure Care
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            रिकवरी और सावधानियां — Recovery Guide
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            What to expect and how to care for yourself after a {title} procedure.
          </p>
        </div>

        {/* Recovery Parameter Grid */}
        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {recoveryBlocks.map((block, idx) => {
            const Icon = block.icon;
            return (
              <div key={idx} className="bg-bg-sand/30 border border-border rounded-2xl p-6 shadow-xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                    <Icon className="text-primary" size={16} />
                  </div>
                  <h3 className="text-forest font-sans font-bold text-sm uppercase tracking-wider">
                    {block.title}
                  </h3>
                </div>
                <p className="font-sans text-muted text-sm leading-relaxed">
                  {block.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Warning Signs (Red Highlight) */}
        <div className="bg-red-50/50 border border-red-200 rounded-3xl p-6 lg:p-8 space-y-4">
          <div className="flex items-center gap-2 text-red-700">
            <AlertTriangle size={20} />
            <h3 className="font-sans font-bold text-sm uppercase tracking-wider">
              Warning Signs (खतरे के लक्षण)
            </h3>
          </div>
          <p className="text-xs text-red-600 font-sans">
            Please seek immediate medical attention or visit the emergency ward at Orchid Medical Centre if you experience any of the following symptoms:
          </p>
          <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
            {warningSigns.map((sign, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-red-700/90 text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2 flex-shrink-0" />
                <span className="font-hindi text-base leading-relaxed">{sign}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
