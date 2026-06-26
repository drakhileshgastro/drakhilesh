import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, MessageCircle } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-data";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Health Blog | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
  description: "Hindi health articles on liver disease, fatty liver, jaundice, endoscopy, IBS and digestive health by Dr. Akhilesh Yadav, Gastroenterologist at Orchid Medical Centre, Ranchi.",
  alternates: { canonical: "https://drakhileshgastro.com/blog" },
};

const CATEGORIES = ["All", "Liver Health", "Jaundice", "Procedures", "Diet", "IBS"];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-24 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 py-10 text-center">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-3">Health Blog</p>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            Dr. Akhilesh के Health Articles
          </h1>
          <p className="text-gray-muted text-sm font-hindi leading-relaxed">
            लिवर, पेट और पाचन की बीमारियों के बारे में सरल हिंदी में जानकारी
          </p>
        </div>
        <div className="h-8 bg-navy">
          <svg viewBox="0 0 1440 32" className="w-full" preserveAspectRatio="none" style={{ height: 32 }}>
            <path d="M0,32 L1440,32 L1440,0 Q720,32 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Blog grid */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <span key={cat} className={`px-4 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${cat === "All" ? "bg-navy text-white" : "bg-offwhite text-slate border border-gray-light hover:border-navy"}`}>
                {cat}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-light hover:border-teal hover:shadow-md transition-all duration-200 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="h-40 bg-gradient-to-br from-navy via-navy to-teal flex items-center justify-center relative overflow-hidden">
                  <span className="text-6xl">{post.emoji}</span>
                  <div className="absolute inset-0 bg-navy/20" />
                </div>

                <div className="p-5 flex flex-col flex-1">
                  {/* Meta */}
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs bg-teal-light text-teal font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-gray-muted text-xs">
                      <Clock size={11} /> {post.readTimeMins} min read
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-navy font-bold text-sm leading-snug mb-2 font-hindi group-hover:text-teal transition-colors flex-1">
                    {post.titleHi}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate text-xs leading-relaxed font-hindi line-clamp-2 mb-4">
                    {post.excerptHi}
                  </p>

                  {/* Author + Read more */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-light">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 bg-teal-light rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-teal text-[10px] font-bold">DA</span>
                      </div>
                      <span className="text-gray-muted text-xs">{DOCTOR.nameShort} · {post.publishedAt}</span>
                    </div>
                    <span className="text-teal text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      पढ़ें <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp share CTA */}
      <section className="bg-offwhite border-t border-gray-light py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-navy font-bold text-lg mb-2">अपने परिवार को share करें</p>
          <p className="text-slate text-sm font-hindi mb-5">
            इन articles को WhatsApp पर share करें — किसी की मदद हो सकती है
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent("Dr. Akhilesh Yadav — Liver & Stomach Specialist, Ranchi के health articles पढ़ें: https://drakhileshgastro.com/blog")}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-whatsapp text-white font-semibold text-sm rounded-xl"
            >
              <MessageCircle size={16} /> Share on WhatsApp
            </a>
            <Link href="/book" className="px-5 py-3 bg-navy text-white font-semibold text-sm rounded-xl hover:bg-navy-dark transition-colors">
              Book Appointment
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
