const HIGH_CONDITIONS = [
  "cirrhosis", "liver cancer", "liver failure", "jaundice", "hepatitis",
  "gi bleed", "pancreatitis", "crohn", "ulcerative colitis", "colon cancer",
  "colorectal", "acute abdomen",
];
const MEDIUM_CONDITIONS = [
  "fatty liver", "acid reflux", "gerd", "gallstone", "ibs", "hemorrhoids",
  "piles", "hernia", "gastritis", "peptic ulcer",
];
const NEARBY_CITIES = ["ranchi", "jamshedpur", "dhanbad", "bokaro", "hazaribagh", "giridih", "ramgarh", "deoghar"];

export function calculateLeadScore(lead: {
  condition?: string;
  source?: string;
  patient_city?: string;
  preferred_time?: string;
  created_at?: string;
}): number {
  let score = 0;
  const cond = (lead.condition ?? "").toLowerCase();
  const city = (lead.patient_city ?? "").toLowerCase();

  // Condition urgency (5–15 pts)
  if (HIGH_CONDITIONS.some((c) => cond.includes(c))) score += 15;
  else if (MEDIUM_CONDITIONS.some((c) => cond.includes(c))) score += 10;
  else score += 5;

  // Source quality (5–15 pts)
  const sourceScores: Record<string, number> = {
    "Walk-in": 15, "Referral": 12, "WhatsApp": 10, "Facebook": 10,
    "Google Ads": 8, "Website Form": 8, "Chatbot": 7,
  };
  score += sourceScores[lead.source ?? ""] ?? 5;

  // City proximity (3–10 pts)
  if (city.includes("ranchi")) score += 10;
  else if (NEARBY_CITIES.some((c) => city.includes(c))) score += 7;
  else score += 3;

  // Enrichment signals
  if (lead.preferred_time) score += 3;

  // Recency (+5 if submitted today)
  if (lead.created_at) {
    const isToday = new Date(lead.created_at).toDateString() === new Date().toDateString();
    if (isToday) score += 5;
  }

  return Math.min(score, 48);
}

export function getScoreLabel(score: number): { label: string; color: string; bg: string; border: string } {
  if (score >= 35) return { label: "Hot", color: "text-red-700", bg: "bg-red-50", border: "border-red-200" };
  if (score >= 25) return { label: "Warm", color: "text-orange-600", bg: "bg-orange-50", border: "border-orange-200" };
  return { label: "Cold", color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200" };
}
