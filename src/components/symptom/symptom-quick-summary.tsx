import { Quote, BookOpen } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface SymptomQuickSummaryProps {
  title: string;
  quickSummary: string;
  doctorReassurance: string;
}

export default function SymptomQuickSummary({
  title,
  quickSummary,
  doctorReassurance,
}: SymptomQuickSummaryProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Block — AEO Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
                Symptom Overview
              </span>
              <h2 className="text-3xl font-display font-bold text-forest leading-tight">
                Understanding {title}
              </h2>
            </div>
            
            <p className="font-sans text-muted text-base leading-relaxed whitespace-pre-line">
              {quickSummary}
            </p>
          </div>

          {/* Right Block — Doctor Reassurance Quote */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 space-y-6 shadow-xs relative overflow-hidden">
              
              {/* Quote Icon Overlay */}
              <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                <Quote size={120} className="text-forest" />
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  <BookOpen size={16} className="text-primary" />
                </div>
                <h3 className="text-forest font-sans font-bold text-sm uppercase tracking-wider">
                  Doctor's Reassurance
                </h3>
              </div>

              <p className="font-hindi text-forest/80 text-base leading-relaxed italic relative z-10">
                "{doctorReassurance}"
              </p>

              <div className="border-t border-border/60 pt-4 relative z-10">
                <p className="text-forest font-sans font-bold text-sm leading-none">{DOCTOR.name}</p>
                <p className="text-muted text-[10px] uppercase font-semibold font-sans mt-1">DM Gastroenterology · Senior Specialist</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
