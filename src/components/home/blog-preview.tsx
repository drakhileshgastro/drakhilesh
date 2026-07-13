"use client";

import Link from "next/link";
import { ArrowRight, Clock, Utensils, ShieldAlert, Search, BookOpen, Mail, MessageCircle } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const articles = [
  {
    slug: "fatty-liver-diet-in-hindi",
    title: "फैटी लिवर में क्या खाएं और क्या न खाएं?",
    titleEn: "Fatty Liver Diet Guide — What to Eat & Avoid",
    excerpt: "फैटी लिवर से परेशान हैं? जानिए कौन से खाने से लिवर ठीक होता है और किससे नुकसान।",
    category: "Diet & Nutrition",
    readTime: "5 मिनट",
    condition: "Fatty Liver",
  },
  {
    slug: "jaundice-causes-treatment-hindi",
    title: "पीलिया के कारण, लक्षण और सही इलाज",
    titleEn: "Jaundice — Causes, Symptoms & Treatment",
    excerpt: "आँखें और त्वचा पीली क्यों होती है? पीलिया के सही कारण और गैस्ट्रो डॉक्टर से कब मिलें।",
    category: "Liver Health",
    readTime: "4 मिनट",
    condition: "Jaundice",
  },
  {
    slug: "endoscopy-kya-hota-hai",
    title: "एंडोस्कोपी क्या होती है? डरने की जरूरत नहीं",
    titleEn: "What is Endoscopy? Complete Patient Guide",
    excerpt: "एंडोस्कोपी कैसे होती है, दर्द होता है या नहीं, कितना समय लगता है — सब कुछ हिंदी में।",
    category: "Procedures",
    readTime: "6 मिनट",
    condition: "Endoscopy",
  },
];

function getArticleIcon(slug: string) {
  const iconProps = { className: "text-primary/40 group-hover:scale-105 transition-transform duration-200", size: 36 };
  switch (slug) {
    case "fatty-liver-diet-in-hindi": return <Utensils {...iconProps} />;
    case "jaundice-causes-treatment-hindi": return <ShieldAlert {...iconProps} />;
    case "endoscopy-kya-hota-hai": return <Search {...iconProps} />;
    default: return <BookOpen {...iconProps} />;
  }
}

export default function BlogPreview() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
              Health Library
            </div>
            <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-2 leading-tight">
              स्वास्थ्य जानकारी — हिंदी में
            </h2>
            <p className="font-sans text-muted text-base">
              Expert articles on digestive and liver health by Dr. Akhilesh Yadav — explained in simple Hindi.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-primary font-display font-semibold text-sm transition-colors hover:text-primary-dark"
          >
            All Articles <ArrowRight size={16} />
          </Link>
        </div>

        {/* Article Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-white rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Article image area — larger, aspect-3/2 */}
                <div className="aspect-[3/2] border-b border-border bg-bg-sand flex items-center justify-center">
                  {getArticleIcon(article.slug)}
                </div>

                <div className="p-6 pb-2">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] border border-border text-primary px-2.5 py-0.5 rounded bg-bg-sand font-semibold font-sans uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted text-xs font-sans">
                      <Clock size={12} className="opacity-70" /> {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-hindi text-forest font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="font-sans text-muted text-xs leading-normal mb-3">{article.titleEn}</p>

                  {/* Excerpt */}
                  <p className="font-hindi text-muted text-sm leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Minimal Circle Arrow Link */}
              <div className="px-6 pb-6 pt-2 text-right">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-border text-primary group-hover:border-primary group-hover:bg-primary-50 transition-colors duration-200">
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / Subscription */}
        <div className="mt-16 bg-bg-sand border border-border rounded-3xl p-8 lg:p-12 text-center max-w-2xl mx-auto shadow-sm">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border mb-4 bg-white">
            <Mail className="text-primary" size={20} />
          </div>
          <h3 className="font-hindi text-forest text-2xl font-bold mb-3">
            Health Tips हिंदी में पाएं — WhatsApp पर
          </h3>
          <p className="font-sans text-muted text-sm leading-relaxed mb-6 max-w-md mx-auto">
            Weekly digestive and liver health advice in Hindi, written directly by Dr. Akhilesh Yadav. Free and privacy-focused.
          </p>
          <a
            href={`https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent("Namaskar, mujhe health tips chahiye")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
          >
            <MessageCircle size={16} /> Subscribe on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
