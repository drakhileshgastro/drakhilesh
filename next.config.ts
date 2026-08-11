import type { NextConfig } from "next";

// CSP is set dynamically in src/middleware.ts (nonce-based) — no unsafe-inline/unsafe-eval
const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-XSS-Protection", value: "1; mode=block" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
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
      // Blog cannibalization: stomach-doctor-ranchi is near-duplicate of stomach-specialist-ranchi
      // 301 consolidates ranking signals to the more comprehensive page (§15)
      {
        source: "/blog/stomach-doctor-ranchi",
        destination: "/blog/stomach-specialist-ranchi",
        permanent: true,
      },
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
