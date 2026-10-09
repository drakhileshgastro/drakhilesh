import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Patient Follow-up Information | Dr. Akhilesh Yadav",
  description: "Questions about reports, individual treatment expectations and follow-up after a digestive or liver consultation.",
  alternates: { canonical: "https://drakhileshgastro.com/patient-stories" },
  robots: { index: false, follow: true },
};
export default function PatientStoriesPage() {
  return <section className="bg-bg-sand/20 py-16 lg:py-24">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
      <h1 className="font-hindi text-3xl font-bold text-forest">Patient Follow-up Information</h1>
      <p className="text-muted leading-relaxed">Treatment and recovery differ between patients. An individual assessment and follow-up plan are more useful than promises based on another patient’s experience.</p>
      <h2 className="font-bold text-xl text-forest">Questions for your follow-up visit</h2>
      <ul className="list-disc pl-5 space-y-3 text-muted">
        <li>What do my reports show, and are any results still pending?</li>
        <li>What changes should I look for, and when should I seek urgent care?</li>
        <li>How should I follow my prescription and when should I return?</li>
      </ul>
      <p className="text-muted">Bring current prescriptions and previous reports. Follow the instructions given by your treating team.</p>
      <Link href="/patient-guide" className="inline-block text-primary font-semibold">Patient visit guide</Link>
      <span className="mx-3 text-muted">·</span><Link href="/contact" className="text-primary font-semibold">Clinic contact details</Link>
    </div>
  </section>;
}
