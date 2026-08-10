import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import PatientsAsk from "@/components/home/patients-ask";
import SymptomsSection from "@/components/home/symptoms-section";
import MeetDoctorSection from "@/components/home/meet-doctor";
import PatientJourney from "@/components/home/patient-journey";
import ConditionsSection from "@/components/home/conditions-section";
import ProceduresSection from "@/components/home/procedures-section";
import TrustSection from "@/components/home/trust-section";
import BlogPreview from "@/components/home/blog-preview";
import FAQSection from "@/components/home/faq-section";
import ClinicInfo from "@/components/home/clinic-info";
import FinalCTA from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Dr. Akhilesh Yadav — Gastroenterologist in Ranchi | Orchid Medical Centre",
  description:
    "Consult Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, Ranchi. Specialist care for liver disease, fatty liver, acidity, IBS, and endoscopy. Serving Jharkhand, Bihar & Chhattisgarh.",
  keywords: [
    "gastroenterologist in Ranchi",
    "liver specialist Ranchi",
    "Dr Akhilesh Yadav",
    "endoscopy Ranchi",
    "fatty liver treatment Jharkhand",
    "best gastroenterologist Jharkhand",
    "orchid medical centre Ranchi",
  ],
  alternates: {
    canonical: "https://drakhileshgastro.com",
  },
  openGraph: {
    title: "Dr. Akhilesh Yadav — Gastroenterologist in Ranchi",
    description: "DM Gastroenterologist at Orchid Medical Centre, Ranchi. Specialist care for liver disease, fatty liver, endoscopy & all digestive conditions.",
    url: "https://drakhileshgastro.com",
    type: "website",
    images: [{ url: "https://drakhileshgastro.com/dr-akhilesh-improved.png", width: 1200, height: 630, alt: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Akhilesh Yadav — Gastroenterologist in Ranchi",
    description: "DM Gastroenterologist at Orchid Medical Centre, Ranchi. Specialist care for liver disease and digestive conditions.",
    images: ["https://drakhileshgastro.com/dr-akhilesh-improved.png"],
  },
};

// ── Home page JSON-LD: Physician + MedicalClinic + LocalBusiness ────────────
// Enables Google Knowledge Panel, rich results for "gastroenterologist in ranchi"
// queries, and verifies E-E-A-T for the most-crawled page on the site.
const HOME_JSON_LD = [
  // 1. Physician — the doctor himself
  {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": "https://drakhileshgastro.com/#physician",
    "name": "Dr. Akhilesh Yadav",
    "alternateName": ["Dr Akhilesh Yadav", "Dr. Akhilesh Kumar Yadav"],
    "url": "https://drakhileshgastro.com",
    "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "description": "DM Gastroenterologist & Hepatologist at Orchid Medical Centre, Ranchi. 10+ years specialist experience in liver disease, endoscopy, and all digestive conditions.",
    "medicalSpecialty": [
      { "@type": "MedicalSpecialty", "name": "Gastroenterology" },
      { "@type": "MedicalSpecialty", "name": "Hepatology" },
    ],
    "hasCredential": [
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "MD", "recognizedBy": { "@type": "Organization", "name": "Medical Council of India" } },
      { "@type": "EducationalOccupationalCredential", "credentialCategory": "DM Gastroenterology", "recognizedBy": { "@type": "Organization", "name": "National Board of Examinations" } },
    ],
    "worksFor": { "@id": "https://drakhileshgastro.com/#clinic" },
    "knowsAbout": [
      "Fatty Liver Disease", "Liver Cirrhosis", "Hepatitis B", "Hepatitis C",
      "Endoscopy", "Colonoscopy", "ERCP", "IBS", "GERD", "Acid Reflux",
      "Gallstones", "Pancreatitis", "Piles", "Fissure", "Fistula",
    ],
    "telephone": "+917491925047",
    "sameAs": [
      "https://www.practo.com/ranchi/doctor/akhilesh-yadav-gastroenterologist",
    ],
  },
  // 2. MedicalClinic — the hospital/clinic entity
  {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "@id": "https://drakhileshgastro.com/#clinic",
    "name": "Dr. Akhilesh Yadav — Gastroenterology & Liver Clinic",
    "alternateName": "Orchid Medical Centre GI Dept, Ranchi",
    "url": "https://drakhileshgastro.com",
    "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "logo": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "telephone": "+917491925047",
    "priceRange": "₹300–₹800 consultation",
    "description": "Specialist gastroenterology & liver clinic at Orchid Medical Centre, Ranchi. Expert care for fatty liver, jaundice, endoscopy, colonoscopy, IBS, piles, and all digestive conditions.",
    "medicalSpecialty": "Gastroenterology",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HB Road, Orchid Medical Centre",
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.3441,
      "longitude": 85.3096,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "09:00",
        "closes": "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "17:00",
        "closes": "20:00",
      },
    ],
    "areaServed": [
      { "@type": "City", "name": "Ranchi" },
      { "@type": "State", "name": "Jharkhand" },
      { "@type": "City", "name": "Bokaro" },
      { "@type": "City", "name": "Hazaribagh" },
      { "@type": "City", "name": "Jamshedpur" },
      { "@type": "City", "name": "Dhanbad" },
      { "@type": "City", "name": "Ramgarh" },
    ],
    "hasMap": "https://maps.google.com/?q=Orchid+Medical+Centre+HB+Road+Ranchi",
    "sameAs": [
      "https://drakhileshgastro.com",
    ],
    "founder": { "@id": "https://drakhileshgastro.com/#physician" },
    "employee": { "@id": "https://drakhileshgastro.com/#physician" },
  },
  // 3. WebSite — enables sitelinks search box in Google
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://drakhileshgastro.com/#website",
    "url": "https://drakhileshgastro.com",
    "name": "Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    "description": "Official website of Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, Ranchi",
    "publisher": { "@id": "https://drakhileshgastro.com/#clinic" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": { "@type": "EntryPoint", "urlTemplate": "https://drakhileshgastro.com/blog?q={search_term_string}" },
      "query-input": "required name=search_term_string",
    },
  },
] as const;

export default function HomePage() {
  return (
    <>
      {/* JSON-LD: Physician + MedicalClinic + LocalBusiness + WebSite */}
      {HOME_JSON_LD.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      {/* S2 — Hero */}
      <HeroSection />
      {/* S2.5 — Patients Often Ask */}
      <PatientsAsk />
      {/* S3 — Symptoms */}
      <SymptomsSection />
      {/* S4 — Meet Doctor */}
      <MeetDoctorSection />
      {/* S5 — Patient Journey */}
      <PatientJourney />
      {/* S6 — Conditions */}
      <ConditionsSection />
      {/* S7 — Procedures */}
      <ProceduresSection />
      {/* S8 — Trust & Reviews */}
      <TrustSection />
      {/* S10 — Blog Preview */}
      <BlogPreview />
      {/* S11 — FAQ */}
      <FAQSection />
      {/* S12 — Clinic Info */}
      <ClinicInfo />
      {/* S13 — Final CTA */}
      <FinalCTA />
      {/* S14 — Footer (in layout.tsx) */}
    </>
  );
}
