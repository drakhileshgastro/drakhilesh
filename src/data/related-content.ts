import { BLOG_POSTS } from "./blog-data";
import { ALL_SERVICES } from "./services-data";

// Explicit condition → blog mapping (ordered by relevance)
const CONDITION_TO_BLOGS: Record<string, string[]> = {
  "fatty-liver": [
    "fatty-liver-mein-kya-khana-chahiye",
    "fatty-liver-diet-hindi",
    "fatty-liver-grade-1-2-3-differences-reversal",
    "fatty-liver-reversal-ranchi",
    "cholesterol-fatty-liver-connection-diet",
    "fibroscan-liver-test-ranchi-cost-procedure",
    "high-sgpt-sgot-causes-diet-remedies",
  ],
  "jaundice": [
    "jaundice-symptoms-causes",
    "hepatitis-b-c-prevention-treatment-facts",
    "high-sgpt-sgot-causes-diet-remedies",
    "understand-abdomen-ultrasound-report-findings",
  ],
  "liver-cirrhosis": [
    "liver-cirrhosis-stages-treatment-india",
    "liver-cirrhosis-ascites-water-retention-management",
    "early-signs-alcoholic-liver-disease-prevention",
    "fibroscan-liver-test-ranchi-cost-procedure",
  ],
  "hepatitis": [
    "hepatitis-b-c-prevention-treatment-facts",
    "early-signs-alcoholic-liver-disease-prevention",
    "high-sgpt-sgot-causes-diet-remedies",
    "jaundice-symptoms-causes",
  ],
  "ibs": [
    "ibs-stress-indian-diet",
    "chronic-constipation-cure-indian-diet",
    "celiac-disease-gluten-free-indian-diet",
    "lactose-intolerance-indian-dairy-alternatives",
    "chronic-gas-bloating-cures-home-remedies",
  ],
  "acid-reflux": [
    "gerd-acid-reflux-cure-ranchi",
    "does-cold-milk-cure-acidity-myths-facts",
    "silent-reflux-lpr-throat-globus-cough",
    "peptic-ulcer-h-pylori-diet-cure",
  ],
  "gallstone": [
    "gallstones-dissolve-myths-india",
    "laparoscopic-gallbladder-surgery-ranchi-recovery",
    "ercp-procedure-cbd-stones-ranchi",
  ],
  "pancreatitis": [
    "acute-chronic-pancreatitis-diet-causes",
    "ercp-procedure-cbd-stones-ranchi",
    "understand-abdomen-ultrasound-report-findings",
  ],
  "liver-cancer": [
    "liver-cirrhosis-stages-treatment-india",
    "early-signs-alcoholic-liver-disease-prevention",
    "fibroscan-liver-test-ranchi-cost-procedure",
    "hepatitis-b-c-prevention-treatment-facts",
  ],
  "ulcerative-colitis": [
    "ulcerative-colitis-ibd-diet-management",
    "chronic-constipation-cure-indian-diet",
    "blood-in-stool-causes-piles-vs-cancer",
  ],
  "abdominal-pain": [
    "chronic-gas-bloating-cures-home-remedies",
    "chronic-constipation-cure-indian-diet",
    "understand-abdomen-ultrasound-report-findings",
    "ibs-stress-indian-diet",
  ],
  "liver-transplant": [
    "liver-cirrhosis-stages-treatment-india",
    "liver-cirrhosis-ascites-water-retention-management",
    "early-signs-alcoholic-liver-disease-prevention",
  ],
  "peptic-ulcer": [
    "peptic-ulcer-h-pylori-diet-cure",
    "h-pylori-recurrence-prevention-tips",
    "gerd-acid-reflux-cure-ranchi",
    "does-cold-milk-cure-acidity-myths-facts",
  ],
  "gi-bleeding": [
    "blood-in-stool-causes-piles-vs-cancer",
    "piles-fissure-fistula-differences-treatment",
    "endoscopy-kya-hota-hai",
  ],
  "h-pylori-dyspepsia": [
    "peptic-ulcer-h-pylori-diet-cure",
    "h-pylori-recurrence-prevention-tips",
    "gerd-acid-reflux-cure-ranchi",
    "does-cold-milk-cure-acidity-myths-facts",
  ],
  "weight-loss": [
    "fatty-liver-reversal-ranchi",
    "cholesterol-fatty-liver-connection-diet",
    "fatty-liver-diet-hindi",
    "chronic-constipation-cure-indian-diet",
  ],
};

