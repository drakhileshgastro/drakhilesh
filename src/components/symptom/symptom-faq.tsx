"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { SymptomFAQItem } from "@/lib/types-symptoms";

interface SymptomFAQSectionProps {
  title: string;
  faqs: SymptomFAQItem[];
}

export default function SymptomFAQSection({ title, faqs }: SymptomFAQSectionProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-bg-sand py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            FAQ
          </span>
          <h2 className="font-hindi text-3xl font-bold text-forest leading-tight">
            पूछे जाने वाले मुख्य सवाल — FAQs
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Frequently Asked Questions about {title}.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={cn(
                "bg-white border rounded-2xl overflow-hidden transition-all duration-200 shadow-sm",
                open === i ? "border-primary" : "border-border hover:border-primary-light"
              )}
            >
              <button
                className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-hindi text-forest font-bold text-lg leading-snug flex-1">
                  {faq.q}
                </span>
                <ChevronDown
                  size={20}
                  className={cn(
                    "text-muted flex-shrink-0 mt-1 transition-transform duration-200",
                    open === i ? "rotate-180 text-primary" : ""
                  )}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-6 pt-3 border-t border-border/40">
                  <p className="font-hindi text-forest/90 text-base sm:text-lg leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
