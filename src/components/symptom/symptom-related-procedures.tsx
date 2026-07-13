import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SymptomRelatedProceduresProps {
  procedures: string[];
}

const PROCEDURE_MAP: Record<string, { title: string; hindi: string }> = {
  "endoscopy": { title: "Upper GI Endoscopy", hindi: "एंडोस्कोपी जांच" },
  "colonoscopy": { title: "Colonoscopy", hindi: "कोलोनोस्कोपी जांच" },
  "ercp": { title: "ERCP", hindi: "ईआरसीपी" },
  "eus": { title: "EUS (Endoscopic Ultrasound)", hindi: "ईयूएस अल्ट्रासाउंड" },
};

export default function SymptomRelatedProcedures({ procedures }: SymptomRelatedProceduresProps) {
  const list = procedures.map((slug) => ({
    slug,
    ...(PROCEDURE_MAP[slug] || { title: slug.replace("-", " "), hindi: "" }),
  }));

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Diagnostic Care
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            जांच और प्रक्रियाएं — Related Procedures
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Procedures that may be recommended to check this symptom.
          </p>
        </div>

        {/* Procedure Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {list.map((proc, idx) => (
            <Link
              key={idx}
              href={`/procedures/${proc.slug}`}
              className="bg-bg-sand/20 border border-border hover:border-primary-light transition-all rounded-2xl p-6 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <span className="text-xs text-primary font-sans font-bold uppercase tracking-wider block">Clinical Procedure</span>
                <h3 className="text-forest font-sans font-bold text-base mt-2 group-hover:text-primary transition-colors">
                  {proc.title}
                </h3>
                {proc.hindi && (
                  <p className="font-hindi text-muted text-sm mt-1">{proc.hindi}</p>
                )}
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-primary font-bold font-sans uppercase tracking-wider mt-6 border-t border-border/40 pt-4">
                View procedure guide <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
