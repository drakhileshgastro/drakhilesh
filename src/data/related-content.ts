import { BLOG_POSTS } from "./blog-data";
import { ALL_SERVICES } from "./services-data";

// ── Cluster-0 (Ranchi local) topic groups ─────────────────────────────────────
// Used to build within-cluster "More Ranchi Guides" sidebar on blog pages.
// Each group is ordered: most-relevant first.
const CLUSTER0_GROUPS: Record<string, string[]> = {
  "liver-ranchi": [
    "ranchi-mein-liver-ka-doctor",
    "liver-problem-doctor-ranchi",
    "hepatologist-ranchi",
    "ranchi-mein-liver-test",
    "liver-cirrhosis-ranchi",
    "ranchi-mein-ascites-treatment",
    "ranchi-mein-fatty-liver-ka-ilaj",
    "ranchi-mein-fatty-liver-diet",
    "ranchi-mein-liver-cancer-screening",
    "ranchi-mein-jaundice-ka-ilaj",
    "ranchi-mein-hepatitis-treatment",
    "bilirubin-test-meaning-ranchi",
    "liver-specialist-vs-gastroenterologist-ranchi",
    "liver-biopsy-ranchi",
    "jaundice-treatment-ranchi",
  ],
  "procedure-ranchi": [
    "endoscopy-cost-ranchi",
    "colonoscopy-cost-ranchi",
    "eus-ranchi",
    "ranchi-mein-ercp-cost",
    "ranchi-mein-eus-test",
    "capsule-endoscopy-ranchi",
    "ranchi-mein-colonoscopy-preparation",
    "colon-polyp-removal-ranchi",
    "liver-biopsy-ranchi",
    "endoscopy-clinic-ranchi",
    "colon-cancer-screening-ranchi",
    "ranchi-mein-stomach-cancer-screening",
  ],
  "gi-symptoms-ranchi": [
    "gas-problem-doctor-ranchi",
    "kala-pakhana-doctor-ranchi",
    "ulti-ka-doctor-ranchi",
    "pet-dard-doctor-ranchi",
    "ranchi-mein-diarrhea-doctor",
    "ranchi-mein-nausea-doctor",
    "ranchi-mein-abdominal-pain-doctor",
    "swallowing-problem-ranchi",
    "rectal-bleeding-ranchi",
    "unexplained-weight-loss-ranchi",
  ],
  "acidity-ranchi": [
    "acidity-doctor-ranchi",
    "pet-ki-jalan-ka-ilaj-ranchi",
    "ranchi-mein-acidity-ka-ilaj",
    "swallowing-problem-ranchi",
    "ulti-ka-doctor-ranchi",
  ],
  "ibs-constipation-ranchi": [
    "ibs-doctor-ranchi",
    "constipation-doctor-ranchi",
    "kabj-ka-doctor-ranchi",
    "ranchi-mein-food-allergy-doctor",
    "digestive-disease-ranchi",
    "ranchi-mein-diarrhea-doctor",
  ],
  "ibd-ranchi": [
    "ranchi-mein-ibd-treatment",
    "crohns-disease-ranchi",
    "colitis-doctor-ranchi",
    "ranchi-mein-diarrhea-doctor",
    "ranchi-mein-food-allergy-doctor",
    "ranchi-mein-colonoscopy-preparation",
    "capsule-endoscopy-ranchi",
  ],
  "piles-ranchi": [
    "piles-doctor-ranchi",
    "ranchi-mein-piles-ka-ilaj",
    "hemorrhoids-treatment-ranchi",
    "kala-pakhana-doctor-ranchi",
    "rectal-bleeding-ranchi",
    "colon-cancer-screening-ranchi",
    "colon-polyp-removal-ranchi",
  ],
  "specialist-ranchi": [
    "best-gastroenterologist-ranchi",
    "gastroenterologist-in-ranchi",
    "stomach-specialist-ranchi",
    "stomach-doctor-ranchi",
    "digestive-specialist-ranchi",
    "ranchi-ka-gastroenterologist",
    "ranchi-mein-pet-ke-doctor",
    "orchid-medical-centre-gastro-ranchi",
    "endoscopy-clinic-ranchi",
    "digestive-disease-ranchi",
    "liver-specialist-vs-gastroenterologist-ranchi",
  ],
  "location-ranchi": [
    "hazaribagh-se-ranchi-gastroenterologist",
    "dhanbad-se-ranchi-gastroenterologist",
    "deoghar-se-ranchi-gastroenterologist",
    "bokaro-mein-gastroenterologist",
    "jamshedpur-se-ranchi-gastroenterologist",
    "jharkhand-mein-gastroenterologist",
  ],
  "gallstone-ranchi": [
    "gallstone-doctor-ranchi",
    "ranchi-mein-ercp-cost",
    "endoscopy-cost-ranchi",
  ],
  "pancreatitis-ranchi": [
    "pancreatitis-doctor-ranchi",
    "ranchi-mein-eus-test",
    "eus-ranchi",
    "ranchi-mein-ercp-cost",
  ],
};

