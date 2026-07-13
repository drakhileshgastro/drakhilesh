import { Quote, BookOpen } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface QuickSummaryProps {
  title: string;
  introEn: string;
  introHi: string;
  doctorNote?: string;
}

export default function QuickSummary({
  title,
  introEn,
  introHi,
  doctorNote,
}: QuickSummaryProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — AEO/GEO Structured Summary */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
                Condition Overview
              </span>
              <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                {title} क्या है? — What is it?
              </h2>
            </div>
            
            <div className="space-y-4">
              <p className="font-hindi text-forest/90 text-lg leading-relaxed font-semibold">
                {introHi}
              </p>
              <p className="font-sans text-muted text-base leading-relaxed whitespace-pre-line">
                {introEn}
              </p>
            </div>
          </div>

          {/* Right Column — Doctor Insight / Evidence Block */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 space-y-6 shadow-xs relative overflow-hidden">
              
              {/* Decorative Quote Icon */}
              <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                <Quote size={120} className="text-forest" />
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  <BookOpen size={16} className="text-primary" />
                </div>
                <h3 className="text-forest font-sans font-bold text-sm uppercase tracking-wider">
                  Doctor's Insight
                </h3>
              </div>

              <p className="font-hindi text-forest/80 text-base leading-relaxed italic relative z-10">
                "{doctorNote || `लिवर और पेट से जुड़ी बीमारियों को नज़रअंदाज़ करना बाद में बड़ी जटिलता का कारण बन सकता है। सही समय पर परामर्श और जीवनशैली में सुधार ही इसका स्थायी समाधान है।`}"
              </p>

              <div className="border-t border-border/60 pt-4 relative z-10">
                <p className="text-forest font-sans font-bold text-sm leading-none">{DOCTOR.name}</p>
                <p className="text-muted text-[10px] uppercase font-semibold font-sans mt-1">DM Gastroenterology · clinical expert</p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
