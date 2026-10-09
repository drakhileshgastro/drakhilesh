import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getBlogBySlug } from "@/data/blog-data";

interface RelatedBlogsProps {
  blogs: string[];
}

const BLOG_MAP: Record<string, { title: string; readTime: string }> = {
  "colonoscopy-cost-ranchi": { title: "Colonoscopy Cost in Ranchi — तैयारी और charges", readTime: "5 min read" },
  "ranchi-mein-ercp-cost": { title: "ERCP Cost in Ranchi — Stone Removal और Stent", readTime: "5 min read" },
  "fibroscan-liver-test-ranchi-cost-procedure": { title: "FibroScan Test — Report, तैयारी और Ranchi Cost", readTime: "5 min read" },
  "eus-fna-fnb-biopsy-preparation-report-hindi": { title: "EUS-FNA और FNB — Biopsy, तैयारी और रिपोर्ट", readTime: "6 min read" },
  "endoscopy-ke-baad-pet-dard-recovery-hindi": { title: "एंडोस्कोपी के बाद पेट दर्द — Recovery और Warning Signs", readTime: "5 min read" },
  "endoscopy-cost-ranchi": { title: "Endoscopy Cost in Ranchi — तैयारी, खर्च और booking", readTime: "7 min read" },
  "fatty-liver-diet-hindi": { title: "लिवर को स्वस्थ रखने के लिए क्या खाएं और क्या न खाएं", readTime: "5 min read" },
  "jaundice-symptoms-causes": { title: "पीलिया (Jaundice) के लक्षण, कारण और बचाव के उपाय", readTime: "4 min read" },
  "endoscopy-kya-hota-hai": { title: "एंडोस्कोपी टेस्ट क्या है? प्रक्रिया, समय और तैयारी की पूरी जानकारी", readTime: "6 min read" },
};

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  const list = blogs.flatMap((slug) => {
    const post = getBlogBySlug(slug);
    return post ? [{ slug, title: BLOG_MAP[slug]?.title ?? post.titleHi, readTime: `${post.readTimeMins} min read` }] : [];
  });
  if (list.length === 0) return null;

  return (
    <section className="bg-white py-16 lg:py-20 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
            Patient Library
          </span>
          <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
            स्वास्थ्य गाइड और ब्लॉग — Related Blogs
          </h2>
          <p className="font-sans text-muted text-base mt-2">
            Read patient education guides; each article shows its medical review status.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {list.map((blog, idx) => (
            <Link
              key={idx}
              href={`/blog/${blog.slug}`}
              className="bg-bg-sand/20 border border-border hover:border-primary-light transition-all rounded-2xl p-6 shadow-xs flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-muted font-sans font-medium">
                  <span>Medical Blog</span>
                  <span>{blog.readTime}</span>
                </div>
                <h3 className="text-forest font-sans font-bold text-base mt-3 leading-snug group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-1.5 text-xs text-primary font-bold font-sans uppercase tracking-wider mt-6 border-t border-border/40 pt-4">
                Read Guide <ChevronRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
