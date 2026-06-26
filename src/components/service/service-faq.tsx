"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import type { ServiceFAQ } from "@/data/services-data";

interface ServiceFaqProps {
  faqs: ServiceFAQ[];
  serviceName: string;
}

export default function ServiceFaq({ faqs, serviceName }: ServiceFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <section className="section-pad bg-offwhite">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-navy text-2xl font-bold">{serviceName} — अक्सर पूछे जाने वाले सवाल</h2>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border border-gray-light rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-4 py-4 text-left hover:bg-offwhite transition-colors min-h-[56px] touch-manipulation"
              >
                <span className="text-navy font-semibold text-sm pr-4 font-hindi leading-relaxed">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={cn("text-teal flex-shrink-0 transition-transform duration-200", openIndex === i && "rotate-180")}
                />
              </button>
              {openIndex === i && (
                <div className="px-4 pb-4">
                  <p className="text-slate text-sm leading-relaxed font-hindi">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
