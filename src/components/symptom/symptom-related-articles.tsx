import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface SymptomRelatedArticlesProps {
  articles: string[];
}

const ARTICLE_MAP: Record<string, { title: string; readTime: string }> = {
  "fatty-liver-diet-hindi": { title: "लिवर को स्वस्थ रखने के लिए क्या खाएं और क्या न खाएं", readTime: "5 min read" },
  "jaundice-symptoms-causes": { title: "पीलिया (Jaundice) के लक्षण, कारण और बचाव के उपाय", readTime: "4 min read" },
  "endoscopy-kya-hota-hai": { title: "एंडोस्कोपी टेस्ट क्या है? प्रक्रिया, समय और तैयारी की पूरी जानकारी", readTime: "6 min read" },
};

export default function SymptomRelatedArticles({ articles }: SymptomRelatedArticlesProps) {
  const list = articles.map((slug) => ({
    slug,
    ...(ARTICLE_MAP[slug] || { title: slug.replace("-", " "), readTime: "5 min read" }),
  }));

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Patient Resources
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            स्वास्थ्य गाइड और ब्लॉग — Related Articles
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Read health articles reviewed by Dr. Akhilesh Yadav.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {list.map((art, idx) => (
            <Link
              key={idx}
              href={`/blog/${art.slug}`}
              className="bg-bg-sand/20 border border-border hover:border-primary-light transition-all rounded-2xl p-6 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted font-sans font-medium">
                  <span>Health Blog</span>
                  <span>{art.readTime}</span>
                </div>
                <h3 className="text-forest font-sans font-bold text-base mt-3 leading-snug group-hover:text-primary transition-colors">
                  {art.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-primary font-bold font-sans uppercase tracking-wider mt-6 border-t border-border/40 pt-4">
                Read guide <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
