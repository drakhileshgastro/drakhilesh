import type { Metadata } from "next";
import { Nunito, Hind, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

const GA_ID = "G-ZYE92TKM0W";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const hind = Hind({
  variable: "--font-hind",
  subsets: ["devanagari", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Akhilesh Yadav — Best Gastroenterologist in Ranchi | Liver & Stomach Specialist",
    template: "%s | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
  },
  description:
    "Dr. Akhilesh Yadav is a leading Gastroenterologist & Hepatologist at Orchid Medical Centre, Ranchi. Expert treatment for liver disease, fatty liver, jaundice, endoscopy & all digestive conditions. Serving patients from Jharkhand, Bihar & Chhattisgarh.",
  keywords: [
    "gastroenterologist Ranchi",
    "liver doctor Jharkhand",
    "fatty liver treatment Ranchi",
    "endoscopy Ranchi",
    "jaundice specialist Ranchi",
    "Dr Akhilesh Yadav",
    "Orchid Medical Centre Ranchi",
    "pet specialist Ranchi",
    "liver specialist Jharkhand",
    "best gastroenterologist Jharkhand",
    "liver disease specialist Ranchi",
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
    title: "Best Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
    description: "Expert Gastroenterology & Hepatology care at Orchid Medical Centre, Ranchi. Book appointment online.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    description: "Expert liver & digestive care. Book appointment online.",
  },
  robots: { index: true, follow: true },
  other: {
    "theme-color": "#0EA5E9",
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
      image: "https://drakhileshgastro.com/images/dr-akhilesh-hero.jpg",
      url: "https://drakhileshgastro.com",
      telephone: "+917491925047",
      medicalSpecialty: ["Gastroenterology", "Hepatology"],
      knowsLanguage: ["hi", "en"],
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
      telephone: "+917491925047",
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI, Card",
      image: "https://drakhileshgastro.com/images/clinic-reception.jpg",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi-IN" className={`${nunito.variable} ${hind.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/icon-192x192.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-72x72.png" />
        <meta name="theme-color" content="#0EA5E9" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GLOBAL_SCHEMA) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <Toaster position="top-center" richColors />
      </body>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}
      </Script>
    </html>
  );
}