// Map: Cluster-0 blog slug → which topic group(s) it belongs to
const CLUSTER0_BLOG_GROUPS: Record<string, string[]> = {
  "bilirubin-test-meaning-ranchi":              ["liver-ranchi"],
  "liver-specialist-vs-gastroenterologist-ranchi": ["liver-ranchi", "specialist-ranchi"],
  "best-gastroenterologist-ranchi":              ["specialist-ranchi"],
  "gastroenterologist-in-ranchi":                ["specialist-ranchi"],
  "stomach-specialist-ranchi":                   ["specialist-ranchi", "gi-symptoms-ranchi"],
  "stomach-doctor-ranchi":                       ["specialist-ranchi", "gi-symptoms-ranchi"],
  "jaundice-treatment-ranchi":                   ["liver-ranchi"],
  "acidity-doctor-ranchi":                       ["acidity-ranchi"],
  "piles-doctor-ranchi":                         ["piles-ranchi"],
  "ibs-doctor-ranchi":                           ["ibs-constipation-ranchi"],
  "constipation-doctor-ranchi":                  ["ibs-constipation-ranchi"],
  "stomach-ulcer-doctor-ranchi":                 ["acidity-ranchi", "gi-symptoms-ranchi"],
  "colon-cancer-screening-ranchi":               ["piles-ranchi", "procedure-ranchi"],
  "hemorrhoids-treatment-ranchi":                ["piles-ranchi"],
  "pancreatitis-doctor-ranchi":                  ["pancreatitis-ranchi"],
  "liver-problem-doctor-ranchi":                 ["liver-ranchi"],
  "digestive-specialist-ranchi":                 ["specialist-ranchi"],
  "hepatologist-ranchi":                         ["liver-ranchi"],
  "endoscopy-cost-ranchi":                       ["procedure-ranchi", "gi-symptoms-ranchi"],
  "colonoscopy-cost-ranchi":                     ["procedure-ranchi"],
  "eus-ranchi":                                  ["procedure-ranchi", "pancreatitis-ranchi"],
  "liver-biopsy-ranchi":                         ["procedure-ranchi", "liver-ranchi"],
  "colon-polyp-removal-ranchi":                  ["procedure-ranchi", "piles-ranchi"],
  "ranchi-mein-pet-ke-doctor":                   ["specialist-ranchi", "gi-symptoms-ranchi"],
  "ranchi-mein-liver-ka-doctor":                 ["liver-ranchi"],
  "ranchi-mein-acidity-ka-ilaj":                 ["acidity-ranchi"],
  "ranchi-ka-gastroenterologist":                ["specialist-ranchi"],
  "ranchi-mein-fatty-liver-ka-ilaj":             ["liver-ranchi"],
  "ranchi-mein-piles-ka-ilaj":                   ["piles-ranchi"],
  "ranchi-mein-jaundice-ka-ilaj":                ["liver-ranchi"],
  "kabj-ka-doctor-ranchi":                       ["ibs-constipation-ranchi"],
  "pet-ki-jalan-ka-ilaj-ranchi":                 ["acidity-ranchi"],
  "ranchi-mein-hepatitis-treatment":             ["liver-ranchi"],
  "crohns-disease-ranchi":                       ["ibd-ranchi"],
  "colitis-doctor-ranchi":                       ["ibd-ranchi"],
  "digestive-disease-ranchi":                    ["specialist-ranchi", "gi-symptoms-ranchi"],
  "pet-dard-doctor-ranchi":                      ["gi-symptoms-ranchi"],
  "kala-pakhana-doctor-ranchi":                  ["piles-ranchi", "gi-symptoms-ranchi"],
  "gas-problem-doctor-ranchi":                   ["gi-symptoms-ranchi", "ibs-constipation-ranchi"],
  "ulti-ka-doctor-ranchi":                       ["gi-symptoms-ranchi", "acidity-ranchi"],
  "jharkhand-mein-gastroenterologist":           ["location-ranchi", "specialist-ranchi"],
  "bokaro-mein-gastroenterologist":              ["location-ranchi"],
  "jamshedpur-se-ranchi-gastroenterologist":     ["location-ranchi"],
  "ranchi-mein-ibd-treatment":                   ["ibd-ranchi"],
  "swallowing-problem-ranchi":                   ["acidity-ranchi", "gi-symptoms-ranchi"],
  "rectal-bleeding-ranchi":                      ["piles-ranchi", "gi-symptoms-ranchi"],
  "unexplained-weight-loss-ranchi":              ["gi-symptoms-ranchi", "liver-ranchi"],
  "liver-cirrhosis-ranchi":                      ["liver-ranchi"],
  "endoscopy-clinic-ranchi":                     ["procedure-ranchi", "specialist-ranchi"],
  "ranchi-mein-ercp-cost":                       ["procedure-ranchi", "gallstone-ranchi"],
  "ranchi-mein-eus-test":                        ["procedure-ranchi", "pancreatitis-ranchi"],
  "capsule-endoscopy-ranchi":                    ["procedure-ranchi", "ibd-ranchi"],
  "ranchi-mein-colonoscopy-preparation":         ["procedure-ranchi", "ibd-ranchi"],
  "hazaribagh-se-ranchi-gastroenterologist":     ["location-ranchi"],
  "dhanbad-se-ranchi-gastroenterologist":        ["location-ranchi"],
  "deoghar-se-ranchi-gastroenterologist":        ["location-ranchi"],
  "orchid-medical-centre-gastro-ranchi":         ["specialist-ranchi"],
  "ranchi-mein-liver-test":                      ["liver-ranchi", "procedure-ranchi"],
  "ranchi-mein-stomach-cancer-screening":        ["procedure-ranchi"],
  "ranchi-mein-food-allergy-doctor":             ["ibs-constipation-ranchi", "ibd-ranchi"],
  "ranchi-mein-ascites-treatment":               ["liver-ranchi"],
  "ranchi-mein-fatty-liver-diet":                ["liver-ranchi"],
  "ranchi-mein-h-pylori-treatment":              ["acidity-ranchi", "gi-symptoms-ranchi"],
  "gallstone-doctor-ranchi":                     ["gallstone-ranchi"],
  "ranchi-mein-diarrhea-doctor":                 ["gi-symptoms-ranchi", "ibd-ranchi", "ibs-constipation-ranchi"],
  "ranchi-mein-nausea-doctor":                   ["gi-symptoms-ranchi", "acidity-ranchi"],
  "ranchi-mein-abdominal-pain-doctor":           ["gi-symptoms-ranchi"],
  "ranchi-mein-liver-cancer-screening":          ["liver-ranchi", "procedure-ranchi"],
};

