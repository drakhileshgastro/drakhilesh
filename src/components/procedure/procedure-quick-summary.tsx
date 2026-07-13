import { CheckCircle, Clock, ShieldAlert, Home, RefreshCw, UserCheck } from "lucide-react";

interface ProcedureQuickSummaryProps {
  purpose: string;
  duration: string;
  anaesthesia: string;
  hospitalStay: string;
  recovery: string;
  operator?: string;
}

export default function ProcedureQuickSummary({
  purpose,
  duration,
  anaesthesia,
  hospitalStay,
  recovery,
  operator = "Dr. Akhilesh Yadav, DM Gastroenterology",
}: ProcedureQuickSummaryProps) {
  const cards = [
    { icon: CheckCircle, label: "Purpose", value: purpose },
    { icon: Clock, label: "Duration", value: duration },
    { icon: ShieldAlert, label: "Anaesthesia / Comfort", value: anaesthesia },
    { icon: Home, label: "Hospital Stay", value: hospitalStay },
    { icon: RefreshCw, label: "Recovery", value: recovery },
    { icon: UserCheck, label: "Who Performs It", value: operator },
  ];

  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Quick Summary
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight">
            Key Information at a Glance
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Important parameters of your scheduled procedure.
          </p>
        </div>

        {/* Fact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div key={idx} className="bg-white border border-border rounded-2xl p-6 shadow-xs flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="text-primary" size={18} />
                </div>
                <div>
                  <span className="text-muted text-[10px] uppercase tracking-wider font-semibold font-sans block">
                    {card.label}
                  </span>
                  <p className="text-forest font-sans font-bold text-sm block mt-1 leading-snug">
                    {card.value}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
