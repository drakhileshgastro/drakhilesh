export interface SymptomFAQItem {
  q: string;
  a: string;
}

export interface EvaluationStep {
  step: string;
  desc: string;
}

export interface RecommendedTestItem {
  name: string;
  purpose: string;
}

export interface SymptomDataV2 {
  slug: string;
  title: string;
  hindiTitle: string;
  metaTitle: string;
  metaDescription: string;
  
  // Hero & Summary
  simpleExplanation: string;
  quickSummary: string;
  doctorReassurance: string;
  
  // Section 3 & 4: Causes & Red Flags
  causesLifestyle: string[];
  causesMedical: string[];
  warningRedFlags: string[];
  
  // Section 5 & 6: Conditions & Evaluation
  possibleConditions: string[];
  evaluationSteps: EvaluationStep[];
  
  // Section 7 & 8: Tests & Lifestyle
  recommendedTests: RecommendedTestItem[];
  lifestyleAdvice: string[];
  
  // Section 9: FAQs
  faqs: SymptomFAQItem[];
  
  // Relationships
  relatedConditions: string[];
  relatedProcedures: string[];
  relatedArticles: string[];
}
