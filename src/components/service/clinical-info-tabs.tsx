"use client";

import { useState } from "react";
import { AlertCircle, HelpCircle, Activity, Heart, Eye, RefreshCw, Flame, ShieldAlert } from "lucide-react";
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

  // Helper to dynamically suggest severity level
  function getSeverityLabel(idx: number): string {
    if (idx === 0 || idx === 2) return "Requires Specialist Evaluation";
    if (idx === 1) return "Urgent Consultation Advised";
    return "Clinical Monitoring Recommended";
  }

  return (
    <section className="bg-bg-sand/25 py-20 lg:py-24 border-b border-border/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
            Clinical Indicators
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-forest leading-tight font-hindi mt-2">
            लक्षण, कारण और जोखिम कारक
          </h2>
          <p className="font-sans text-muted text-sm sm:text-base mt-2 max-w-lg mx-auto">
            Detailed clinical breakdown of symptoms, biological triggers, and potential risk factors.
          </p>
        </div>

        {/* Tab Buttons (Apple-like rounded select) */}
        <div className="flex border border-border/60 bg-white p-1 rounded-2xl gap-1 mb-12 max-w-md mx-auto shadow-2xs">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold rounded-xl transition-all cursor-pointer font-sans",
                  isActive
                    ? "bg-primary text-white shadow-xs"
                    : "text-muted hover:text-primary"
                )}
              >
                <Icon size={13} />
                <span>{tab.label.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Panels */}
        <div className="min-h-[350px]">
          
          {/* Symptoms Panel */}
          {activeTab === "symptoms" && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid sm:grid-cols-2 gap-6">
                {symptoms.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-border/50 rounded-2xl p-6 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center text-primary">
                          <Heart size={16} />
                        </div>
                        <h4 className="text-forest font-sans font-bold text-base font-hindi leading-snug">
                          {item}
                        </h4>
                      </div>
                      <p className="text-muted text-xs leading-relaxed font-sans">
                        Typical symptom indicating gastrointestinal irritation or hepatobiliary discomfort. Seek diagnosis.
                      </p>
                    </div>

                    <div className="mt-6 pt-3 border-t border-border/30 flex items-center justify-between">
                      <span className="text-[9px] text-accent font-bold uppercase tracking-wider font-sans">
                        Severity Indicator
                      </span>
                      <span className="text-[10px] text-forest font-sans font-semibold">
                        {getSeverityLabel(idx)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Causes Panel */}
          {activeTab === "causes" && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid sm:grid-cols-2 gap-6">
                {causes.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-border/50 rounded-2xl p-6 hover:shadow-xs transition-all duration-200"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        <ShieldAlert size={16} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-forest font-sans font-bold text-sm">Cause Factor 0{idx + 1}</h4>
                        <p className="font-sans text-muted text-xs leading-relaxed">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Risk Factors Panel */}
          {activeTab === "risk" && (
            <div className="space-y-8 animate-fade-in">
              <div className="grid sm:grid-cols-2 gap-6">
                {riskFactors.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white border border-border/50 rounded-2xl p-6 hover:shadow-xs transition-all duration-200"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
                        <Activity size={16} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-forest font-sans font-bold text-sm">Risk Factor 0{idx + 1}</h4>
                        <p className="font-sans text-muted text-xs leading-relaxed">{item}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
