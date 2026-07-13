export interface DatabaseCondition {
  id: string;
  slug: string;
  title: string;
  hindi_title: string;
  meta_title: string;
  meta_description: string;
  published: boolean;
  hero_title: string;
  hero_description: string;
  overview: string;
  symptoms: string[];
  causes: string[];
  risk_factors: string[];
  diagnosis: string[];
  treatment: string[];
  diet_rules: {
    eat: string[];
    avoid: string[];
  };
  faqs: { q: string; a: string }[];
  doctor_note?: string;
  related_procedures?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface DatabaseProcedure {
  id: string;
  slug: string;
  title: string;
  hindi_title: string;
  meta_title: string;
  meta_description: string;
  published: boolean;
  duration: string;
  sedation: string;
  recovery_time: string;
  overview: string;
  when_required: string[];
  preparation: { step: string; detail: string }[];
  steps: { phase: string; desc: string }[];
  safety_sedation: string;
  benefits: string[];
  recovery_guidelines: string;
  doctor_advice: string;
  faqs: { q: string; a: string }[];
  related_conditions?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface DatabaseSymptom {
  id: string;
  slug: string;
  title: string;
  hindi_title: string;
  meta_title: string;
  meta_description: string;
  published: boolean;
  summary: string;
  causes: string[];
  warning_signs: string[];
  suggested_tests: string[];
  faqs: { q: string; a: string }[];
  doctor_advice: string;
  related_conditions?: string[];
  created_at?: string;
  updated_at?: string;
}

export interface DatabaseBlog {
  id: string;
  slug: string;
  title: string;
  title_hindi?: string;
  meta_title: string;
  meta_description: string;
  published: boolean;
  category: string;
  read_time: string;
  content: string;
  quick_summary: string;
  references_list: string[];
  faqs: { q: string; a: string }[];
  doctor_insight?: string;
  related_conditions?: string[];
  related_procedures?: string[];
  updated_at?: string;
}
