import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SymptomRelatedConditionsProps {
  conditions: string[];
}

const CONDITION_MAP: Record<string, { title: string; hindi: string }> = {
  "fatty-liver": { title: "Fatty Liver Disease", hindi: "फैटी लिवर" },
  "jaundice": { title: "Jaundice Care", hindi: "पीलिया का इलाज" },
  "liver-cirrhosis": { title: "Liver Cirrhosis", hindi: "लिवर सिरोसिस" },
  "ibs": { title: "IBS / Irritable Bowel", hindi: "आईबीएस रोग" },
  "gerd": { title: "GERD / Acid Reflux", hindi: "एसिडिटी और सीने में जलन" },
  "gallstone": { title: "Gallstone & Bile Duct", hindi: "पित्त की पथरी" },
};

export default function SymptomRelatedConditions({ conditions }: SymptomRelatedConditionsProps) {
  const list = conditions.map((slug) => ({
    slug,
    ...(CONDITION_MAP[slug] || { title: slug.replace("-", " "), hindi: "" }),
  }));

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Care Pathways
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            सम्बंधित बीमारियां — Related Conditions
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Conditions that commonly present with this symptom.
          </p>
        </div>

        {/* Condition Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {list.map((cond, idx) => (
            <Link
              key={idx}
              href={`/conditions/${cond.slug}`}
              className="bg-bg-sand/20 border border-border hover:border-primary-light transition-all rounded-2xl p-6 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs text-primary font-sans font-bold uppercase tracking-wider block">Condition Profile</span>
                <h3 className="text-forest font-sans font-bold text-base mt-2 group-hover:text-primary transition-colors">
                  {cond.title}
                </h3>
                {cond.hindi && (
                  <p className="font-hindi text-muted text-sm mt-1">{cond.hindi}</p>
                )}
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-primary font-bold font-sans uppercase tracking-wider mt-6 border-t border-border/40 pt-4">
                View details <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
