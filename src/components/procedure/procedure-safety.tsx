import { ShieldCheck, Heart, Award, Eye } from "lucide-react";

interface ProcedureSafetyProps {
  title: string;
  risks: string;
  benefits: string[];
  successRate: string;
  monitoring: string;
}

export default function ProcedureSafety({
  title,
  risks,
  benefits,
  successRate,
  monitoring,
}: ProcedureSafetyProps) {
  const blocks = [
    { icon: ShieldCheck, title: "Procedural Risks", desc: risks },
    { icon: Award, title: "Success Rate", desc: successRate },
    { icon: Eye, title: "Continuous Monitoring", desc: monitoring },
  ];

  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Safety &amp; Outcomes
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            सुरक्षा, लाभ और सफलता दर
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Clinical safety protocols and therapeutic benefits of undergoing {title}.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-8">
          {/* Left Block — Benefits List */}
          <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 space-y-6 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-forest font-sans font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-600" />
                Key Benefits of the Procedure
              </h3>
              <div className="space-y-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-forest/90 text-sm">
                    <ShieldCheck size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-2 pt-4 border-t border-border/60 text-xs text-primary font-bold font-sans uppercase tracking-wider">
              <Heart size={14} className="fill-primary text-primary" /> Patient Safety is Our Priority
            </div>
          </div>

          {/* Right Column — Risks, Success Rate & Monitoring */}
          <div className="space-y-4 flex flex-col justify-between">
            {blocks.map((block, idx) => {
              const Icon = block.icon;
              return (
                <div key={idx} className="bg-white border border-border rounded-2xl p-5 shadow-xs flex gap-4">
                  <div className="w-9 h-9 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <Icon className="text-primary" size={16} />
                  </div>
                  <div>
                    <h4 className="text-forest font-sans font-bold text-xs uppercase tracking-wider block">
                      {block.title}
                    </h4>
                    <p className="text-muted text-xs leading-relaxed mt-1 block">
                      {block.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
