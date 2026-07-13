import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
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
    icon: "🥗",
  },
  {
    slug: "jaundice-causes-treatment-hindi",
    title: "पीलिया के कारण, लक्षण और सही इलाज",
    titleEn: "Jaundice — Causes, Symptoms & Treatment",
    excerpt: "आँखें और त्वचा पीली क्यों होती है? पीलिया के सही कारण और गैस्ट्रो डॉक्टर से कब मिलें।",
    category: "Liver Health",
    readTime: "4 मिनट",
    condition: "Jaundice",
    icon: "🌕",
  },
  {
    slug: "endoscopy-kya-hota-hai",
    title: "एंडोस्कोपी क्या होती है? डरने की जरूरत नहीं",
    titleEn: "What is Endoscopy? Complete Patient Guide",
    excerpt: "एंडोस्कोपी कैसे होती है, दर्द होता है या नहीं, कितना समय लगता है — सब कुछ हिंदी में।",
    category: "Procedures",
    readTime: "6 मिनट",
    condition: "Endoscopy",
    icon: "🔭",
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
              Health Library
            </span>
            <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-2">
              स्वास्थ्य जानकारी — हिंदी में
            </h2>
            <p className="text-muted text-base">
              Expert health articles by Dr. Akhilesh Yadav — in simple Hindi.
            </p>
          </div>
          <Link
            href="/blog"
            className="flex-shrink-0 inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
          >
            सभी लेख देखें <ArrowRight size={16} />
          </Link>
        </div>

        {/* Article Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group bg-bg rounded-2xl border border-border overflow-hidden hover:border-primary hover:shadow-md transition-all"
            >
              {/* Article image placeholder */}
              <div className="aspect-[16/9] bg-primary-light flex items-center justify-center">
                <span className="text-5xl">{article.icon}</span>
              </div>

              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-primary-50 text-primary px-2 py-1 rounded-lg font-semibold">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-muted text-xs">
                    <Clock size={11} /> {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-hindi text-forest font-bold text-base leading-snug mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted text-xs mb-1">{article.titleEn}</p>

                {/* Excerpt */}
                <p className="font-hindi text-forest/70 text-sm leading-relaxed mt-3 line-clamp-2">
                  {article.excerpt}
                </p>

                {/* Read more */}
                <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-semibold">
                  पढ़ें <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter / Subscription */}
        <div className="mt-12 bg-primary-50 rounded-3xl p-6 sm:p-8 text-center border border-primary-light">
          <div className="text-3xl mb-3">📩</div>
          <h3 className="font-hindi text-forest text-xl font-bold mb-2">
            Health Tips हिंदी में पाएं — WhatsApp पर
          </h3>
          <p className="text-muted text-sm mb-5 max-w-md mx-auto">
            Weekly digestive health tips in Hindi — directly on WhatsApp. Free. No spam.
          </p>
          <a
            href={`https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent("Namaskar, mujhe health tips chahiye")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-whatsapp text-white font-bold text-sm rounded-xl hover:opacity-90 transition-opacity"
          >
            💬 WhatsApp पर Subscribe करें
          </a>
        </div>
      </div>
    </section>
  );
}

