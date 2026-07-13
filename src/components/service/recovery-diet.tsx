import { CheckCircle2, XCircle } from "lucide-react";

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
  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Lifestyle &amp; Recovery
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            खान-पान और परहेज — Diet Chart &amp; Guidelines
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Essential dietary adjustments to accelerate your recovery from {title}.
          </p>
        </div>

        {/* Diet Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          
          {/* What to Eat (Allowed) */}
          <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-xs space-y-6">
            <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-green-600" />
              क्या खाएं — What to Eat
            </h3>
            
            <div className="space-y-3.5">
              {eatFoods.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-forest/90">
                  <CheckCircle2 size={16} className="text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="font-hindi text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What to Avoid (Forbidden) */}
          <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-xs space-y-6">
            <h3 className="text-forest font-sans font-bold text-base uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              क्या न खाएं — Avoid
            </h3>

            <div className="space-y-3.5">
              {avoidFoods.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-forest/90">
                  <XCircle size={16} className="text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="font-hindi text-base leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
