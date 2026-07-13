"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import { BLOG_POSTS } from "@/data/blog-data";

export default function BlogPreview() {
  // Let's feature three specific high-traffic articles
  const featuredSlugs = ["fatty-liver-diet-hindi", "jaundice-symptoms-causes", "endoscopy-kya-hota-hai"];
  
  const articles = featuredSlugs
    .map((slug) => BLOG_POSTS.find((p) => p.slug === slug))
    .filter((p): p is typeof BLOG_POSTS[number] => !!p);

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
              className="group bg-white rounded-3xl border border-border/60 overflow-hidden hover:border-primary hover:shadow-md transition-all duration-250 flex flex-col justify-between"
            >
              <div>
                {/* Real Blog Banner Thumbnail (aspect-16/10) */}
                <div className="aspect-[16/10] bg-bg-sand overflow-hidden relative">
                  <img
                    src={article.image || "/images/fatty-liver-diet-blog.png"}
                    alt={article.titleEn}
                    title={article.titleEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 pb-2">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] border border-primary/20 text-primary px-2.5 py-0.5 rounded bg-primary-50/50 font-bold font-sans uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-muted text-xs font-sans">
                      <Clock size={12} className="opacity-70" /> {article.readTimeMins} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-hindi text-forest font-bold text-lg leading-snug mb-1.5 group-hover:text-primary transition-colors duration-200">
                    {article.titleHi}
                  </h3>
                  <p className="font-sans text-muted text-xs leading-normal mb-3 font-medium">{article.titleEn}</p>

                  {/* Excerpt */}
                  <p className="font-hindi text-muted text-[13px] leading-relaxed line-clamp-2">
                    {article.excerptHi}
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

      </div>
    </section>
  );
}
