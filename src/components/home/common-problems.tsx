import Link from "next/link";
import { Check } from "lucide-react";

export default function CommonProblems() {
  const problems = [
    { labelHindi: "पेट दर्द", labelEn: "Stomach Pain" },
    { labelHindi: "गैस व पेट फूलना", labelEn: "Gas & Bloating" },
    { labelHindi: "बार-बार एसिडिटी", labelEn: "Chronic Acidity" },
    { labelHindi: "खाना नहीं पचना", labelEn: "Indigestion" },
    { labelHindi: "वजन कम होना", labelEn: "Unexplained Weight Loss" },
    { labelHindi: "पीलिया", labelEn: "Jaundice" },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Subtitle / Header */}
        <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
          Daily Symptoms
        </div>
        <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-8 leading-tight">
          क्या आप रोज़ इनमें से किसी समस्या से परेशान हैं?
        </h2>

        {/* Problems List Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
          {problems.map((prob, index) => (
            <div
              key={index}
              className="flex items-center gap-3 justify-center px-4 py-3 bg-bg-sand/40 border border-border rounded-xl shadow-xs"
            >
              <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check size={12} className="text-primary font-bold" />
              </div>
              <div className="text-left">
                <span className="text-forest font-hindi font-bold text-sm block leading-none">{prob.labelHindi}</span>
                <span className="text-muted text-[10px] font-sans block mt-1 uppercase font-semibold tracking-wider">{prob.labelEn}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Emotionally Connecting Subheading */}
        <div className="space-y-6">
          <p className="text-forest/80 font-display font-medium text-lg sm:text-xl">
            "Not sure what's causing these symptoms?"
          </p>
          <div className="flex justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
            >
              Book Specialist Consultation
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
