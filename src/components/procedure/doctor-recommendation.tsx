import { Stethoscope } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface DoctorRecommendationProps {
  title: string;
  recommendation: string;
}

export default function DoctorRecommendation({
  title,
  recommendation,
}: DoctorRecommendationProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Clinical Rationale
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            डॉक्टर इसकी सलाह क्यों देते हैं?
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Why your doctor may recommend undergoing a {title} evaluation.
          </p>
        </div>

        <div className="bg-white border border-border rounded-3xl p-8 lg:p-10 shadow-xs flex flex-col md:flex-row gap-8 items-start">
          
          {/* Avatar Icon */}
          <div className="flex md:flex-col items-center justify-center gap-3 text-center flex-shrink-0">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Stethoscope className="text-primary" size={24} />
            </div>
            <div>
              <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider">Expert Advice</p>
              <p className="text-[9px] text-muted font-sans uppercase font-bold mt-0.5">{DOCTOR.name}</p>
            </div>
          </div>

          {/* Explanation Text */}
          <div className="flex-1 space-y-4">
            <h3 className="text-forest font-sans font-bold text-lg leading-snug">
              Understanding the Clinical Value of {title}
            </h3>
            <p className="font-sans text-muted text-base leading-relaxed whitespace-pre-line">
              {recommendation}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
