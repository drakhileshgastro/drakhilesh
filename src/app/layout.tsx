import type { Metadata } from "next";
import { Manrope, Inter, Mukta } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import { Toaster } from "sonner";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsProvider from "@/components/analytics-provider";
import "./globals.css";

const GA_ID = "G-ZYE92TKM0W";
const AW_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const mukta = Mukta({
  variable: "--font-mukta",
  subsets: ["devanagari", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Akhilesh Yadav — DM Gastroenterologist in Ranchi | Liver & Stomach Specialist",
  description:
    "Dr. Akhilesh Yadav is a DM Gastroenterologist & Hepatologist at Orchid Medical Centre, Ranchi. Expert care for liver disease, fatty liver, jaundice, endoscopy & all digestive conditions. Serving patients from Jharkhand, Bihar & Chhattisgarh.",
  keywords: [
    "gastroenterologist in Ranchi",
    "best gastroenterologist in Ranchi",
    "stomach doctor in Ranchi",
    "gastro doctor in Ranchi",
    "gastrologist doctor in Ranchi",
    "pet ka doctor in Ranchi",
    "best stomach doctor in Ranchi",
    "best liver specialist in Ranchi",
    "liver specialist in Ranchi",
    "hepatologist in Ranchi",
    "top 10 gastroenterologist in Ranchi",
    "Dr Akhilesh Yadav",
    "Orchid Medical Centre Ranchi",
    "liver doctor Jharkhand",
    "fatty liver treatment Ranchi",
    "endoscopy Ranchi",
  ],
  authors: [{ name: "Dr. Akhilesh Yadav" }],
  creator: "Scalify Labs",
  metadataBase: new URL("https://drakhileshgastro.com"),
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drakhileshgastro.com",
    siteName: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    title: "DM Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
    description: "Expert Gastroenterology & Hepatology care at Orchid Medical Centre, Ranchi. Book appointment online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    description: "Expert liver & digestive care. Book appointment online.",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#27AE60",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dr. Akhilesh",
  },
};

// Global AEO / LocalBusiness / Physician Schema
const GLOBAL_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://drakhileshgastro.com/#physician",
      name: "Dr. Akhilesh Yadav",
      description: "DM Gastroenterologist & Hepatologist specialising in liver disease, fatty liver, jaundice, endoscopy, IBS and all digestive conditions.",
      image: "https://drakhileshgastro.com/dr-akhilesh-improved.png",
      url: "https://drakhileshgastro.com",
      telephone: "+919031669888",
      medicalSpecialty: ["Gastroenterology", "Hepatology"],
      knowsLanguage: ["hi", "en"],
      hasCredential: [
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MBBS" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "MD (Internal Medicine)" },
        { "@type": "EducationalOccupationalCredential", credentialCategory: "degree", name: "DM (Gastroenterology)" },
      ],
      knowsAbout: [
        "Gastroenterology", "Hepatology", "Endoscopy", "Colonoscopy", "ERCP", "EUS",
        "Fatty Liver", "Liver Cirrhosis", "Inflammatory Bowel Disease", "Pancreatitis",
        "GERD", "IBS", "Jaundice", "H. pylori", "Peptic Ulcer", "Colon Polyps"
      ],
      alumniOf: [{ "@type": "CollegeOrUniversity", name: "DM Gastroenterology — Medical University of India" }],
      memberOf: [
        { "@type": "MedicalOrganization", name: "Indian Medical Association (IMA)" },
        { "@type": "MedicalOrganization", name: "Indian Society of Gastroenterology (ISGEI)" },
      ],
      affiliation: { "@id": "https://drakhileshgastro.com/#clinic" },
    },
    {
      "@type": ["MedicalClinic", "LocalBusiness"],
      "@id": "https://drakhileshgastro.com/#clinic",
      name: "Dr. Akhilesh Yadav — Gastroenterologist at Orchid Medical Centre",
      description: "Specialist gastroenterology & hepatology clinic in Ranchi, Jharkhand. Serving patients from Jharkhand, Bihar and Chhattisgarh.",
      url: "https://drakhileshgastro.com",
      telephone: "+919031669888",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Card",
      image: "https://drakhileshgastro.com/images/procedure-room.png",
      address: {
        "@type": "PostalAddress",
        streetAddress: "HB Road",
        addressLocality: "Ranchi",
        addressRegion: "Jharkhand",
        postalCode: "834001",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "23.3441", longitude: "85.3096" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "10:00", closes: "14:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "17:00", closes: "20:00" },
      ],
      hasMap: "https://maps.google.com/?q=Orchid+Medical+Centre+HB+Road+Ranchi",
      sameAs: [
        "https://www.facebook.com/drakhileshgastro",
        "https://www.instagram.com/drakhileshgastro",
        "https://www.youtube.com/@drakhileshgastro",
        "https://www.linkedin.com/in/drakhileshyadav",
        "https://maps.google.com/?q=Orchid+Medical+Centre+HB+Road+Ranchi",
      ],
      aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "200", bestRating: "5" },
    },
    {
      "@type": "WebSite",
      "@id": "https://drakhileshgastro.com/#website",
      url: "https://drakhileshgastro.com",
      name: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
      description: "Official website of Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, Ranchi",
      inLanguage: ["en-IN", "hi"],
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://drakhileshgastro.com/blog?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const headersList = await headers();
  const nonce = headersList.get("x-nonce") ?? "";

  return (
    <html lang="en-IN" className={`${manrope.variable} ${inter.variable} ${mukta.variable}`}>
      <head>
        <link rel="preconnect" href="https://dfevnuornvrthufbrdop.supabase.co" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://dfevnuornvrthufbrdop.supabase.co" />
        <link rel="alternate" hrefLang="en-IN" href="https://drakhileshgastro.com" />
        <link rel="alternate" hrefLang="x-default" href="https://drakhileshgastro.com" />
        <link rel="alternate" type="application/rss+xml" title="Dr. Akhilesh Yadav — Health Blog RSS Feed" href="https://drakhileshgastro.com/rss.xml" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-72x72.png" />
        <meta name="theme-color" content="#27AE60" />
        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GLOBAL_SCHEMA) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Toaster position="top-center" richColors />
        <AnalyticsProvider />
        <SpeedInsights />
        <Analytics />
      </body>
      <Script
        nonce={nonce}
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script nonce={nonce} id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          ${AW_ID ? `gtag('config', '${AW_ID}');` : ""}
        `}
      </Script>
    </html>
  );
}
