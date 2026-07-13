import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, MessageCircle, Phone, AlertTriangle, Lightbulb, HelpCircle, CheckCircle2, Calendar } from "lucide-react";
import { getBlogBySlug, getAllBlogSlugs, BLOG_POSTS } from "@/data/blog-data";
import { DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/cn";
import StickyCTA from "@/components/service/sticky-cta";
import BookingForm from "@/components/service/booking-form";

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
  return {
    title: `${post.metaTitle} | Dr. Akhilesh Yadav`,
    description: post.metaDescription,
    keywords: post.tags,
    alternates: { canonical: `https://drakhileshgastro.com/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://drakhileshgastro.com/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.titleHi,
    "description": post.excerptHi,
    "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "author": {
      "@type": "Physician",
      "name": DOCTOR.name,
      "medicalSpecialty": "Gastroenterology",
      "affiliation": { "@type": "Hospital", name: DOCTOR.hospital },
    },
    "publisher": {
      "@type": "Organization",
      "name": "Dr. Akhilesh Yadav Gastroenterology Care",
      "logo": {
        "@type": "ImageObject",
        "url": "https://drakhileshgastro.com/dr-akhilesh-improved.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.publishedAt,
    "mainEntityOfPage": `https://drakhileshgastro.com/blog/${post.slug}`,
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);
  const whatsappShareText = `${post.titleHi}\n\nRead this health guide reviewed by Dr. Akhilesh Yadav:\nhttps://drakhileshgastro.com/blog/${post.slug}`;

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

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

                {/* Tag pill list */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-[10px] bg-bg-sand border border-border/80 text-forest px-3 py-1 rounded-full font-sans font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
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
                      <img
                        src="/dr-akhilesh-improved.png"
                        alt="Dr. Akhilesh Yadav"
                        className="w-full h-full object-cover object-top"
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
