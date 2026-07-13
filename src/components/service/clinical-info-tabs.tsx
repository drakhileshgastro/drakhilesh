"use client";

import { useState } from "react";
import { AlertCircle, HelpCircle, Activity, ChevronRight } from "lucide-react";
import { cn } from "@/lib/cn";

interface ClinicalInfoTabsProps {
  title: string;
  symptoms: string[];
  causes?: string[];
  riskFactors?: string[];
}

export default function ClinicalInfoTabs({
  title,
  symptoms,
  causes = [
    "Poor diet and high intake of processed foods",
    "Sedentary lifestyle and lack of physical exercise",
    "Genetic factors and family history of digestive issues",
    "Chronic stress affecting the gut microbiome",
  ],
  riskFactors = [
    "Age and family history of gastrointestinal disorders",
    "Pre-existing medical conditions like diabetes or obesity",
    "Alcohol consumption and smoking",
    "Improper medication usage without specialist consultation",
  ],
}: ClinicalInfoTabsProps) {
  const [activeTab, setActiveTab] = useState<"symptoms" | "causes" | "risk">("symptoms");

  const tabs = [
    { id: "symptoms" as const, label: "Symptoms (लक्षण)", icon: AlertCircle },
    { id: "causes" as const, label: "Causes (कारण)", icon: HelpCircle },
    { id: "risk" as const, label: "Risk Factors (जोखिम)", icon: Activity },
  ];

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Clinical Indicators
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            लक्षण, कारण और जोखिम कारक
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Detailed clinical breakdown of symptoms, triggers, and complications.
          </p>
        </div>

        {/* Tab Buttons (Stripe-like grouped controls) */}
        <div className="flex border border-border bg-bg-sand p-1 rounded-2xl gap-1 mb-8 max-w-lg mx-auto">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold rounded-xl transition-all cursor-pointer font-sans",
                  isActive
                    ? "bg-white text-primary border border-border shadow-xs"
                    : "text-muted hover:text-primary"
                )}
              >
                <Icon size={14} />
                <span className="hidden xs:inline">{tab.label}</span>
                <span className="xs:hidden">{tab.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="bg-white border border-border rounded-3xl p-6 lg:p-8 shadow-xs min-h-[300px]">
          
          {activeTab === "symptoms" && (
            <div className="space-y-6">
              <h3 className="text-forest font-sans font-bold text-lg leading-snug">
                Common Symptoms of {title}
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {symptoms.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3.5 bg-bg-sand/30 border border-border rounded-xl">
                    <ChevronRight size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="font-hindi text-forest font-semibold text-base leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "causes" && (
            <div className="space-y-6">
              <h3 className="text-forest font-sans font-bold text-lg leading-snug">
                What Causes {title}?
              </h3>
              <ul className="space-y-4">
                {causes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <p className="font-sans text-muted text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === "risk" && (
            <div className="space-y-6">
              <h3 className="text-forest font-sans font-bold text-lg leading-snug">
                Risk Factors &amp; Complications
              </h3>
              <ul className="space-y-4">
                {riskFactors.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="font-sans text-muted text-base leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
