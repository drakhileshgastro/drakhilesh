import { ProcedureDataV2 } from "@/lib/types-procedures-v2";

export const PROCEDURES_DATA_V2: Record<string, ProcedureDataV2> = {
  endoscopy: getTemplateData("endoscopy", "Upper GI Endoscopy", "अपर जीआई एंडोस्कोपी"),
  colonoscopy: getTemplateData("colonoscopy", "Colonoscopy", "कोलोनोस्कोपी"),
  ercp: getTemplateData("ercp", "ERCP", "ईआरसीपी"),
  eus: getTemplateData("eus", "EUS (Endoscopic Ultrasound)", "ईयूएस"),
  enteroscopy: getTemplateData("enteroscopy", "Enteroscopy", "एंटेरोस्कोपी"),
  cholangioscopy: getTemplateData("cholangioscopy", "Cholangioscopy", "कोलेंगियोस्कोपी"),
  "tumour-removal": getTemplateData("tumour-removal", "Endoscopic Tumour & Polyp Removal", "ट्यूमर रिमूवल"),
  "gi-bleeding": getTemplateData("gi-bleeding", "GI Bleeding Treatment", "जीआई ब्लीडिंग")
};

function getTemplateData(slug: string, title: string, hindiTitle: string): ProcedureDataV2 {
  return {
    slug,
    title,
    hindiTitle,
    metaTitle: `${title} in Ranchi | Dr. Akhilesh Yadav`,
    metaDescription: `Expert, painless ${title} in Ranchi at Orchid Medical Centre by Dr. Akhilesh Yadav, DM Gastroenterology.`,
    simpleExplanation: `This is a patient-friendly explanation of the ${title} procedure, designed to explain medical terms in plain language, reduce anxiety, and detail what to expect.`,
    summaryPurpose: `To inspect, diagnose, and treat internal tract conditions related to ${title} without major surgery.`,
    summaryDuration: "15 - 30 Minutes",
    summaryAnaesthesia: "Light Intravenous Sedation (Conscious Sedation)",
    summaryHospitalStay: "Daycare (Same-day discharge, 2-3 hours observation)",
    summaryRecovery: "Immediate recovery, resume light activities next day",
    summaryOperator: "Dr. Akhilesh Yadav, DM Gastroenterology",
    neededSymptoms: [
      `Symptom Indicator 1: Persistent discomfort related to ${title}`,
      "Symptom Indicator 2: Suspected blockages or bleeding",
      "Symptom Indicator 3: Preventive cancer screenings based on age"
    ],
    doctorRecommendation: `Dr. Akhilesh Yadav may recommend this procedure to directly inspect the mucosal lining, take painless tissue biopsies, or execute therapeutic treatments like stone removal, stenting, or polyp removal.`,
    preparationFasting: "Fasting required for at least 6 to 8 hours prior to the procedure. Absolutely no solids or liquids (including water) should be consumed during this period.",
    preparationDiet: "Avoid high-fiber foods and solid meals starting 24 hours prior. Consume only clear liquids such as coconut water, apple juice, or clear broth.",
    preparationMedicines: "Inform Dr. Akhilesh about all regular medicines, especially blood thinners, insulin, or heart medications, which may need temporary adjustments.",
    preparationDocuments: "Please bring all past medical files, prescription slips, previous scans (Ultrasound/CT), and a valid ID proof.",
    preparationCompanion: "Since light sedation is given, you will feel sleepy afterwards. A family member or friend must accompany you to drive you home.",
    steps: [
      { phase: "Phase 1: Pre-op Preparation", desc: "Patient vitals are checked, a local throat spray or gel is applied to numb the region, and an IV line is secured for light sedation." },
      { phase: "Phase 2: Sedation Delivery", desc: "A sedative is administered through the IV line. You will feel relaxed, comfortable, and sleep peacefully throughout." },
      { phase: "Phase 3: Scope Insertion", desc: "The doctor gently guides the ultra-thin, flexible scope through the tract. High-definition cameras capture live feeds on a monitor." },
      { phase: "Phase 4: Inspection & Therapy", desc: "The lining is carefully inspected. If polyps or stones are found, they are removed instantly and painlessly using specialized tools." }
    ],
    recoveryExpectations: "You will wake up comfortably in the recovery room. A mild feeling of bloating, gas, or throat scratchiness is completely normal and fades in a few hours.",
    recoveryReturnHome: "Most patients are discharged within 2 hours once the sedative wears off. You can return home safely.",
    recoveryDiet: "Start with sips of water, followed by clear liquids. You can resume soft foods after 2 hours and your regular diet the next day.",
    recoveryActivity: "Rest for the remainder of the day. Avoid driving, operating machinery, or signing legal documents for 24 hours.",
    recoveryWarningSigns: [
      "Severe, persistent abdominal pain",
      "High-grade fever with chills",
      "Vomiting blood or passing black, tarry stools",
      "Difficulty breathing or chest tightness"
    ],
    safetyRisks: "Complications are extremely rare (less than 1 in 10,000 cases). Potential minor risks include temporary bloating or mild bleeding at the biopsy site.",
    safetyBenefits: [
      "Gold-standard direct visual accuracy compared to CT scans.",
      "Completely painless and stress-free under light sedation.",
      "Enables concurrent diagnosis and therapeutic treatment (e.g. polyp removal)."
    ],
    safetySuccessRate: "99% diagnostic accuracy and stone clearance rate.",
    safetyMonitoring: "Continuous monitoring of oxygen levels, heart rate, and blood pressure by a qualified clinical team throughout.",
    faqs: [
      { q: "Is the procedure painful?", a: "No. The procedure is performed under conscious sedation, which ensures you sleep comfortably and feel absolutely no pain or anxiety." },
      { q: "How long does it take?", a: "The actual procedure takes about 15 to 30 minutes, although you should plan to spend 2 to 3 hours at the clinic for pre-op and recovery." },
      { q: "Do I need hospital admission?", a: "No. This is an outpatient daycare procedure. You can return home the same day." }
    ],
    doctorAdvice: `Procedural anxiety is very common, but modern endoscopy is safe and painless. Do not delay your diagnostic screening; finding issues early makes treatment simple and successful.`,
    relatedConditions: ["fatty-liver", "jaundice", "ibs"],
    relatedBlogs: ["endoscopy-kya-hota-hai", "jaundice-causes-treatment-hindi"]
  };
}

export function getProcedureBySlug(slug: string): ProcedureDataV2 | null {
  return PROCEDURES_DATA_V2[slug] || null;
}

export function getAllProcedureSlugs(): string[] {
  return Object.keys(PROCEDURES_DATA_V2);
}
