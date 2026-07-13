import Link from "next/link";
import { ChevronRight, Info } from "lucide-react";

interface PossibleConditionsListProps {
  possibleConditions: string[];
}

const CONDITION_MAP: Record<string, { title: string; hindi: string }> = {
  "fatty-liver": { title: "Fatty Liver Disease", hindi: "फैटी लिवर" },
  "jaundice": { title: "Jaundice Care", hindi: "पीलिया" },
  "liver-cirrhosis": { title: "Liver Cirrhosis", hindi: "लिवर सिरोसिस" },
  "ibs": { title: "IBS / Irritable Bowel Syndrome", hindi: "आईबीएस" },
  "gerd": { title: "GERD / Acid Reflux", hindi: "एसिड रिफ्लक्स" },
  "gallstone": { title: "Gallstone & Bile Duct Stones", hindi: "पित्त की पथरी" },
};

export default function PossibleConditionsList({
  possibleConditions,
}: PossibleConditionsListProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Diagnostic Context
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            सम्भावित बीमारियां — Possible Conditions
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            These symptoms are commonly associated with the following conditions.
          </p>
        </div>

        {/* Possible Conditions list */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {possibleConditions.map((slug) => {
            const cond = CONDITION_MAP[slug] || { title: slug.replace("-", " "), hindi: "" };
            return (
              <Link
                key={slug}
                href={`/conditions/${slug}`}
                className="bg-white border border-border hover:border-primary-light transition-all rounded-xl p-5 flex items-center justify-between group shadow-xs cursor-pointer"
              >
                <div>
                  <h3 className="text-forest font-sans font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                    {cond.title}
                  </h3>
                  {cond.hindi && (
                    <p className="font-hindi text-muted text-xs mt-1">{cond.hindi}</p>
                  )}
                </div>
                <ChevronRight size={16} className="text-muted group-hover:translate-x-1 group-hover:text-primary transition-all flex-shrink-0" />
              </Link>
            );
          })}
        </div>

        {/* Reassurance Disclaimer */}
        <div className="bg-white border border-border rounded-2xl p-5 flex gap-4 items-start shadow-xs">
          <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Info className="text-primary" size={16} />
          </div>
          <p className="text-xs text-muted font-sans leading-relaxed">
            Note: The above list is for informational linking purposes only. Multiple different issues can cause similar signs. Only a physical consultation and diagnostic test can reveal the exact cause.
          </p>
        </div>

      </div>
    </section>
  );
}
