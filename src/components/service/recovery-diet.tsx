import Link from "next/link";
import { CheckCircle2, XCircle, FileText, MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

interface RecoveryDietProps {
  title: string;
  eatFoods?: string[];
  avoidFoods?: string[];
}

export default function RecoveryDiet({
  title,
  eatFoods = [
    "हरी सब्जियां (पालक, मेथी, लौकी)",
    "दालें और साबुत अनाज",
    "पपीता, सेब और अनार जैसे ताजे फल",
    "पर्याप्त मात्रा में पानी और नारियल पानी",
    "कम तेल और मसाले वाला उबला खाना",
  ],
  avoidFoods = [
    "ज्यादा तला हुआ और मसालेदार भोजन",
    "मैदा, बेकरी प्रोडक्ट्स और जंक फ़ूड",
    "शराब (Alcohol) का सेवन बिल्कुल बंद करें",
    "पैकेज्ड जूस और कोल्ड ड्रिंक्स",
    "अधिक घी, मक्खन और लाल मांस (Red Meat)",
  ],
}: RecoveryDietProps) {
  const whatsappDietHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    `Namaskar, mujhe ${title} ke liye custom diet chart guide chahiye.`
  )}`;

  return (
    <section className="bg-bg-sand/25 py-20 lg:py-24 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
            Diet &amp; Wellness
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest leading-tight font-hindi mt-2">
            खान-पान और परहेज — Diet Chart &amp; Guidelines
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Essential dietary adjustments to accelerate your recovery from {title}.
          </p>
        </div>

        {/* Diet Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* What to Eat (Allowed) */}
          <div className="bg-white border border-border/50 rounded-3xl p-8 shadow-2xs space-y-6">
            <h3 className="text-forest font-sans font-bold text-sm uppercase tracking-wider flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-emerald-600" />
              क्या खाएं — Foods to Eat
            </h3>
            
            <div className="space-y-4">
              {eatFoods.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-forest/90">
                  <CheckCircle2 size={16} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="font-hindi text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Avoid (Forbidden) */}
          <div className="bg-white border border-border/50 rounded-3xl p-8 shadow-2xs space-y-6">
            <h3 className="text-forest font-sans font-bold text-sm uppercase tracking-wider flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-rose-600" />
              क्या न खाएं — Foods to Avoid
            </h3>

            <div className="space-y-4">
              {avoidFoods.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 text-forest/90">
                  <XCircle size={16} className="text-rose-600 flex-shrink-0 mt-0.5" />
                  <span className="font-hindi text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Diet PDF & Consultation Action buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 font-sans">
          <a
            href={whatsappDietHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl shadow-2xs min-h-[48px]"
          >
            <MessageCircle size={14} className="text-primary" /> WhatsApp Diet Guide
          </a>
          <Link
            href="/book"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary-dark text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl shadow-2xs min-h-[48px]"
          >
            <FileText size={14} className="text-white" /> Request Personalized Diet Chart
          </Link>
        </div>

      </div>
    </section>
  );
}
