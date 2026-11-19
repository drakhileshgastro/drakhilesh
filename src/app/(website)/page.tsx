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
  title: "Dr. Akhilesh Yadav — Best Gastroenterologist in Ranchi | Orchid Medical Centre",
  description:
    "Consult Dr. Akhilesh Yadav, leading DM Gastroenterologist & Liver Specialist in Ranchi at Orchid Medical Centre. Expert care for endoscopy, colonoscopy, fatty liver, jaundice, and acidity. Book appointment today.",
  keywords: [
    "best gastroenterologist in Ranchi",
    "gastroenterologist in Ranchi",
    "dr akhilesh yadav ranchi",
    "dr akhilesh yadav gastroenterologist",
    "liver specialist Ranchi",
    "stomach doctor in Ranchi",
    "endoscopy Ranchi",
    "colonoscopy Ranchi",
    "fatty liver treatment Jharkhand",
    "orchid medical centre Ranchi",
  ],
  alternates: {
    canonical: "https://drakhileshgastro.com",
  },
  openGraph: {
    title: "Dr. Akhilesh Yadav — Best Gastroenterologist in Ranchi",
    description: "DM Gastroenterologist at Orchid Medical Centre, Ranchi. Specialist care for liver disease, fatty liver, endoscopy, acidity & digestive disorders.",
    url: "https://drakhileshgastro.com",
    type: "website",
    images: [{ url: "https://drakhileshgastro.com/dr-akhilesh-improved.png", width: 1200, height: 630, alt: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Akhilesh Yadav — Best Gastroenterologist in Ranchi",
    description: "DM Gastroenterologist at Orchid Medical Centre, Ranchi. Expert care for liver disease, endoscopy and digestive conditions.",
    images: ["https://drakhileshgastro.com/dr-akhilesh-improved.png"],
  },
};

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Physician",
      "@id": "https://drakhileshgastro.com/#physician",
      "name": "Dr. Akhilesh Yadav",
      "jobTitle": "Consultant Gastroenterologist & Hepatologist",
      "medicalSpecialty": ["Gastroenterology", "Hepatology"],
      "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
      "telephone": "+917491925047",
      "url": "https://drakhileshgastro.com",
      "description": "DM Gastroenterologist in Ranchi with expertise in liver disease, endoscopy, colonoscopy, ERCP, and digestive health.",
      "worksFor": {
        "@type": "Hospital",
        "name": "Orchid Medical Centre",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "H.B. Road, Lalpur",
          "addressLocality": "Ranchi",
          "addressRegion": "Jharkhand",
          "postalCode": "834001",
          "addressCountry": "IN"
        }
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Orchid Medical Centre, H.B. Road, Lalpur",
        "addressLocality": "Ranchi",
        "addressRegion": "Jharkhand",
        "postalCode": "834001",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "23.3700",
        "longitude": "85.3250"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "10:00",
          "closes": "17:00"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://drakhileshgastro.com/#website",
      "url": "https://drakhileshgastro.com",
      "name": "Dr. Akhilesh Yadav — Gastroenterology & Liver Clinic",
      "description": "Comprehensive gastroenterology, liver care, and diagnostic endoscopy services in Ranchi, Jharkhand."
    }
  ]
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
      />
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
