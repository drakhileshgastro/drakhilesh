export interface FAQItemV2 {
  q: string;
  a: string;
}

export interface StepItemV2 {
  phase: string;
  desc: string;
}

export interface ProcedureDataV2 {
  slug: string;
  title: string;
  hindiTitle: string;
  metaTitle: string;
  metaDescription: string;
  
  // Hero
  simpleExplanation: string;
  
  // Section 2: Quick Summary
  summaryPurpose: string;
  summaryDuration: string;
  summaryAnaesthesia: string;
  summaryHospitalStay: string;
  summaryRecovery: string;
  summaryOperator?: string;
  
  // Section 3 & 4: Needed & Recommendations
  neededSymptoms: string[];
  doctorRecommendation: string;
  
  // Section 5 & 6: Preparation
  preparationFasting: string;
  preparationDiet: string;
  preparationMedicines: string;
  preparationDocuments: string;
  preparationCompanion: string;
  
  // Section 7: Steps
  steps: StepItemV2[];
  
  // Section 8: Recovery
  recoveryExpectations: string;
  recoveryReturnHome: string;
  recoveryDiet: string;
  recoveryActivity: string;
  recoveryWarningSigns: string[];
  
  // Section 9: Safety
  safetyRisks: string;
  safetyBenefits: string[];
  safetySuccessRate: string;
  safetyMonitoring: string;
  
  // Section 10 & 11: FAQs & Advice
  faqs: FAQItemV2[];
  doctorAdvice: string;
  
  // Relationships
  relatedConditions: string[];
  relatedBlogs: string[];
}