// ── Explicit condition → blog mapping (ordered by relevance) ──────────────────
// Cluster-0 Ranchi-specific blogs listed FIRST (most relevant for local searchers),
// followed by general educational blogs.
const CONDITION_TO_BLOGS: Record<string, string[]> = {
  "fatty-liver": [
    "ranchi-mein-fatty-liver-ka-ilaj",
    "ranchi-mein-fatty-liver-diet",
    "ranchi-mein-liver-test",
    "liver-problem-doctor-ranchi",
    // general:
    "fatty-liver-mein-kya-khana-chahiye",
    "fatty-liver-diet-hindi",
    "fatty-liver-grade-1-2-3-differences-reversal",
    "fatty-liver-reversal-ranchi",
    "cholesterol-fatty-liver-connection-diet",
    "fibroscan-liver-test-ranchi-cost-procedure",
    "high-sgpt-sgot-causes-diet-remedies",
  ],
  "jaundice": [
    "jaundice-treatment-ranchi",
    "ranchi-mein-jaundice-ka-ilaj",
    "bilirubin-test-meaning-ranchi",
    // general:
    "jaundice-symptoms-causes",
    "hepatitis-b-c-prevention-treatment-facts",
    "high-sgpt-sgot-causes-diet-remedies",
    "understand-abdomen-ultrasound-report-findings",
  ],
  "liver-cirrhosis": [
    "liver-cirrhosis-ranchi",
    "ranchi-mein-ascites-treatment",
    "ranchi-mein-liver-ka-doctor",
    "hepatologist-ranchi",
    "liver-biopsy-ranchi",
    // general:
    "liver-cirrhosis-stages-treatment-india",
    "liver-cirrhosis-ascites-water-retention-management",
    "early-signs-alcoholic-liver-disease-prevention",
    "fibroscan-liver-test-ranchi-cost-procedure",
  ],
  "hepatitis": [
    "ranchi-mein-hepatitis-treatment",
    "hepatologist-ranchi",
    "bilirubin-test-meaning-ranchi",
    // general:
    "hepatitis-b-c-prevention-treatment-facts",
    "early-signs-alcoholic-liver-disease-prevention",
    "high-sgpt-sgot-causes-diet-remedies",
    "jaundice-symptoms-causes",
  ],
  "ibs": [
    "ibs-doctor-ranchi",
    "constipation-doctor-ranchi",
    "kabj-ka-doctor-ranchi",
    "ranchi-mein-food-allergy-doctor",
    "ranchi-mein-diarrhea-doctor",
    // general:
    "ibs-stress-indian-diet",
    "chronic-constipation-cure-indian-diet",
    "celiac-disease-gluten-free-indian-diet",
    "lactose-intolerance-indian-dairy-alternatives",
    "chronic-gas-bloating-cures-home-remedies",
  ],
  "acid-reflux": [
    "acidity-doctor-ranchi",
    "ranchi-mein-acidity-ka-ilaj",
    "pet-ki-jalan-ka-ilaj-ranchi",
    "swallowing-problem-ranchi",
    // general:
    "gerd-acid-reflux-cure-ranchi",
    "does-cold-milk-cure-acidity-myths-facts",
    "silent-reflux-lpr-throat-globus-cough",
    "peptic-ulcer-h-pylori-diet-cure",
  ],
  "gallstone": [
    "gallstone-doctor-ranchi",
    "ranchi-mein-ercp-cost",
    // general:
    "gallstones-dissolve-myths-india",
    "laparoscopic-gallbladder-surgery-ranchi-recovery",
    "ercp-procedure-cbd-stones-ranchi",
  ],
  "pancreatitis": [
    "pancreatitis-doctor-ranchi",
    "ranchi-mein-eus-test",
    "eus-ranchi",
    "ranchi-mein-ercp-cost",
    // general:
    "acute-chronic-pancreatitis-diet-causes",
    "ercp-procedure-cbd-stones-ranchi",
    "understand-abdomen-ultrasound-report-findings",
  ],
  "liver-cancer": [
    "ranchi-mein-liver-cancer-screening",
    "ranchi-mein-stomach-cancer-screening",
    // general:
    "liver-cirrhosis-stages-treatment-india",
    "early-signs-alcoholic-liver-disease-prevention",
    "fibroscan-liver-test-ranchi-cost-procedure",
    "hepatitis-b-c-prevention-treatment-facts",
  ],
  "ulcerative-colitis": [
    "colitis-doctor-ranchi",
    "ranchi-mein-ibd-treatment",
    "crohns-disease-ranchi",
    "ranchi-mein-colonoscopy-preparation",
    "capsule-endoscopy-ranchi",
    "ranchi-mein-food-allergy-doctor",
    // general:
    "ulcerative-colitis-ibd-diet-management",
    "chronic-constipation-cure-indian-diet",
    "blood-in-stool-causes-piles-vs-cancer",
  ],
  "abdominal-pain": [
    "ranchi-mein-abdominal-pain-doctor",
    "pet-dard-doctor-ranchi",
    "ranchi-mein-pet-ke-doctor",
    "gas-problem-doctor-ranchi",
    // general:
    "chronic-gas-bloating-cures-home-remedies",
    "chronic-constipation-cure-indian-diet",
    "understand-abdomen-ultrasound-report-findings",
    "ibs-stress-indian-diet",
  ],
  "liver-transplant": [
    "ranchi-mein-liver-ka-doctor",
    "hepatologist-ranchi",
    "liver-cirrhosis-ranchi",
    // general:
    "liver-cirrhosis-stages-treatment-india",
    "liver-cirrhosis-ascites-water-retention-management",
    "early-signs-alcoholic-liver-disease-prevention",
  ],
  "peptic-ulcer": [
    "stomach-ulcer-doctor-ranchi",
    "ranchi-mein-h-pylori-treatment",
    // general:
    "peptic-ulcer-h-pylori-diet-cure",
    "h-pylori-recurrence-prevention-tips",
    "gerd-acid-reflux-cure-ranchi",
    "does-cold-milk-cure-acidity-myths-facts",
  ],
  "gi-bleeding": [
    "kala-pakhana-doctor-ranchi",
    "piles-doctor-ranchi",
    "ranchi-mein-piles-ka-ilaj",
    "rectal-bleeding-ranchi",
    "colon-cancer-screening-ranchi",
    "hemorrhoids-treatment-ranchi",
    // general:
    "blood-in-stool-causes-piles-vs-cancer",
    "piles-fissure-fistula-differences-treatment",
    "endoscopy-kya-hota-hai",
  ],
  "h-pylori-dyspepsia": [
    "ranchi-mein-h-pylori-treatment",
    "acidity-doctor-ranchi",
    "stomach-ulcer-doctor-ranchi",
    // general:
    "peptic-ulcer-h-pylori-diet-cure",
    "h-pylori-recurrence-prevention-tips",
    "gerd-acid-reflux-cure-ranchi",
    "does-cold-milk-cure-acidity-myths-facts",
  ],
  "weight-loss": [
    "unexplained-weight-loss-ranchi",
    "ranchi-mein-stomach-cancer-screening",
    // general:
    "fatty-liver-reversal-ranchi",
    "cholesterol-fatty-liver-connection-diet",
    "fatty-liver-diet-hindi",
    "chronic-constipation-cure-indian-diet",
  ],
};

