import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Clock, AlertTriangle, ArrowLeft, Phone, Calendar, CheckCircle2 } from "lucide-react";
import { getPatientGuideBySlug, getAllPatientGuideSlugs } from "@/data/patient-guide-data";
import { getBlogBySlug } from "@/data/blog-data";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";
import BookingForm from "@/components/service/booking-form";

export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPatientGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPatientGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.metaTitle} | Dr. Akhilesh Yadav`,
    description: guide.metaDescription,
    alternates: { canonical: `https://drakhileshgastro.com/patient-guide/${slug}` },
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://drakhileshgastro.com/patient-guide/${slug}`,
      type: "article",
      images: [{ url: "https://drakhileshgastro.com/dr-akhilesh-improved.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.metaTitle,
      description: guide.metaDescription,
      images: ["https://drakhileshgastro.com/dr-akhilesh-improved.png"],
    },
  };
}

export default async function PatientGuideSlugPage({ params }: Props) {
  const { slug } = await params;
  const guide = getPatientGuideBySlug(slug);
  if (!guide) notFound();

  const relatedBlogs = guide.relatedBlogSlugs
    .map((s) => getBlogBySlug(s))
    .filter(Boolean)
    .slice(0, 3) as NonNullable<ReturnType<typeof getBlogBySlug>>[];

  // HowTo JSON-LD — eligible for rich results
  const howToLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": `https://drakhileshgastro.com/patient-guide/${slug}`,
    "name": guide.titleEn,
    "description": guide.metaDescription,
    "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "author": {
      "@type": "Physician",
      "@id": "https://drakhileshgastro.com/#physician",
      "name": DOCTOR.name,
      "medicalSpecialty": "Gastroenterology",
    },
    "datePublished": "2026-08-01T00:00:00.000Z",
    "totalTime": `PT${guide.readTimeMins}M`,
    "step": guide.steps.map((step, idx) => ({
      "@type": "HowToStep",
      "position": idx + 1,
      "name": step.titleHi,
      "text": step.bodyHi,
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drakhileshgastro.com" },
      { "@type": "ListItem", "position": 2, "name": "Patient Guide", "item": "https://drakhileshgastro.com/patient-guide" },
      { "@type": "ListItem", "position": 3, "name": guide.titleHi.split("—")[0].trim(), "item": `https://drakhileshgastro.com/patient-guide/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      <article className="min-h-screen pb-16 sm:pb-0 bg-white">

        {/* Hero */}
        <section className="bg-bg-sand/30 pt-12 pb-16 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            <nav className="flex items-center gap-2 text-xs text-muted font-sans">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/patient-guide" className="hover:text-primary transition-colors">Patient Guide</Link>
              <span>/</span>
              <span className="text-forest font-semibold truncate max-w-[200px]">{guide.titleHi.split("—")[0].trim()}</span>
            </nav>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-3xl">{guide.emoji}</span>
              <span className="text-[10px] bg-primary-50 border border-primary/20 text-primary font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                Patient Guide
              </span>
              <span className="flex items-center gap-1.5 text-muted text-xs font-sans">
                <Clock size={13} /> {guide.readTimeMins} min read
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-hindi font-bold text-forest leading-tight">
              {guide.titleHi}
            </h1>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-border/45 text-xs text-muted font-sans font-medium">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-primary" />
                </div>
                <span>Guide by: <strong className="text-forest font-bold">{DOCTOR.name}</strong> (DM Gastro)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={13} />
                <span>Updated: {guide.publishedAt}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              {/* Left column */}
              <div className="lg:col-span-8 space-y-8">

                {/* Intro */}
                <div className="bg-bg-sand/35 border-l-4 border-primary rounded-r-2xl px-6 py-5">
                  <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">Quick Summary</span>
                  <p className="font-hindi text-forest font-bold text-base sm:text-lg leading-relaxed">
                    {guide.introHi}
                  </p>
                </div>

                {/* Steps */}
                <div className="space-y-4">
                  {guide.steps.map((step, idx) => (
                    <div key={idx} className="border border-border/40 bg-white rounded-3xl p-6 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center font-display font-bold text-sm flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xl">{step.icon}</span>
                            <h2 className="font-hindi text-forest font-bold text-lg leading-snug">
                              {step.titleHi}
                            </h2>
                          </div>
                          {step.bodyHi.split("।").filter(Boolean).map((sentence, sIdx) => (
                            <p key={sIdx} className="font-hindi text-muted text-base leading-relaxed">
                              {sentence.trim()}{sentence.trim() ? "।" : ""}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warning box */}
                <div className="bg-red-50/20 border border-red-200/50 rounded-2xl p-5 flex gap-3 items-start">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
                  <div>
                    <span className="text-[9px] text-red-700 font-bold uppercase tracking-wider block mb-1 font-sans">Important Note</span>
                    <p className="font-hindi text-muted text-sm leading-relaxed">{guide.warningHi}</p>
                  </div>
                </div>

                {/* CTA box */}
                <div className="bg-primary-light/20 border border-primary/25 rounded-2xl p-5 space-y-2">
                  <p className="font-hindi text-forest font-bold text-base">{guide.ctaHi}</p>
                  <a
                    href="https://wa.me/917491925047"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                  >
                    WhatsApp: +91 74919 25047 →
                  </a>
                </div>

                {/* Author box */}
                <div className="bg-bg-sand/40 border border-border/60 rounded-3xl p-6 space-y-4">
                  <p className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans">Guide Author</p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden relative border border-border/30 flex-shrink-0 bg-primary-light">
                      <Image src="/dr-akhilesh-improved.png" alt={DOCTOR.name} width={64} height={64} className="object-cover object-top" />
                    </div>
                    <div>
                      <h4 className="text-forest font-sans font-bold text-base leading-tight">{DOCTOR.name}</h4>
                      <p className="text-muted text-xs font-sans mt-0.5">{DOCTOR.qualification}</p>
                      <p className="text-primary text-xs font-bold font-sans mt-1">Gastroenterology · {DOCTOR.hospital}, Ranchi</p>
                    </div>
                  </div>
                  <p className="text-[10px] text-red-700/70 font-sans leading-relaxed border-t border-border/40 pt-3">
                    <strong>Disclaimer:</strong> This guide is for general educational purposes only and does not replace individual medical advice. Always consult Dr. Akhilesh Yadav or a qualified physician for your specific case.
                  </p>
                  <Link href="/about" className="inline-flex items-center gap-1 text-primary text-[10px] font-bold uppercase tracking-wider font-sans hover:text-primary-dark transition-colors">
                    About Dr. Akhilesh →
                  </Link>
                </div>

                {/* Back link */}
                <div className="pt-4 border-t border-border/40">
                  <Link href="/patient-guide" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors">
                    <ArrowLeft size={13} /> All Patient Guides
                  </Link>
                </div>

                {/* Related blogs */}
                {relatedBlogs.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-border/40">
                    <h3 className="text-forest font-sans font-bold text-lg">Related Articles</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {relatedBlogs.map((blog) => (
                        <Link
                          key={blog.slug}
                          href={`/blog/${blog.slug}`}
                          className="group bg-white border border-border hover:border-primary transition-all rounded-2xl p-5 flex gap-4 items-start shadow-3xs"
                        >
                          <span className="text-3xl flex-shrink-0 mt-1">{blog.emoji}</span>
                          <div>
                            <h4 className="text-forest font-hindi font-bold text-xs leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {blog.titleHi}
                            </h4>
                            <span className="text-[10px] text-muted font-sans font-medium block mt-1.5">
                              {blog.readTimeMins} min read
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Sidebar */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                <BookingForm compact />

                <div className="bg-bg-sand/35 border border-border/80 rounded-3xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-light rounded-xl overflow-hidden relative border border-border/20 flex-shrink-0">
                      <Image src="/dr-akhilesh-improved.png" alt="Dr. Akhilesh Yadav" width={48} height={48} className="object-cover object-top" />
                    </div>
                    <div>
                      <h4 className="text-forest font-sans font-bold text-sm leading-tight">{DOCTOR.name}</h4>
                      <p className="text-muted text-[10px] uppercase font-bold tracking-wider font-sans mt-0.5">DM Gastroenterologist</p>
                    </div>
                  </div>
                  <p className="text-muted text-xs leading-relaxed font-hindi border-t border-border/40 pt-3">
                    ऑर्किड मेडिकल सेंटर, रांची में 10+ वर्षों का विशेषज्ञ अनुभव।
                  </p>
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="w-full h-10 inline-flex items-center justify-center gap-1.5 bg-white border border-primary text-primary font-display font-semibold text-xs rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    <Phone size={13} /> Call {DOCTOR.phone}
                  </a>
                </div>

                {/* Other guides */}
                <div className="border border-border/60 rounded-3xl p-5 space-y-3">
                  <p className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans">More Patient Guides</p>
                  <div className="space-y-2">
                    {/* Import all guides and show others */}
                  </div>
                  <Link href="/patient-guide" className="text-primary text-xs font-bold font-sans hover:text-primary-dark transition-colors">
                    View all guides →
                  </Link>
                </div>
              </aside>

            </div>
          </div>
        </section>

        <StickyCTA title={guide.titleHi.split("—")[0].trim()} />
      </article>
    </>
  );
}
