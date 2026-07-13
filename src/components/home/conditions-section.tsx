"use client";

import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

interface SpecialtyCard {
  title: string;
  hindiTitle: string;
  image: string;
  colorClass: string;
  conditions: { label: string; hindiLabel: string; slug: string }[];
}

const SPECIALTIES_DATA: SpecialtyCard[] = [
  {
    title: "Liver Diseases",
    hindiTitle: "लिवर रोग",
    image: "/images/liver-icon.png",
    colorClass: "border-sky-200 bg-sky-50/10",
    conditions: [
      { label: "Liver Cirrhosis", hindiLabel: "लिवर सिरोसिस", slug: "liver-cirrhosis" },
      { label: "Fatty Liver", hindiLabel: "फैटी लिवर", slug: "fatty-liver" },
      { label: "Hepatitis B & C", hindiLabel: "हेपेटाइटिस B & C", slug: "hepatitis" },
      { label: "Jaundice", hindiLabel: "पीलिया", slug: "jaundice" },
      { label: "Liver Cancer / Tumours", hindiLabel: "लिवर कैंसर", slug: "liver-cirrhosis" },
    ],
  },
  {
    title: "Stomach & Digestive Diseases",
    hindiTitle: "पेट और पाचन रोग",
    image: "/images/stomach-icon.png",
    colorClass: "border-rose-200 bg-rose-50/10",
    conditions: [
      { label: "IBS / Irritable Bowel", hindiLabel: "आईबीएस", slug: "ibs" },
      { label: "Gas & Bloating", hindiLabel: "गैस व पेट फूलना", slug: "gas-bloating" },
      { label: "Acidity & Heartburn", hindiLabel: "एसिडिटी / जलन", slug: "acidity" },
      { label: "Acid Reflux / GERD", hindiLabel: "एसिड रिफ्लक्स", slug: "gerd" },
      { label: "Constipation & Diarrhoea", hindiLabel: "कब्ज और दस्त", slug: "constipation" },
      { label: "Peptic Ulcer", hindiLabel: "पेप्टिक अल्सर", slug: "peptic-ulcer" },
    ],
  },
  {
    title: "Gallbladder & Pancreas",
    hindiTitle: "पित्त और अग्न्याशय रोग",
    image: "/images/pancreas-icon.png",
    colorClass: "border-amber-200 bg-amber-50/10",
    conditions: [
      { label: "Gallstones & Bile Duct Stones", hindiLabel: "पित्त की पथरी", slug: "gallstone" },
      { label: "Bile Duct Blockage / Stricture", hindiLabel: "पित्त नली में रुकावट", slug: "gallstone" },
      { label: "Pancreatitis (Acute/Chronic)", hindiLabel: "अग्नाशय की सूजन", slug: "pancreatitis" },
      { label: "Gallbladder Infection", hindiLabel: "गॉलब्लेडर इन्फेक्शन", slug: "gallstone" },
      { label: "Upper GI Bleeding", hindiLabel: "जीआई ब्लीडिंग", slug: "gi-bleeding" },
    ],
  },
];

export default function ConditionsSection() {
  return (
    <section className="bg-bg-sand py-20 lg:py-24 border-t border-border/40">
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

        {/* Categories Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {SPECIALTIES_DATA.map((specialty, idx) => (
            <div
              key={idx}
              className={`border border-border/60 rounded-3xl p-6 bg-white shadow-xs flex flex-col justify-between`}
            >
              <div>
                
                {/* Organ Illustration Image */}
                <div className="aspect-[4/3] rounded-2xl bg-bg-sand/35 overflow-hidden flex items-center justify-center p-6 border border-border/30 mb-6">
                  <img
                    src={specialty.image}
                    alt={specialty.title}
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Title */}
                <div className="mb-6">
                  <h3 className="text-forest font-sans font-bold text-lg leading-snug">
                    {specialty.title}
                  </h3>
                  <p className="font-hindi text-primary text-xs font-bold uppercase tracking-wider mt-0.5">
                    {specialty.hindiTitle}
                  </p>
                </div>

                {/* Checklist of conditions */}
                <div className="space-y-3.5">
                  {specialty.conditions.map((cond, cIdx) => (
                    <Link
                      key={cIdx}
                      href={`/conditions/${cond.slug}`}
                      className="flex items-start gap-2.5 group cursor-pointer"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                      />
                      <div>
                        <span className="text-forest font-sans font-medium text-sm leading-snug group-hover:text-primary transition-colors block">
                          {cond.label}
                        </span>
                        <span className="font-hindi text-muted text-xs leading-none block mt-0.5">
                          {cond.hindiLabel}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>

              </div>

              {/* View Category Link */}
              <div className="mt-8 pt-4 border-t border-border/40">
                <Link
                  href="/conditions"
                  className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                >
                  View treatments <ArrowRight size={13} />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