// ── Explicit blog → condition(s) mapping ──────────────────────────────────────
// All Cluster-0 Ranchi blogs + existing general blogs.
const BLOG_TO_CONDITIONS: Record<string, string[]> = {
  // ── General / Cluster-1 blogs ─────────────────────────────────────────────
  "fatty-liver-diet-hindi":                    ["fatty-liver"],
  "fatty-liver-mein-kya-khana-chahiye":        ["fatty-liver"],
  "fatty-liver-reversal-ranchi":               ["fatty-liver"],
  "fatty-liver-grade-1-2-3-differences-reversal": ["fatty-liver"],
  "cholesterol-fatty-liver-connection-diet":   ["fatty-liver"],
  "fibroscan-liver-test-ranchi-cost-procedure": ["fatty-liver", "liver-cirrhosis"],
  "high-sgpt-sgot-causes-diet-remedies":       ["fatty-liver", "hepatitis", "jaundice"],
  "jaundice-symptoms-causes":                  ["jaundice"],
  "hepatitis-b-c-prevention-treatment-facts":  ["hepatitis", "jaundice"],
  "liver-cirrhosis-stages-treatment-india":    ["liver-cirrhosis"],
  "liver-cirrhosis-ascites-water-retention-management": ["liver-cirrhosis"],
  "early-signs-alcoholic-liver-disease-prevention": ["liver-cirrhosis", "hepatitis"],
  "ibs-stress-indian-diet":                    ["ibs"],
  "celiac-disease-gluten-free-indian-diet":    ["ibs"],
  "lactose-intolerance-indian-dairy-alternatives": ["ibs"],
  "gerd-acid-reflux-cure-ranchi":              ["acid-reflux"],
  "does-cold-milk-cure-acidity-myths-facts":   ["acid-reflux", "h-pylori-dyspepsia"],
  "silent-reflux-lpr-throat-globus-cough":     ["acid-reflux"],
  "gallstones-dissolve-myths-india":           ["gallstone"],
  "laparoscopic-gallbladder-surgery-ranchi-recovery": ["gallstone"],
  "ercp-procedure-cbd-stones-ranchi":          ["gallstone", "pancreatitis"],
  "acute-chronic-pancreatitis-diet-causes":    ["pancreatitis"],
  "ulcerative-colitis-ibd-diet-management":    ["ulcerative-colitis"],
  "chronic-constipation-cure-indian-diet":     ["abdominal-pain", "ibs"],
  "chronic-gas-bloating-cures-home-remedies":  ["abdominal-pain"],
  "understand-abdomen-ultrasound-report-findings": ["abdominal-pain"],
  "peptic-ulcer-h-pylori-diet-cure":           ["peptic-ulcer", "h-pylori-dyspepsia"],
  "h-pylori-recurrence-prevention-tips":       ["h-pylori-dyspepsia", "peptic-ulcer"],
  "blood-in-stool-causes-piles-vs-cancer":     ["gi-bleeding"],
  "piles-fissure-fistula-differences-treatment": ["gi-bleeding"],
  "endoscopy-kya-hota-hai":                    ["gi-bleeding"],

  // ── Cluster-0 / Ranchi-local blogs ───────────────────────────────────────
  "bilirubin-test-meaning-ranchi":              ["jaundice", "liver-cirrhosis"],
  "liver-specialist-vs-gastroenterologist-ranchi": ["fatty-liver", "liver-cirrhosis"],
  "best-gastroenterologist-ranchi":             ["abdominal-pain", "fatty-liver"],
  "gastroenterologist-in-ranchi":               ["abdominal-pain", "ibs"],
  "stomach-specialist-ranchi":                  ["abdominal-pain"],
  "stomach-doctor-ranchi":                      ["abdominal-pain"],
  "jaundice-treatment-ranchi":                  ["jaundice"],
  "acidity-doctor-ranchi":                      ["acid-reflux"],
  "piles-doctor-ranchi":                        ["gi-bleeding"],
  "ibs-doctor-ranchi":                          ["ibs"],
  "constipation-doctor-ranchi":                 ["ibs"],
  "stomach-ulcer-doctor-ranchi":                ["peptic-ulcer", "h-pylori-dyspepsia"],
  "colon-cancer-screening-ranchi":              ["gi-bleeding"],
  "hemorrhoids-treatment-ranchi":               ["gi-bleeding"],
  "pancreatitis-doctor-ranchi":                 ["pancreatitis"],
  "liver-problem-doctor-ranchi":                ["fatty-liver", "liver-cirrhosis"],
  "digestive-specialist-ranchi":                ["ibs", "abdominal-pain"],
  "hepatologist-ranchi":                        ["hepatitis", "liver-cirrhosis"],
  "endoscopy-cost-ranchi":                      ["acid-reflux", "gi-bleeding"],
  "colonoscopy-cost-ranchi":                    ["ulcerative-colitis", "gi-bleeding"],
  "eus-ranchi":                                 ["pancreatitis"],
  "liver-biopsy-ranchi":                        ["liver-cirrhosis", "hepatitis"],
  "colon-polyp-removal-ranchi":                 ["ulcerative-colitis", "gi-bleeding"],
  "ranchi-mein-pet-ke-doctor":                  ["abdominal-pain"],
  "ranchi-mein-liver-ka-doctor":                ["fatty-liver", "liver-cirrhosis"],
  "ranchi-mein-acidity-ka-ilaj":                ["acid-reflux"],
  "ranchi-ka-gastroenterologist":               ["abdominal-pain", "ibs"],
  "ranchi-mein-fatty-liver-ka-ilaj":            ["fatty-liver"],
  "ranchi-mein-piles-ka-ilaj":                  ["gi-bleeding"],
  "ranchi-mein-jaundice-ka-ilaj":               ["jaundice"],
  "kabj-ka-doctor-ranchi":                      ["ibs"],
  "pet-ki-jalan-ka-ilaj-ranchi":                ["acid-reflux"],
  "ranchi-mein-hepatitis-treatment":            ["hepatitis"],
  "crohns-disease-ranchi":                      ["ulcerative-colitis"],
  "colitis-doctor-ranchi":                      ["ulcerative-colitis"],
  "digestive-disease-ranchi":                   ["ibs", "abdominal-pain"],
  "pet-dard-doctor-ranchi":                     ["abdominal-pain"],
  "kala-pakhana-doctor-ranchi":                 ["gi-bleeding"],
  "gas-problem-doctor-ranchi":                  ["ibs", "acid-reflux"],
  "ulti-ka-doctor-ranchi":                      ["acid-reflux", "h-pylori-dyspepsia"],
  "jharkhand-mein-gastroenterologist":          ["fatty-liver", "ibs"],
  "bokaro-mein-gastroenterologist":             ["fatty-liver", "ibs"],
  "jamshedpur-se-ranchi-gastroenterologist":    ["fatty-liver", "ibs"],
  "ranchi-mein-ibd-treatment":                  ["ulcerative-colitis"],
  "swallowing-problem-ranchi":                  ["acid-reflux"],
  "rectal-bleeding-ranchi":                     ["gi-bleeding"],
  "unexplained-weight-loss-ranchi":             ["weight-loss"],
  "liver-cirrhosis-ranchi":                     ["liver-cirrhosis"],
  "endoscopy-clinic-ranchi":                    ["acid-reflux", "gi-bleeding"],
  "ranchi-mein-ercp-cost":                      ["gallstone", "pancreatitis"],
  "ranchi-mein-eus-test":                       ["pancreatitis", "abdominal-pain"],
  "capsule-endoscopy-ranchi":                   ["ulcerative-colitis", "gi-bleeding"],
  "ranchi-mein-colonoscopy-preparation":        ["ulcerative-colitis", "gi-bleeding"],
  "hazaribagh-se-ranchi-gastroenterologist":    ["fatty-liver", "ibs"],
  "dhanbad-se-ranchi-gastroenterologist":       ["fatty-liver", "ibs"],
  "deoghar-se-ranchi-gastroenterologist":       ["fatty-liver", "ibs"],
  "orchid-medical-centre-gastro-ranchi":        ["abdominal-pain", "fatty-liver"],
  "ranchi-mein-liver-test":                     ["fatty-liver", "liver-cirrhosis", "hepatitis"],
  "ranchi-mein-stomach-cancer-screening":       ["gi-bleeding", "weight-loss"],
  "ranchi-mein-food-allergy-doctor":            ["ibs", "ulcerative-colitis"],
  "ranchi-mein-ascites-treatment":              ["liver-cirrhosis"],
  "ranchi-mein-fatty-liver-diet":               ["fatty-liver"],
  "ranchi-mein-h-pylori-treatment":             ["h-pylori-dyspepsia", "peptic-ulcer"],
  "gallstone-doctor-ranchi":                    ["gallstone"],
  "ranchi-mein-diarrhea-doctor":                ["ibs", "ulcerative-colitis"],
  "ranchi-mein-nausea-doctor":                  ["acid-reflux", "h-pylori-dyspepsia"],
  "ranchi-mein-abdominal-pain-doctor":          ["abdominal-pain", "ibs"],
  "ranchi-mein-liver-cancer-screening":         ["liver-cancer", "liver-cirrhosis"],
};

