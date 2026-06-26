import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft, MessageCircle, Phone, AlertCircle, Lightbulb, AlertTriangle } from "lucide-react";
import { getBlogBySlug, getAllBlogSlugs, BLOG_POSTS } from "@/data/blog-data";
import BookingForm from "@/components/service/booking-form";
import { DOCTOR } from "@/lib/constants";

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
    title: post.metaTitle,
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

const sectionIcon = (type?: string) => {
  if (type === "warning") return <AlertTriangle size={16} className="text-gold flex-shrink-0 mt-0.5" />;
  if (type === "tip") return <Lightbulb size={16} className="text-teal flex-shrink-0 mt-0.5" />;
  return <AlertCircle size={16} className="text-teal flex-shrink-0 mt-0.5" />;
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.titleHi,
    description: post.excerptHi,
    author: {
      "@type": "Person",
      name: DOCTOR.name,
      jobTitle: "Gastroenterologist & Hepatologist",
      affiliation: { "@type": "Hospital", name: DOCTOR.hospital },
    },
    publisher: {
      "@type": "Organization",
      name: "drakhileshgastro.com",
    },
    datePublished: post.publishedAt,
    keywords: post.tags.join(", "),
    url: `https://drakhileshgastro.com/blog/${post.slug}`,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakhileshgastro.com" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://drakhileshgastro.com/blog" },
        { "@type": "ListItem", position: 3, name: post.titleHi, item: `https://drakhileshgastro.com/blog/${post.slug}` },
      ],
    },
  };

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="bg-navy pt-24 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-muted mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-teal transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-teal truncate max-w-[150px]">{post.titleHi.split("—")[0].trim()}</span>
          </nav>

          {/* Category + read time */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-teal/20 text-teal font-semibold px-3 py-1.5 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1.5 text-gray-muted text-xs">
              <Clock size={12} /> {post.readTimeMins} min read
            </span>
          </div>

          {/* Title */}
          <h1 className="text-white text-2xl sm:text-3xl font-bold leading-snug mb-5 font-hindi">
            {post.titleHi}
          </h1>

          {/* Author bar */}
          <div className="flex items-center gap-3 pb-6">
            <div className="w-10 h-10 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-teal text-xs font-bold">DA</span>
            </div>
            <div>
              <p className="text-white font-semibold text-sm">{DOCTOR.name}</p>
              <p className="text-gray-muted text-xs">{DOCTOR.qualification} · {post.publishedAt}</p>
            </div>
          </div>
        </div>
        <div className="h-8 bg-navy">
          <svg viewBox="0 0 1440 32" className="w-full" preserveAspectRatio="none" style={{ height: 32 }}>
            <path d="M0,32 L1440,32 L1440,0 Q720,32 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Article content */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Article */}
            <article className="lg:col-span-2 space-y-6">
              {/* Excerpt highlight */}
              <div className="bg-teal-50 border-l-4 border-teal rounded-r-2xl px-5 py-4">
                <p className="text-navy text-sm leading-relaxed font-hindi font-medium">{post.excerptHi}</p>
              </div>

              {/* Sections */}
              {post.sections.map((section, i) => (
                <div key={i} className={`rounded-2xl p-5 ${
                  section.type === "warning" ? "bg-gold-light border border-gold/30" :
                  section.type === "tip" ? "bg-teal-50 border border-teal-light" :
                  "bg-white"
                }`}>
                  {section.heading && (
                    <div className="flex items-start gap-2 mb-3">
                      {(section.type === "warning" || section.type === "tip") && sectionIcon(section.type)}
                      <h2 className="text-navy font-bold text-base leading-snug font-hindi">{section.heading}</h2>
                    </div>
                  )}
                  {section.content && section.content.split("\n\n").map((para, j) => (
                    <p key={j} className="text-slate text-sm leading-relaxed font-hindi mb-2 last:mb-0">{para}</p>
                  ))}
                  {section.list && (
                    <ul className="space-y-2.5 mt-3">
                      {section.list.map((item, k) => (
                        <li key={k} className="flex items-start gap-2.5">
                          <span className="w-1.5 h-1.5 bg-teal rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate text-sm leading-relaxed font-hindi">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 bg-offwhite border border-gray-light text-slate text-xs rounded-full">{tag}</span>
                ))}
              </div>

              {/* WhatsApp share */}
              <div className="bg-navy rounded-2xl p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-sm">इस article को share करें</p>
                  <p className="text-gray-muted text-xs mt-0.5 font-hindi">किसी की मदद हो सकती है</p>
                </div>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.titleHi}\n\nhttps://drakhileshgastro.com/blog/${post.slug}`)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-whatsapp text-white text-sm font-semibold rounded-xl flex-shrink-0"
                >
                  <MessageCircle size={15} /> Share on WhatsApp
                </a>
              </div>

              {/* Back link */}
              <Link href="/blog" className="inline-flex items-center gap-2 text-teal text-sm font-semibold hover:underline">
                <ArrowLeft size={14} /> सभी articles देखें
              </Link>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-navy font-bold text-base mb-4">और पढ़ें</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {related.map((r) => (
                      <Link key={r.slug} href={`/blog/${r.slug}`}
                        className="group bg-offwhite border border-gray-light rounded-2xl p-4 hover:border-teal transition-colors">
                        <div className="flex items-start gap-3">
                          <span className="text-2xl flex-shrink-0">{r.emoji}</span>
                          <div>
                            <p className="text-navy font-semibold text-xs leading-snug font-hindi group-hover:text-teal transition-colors line-clamp-2">{r.titleHi}</p>
                            <p className="text-gray-muted text-[11px] mt-1">{r.readTimeMins} min read</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </article>

            {/* Sidebar */}
            <aside className="space-y-5">
              <BookingForm compact />

              {/* Doctor card */}
              <div className="bg-navy text-white rounded-2xl p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-teal/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal text-xs font-bold">DA</span>
                  </div>
                  <div>
                    <p className="font-bold text-sm">{DOCTOR.name}</p>
                    <p className="text-gray-muted text-xs">{DOCTOR.qualification}</p>
                  </div>
                </div>
                <p className="text-slate-300 text-xs leading-relaxed mb-4 font-hindi">
                  {DOCTOR.hospital}, Ranchi में 10+ वर्षों का specialist अनुभव। 4,000+ patients का भरोसा।
                </p>
                <a href={`tel:${DOCTOR.phone}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 bg-teal text-white text-sm font-bold rounded-xl">
                  <Phone size={14} /> {DOCTOR.phone}
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
