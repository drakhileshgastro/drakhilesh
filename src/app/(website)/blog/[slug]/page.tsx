import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const revalidate = 86400; // ISR: regenerate every 24h
import { Clock, ArrowLeft, MessageCircle, Phone, AlertTriangle, Lightbulb, HelpCircle, CheckCircle2, Calendar } from "lucide-react";
import { getBlogBySlug, getAllBlogSlugs } from "@/data/blog-data";
import { getRelatedBlogsForBlog, getRelatedConditionsForBlog, getCluster0Related, isCluster0Blog } from "@/data/related-content";
import { DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/cn";
import StickyCTA from "@/components/service/sticky-cta";
import BookingForm from "@/components/service/booking-form";

function getIsoDate(publishedAt: string) {
  if (publishedAt.includes("-") || publishedAt.includes("T")) return publishedAt;
  const parts = publishedAt.split(" ");
  if (parts.length === 2) {
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const monthIdx = monthNames.indexOf(parts[0]);
    if (monthIdx !== -1) {
      const monthStr = String(monthIdx + 1).padStart(2, "0");
      return `${parts[1]}-${monthStr}-15T00:00:00.000Z`;
    }
  }
  return "2026-07-14T00:00:00.000Z";
}

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};
  const imageUrl = post.image 
    ? `https://drakhileshgastro.com${post.image}` 
    : "https://drakhileshgastro.com/dr-akhilesh-improved.png";

  return {
    title: `${post.metaTitle} | Dr. Akhilesh Yadav`,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: `https://drakhileshgastro.com/blog/${slug}` },
    // §15: noindex pages that cannibalize a stronger URL for the same search intent
    ...(post.noindex && { robots: { index: false, follow: true } }),
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://drakhileshgastro.com/blog/${slug}`,
      type: "article",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.metaTitle,
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

    const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalArticle",
    "headline": post.titleHi,
    "description": post.excerptHi,
    "image": post.image ? `https://drakhileshgastro.com${post.image}` : "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "datePublished": getIsoDate(post.publishedAt),
    "dateModified": getIsoDate(post.publishedAt),
    "author": {
      "@type": "Physician",
      "name": DOCTOR.name,
      "medicalSpecialty": "Gastroenterology",
      "affiliation": { "@type": "Hospital", "name": DOCTOR.hospital }
    },
    "reviewedBy": {
      "@type": "Physician",
      "name": DOCTOR.name,
      "medicalSpecialty": "Gastroenterology",
      "affiliation": { "@type": "Hospital", name: DOCTOR.hospital }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Akhilesh Yadav Gastroenterology Care",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drakhileshgastro.com/dr-akhilesh-improved.png"
      }
    },
    "audience": {
      "@type": "MedicalAudience",
      "audienceType": "Patients"
    },
    "mainEntityOfPage": `https://drakhileshgastro.com/blog/${post.slug}`,
    "disclaimer": "Medical Disclaimer: Content on this website is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always consult Dr. Akhilesh Yadav or another qualified healthcare provider regarding any questions about a medical condition."
  };

  const related = getRelatedBlogsForBlog(slug, 2);
  const relatedConditions = getRelatedConditionsForBlog(slug);
  const cluster0Related = getCluster0Related(slug, 3);
  const isRanchiGuide = isCluster0Blog(slug);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drakhileshgastro.com" },
      { "@type": "ListItem", "position": 2, "name": "Health Library", "item": "https://drakhileshgastro.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.metaTitle, "item": `https://drakhileshgastro.com/blog/${post.slug}` },
    ],
  };

  // MedicalWebPage — connects this URL to the physician entity for E-E-A-T
  const webPageLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "@id": `https://drakhileshgastro.com/blog/${post.slug}#webpage`,
    "url": `https://drakhileshgastro.com/blog/${post.slug}`,
    "name": post.metaTitle,
    "description": post.metaDescription,
    "inLanguage": "hi-IN",
    "isPartOf": { "@id": "https://drakhileshgastro.com/#website" },
    "about": { "@id": `https://drakhileshgastro.com/blog/${post.slug}` },
    "reviewedBy": {
      "@type": "Physician",
      "@id": "https://drakhileshgastro.com/#physician",
      "name": DOCTOR.name,
    },
    "lastReviewed": getIsoDate(post.publishedAt),
    "medicalAudience": { "@type": "MedicalAudience", "audienceType": "Patients" },
  };

  const faqLd = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a },
    })),
  } : null;

  const whatsappShareText = `${post.titleHi}\n\nRead this health guide reviewed by Dr. Akhilesh Yadav:\nhttps://drakhileshgastro.com/blog/${post.slug}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      <article className="min-h-screen pb-16 sm:pb-0 bg-white">
        
        {/* Section 1: Hero Banner */}
        <section className="bg-bg-sand/30 pt-12 pb-16 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
            
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs text-muted">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-primary transition-colors">Health Library</Link>
              <span>/</span>
              <span className="text-forest font-semibold truncate max-w-[200px]">{post.titleHi.split("—")[0].trim()}</span>
            </nav>

            {/* Read metrics & category */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-[10px] bg-primary-50 border border-primary/20 text-primary font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5 text-muted text-xs font-sans">
                <Clock size={13} /> {post.readTimeMins} min read
              </span>
            </div>

            {/* Main Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-display font-bold text-forest leading-tight font-hindi">
              {post.titleHi}
            </h1>

            {post.image && (
              <div className="aspect-[16/9] w-full bg-primary-light rounded-3xl overflow-hidden relative shadow-xs border border-border/20 my-6">
                <Image
                  fill
                  src={post.image}
                  alt={post.titleEn}
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            )}

            {/* Clinical review bar (E-E-A-T) */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-4 border-t border-border/45 text-xs text-muted font-sans font-medium">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <CheckCircle2 size={14} className="fill-current text-white" />
                </div>
                <span>Medical Reviewer: <strong className="text-forest font-bold">{DOCTOR.name}</strong> (DM Gastro)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={13} />
                <span>Updated: {post.publishedAt}</span>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Split screen layout */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Left Column: Article Body (lg:col-span-8) */}
              <div className="lg:col-span-8 space-y-8">
                
                {/* Medical Disclaimer Banner */}
                <div className="bg-red-50/20 border border-red-200/50 rounded-2xl p-4 flex gap-3 items-start text-xs text-muted">
                  <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={15} />
                  <div className="space-y-0.5">
                    <span className="text-[9px] text-red-700 font-bold uppercase tracking-wider block font-sans">Medical Disclaimer</span>
                    <p className="leading-relaxed font-sans">
                      This health guide is researched and prepared by Dr. Akhilesh's clinical medical team and reviewed by Dr. Akhilesh Yadav. It is for general educational purposes only and does not constitute expert clinical advice. Always consult a physician for individual diagnostics.
                    </p>
                  </div>
                </div>

                {/* Excerpt Summary */}
                <div className="bg-bg-sand/35 border-l-4 border-primary rounded-r-2xl px-6 py-5 shadow-3xs">
                  <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">Quick Summary</span>
                  <p className="font-hindi text-forest font-bold text-base sm:text-lg leading-relaxed">
                    {post.excerptHi}
                  </p>
                </div>

                {/* Subsections Loop */}
                <div className="space-y-8">
                  {post.sections.map((section, idx) => (
                    <div
                      key={idx}
                      className={cn(
                        "rounded-3xl p-6 space-y-4",
                        section.type === "warning" ? "border border-red-200/50 bg-red-50/10" :
                        section.type === "tip" ? "border border-primary-light/50 bg-primary-light/10" :
                        "border border-border/40 bg-white"
                      )}
                    >
                      {section.heading && (
                        <div className="flex items-start gap-2.5">
                          {section.type === "warning" && <AlertTriangle className="text-red-600 mt-1 flex-shrink-0" size={16} />}
                          {section.type === "tip" && <Lightbulb className="text-primary mt-1 flex-shrink-0" size={16} />}
                          <h2 className="text-forest font-hindi font-bold text-lg sm:text-xl leading-snug">
                            {section.heading}
                          </h2>
                        </div>
                      )}

                      {section.content && section.content.split("\n\n").map((para, pIdx) => (
                        <p key={pIdx} className="font-hindi text-muted text-base leading-relaxed last:mb-0">
                          {para}
                        </p>
                      ))}

                      {section.list && (
                        <ul className="space-y-3 pl-2">
                          {section.list.map((item, lIdx) => (
                            <li key={lIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                              <span className="font-hindi text-muted text-base leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>

                {/* FAQ section */}
                {post.faqs && post.faqs.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <HelpCircle size={16} className="text-primary flex-shrink-0" />
                      <h2 className="text-forest font-hindi font-bold text-lg">अक्सर पूछे जाने वाले सवाल</h2>
                    </div>
                    <div className="space-y-2">
                      {post.faqs.map((faq, idx) => (
                        <details key={idx} className="group border border-border/50 rounded-2xl bg-white overflow-hidden">
                          <summary className="flex items-center justify-between gap-3 px-5 py-4 cursor-pointer list-none">
                            <span className="font-hindi text-forest font-semibold text-sm leading-snug">{faq.q}</span>
                            <span className="text-primary text-lg font-bold flex-shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                          </summary>
                          <div className="px-5 pb-4 border-t border-border/30">
                            <p className="font-hindi text-muted text-sm leading-relaxed pt-3">{faq.a}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tag pill list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-bg-sand border border-border/80 text-forest px-3 py-1 rounded-full font-sans font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Related Condition Link — back-link to condition page */}
                {relatedConditions.length > 0 && (
                  <div className="border border-primary/25 bg-primary-50/20 rounded-2xl p-5 space-y-3">
                    <p className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans">Doctor Consultation</p>
                    {relatedConditions.slice(0, 1).map((cond) => (
                      <Link
                        key={cond.slug}
                        href={`/conditions/${cond.slug}`}
                        className="flex items-center gap-3 group"
                      >
                        <span className="text-2xl flex-shrink-0">{cond.emoji}</span>
                        <div>
                          <h4 className="text-forest font-sans font-bold text-sm leading-tight group-hover:text-primary transition-colors">
                            {cond.title} — Treatment in Ranchi
                          </h4>
                          <p className="text-muted text-[10px] font-sans mt-0.5">
                            Symptoms, diagnosis & treatment by Dr. Akhilesh Yadav →
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* ── Author / Reviewer Box — E-E-A-T signal ─────────────── */}
                <div className="bg-bg-sand/40 border border-border/60 rounded-3xl p-6 space-y-4">
                  <p className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans">Clinically Reviewed By</p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden relative border border-border/30 flex-shrink-0 bg-primary-light">
                      <Image
                        src="/dr-akhilesh-improved.png"
                        alt={`${DOCTOR.name} — DM Gastroenterologist`}
                        width={64}
                        height={64}
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-forest font-sans font-bold text-base leading-tight">{DOCTOR.name}</h4>
                      <p className="text-muted text-xs font-sans mt-0.5">{DOCTOR.qualification}</p>
                      <p className="text-primary text-xs font-bold font-sans mt-1">{DOCTOR.specialty} · {DOCTOR.hospital}, Ranchi</p>
                    </div>
                  </div>
                  <p className="text-muted text-xs font-sans leading-relaxed">
                    This article has been clinically reviewed and approved by {DOCTOR.name} ({DOCTOR.qualification}). Dr. Yadav practises at {DOCTOR.hospital}, HB Road, Ranchi, with 10+ years of specialist experience in gastroenterology and hepatology.
                  </p>
                  <p className="text-[10px] text-red-700/70 font-sans leading-relaxed border-t border-border/40 pt-3">
                    <strong>Medical Disclaimer:</strong> This content is for general educational purposes only and does not constitute medical advice, diagnosis, or treatment. Always consult a qualified physician for personal health decisions.
                  </p>
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1 text-primary text-[10px] font-bold uppercase tracking-wider font-sans hover:text-primary-dark transition-colors"
                  >
                    About Dr. Akhilesh →
                  </Link>
                </div>

                {/* WhatsApp Share Card */}
                <div className="bg-forest text-white rounded-3xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-sm">
                  <div>
                    <h4 className="text-white font-sans font-bold text-sm">Share this Medical Guide</h4>
                    <p className="text-white/60 text-xs mt-0.5 font-hindi">यह जानकारी किसी की मदद कर सकती है।</p>
                  </div>
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(whatsappShareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-white text-forest hover:bg-bg-sand transition-colors font-display font-semibold text-xs uppercase tracking-wider rounded-xl flex-shrink-0"
                  >
                    <MessageCircle size={14} /> Share on WhatsApp
                  </a>
                </div>

                {/* Back Link */}
                <div className="pt-4 border-t border-border/40">
                  <Link
                    href="/blog"
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                  >
                    <ArrowLeft size={13} /> Back to Library
                  </Link>
                </div>

                {/* Related Articles list */}
                {related.length > 0 && (
                  <div className="space-y-4 pt-6 border-t border-border/40">
                    <h3 className="text-forest font-sans font-bold text-lg">Recommended Reads</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/blog/${r.slug}`}
                          className="group bg-white border border-border hover:border-primary transition-all rounded-2xl p-5 flex gap-4 items-start shadow-3xs"
                        >
                          <span className="text-3xl flex-shrink-0 mt-1">{r.emoji}</span>
                          <div>
                            <h4 className="text-forest font-hindi font-bold text-xs leading-snug group-hover:text-primary transition-colors line-clamp-2">
                              {r.titleHi}
                            </h4>
                            <span className="text-[10px] text-muted font-sans font-medium block mt-1.5">
                              {r.readTimeMins} min read
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

              </div>

              {/* Right Column: Sticky Sidebar (lg:col-span-4) */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
                
                {/* Compact Booking Form */}
                <BookingForm compact />

                {/* Doctor Insight Sidebar Badge */}
                <div className="bg-bg-sand/35 border border-border/80 rounded-3xl p-6 shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-light rounded-xl overflow-hidden relative border border-border/20 flex-shrink-0">
                      <Image
                        src="/dr-akhilesh-improved.png"
                        alt="Dr. Akhilesh Yadav"
                        width={48}
                        height={48}
                        className="object-cover object-top"
                      />
                    </div>
                    <div>
                      <h4 className="text-forest font-sans font-bold text-sm leading-tight">{DOCTOR.name}</h4>
                      <p className="text-muted text-[10px] uppercase font-bold tracking-wider font-sans mt-0.5">
                        DM Gastroenterologist
                      </p>
                    </div>
                  </div>

                  <p className="text-muted text-xs leading-relaxed font-hindi border-t border-border/40 pt-3">
                    ऑर्किड मेडिकल सेंटर, रांची में 10+ वर्षों का विशेषज्ञ अनुभव। 4,000+ मरीज़ों का सफल उपचार।
                  </p>

                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="w-full h-10 inline-flex items-center justify-center gap-1.5 bg-white border border-primary text-primary font-display font-semibold text-xs rounded-xl hover:bg-primary-50 transition-colors"
                  >
                    <Phone size={13} /> Call {DOCTOR.phone}
                  </a>
                </div>

                {/* Cluster-0: "More Ranchi Guides" — only for Ranchi-targeted blogs */}
                {isRanchiGuide && cluster0Related.length > 0 && (
                  <div className="border border-primary/20 bg-primary-50/10 rounded-3xl p-5 space-y-3">
                    <p className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans">More Ranchi Guides</p>
                    <div className="space-y-3">
                      {cluster0Related.map((r) => (
                        <Link
                          key={r.slug}
                          href={`/blog/${r.slug}`}
                          className="flex items-start gap-2.5 group"
                        >
                          <span className="text-xl flex-shrink-0">{r.emoji}</span>
                          <span className="font-hindi text-forest text-xs font-semibold leading-snug group-hover:text-primary transition-colors line-clamp-2">
                            {r.titleHi}
                          </span>
                        </Link>
                      ))}
                    </div>
                    <Link
                      href="/blog"
                      className="text-primary text-[10px] font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                    >
                      All Health Guides →
                    </Link>
                  </div>
                )}

                {/* Cluster-0: Link to primary Ranchi local page — blog → /locations/ranchi */}
                {isRanchiGuide && (
                  <Link
                    href="/locations/ranchi"
                    className="block bg-primary text-white rounded-3xl p-5 space-y-2 hover:bg-primary-dark transition-colors"
                  >
                    <p className="text-[9px] text-white/70 uppercase font-bold tracking-wider font-sans">Consult in Ranchi</p>
                    <p className="font-hindi text-white font-bold text-sm leading-snug">
                      रांची में Gastroenterologist — Dr. Akhilesh Yadav
                    </p>
                    <p className="text-white/80 text-[11px] font-sans">
                      Orchid Medical Centre, HB Road · Endoscopy, ERCP, FibroScan
                    </p>
                    <span className="inline-flex items-center gap-1 text-white/90 text-[10px] font-bold font-sans uppercase tracking-wider mt-1">
                      Book Appointment →
                    </span>
                  </Link>
                )}

              </aside>

            </div>
          </div>
        </section>

        {/* Floating conversion bar */}
        <StickyCTA title={post.titleHi.split("—")[0].trim()} />

      </article>
    </>
  );
}