// ── Public API ─────────────────────────────────────────────────────────────────

/** Related blogs for a condition detail page (sidebar / related section). */
export function getRelatedBlogsForCondition(conditionSlug: string, limit = 3) {
  const slugs = (CONDITION_TO_BLOGS[conditionSlug] ?? []).slice(0, limit);
  return slugs
    .map((s) => BLOG_POSTS.find((b) => b.slug === s))
    .filter((b): b is (typeof BLOG_POSTS)[number] => b !== undefined);
}

/** The condition page(s) a blog should link back to. */
export function getRelatedConditionsForBlog(blogSlug: string) {
  const conditionSlugs = BLOG_TO_CONDITIONS[blogSlug] ?? [];
  return conditionSlugs
    .map((s) => ALL_SERVICES.find((c) => c.slug === s))
    .filter((c): c is (typeof ALL_SERVICES)[number] => c !== undefined);
}

/**
 * Related blog posts for the "Recommended Reads" section.
 * Uses condition-based transitivity; falls back to same-category pool.
 */
export function getRelatedBlogsForBlog(blogSlug: string, limit = 2) {
  const conditionSlugs = BLOG_TO_CONDITIONS[blogSlug] ?? [];
  const seen = new Set<string>([blogSlug]);
  const result: (typeof BLOG_POSTS)[number][] = [];

  for (const conditionSlug of conditionSlugs) {
    for (const relSlug of CONDITION_TO_BLOGS[conditionSlug] ?? []) {
      if (!seen.has(relSlug) && result.length < limit) {
        const blog = BLOG_POSTS.find((b) => b.slug === relSlug);
        if (blog) { result.push(blog); seen.add(relSlug); }
      }
    }
  }

  // Fallback: fill remaining slots from general pool
  if (result.length < limit) {
    for (const blog of BLOG_POSTS) {
      if (!seen.has(blog.slug) && result.length < limit) {
        result.push(blog); seen.add(blog.slug);
      }
    }
  }

  return result;
}

/**
 * Within-cluster "More Ranchi Guides" links.
 * Returns 3 same-topic Cluster-0 blogs for a given Cluster-0 slug.
 * Returns empty array for non-Cluster-0 blogs.
 */
export function getCluster0Related(blogSlug: string, limit = 3): (typeof BLOG_POSTS)[number][] {
  const groups = CLUSTER0_BLOG_GROUPS[blogSlug];
  if (!groups || groups.length === 0) return [];

  const seen = new Set<string>([blogSlug]);
  const result: (typeof BLOG_POSTS)[number][] = [];

  for (const groupKey of groups) {
    for (const peer of CLUSTER0_GROUPS[groupKey] ?? []) {
      if (!seen.has(peer) && result.length < limit) {
        const blog = BLOG_POSTS.find((b) => b.slug === peer);
        if (blog) { result.push(blog); seen.add(peer); }
      }
    }
  }

  return result;
}

/** True if the given blog slug belongs to Cluster-0 (Ranchi-local targeting). */
export function isCluster0Blog(blogSlug: string): boolean {
  return blogSlug in CLUSTER0_BLOG_GROUPS;
}
