"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
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
    <section className="bg-bg-sand/20 py-20 lg:py-24 border-t border-b border-border/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
            FAQ Help Desk
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest leading-tight font-hindi mt-2">
            {serviceName} — अक्सर पूछे जाने वाले सवाल
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Find immediate expert answers to common patient concerns regarding clinical symptoms and treatment parameters.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div 
                key={i} 
                className="bg-white border border-border/60 rounded-2xl overflow-hidden shadow-3xs transition-all hover:border-primary-light"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-bg-sand/10 transition-colors min-h-[56px] cursor-pointer touch-manipulation gap-4"
                >
                  <span className="text-forest font-sans font-bold text-sm sm:text-base font-hindi leading-snug flex items-center gap-3">
                    <HelpCircle className="text-primary flex-shrink-0" size={16} />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    size={16}
                    className={cn(
                      "text-primary flex-shrink-0 transition-transform duration-300", 
                      isOpen && "rotate-180"
                    )}
                  />
                </button>
                
                {/* Accordion panel with smooth spacing */}
                <div 
                  className={cn(
                    "grid transition-all duration-300 ease-in-out",
                    isOpen ? "grid-rows-[1fr] opacity-100 border-t border-border/40" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-5 bg-bg-sand/10">
                      <p className="text-muted text-sm sm:text-base leading-relaxed font-hindi">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
