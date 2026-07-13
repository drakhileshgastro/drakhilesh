import { DOCTOR } from "@/lib/constants";
import { ProcedureFAQ } from "@/lib/types-procedures";

export function generateProcedureSchema(
  title: string,
  overview: string,
  preparation: string,
  recovery: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    "name": title,
    "description": overview,
    "procedureType": {
      "@type": "MedicalSpecialty",
      "name": "Gastroenterology"
    },
    "preparation": preparation,
    "followup": recovery,
    "studySubject": {
      "@type": "MedicalCondition",
      "name": "Gastrointestinal Diseases"
    }
  };
}

export function generateFAQSchema(faqs: ProcedureFAQ[]) {
  if (!faqs || faqs.length === 0) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function generatePhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": DOCTOR.name,
    "medicalSpecialty": "Gastroenterology",
    "hospitalAffiliation": {
      "@type": "Hospital",
      "name": DOCTOR.hospital,
      "address": DOCTOR.address
    },
    "telephone": DOCTOR.phone
  };
}
