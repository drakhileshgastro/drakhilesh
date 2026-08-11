import type { Metadata } from "next";
import Link from "next/link";
import { PATIENT_GUIDES } from "@/data/patient-guide-data";
import { Clock, ArrowRight, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Patient Guide — Dr. Akhilesh Yadav | Orchid Medical Centre Ranchi",
  description: "Endoscopy preparation, post-procedure care, how to read your lab report, first appointment checklist, diet after liver disease — practical guides by Dr. Akhilesh Yadav, DM Gastroenterologist, Ranchi.",
  alternates: { canonical: "https://drakhileshgastro.com/patient-guide" },
  openGraph: {
    title: "Patient Guide — Dr. Akhilesh Yadav Ranchi",
    description: "Practical health guides for patients visiting Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi.",
    url: "https://drakhileshgastro.com/patient-guide",
    type: "website",
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": "https://drakhileshgastro.com/patient-guide",
  "name": "Patient Guide — Dr. Akhilesh Yadav Gastroenterology",
  "description": "Practical guides for gastroenterology & liver disease patients at Orchid Medical Centre, Ranchi.",
  "url": "https://drakhileshgastro.com/patient-guide",
  "publisher": {
    "@type": "Physician",
    "@id": "https://drakhileshgastro.com/#physician",
    "name": "Dr. Akhilesh Yadav",
  },
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drakhileshgastro.com" },
      { "@type": "ListItem", "position": 2, "name": "Patient Guide", "item": "https://drakhileshgastro.com/patient-guide" },
    ],
  },
};

export default function PatientGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <main className="min-h-screen pb-16 sm:pb-0 bg-white">

        {/* Hero */}
        <section className="bg-bg-sand/30 pt-12 pb-16 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-5">
            <nav className="flex items-center gap-2 text-xs text-muted font-sans">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <span className="text-forest font-semibold">Patient Guide</span>
            </nav>

            <div className="flex items-center gap-3">
              <BookOpen className="text-primary flex-shrink-0" size={24} />
              <span className="text-[10px] bg-primary-50 border border-primary/20 text-primary font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                Practical Guides
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-display font-bold text-forest leading-tight">
              Patient Guide
            </h1>
            <p className="font-hindi text-forest/80 text-lg leading-relaxed max-w-2xl">
              Dr. Akhilesh Yadav — DM Gastroenterology — Orchid Medical Centre, Ranchi के practical guides।
              Endoscopy की तैयारी से लेकर lab report पढ़ने तक — सब यहाँ।
            </p>
          </div>
        </section>

        {/* Guide Cards */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {PATIENT_GUIDES.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/patient-guide/${guide.slug}`}
                  className="group bg-white border border-border hover:border-primary transition-all rounded-3xl p-6 shadow-xs flex flex-col gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl flex-shrink-0 mt-0.5">{guide.emoji}</span>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-forest font-hindi font-bold text-base leading-snug group-hover:text-primary transition-colors line-clamp-2">
                        {guide.titleHi}
                      </h2>
                      <div className="flex items-center gap-1.5 mt-2 text-muted text-xs font-sans">
                        <Clock size={12} />
                        <span>{guide.readTimeMins} min read</span>
                      </div>
                    </div>
                  </div>

                  <p className="font-hindi text-muted text-sm leading-relaxed line-clamp-2">
                    {guide.introHi}
                  </p>

                  <div className="flex items-center gap-1 text-primary text-xs font-bold font-sans uppercase tracking-wider mt-auto">
                    Read Guide <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-forest text-white rounded-3xl p-8 text-center space-y-4">
              <h2 className="font-display font-bold text-2xl text-white">कोई सवाल है?</h2>
              <p className="font-hindi text-white/70 text-base">
                Dr. Akhilesh Yadav — Orchid Medical Centre, HB Road, Ranchi से directly मिलें।
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="https://wa.me/917491925047"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors"
                >
                  WhatsApp करें
                </a>
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-forest font-display font-semibold text-sm rounded-xl hover:bg-bg-sand transition-colors"
                >
                  Appointment Book करें
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
