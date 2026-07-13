"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface SpecialtyColumn {
  title: string;
  hindiTitle: string;
  viewAllHref: string;
  conditions: { label: string; hindiLabel: string; slug: string }[];
}

const COLUMNS_DATA: SpecialtyColumn[] = [
  {
    title: "Liver Health",
    hindiTitle: "लिवर रोग",
    viewAllHref: "/conditions",
    conditions: [
      { label: "Fatty Liver", hindiLabel: "फैटी लिवर का उपचार", slug: "fatty-liver" },
      { label: "Liver Cirrhosis", hindiLabel: "लीवर सिरोसिस प्रबंधन", slug: "liver-cirrhosis" },
      { label: "Hepatitis B & C", hindiLabel: "हेपेटाइटिस संक्रमण", slug: "hepatitis" },
      { label: "Jaundice", hindiLabel: "पीलिया निदान व इलाज", slug: "jaundice" },
    ],
  },
  {
    title: "Digestive & Stomach",
    hindiTitle: "पेट और पाचन रोग",
    viewAllHref: "/conditions",
    conditions: [
      { label: "IBS (Irritable Bowel)", hindiLabel: "आईबीएस / आंत की समस्या", slug: "ibs" },
      { label: "GERD / Acid Reflux", hindiLabel: "एसिड रिफ्लक्स / जलन", slug: "acid-reflux" },
      { label: "Peptic Ulcer", hindiLabel: "पेट के अल्सर का इलाज", slug: "peptic-ulcer" },
      { label: "Gas & Bloating", hindiLabel: "गैस व पेट फूलना", slug: "gas-bloating" },
      { label: "Constipation & Diarrhoea", hindiLabel: "कब्ज और दस्त", slug: "constipation" },
    ],
  },
  {
    title: "Gallbladder & Pancreas",
    hindiTitle: "पित्त और अग्न्याशय रोग",
    viewAllHref: "/conditions",
    conditions: [
      { label: "Gallstones", hindiLabel: "पित्त की पथरी", slug: "gallstone" },
      { label: "Pancreatitis (Acute/Chronic)", hindiLabel: "अग्न्याशय की सूजन", slug: "pancreatitis" },
      { label: "GI Bleeding Treatment", hindiLabel: "आंतरिक रक्तस्राव उपचार", slug: "gi-bleeding" },
      { label: "Bile Duct Blockage", hindiLabel: "पित्त नली में रुकावट", slug: "gallstone" },
    ],
  },
];

export default function ConditionsSection() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Clinical Specialties
          </span>
          <h2 className="font-hindi text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-forest mb-4 leading-tight">
            बीमारियां जिनका हम इलाज करते हैं
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            Dr. Akhilesh Yadav provides advanced clinical care for all major liver, stomach, colon, and biliary tract conditions.
          </p>
        </div>

        {/* Clean Cardless Columns Grid */}
        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {COLUMNS_DATA.map((col, idx) => (
            <div key={idx} className="space-y-6 flex flex-col justify-between min-h-[360px]">
              <div>
                {/* Column Title Header */}
                <div className="border-b border-border/70 pb-4 mb-6">
                  <h3 className="text-forest font-display font-extrabold text-2xl">
                    {col.title}
                  </h3>
                  <p className="font-hindi text-primary text-xs font-bold uppercase tracking-wider mt-0.5">
                    {col.hindiTitle}
                  </p>
                </div>

                {/* List of conditions with spacing and hover effects */}
                <div className="space-y-4.5">
                  {col.conditions.map((cond, cIdx) => (
                    <Link
                      key={cIdx}
                      href={`/conditions/${cond.slug}`}
                      className="flex items-start gap-3 group cursor-pointer"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-primary/70 mt-0.5 flex-shrink-0 group-hover:scale-110 group-hover:text-primary transition-all"
                      />
                      <div>
                        <span className="text-forest font-sans font-semibold text-[15px] leading-snug group-hover:text-primary transition-colors block">
                          {cond.label}
                        </span>
                        <span className="font-hindi text-muted text-xs leading-none block mt-1">
                          {cond.hindiLabel}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* View Category Link */}
              <div className="pt-4 border-t border-border/40">
                <Link
                  href={col.viewAllHref}
                  className="inline-flex items-center gap-1.5 text-primary text-[11px] font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-all hover:gap-2"
                >
                  View All Treatments <ArrowRight size={12} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
