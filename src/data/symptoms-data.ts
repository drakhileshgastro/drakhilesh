import { SymptomDataV2 } from "@/lib/types-symptoms";

export const SYMPTOMS_DATA_V2: Record<string, SymptomDataV2> = {
  "stomach-pain": getTemplateData("stomach-pain", "Stomach Pain", "पेट दर्द"),
  "gas-bloating": getTemplateData("gas-bloating", "Gas & Bloating", "गैस और पेट फूलना"),
  acidity: getTemplateData("acidity", "Acidity & Heartburn", "एसिडिटी और सीने में जलन"),
  constipation: getTemplateData("constipation", "Constipation", "कब्ज की समस्या"),
  diarrhoea: getTemplateData("diarrhoea", "Diarrhoea", "दस्त और लूज मोशन"),
  vomiting: getTemplateData("vomiting", "Vomiting & Nausea", "उल्टी और मतली"),
  "blood-in-stool": getTemplateData("blood-in-stool", "Blood in Stool", "मल में खून आना"),
  "difficulty-swallowing": getTemplateData("difficulty-swallowing", "Difficulty Swallowing", "खाना निगलने में कठिनाई"),
  "weight-loss": getTemplateData("weight-loss", "Unexplained Weight Loss", "बिना कारण वजन कम होना"),
  jaundice: getTemplateData("jaundice", "Jaundice", "पीलिया के लक्षण")
};

function getTemplateData(slug: string, title: string, hindiTitle: string): SymptomDataV2 {
  return {
    slug,
    title,
    hindiTitle,
    metaTitle: `${title} Symptoms & Treatment in Ranchi | Dr. Akhilesh Yadav`,
    metaDescription: `Experiencing ${title} in Ranchi? Read expert advice from Dr. Akhilesh Yadav, Senior Gastroenterologist, to understand common triggers and when to seek care.`,
    simpleExplanation: `This page is designed to educate you on the common causes and triggers of ${title}. It does not diagnose any disease. If you are experiencing persistent or severe pain, please schedule a clinical consultation.`,
    quickSummary: `A detailed breakdown of how lifestyle factors, dietary choices, and underlying digestive tract conditions can manifest as ${title}, and how to differentiate daily discomfort from serious issues.`,
    doctorReassurance: `Most symptoms are temporary and respond well to simple dietary corrections or targeted medical therapy. However, checking with a specialist early prevents complications and ensures peace of mind.`,
    causesLifestyle: [
      "Irregular eating schedules and skipping meals",
      "Excessive intake of oily, spicy, or processed fast foods",
      "Inadequate daily hydration (drinking less than 2-3 liters of water)",
      "High psychological stress levels affecting gut motility"
    ],
    causesMedical: [
      "Acid reflux or inflammation of the stomach lining (Gastritis)",
      "Gallstones blocking the bile ducts",
      "Irritable Bowel Syndrome (IBS) or food intolerances",
      "Gastric ulcers or infections (like H. pylori)"
    ],
    warningRedFlags: [
      "Severe, sharp pain that starts suddenly and worsens rapidly",
      "High fever, chills, or persistent vomiting",
      "Unexplained, rapid weight loss over a short period",
      "Passing blood in stools or vomiting blood",
      "Difficulty swallowing solids or liquids"
    ],
    possibleConditions: ["fatty-liver", "jaundice", "ibs", "gerd", "gallstone"],
    evaluationSteps: [
      { step: "1. Clinical History", desc: "Detailed discussion of symptom onset, intensity, triggers, and past medical history." },
      { step: "2. Physical Examination", desc: "Gentle abdominal palpation to check for localized tenderness, swelling, or organ enlargement." },
      { step: "3. Diagnostic Referral", desc: "Recommending relevant blood panels or advanced imaging (such as ultrasound/endoscopy) only if necessary." }
    ],
    recommendedTests: [
      { name: "Abdominal Ultrasound", purpose: "To visualize liver, gallbladder, pancreas, and spleen structures and rule out stones." },
      { name: "Upper GI Endoscopy", purpose: "To directly inspect the food pipe and stomach lining for ulcers, inflammation, or blockages." },
      { name: "Complete Blood Count & LFT", purpose: "To check for internal infections, anemia, or liver dysfunction indicators." }
    ],
    lifestyleAdvice: [
      "Eat smaller, more frequent meals at fixed times throughout the day.",
      "Incorporate high-fiber foods, fresh seasonal fruits, and clear liquids.",
      "Avoid lying down immediately after meals; walk for at least 15-20 minutes.",
      "Limit consumption of carbonated sodas, alcohol, caffeine, and tobacco."
    ],
    faqs: [
      { q: "Is this symptom a sign of something serious?", a: "Most cases are benign and related to diet or gas. However, if accompanied by red flags like vomiting, fever, or weight loss, it warrants immediate clinical check." },
      { q: "What should I eat when experiencing this?", a: "Stick to light, easily digestible foods like khichdi, curd, bananas, and plenty of coconut water. Avoid high-fat and spicy foods." },
      { q: "When should I see a doctor?", a: "If the symptom persists for more than 3-5 days, worsens, or is accompanied by warning flags, you should consult Dr. Akhilesh Yadav." }
    ],
    relatedConditions: ["fatty-liver", "jaundice", "ibs"],
    relatedProcedures: ["endoscopy", "colonoscopy"],
    relatedArticles: ["fatty-liver-diet-hindi", "jaundice-symptoms-causes", "endoscopy-kya-hota-hai"]
  };
}

export function getSymptomBySlug(slug: string): SymptomDataV2 | null {
  return SYMPTOMS_DATA_V2[slug] || null;
}

export function getAllSymptomSlugs(): string[] {
  return Object.keys(SYMPTOMS_DATA_V2);
}
