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

export default function HomePage() {
  return (
    <>
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
