import Link from "next/link";
import { ArrowRight, Clock, MessageCircle } from "lucide-react";

const POSTS = [
  {
    slug: "fatty-liver-diet-hindi",
    title: "फैटी लिवर में क्या खाएं, क्या नहीं? पूरी जानकारी",
    titleEn: "Fatty Liver Diet Guide",
    excerpt: "फैटी लिवर की बीमारी को सही खानपान से ठीक किया जा सकता है। जानिए कौन सी चीज़ें खाएं और कौन सी बिल्कुल न खाएं।",
    category: "Liver Health",
    readTime: "5 min read",
    date: "June 2026",
    emoji: "🥗",
  },
  {
    slug: "jaundice-symptoms-causes",
    title: "पीलिया के 8 लक्षण जो आपको पहचाननी चाहिए",
    titleEn: "8 Signs of Jaundice",
    excerpt: "पीलिया होने पर सिर्फ आंखें पीली नहीं होतीं — इसके और भी कई लक्षण हैं। जल्दी पहचानें और तुरंत डॉक्टर से मिलें।",
    category: "Jaundice",
    readTime: "4 min read",
    date: "June 2026",
    emoji: "👁️",
  },
  {
    slug: "endoscopy-kya-hota-hai",
    title: "एंडोस्कोपी में दर्द होता है? — सब मिथ टूटेंगे",
    titleEn: "Endoscopy Myths Busted",
    excerpt: "बहुत लोग endoscopy से डरते हैं। लेकिन क्या यह सच में इतनी तकलीफदेह है? Dr. Akhilesh सब सच बताते हैं।",
    category: "Procedures",
    readTime: "3 min read",
    date: "May 2026",
    emoji: "🔬",
  },
];

export default function BlogPreview() {
  return (
    <section className="section-pad bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Health Blog</p>
            <h2 className="text-navy text-2xl sm:text-3xl font-bold">
              Latest Health Tips
            </h2>
            <p className="text-slate text-sm font-hindi mt-1">
              Dr. Akhilesh द्वारा लिखे गए health articles
            </p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-teal text-sm font-semibold hover:underline flex-shrink-0"
          >
            View all posts <ArrowRight size={14} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-light hover:border-teal hover:shadow-md transition-all duration-200"
            >
              {/* Thumbnail placeholder */}
              <div className="h-32 sm:h-36 bg-gradient-to-br from-navy to-teal flex items-center justify-center">
                <span className="text-5xl">{post.emoji}</span>
              </div>

              <div className="p-4">
                {/* Category + read time */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-teal-light text-teal font-medium px-2 py-0.5 rounded-full">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-gray-muted text-xs">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-navy font-bold text-sm leading-snug mb-2 font-hindi group-hover:text-teal transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate text-xs leading-relaxed font-hindi line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Author */}
                <div className="mt-3 flex items-center gap-2">
                  <div className="w-7 h-7 bg-teal-light rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-teal text-[11px] font-bold">DA</span>
                  </div>
                  <span className="text-gray-muted text-xs">Dr. Akhilesh · {post.date}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* WhatsApp share note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-slate text-xs">
          <MessageCircle size={13} className="text-whatsapp" />
          <span>Share these articles on WhatsApp to help your family</span>
        </div>
      </div>
    </section>
  );
}
