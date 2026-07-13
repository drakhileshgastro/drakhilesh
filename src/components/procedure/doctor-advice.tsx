import { Award, Quote } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface DoctorAdviceProps {
  advice: string;
}

export default function DoctorAdvice({ advice }: DoctorAdviceProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-border rounded-3xl p-8 lg:p-10 shadow-xs relative overflow-hidden space-y-6">
          {/* Quote Icon Overlay */}
          <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
            <Quote size={120} className="text-forest" />
          </div>

          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
              <Award size={16} className="text-primary" />
            </div>
            <h3 className="text-forest font-sans font-bold text-sm uppercase tracking-wider">
              Doctor's Personal Advice
            </h3>
          </div>

          <p className="font-hindi text-forest/90 text-lg leading-relaxed italic relative z-10">
            "{advice}"
          </p>

          <div className="border-t border-border/65 pt-4 relative z-10">
            <p className="text-forest font-sans font-bold text-sm leading-none">{DOCTOR.name}</p>
            <p className="text-muted text-[10px] uppercase font-semibold font-sans mt-1">
              DM Gastroenterology · Senior Consultant
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