// Explicit blog → condition(s) mapping
const BLOG_TO_CONDITIONS: Record<string, string[]> = {
  "fatty-liver-diet-hindi": ["fatty-liver"],
  "fatty-liver-mein-kya-khana-chahiye": ["fatty-liver"],
  "fatty-liver-reversal-ranchi": ["fatty-liver"],
  "fatty-liver-grade-1-2-3-differences-reversal": ["fatty-liver"],
  "cholesterol-fatty-liver-connection-diet": ["fatty-liver"],
  "fibroscan-liver-test-ranchi-cost-procedure": ["fatty-liver", "liver-cirrhosis"],
  "high-sgpt-sgot-causes-diet-remedies": ["fatty-liver", "hepatitis", "jaundice"],
  "jaundice-symptoms-causes": ["jaundice"],
  "hepatitis-b-c-prevention-treatment-facts": ["hepatitis", "jaundice"],
  "liver-cirrhosis-stages-treatment-india": ["liver-cirrhosis"],
  "liver-cirrhosis-ascites-water-retention-management": ["liver-cirrhosis"],
  "early-signs-alcoholic-liver-disease-prevention": ["liver-cirrhosis", "hepatitis"],
  "ibs-stress-indian-diet": ["ibs"],
  "celiac-disease-gluten-free-indian-diet": ["ibs"],
  "lactose-intolerance-indian-dairy-alternatives": ["ibs"],
  "gerd-acid-reflux-cure-ranchi": ["acid-reflux"],
  "does-cold-milk-cure-acidity-myths-facts": ["acid-reflux", "h-pylori-dyspepsia"],
  "silent-reflux-lpr-throat-globus-cough": ["acid-reflux"],
  "gallstones-dissolve-myths-india": ["gallstone"],
  "laparoscopic-gallbladder-surgery-ranchi-recovery": ["gallstone"],
  "ercp-procedure-cbd-stones-ranchi": ["gallstone", "pancreatitis"],
  "acute-chronic-pancreatitis-diet-causes": ["pancreatitis"],
  "ulcerative-colitis-ibd-diet-management": ["ulcerative-colitis"],
  "chronic-constipation-cure-indian-diet": ["abdominal-pain", "ibs"],
  "chronic-gas-bloating-cures-home-remedies": ["abdominal-pain"],
  "understand-abdomen-ultrasound-report-findings": ["abdominal-pain"],
  "peptic-ulcer-h-pylori-diet-cure": ["peptic-ulcer", "h-pylori-dyspepsia"],
  "h-pylori-recurrence-prevention-tips": ["h-pylori-dyspepsia", "peptic-ulcer"],
  "blood-in-stool-causes-piles-vs-cancer": ["gi-bleeding"],
  "piles-fissure-fistula-differences-treatment": ["gi-bleeding"],
  "endoscopy-kya-hota-hai": ["gi-bleeding"],
};

export function getRelatedBlogsForCondition(conditionSlug: string, limit = 3) {
  const slugs = (CONDITION_TO_BLOGS[conditionSlug] ?? []).slice(0, limit);
  return slugs
    .map((s) => BLOG_POSTS.find((b) => b.slug === s))
    .filter((b): b is (typeof BLOG_POSTS)[number] => b !== undefined);
}

export function getRelatedConditionsForBlog(blogSlug: string) {
  const conditionSlugs = BLOG_TO_CONDITIONS[blogSlug] ?? [];
  return conditionSlugs
    .map((s) => ALL_SERVICES.find((c) => c.slug === s))
    .filter((c): c is (typeof ALL_SERVICES)[number] => c !== undefined);
}

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
