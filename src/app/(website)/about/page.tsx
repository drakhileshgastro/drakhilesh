import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DOCTOR } from "@/lib/constants";
import DoctorRegistration from "@/components/doctor-registration";
export const metadata: Metadata = {
  title: "Dr. Akhilesh Yadav — DM Gastroenterologist in Ranchi",
  description: "Clinic profile of Dr. Akhilesh Yadav, DM Gastroenterology, at Orchid Medical Centre, HB Road, Ranchi. Location, consultation and contact details.",
  alternates: { canonical: "https://drakhileshgastro.com/about" },
};
export default function AboutPage() {
  const schema = { "@context": "https://schema.org", "@type": "Physician", name: DOCTOR.name, medicalSpecialty: "Gastroenterology", telephone: DOCTOR.phone, affiliation: { "@type": "Hospital", name: DOCTOR.hospital }, address: { "@type": "PostalAddress", streetAddress: "HB Road", addressLocality: "Ranchi", addressRegion: "Jharkhand", postalCode: "834001", addressCountry: "IN" } };
  return <article className="bg-bg-sand/20 py-16 lg:py-24">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <Image src="/dr-akhilesh-improved.png" alt="Dr. Akhilesh Yadav" width={320} height={400} className="rounded-3xl object-cover" />
        <div className="md:col-span-2 space-y-5">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-forest">{DOCTOR.name}</h1>
          <p className="font-hindi text-xl text-primary">पेट, आंत और लिवर संबंधी परामर्श</p>
          <p className="font-semibold text-forest">{DOCTOR.qualification}</p>
          <DoctorRegistration />
          <p className="text-muted leading-relaxed">Dr. Akhilesh Yadav consults for digestive and liver conditions at {DOCTOR.hospital}, {DOCTOR.address}. The assessment and care plan depend on symptoms, medical history and reports.</p>
          <p className="text-muted leading-relaxed">Consultation may involve discussing investigation options, treatment benefits and risks, and follow-up. A particular test or outcome cannot be promised before individual assessment.</p>
        </div>
      </div>
      <section className="bg-white border border-border rounded-3xl p-6 sm:p-8 space-y-4">
        <h2 className="font-hindi text-2xl font-bold text-forest">Clinic location and timings</h2>
        <p className="text-muted">{DOCTOR.hospital}, {DOCTOR.address}</p>
        <p className="text-muted">{DOCTOR.timings}. Confirm availability before travelling.</p>
        <Link href="/contact" className="inline-block font-semibold text-primary">Contact details and directions</Link>
      </section>
      <section className="space-y-4">
        <h2 className="font-hindi text-2xl font-bold text-forest">परामर्श से पहले तैयारी</h2>
        <ul className="list-disc pl-5 space-y-3 text-muted">
          <li>Bring previous reports, prescriptions and a list of current medicines.</li>
          <li>Describe when symptoms began and whether they are changing.</li>
          <li>Ask about the purpose of any proposed test, alternatives, costs and follow-up.</li>
        </ul>
        <Link href="/patient-guide" className="inline-block font-semibold text-primary">Patient visit guide</Link>
      </section>
    </div>
  </article>;
}
