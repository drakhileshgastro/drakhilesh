import { ClipboardList, Stethoscope, HeartHandshake } from "lucide-react";

interface ProcedureOverviewTimelineProps {
  title: string;
}

export default function ProcedureOverviewTimeline({ title }: ProcedureOverviewTimelineProps) {
  const steps = [
    {
      icon: ClipboardList,
      label: "1. Preparation (पहले)",
      desc: "Fasting for 6-8 hours, adjusting medicines, and reaching with a companion.",
    },
    {
      icon: Stethoscope,
      label: "2. Procedure (दौरान)",
      desc: "15-30 minute check under comfortable sedation; direct HD imaging & painless biopsy if needed.",
    },
    {
      icon: HeartHandshake,
      label: "3. Recovery (बाद में)",
      desc: "Wake up comfortably, rest in daycare for 2 hours, and return home with report.",
    },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Overview Timeline
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            प्रक्रिया टाइमलाइन — Timeline Overview
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            The end-to-end patient journey for {title}.
          </p>
        </div>

        {/* Timeline Visual Cards */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          
          {/* Connector Line for Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-border -translate-y-6 z-0" />

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="bg-bg-sand/30 border border-border rounded-3xl p-6 shadow-xs text-center space-y-4 relative z-10 hover:border-primary-light transition-colors">
                <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center mx-auto shadow-sm">
                  <Icon size={20} />
                </div>
                <h3 className="text-forest font-sans font-bold text-base">
                  {step.label}
                </h3>
                <p className="font-sans text-muted text-sm leading-relaxed max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
