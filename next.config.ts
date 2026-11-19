import type { NextConfig } from "next";

// CSP is set dynamically in src/middleware.ts (nonce-based) — no unsafe-inline/unsafe-eval
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(self)" },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // www → non-www (consolidates canonical authority)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.drakhileshgastro.com" }],
        destination: "https://drakhileshgastro.com/:path*",
        permanent: true,
      },
      // Procedure-type services → /procedures/ (these live at /procedures/, not /conditions/)
      { source: "/services/endoscopy", destination: "/procedures/endoscopy", permanent: true },
      { source: "/services/colonoscopy", destination: "/procedures/colonoscopy", permanent: true },
      { source: "/services/ercp", destination: "/procedures/ercp", permanent: true },
      // All other /services/ → /conditions/ (old indexed URLs preserved)
      {
        source: "/services/:slug",
        destination: "/conditions/:slug",
        permanent: true,
      },

      // ── DOORWAY PAGES CONSOLIDATION ────────────────────────────
      // /locations/ranchi cannibalizes the homepage's primary "Gastroenterologist in Ranchi" target
      { source: "/locations/ranchi", destination: "/", permanent: true },

      // ── FRAGMENTED ROUTES CONSOLIDATION (Merge /symptoms/ into /conditions/ & /procedures/) ──
      { source: "/symptoms", destination: "/conditions", permanent: true },
      { source: "/symptoms/stomach-pain", destination: "/conditions/abdominal-pain", permanent: true },
      { source: "/symptoms/gas-bloating", destination: "/conditions/ibs", permanent: true },
      { source: "/symptoms/acidity", destination: "/conditions/acid-reflux", permanent: true },
      { source: "/symptoms/constipation", destination: "/conditions/ibs", permanent: true },
      { source: "/symptoms/diarrhoea", destination: "/conditions/ibs", permanent: true },
      { source: "/symptoms/vomiting", destination: "/conditions/peptic-ulcer", permanent: true },
      { source: "/symptoms/blood-in-stool", destination: "/conditions/gi-bleeding", permanent: true },
      { source: "/symptoms/difficulty-swallowing", destination: "/procedures/endoscopy", permanent: true },
      { source: "/symptoms/weight-loss", destination: "/conditions/weight-loss", permanent: true },
      { source: "/symptoms/jaundice", destination: "/conditions/jaundice", permanent: true },

      // ── SCALED BLOG CONSOLIDATION & CANNIBALIZATION FIXES ──────────
      // 1. Local Head Intent (Cannibalizing Homepage /)
      { source: "/blog/best-gastroenterologist-ranchi", destination: "/", permanent: true },
      { source: "/blog/gastroenterologist-in-ranchi", destination: "/", permanent: true },
      { source: "/blog/ranchi-ka-gastroenterologist", destination: "/", permanent: true },
      { source: "/blog/stomach-specialist-ranchi", destination: "/", permanent: true },
      { source: "/blog/stomach-doctor-ranchi", destination: "/", permanent: true },
      { source: "/blog/ranchi-mein-pet-ke-doctor", destination: "/", permanent: true },
      { source: "/blog/digestive-specialist-ranchi", destination: "/", permanent: true },
      { source: "/blog/jharkhand-mein-gastroenterologist", destination: "/", permanent: true },
      { source: "/blog/orchid-medical-centre-gastro-ranchi", destination: "/about", permanent: true },
      { source: "/blog/liver-specialist-vs-gastroenterologist-ranchi", destination: "/about", permanent: true },

      // 2. Feeder City Blogs (Consolidating to Location Hubs)
      { source: "/blog/bokaro-mein-gastroenterologist", destination: "/locations/bokaro", permanent: true },
      { source: "/blog/dhanbad-se-ranchi-gastroenterologist", destination: "/locations/dhanbad", permanent: true },
      { source: "/blog/hazaribagh-se-ranchi-gastroenterologist", destination: "/locations/hazaribagh", permanent: true },
      { source: "/blog/jamshedpur-se-ranchi-gastroenterologist", destination: "/locations/jamshedpur", permanent: true },
      { source: "/blog/deoghar-se-ranchi-gastroenterologist", destination: "/locations/deoghar", permanent: true },

      // 3. Condition Duplicate Blogs (Consolidating to Condition Authority Pages)
      { source: "/blog/ranchi-mein-liver-ka-doctor", destination: "/conditions/fatty-liver", permanent: true },
      { source: "/blog/hepatologist-ranchi", destination: "/conditions/fatty-liver", permanent: true },
      { source: "/blog/liver-problem-doctor-ranchi", destination: "/conditions/fatty-liver", permanent: true },
      { source: "/blog/fatty-liver-reversal-ranchi", destination: "/conditions/fatty-liver", permanent: true },
      { source: "/blog/ranchi-mein-fatty-liver-ka-ilaj", destination: "/conditions/fatty-liver", permanent: true },
      { source: "/blog/ranchi-mein-fatty-liver-diet", destination: "/conditions/fatty-liver", permanent: true },

      { source: "/blog/jaundice-treatment-ranchi", destination: "/conditions/jaundice", permanent: true },
      { source: "/blog/ranchi-mein-jaundice-ka-ilaj", destination: "/conditions/jaundice", permanent: true },

      { source: "/blog/acidity-doctor-ranchi", destination: "/conditions/acid-reflux", permanent: true },
      { source: "/blog/ranchi-mein-acidity-ka-ilaj", destination: "/conditions/acid-reflux", permanent: true },
      { source: "/blog/pet-ki-jalan-ka-ilaj-ranchi", destination: "/conditions/acid-reflux", permanent: true },
      { source: "/blog/gerd-acid-reflux-cure-ranchi", destination: "/conditions/acid-reflux", permanent: true },

      { source: "/blog/piles-doctor-ranchi", destination: "/conditions/gi-bleeding", permanent: true },
      { source: "/blog/ranchi-mein-piles-ka-ilaj", destination: "/conditions/gi-bleeding", permanent: true },
      { source: "/blog/hemorrhoids-treatment-ranchi", destination: "/conditions/gi-bleeding", permanent: true },
      { source: "/blog/rectal-bleeding-ranchi", destination: "/conditions/gi-bleeding", permanent: true },
      { source: "/blog/kala-pakhana-doctor-ranchi", destination: "/conditions/gi-bleeding", permanent: true },

      { source: "/blog/constipation-doctor-ranchi", destination: "/conditions/ibs", permanent: true },
      { source: "/blog/kabj-ka-doctor-ranchi", destination: "/conditions/ibs", permanent: true },
      { source: "/blog/ibs-doctor-ranchi", destination: "/conditions/ibs", permanent: true },
      { source: "/blog/gas-problem-doctor-ranchi", destination: "/conditions/ibs", permanent: true },
      { source: "/blog/ranchi-mein-diarrhea-doctor", destination: "/conditions/ibs", permanent: true },

      { source: "/blog/ranchi-mein-ibd-treatment", destination: "/conditions/ulcerative-colitis", permanent: true },
      { source: "/blog/colitis-doctor-ranchi", destination: "/conditions/ulcerative-colitis", permanent: true },
      { source: "/blog/crohns-disease-ranchi", destination: "/conditions/ulcerative-colitis", permanent: true },
      { source: "/blog/digestive-disease-ranchi", destination: "/conditions/ulcerative-colitis", permanent: true },

      { source: "/blog/pancreatitis-doctor-ranchi", destination: "/conditions/pancreatitis", permanent: true },
      { source: "/blog/gallstone-doctor-ranchi", destination: "/conditions/gallstone", permanent: true },
      { source: "/blog/pet-dard-doctor-ranchi", destination: "/conditions/abdominal-pain", permanent: true },
      { source: "/blog/ranchi-mein-abdominal-pain-doctor", destination: "/conditions/abdominal-pain", permanent: true },
      { source: "/blog/stomach-ulcer-doctor-ranchi", destination: "/conditions/peptic-ulcer", permanent: true },
      { source: "/blog/ranchi-mein-nausea-doctor", destination: "/conditions/peptic-ulcer", permanent: true },
      { source: "/blog/ulti-ka-doctor-ranchi", destination: "/conditions/peptic-ulcer", permanent: true },
      { source: "/blog/ranchi-mein-h-pylori-treatment", destination: "/conditions/h-pylori-dyspepsia", permanent: true },
      { source: "/blog/ranchi-mein-hepatitis-treatment", destination: "/conditions/hepatitis", permanent: true },
      { source: "/blog/liver-cirrhosis-ranchi", destination: "/conditions/liver-cirrhosis", permanent: true },
      { source: "/blog/ranchi-mein-ascites-treatment", destination: "/conditions/liver-cirrhosis", permanent: true },
      { source: "/blog/ranchi-mein-liver-cancer-screening", destination: "/conditions/liver-cancer", permanent: true },
      { source: "/blog/unexplained-weight-loss-ranchi", destination: "/conditions/weight-loss", permanent: true },

      // 4. Procedure Duplicate Blogs (Consolidating to Procedure Authority Pages)
      { source: "/blog/swallowing-problem-ranchi", destination: "/procedures/endoscopy", permanent: true },
      { source: "/blog/endoscopy-clinic-ranchi", destination: "/procedures/endoscopy", permanent: true },
      { source: "/blog/painless-endoscopy-ranchi", destination: "/procedures/endoscopy", permanent: true },
      { source: "/blog/ranchi-mein-stomach-cancer-screening", destination: "/procedures/endoscopy", permanent: true },
      { source: "/blog/capsule-endoscopy-ranchi", destination: "/procedures/endoscopy", permanent: true },
      { source: "/blog/endoscopy-cost-in-ranchi-preparation-painless-hindi", destination: "/blog/endoscopy-cost-ranchi", permanent: true },

      { source: "/blog/painless-colonoscopy-ranchi-cost-preparation", destination: "/procedures/colonoscopy", permanent: true },
      { source: "/blog/ranchi-mein-colonoscopy-preparation", destination: "/procedures/colonoscopy", permanent: true },
      { source: "/blog/colonoscopy-test-cost-in-ranchi-preparation-hindi", destination: "/blog/colonoscopy-cost-ranchi", permanent: true },
      { source: "/blog/colon-cancer-screening-ranchi", destination: "/procedures/colonoscopy", permanent: true },
      { source: "/blog/colon-polyp-removal-ranchi", destination: "/procedures/polypectomy", permanent: true },

      { source: "/blog/fibroscan-test-cost-ranchi-liver-hindi", destination: "/blog/fibroscan-liver-test-ranchi-cost-procedure", permanent: true },
      { source: "/blog/ranchi-mein-liver-test", destination: "/procedures/fibroscan", permanent: true },

      { source: "/blog/ranchi-mein-ercp-cost", destination: "/procedures/ercp", permanent: true },
      { source: "/blog/ercp-procedure-cbd-stones-ranchi", destination: "/procedures/ercp", permanent: true },
      { source: "/blog/ranchi-mein-eus-test", destination: "/procedures/eus", permanent: true },
      { source: "/blog/eus-ranchi", destination: "/procedures/eus", permanent: true },
      { source: "/blog/liver-biopsy-ranchi", destination: "/procedures/liver-biopsy", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      { protocol: "https", hostname: "*.supabase.co" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
