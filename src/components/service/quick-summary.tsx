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
    <section className="bg-white py-20 lg:py-24 border-b border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column — Medical Overview */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
                Condition Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest leading-tight font-hindi">
                {title} क्या है? — What is it?
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="font-hindi text-forest/90 text-lg sm:text-xl leading-relaxed font-semibold">
                {introHi}
              </p>
              <p className="font-sans text-muted text-base leading-relaxed whitespace-pre-line border-l-2 border-primary/20 pl-6">
                {introEn}
              </p>
            </div>
          </div>

          {/* Right Column — Medical Director's Insight (GEO Authority Block) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-bg-sand/30 rounded-3xl p-8 lg:p-10 space-y-6 relative overflow-hidden">
              
              {/* Gold Accent Quote Mark */}
              <div className="absolute -right-6 -bottom-6 opacity-10 pointer-events-none text-accent">
                <Quote size={160} />
              </div>

              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                  <BookOpen size={16} className="text-primary" />
                </div>
                <span className="text-forest font-sans font-bold text-xs uppercase tracking-wider">
                  Doctor's Insight
                </span>
              </div>

              <p className="font-hindi text-forest/80 text-base sm:text-lg leading-relaxed italic relative z-10">
                "{doctorNote || `लिवर और पेट से जुड़ी बीमारियों को नज़रअंदाज़ करना बाद में बड़ी जटिलता का कारण बन सकता है। सही समय पर परामर्श और जीवनशैली में सुधार ही इसका स्थायी समाधान है।`}"
              </p>

              {/* Verified Badge */}
              <div className="pt-6 border-t border-border/40 flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-primary-light border border-border/20 flex-shrink-0">
                  <img
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="text-forest font-sans font-bold text-sm leading-none">{DOCTOR.name}</p>
                  <p className="text-muted text-[10px] uppercase font-bold font-sans tracking-wider mt-1.5">
                    DM Gastroenterology · Chief Consultant
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
