import { Clock, Shield, Accessibility, Building } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface ProcedureOverviewProps {
  title: string;
  overview: string;
  duration: string;
  sedation: string;
  recoveryTime: string;
}

export default function ProcedureOverview({
  title,
  overview,
  duration,
  sedation,
  recoveryTime,
}: ProcedureOverviewProps) {
  const stats = [
    { icon: Clock, label: "Procedure Duration", value: duration },
    { icon: Shield, label: "Sedation & Comfort", value: sedation },
    { icon: Accessibility, label: "Recovery Period", value: recoveryTime },
    { icon: Building, label: "Clinic Location", value: `${DOCTOR.hospital}, Ranchi` },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Detailed Text */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
                Procedure Overview
              </span>
              <h2 className="text-3xl font-display font-bold text-forest leading-tight">
                About the Procedure — {title}
              </h2>
            </div>
            
            <p className="font-sans text-muted text-base leading-relaxed whitespace-pre-line">
              {overview}
            </p>
          </div>

          {/* Right Column — Sidebar details card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-bg-sand/40 border border-border rounded-3xl p-6 lg:p-8 space-y-6 shadow-xs">
              <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider">
                Quick Facts &amp; Info
              </h3>
              
              <div className="space-y-4">
                {stats.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex gap-4 p-4 bg-white border border-border rounded-2xl shadow-xs">
                      <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={18} />
                      </div>
                      <div>
                        <span className="text-muted text-[10px] uppercase tracking-wider font-semibold font-sans block">
                          {item.label}
                        </span>
                        <span className="text-forest font-sans font-bold text-sm block mt-0.5">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
