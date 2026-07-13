import type { Metadata } from "next";
import HeroSection from "@/components/home/hero-section";
import SymptomsSection from "@/components/home/symptoms-section";
import MeetDoctorSection from "@/components/home/meet-doctor";
import PatientJourney from "@/components/home/patient-journey";
import ConditionsSection from "@/components/home/conditions-section";
import ProceduresSection from "@/components/home/procedures-section";
import TrustSection from "@/components/home/trust-section";
import VideoSection from "@/components/home/video-section";
import BlogPreview from "@/components/home/blog-preview";
import FAQSection from "@/components/home/faq-section";
import ClinicInfo from "@/components/home/clinic-info";
import FinalCTA from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Dr. Akhilesh Yadav — Gastroenterologist & Liver Specialist in Ranchi | Orchid Medical Centre",
  description:
    "पेट, लीवर और पाचन की समस्या? डॉ. अखिलेश यादव — DM Gastroenterology, Orchid Medical Centre, Ranchi. Fatty liver, jaundice, endoscopy, IBS, liver disease. हिंदी में परामर्श। Book appointment today.",
  keywords: [
    "gastroenterologist ranchi",
    "liver specialist ranchi",
    "Dr Akhilesh Yadav",
    "endoscopy ranchi",
    "fatty liver treatment jharkhand",
    "पेट के डॉक्टर रांची",
    "orchid medical centre ranchi",
    "best gastroenterologist jharkhand",
  ],
  alternates: {
    canonical: "https://drakhileshgastro.com",
  },
  openGraph: {
    title: "Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
    description: "Expert gastroenterology & liver care in Ranchi, Jharkhand. DM Gastroenterology. Hindi consultation. Book appointment.",
    url: "https://drakhileshgastro.com",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <>
      {/* S2 — Hero */}
      <HeroSection />
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
      {/* S9 — Educational Video */}
      <VideoSection />
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
