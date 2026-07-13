export interface ProcedureFAQ {
  q: string;
  a: string;
}

export interface PrepStep {
  step: string;
  detail: string;
}

export interface ProcedureStepItem {
  phase: string;
  desc: string;
}

export interface ProcedureData {
  slug: string;
  title: string;
  hindiTitle: string;
  metaTitle: string;
  metaDescription: string;
  duration: string;
  sedation: string;
  recoveryTime: string;
  overview: string;
  whenRequired: string[];
  preparation: PrepStep[];
  steps: ProcedureStepItem[];
  safetySedation: string;
  benefits: string[];
  recoveryGuidelines: string;
  doctorAdvice: string;
  faqs: ProcedureFAQ[];
  relatedConditions: string[];
  relatedBlogs: string[];
}
