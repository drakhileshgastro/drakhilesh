import Link from "next/link";
import { Clock, BookOpen } from "lucide-react";
import type { BlogPost } from "@/data/blog-data";

interface Props {
  blogs: Pick<BlogPost, "slug" | "titleHi" | "emoji" | "readTimeMins" | "category">[];
  conditionTitle: string;
}

export default function RelatedBlogs({ blogs, conditionTitle }: Props) {
  if (!blogs.length) return null;

  return (
    <section className="py-14 bg-bg-sand/20 border-t border-border/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="flex items-center gap-3 mb-8">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <BookOpen size={17} className="text-primary" />
          </div>
          <div>
            <p className="text-[10px] text-primary uppercase font-bold tracking-wider font-sans">Health Library</p>
            <h2 className="text-forest font-display font-bold text-xl leading-tight">
              {conditionTitle} — Related Guides
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blog/${blog.slug}`}
              className="group bg-white border border-border hover:border-primary hover:shadow-md transition-all duration-200 rounded-2xl p-5 flex gap-4 items-start"
            >
              <span className="text-3xl flex-shrink-0 mt-0.5">{blog.emoji}</span>
              <div className="min-w-0">
                <p className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans mb-1">{blog.category}</p>
                <h3 className="text-forest font-hindi font-bold text-sm leading-snug group-hover:text-primary transition-colors line-clamp-3">
                  {blog.titleHi}
                </h3>
                <div className="flex items-center gap-1.5 mt-2">
                  <Clock size={11} className="text-muted flex-shrink-0" />
                  <span className="text-[10px] text-muted font-sans font-medium">{blog.readTimeMins} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
          >
            View All Health Guides →
          </Link>
        </div>

      </div>
    </section>
  );
}
