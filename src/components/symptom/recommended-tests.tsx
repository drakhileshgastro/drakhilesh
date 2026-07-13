import { ClipboardCheck } from "lucide-react";
import { RecommendedTestItem } from "@/lib/types-symptoms";

interface RecommendedTestsProps {
  title: string;
  tests: RecommendedTestItem[];
}

export default function RecommendedTests({ title, tests }: RecommendedTestsProps) {
  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Diagnostics
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            जांच जो करवाने की सलाह दी जा सकती है
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Possible tests recommended to verify the root cause of {title}.
          </p>
        </div>

        {/* Tests Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tests.map((test, idx) => (
            <div key={idx} className="bg-white border border-border rounded-2xl p-6 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <ClipboardCheck className="text-primary" size={18} />
                </div>
                <h3 className="text-forest font-sans font-bold text-base leading-snug">
                  {test.name}
                </h3>
                <p className="text-muted text-xs leading-relaxed mt-2">
                  {test.purpose}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
