import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ArrowRight, MessageCircle, AlertTriangle, ShieldCheck, HeartHandshake, Phone, Calendar } from "lucide-react";
import { BLOG_POSTS } from "@/data/blog-data";
import { DOCTOR } from "@/lib/constants";
import StickyCTA from "@/components/service/sticky-cta";

export const metadata: Metadata = {
  title: "Gastroenterology Blog Ranchi | Liver & Stomach Health",
  description: "Explore our gastroenterology blog in Ranchi for evidence-based articles in Hindi on fatty liver, jaundice, endoscopy, and digestive wellness.",
  alternates: { canonical: "https://drakhileshgastro.com/blog" },
};

const CATEGORIES = ["All", "Liver Health", "Jaundice", "Procedures", "Diet", "IBS"];

export default function BlogPage() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, main health articles padh kar consult karna chahta hoon."
  )}`;

  return (
    <>
      <article className="min-h-screen pb-16 sm:pb-0 bg-white">
        
        {/* Section 1: Hero Banner */}
        <section className="bg-bg-sand/30 py-16 lg:py-20 border-b border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
            <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">
              Health Library
            </span>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-forest leading-tight font-hindi">
              लिवर और पेट की बीमारियों पर स्वास्थ्य लेख
            </h1>
            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
              Evidence-based medical guides and dietary advice prepared by the clinical team of Dr. Akhilesh Yadav in simple Hindi.
            </p>
          </div>
        </section>

        {/* Section 2: Clinical Disclaimer (E-E-A-T) */}
        <section className="bg-white py-6 border-b border-border/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-red-50/20 border border-red-200/50 rounded-2xl p-4 flex gap-3.5 items-start">
              <AlertTriangle className="text-red-600 flex-shrink-0 mt-0.5" size={16} />
              <div className="space-y-1">
                <span className="text-[10px] text-red-700 font-sans font-bold uppercase tracking-wider block">Medical Disclaimer &amp; Verification</span>
                <p className="text-xs text-muted leading-relaxed font-sans">
                  <strong>Important Notice:</strong> All health library guides are researched and written by the clinical medical team of Dr. Akhilesh Yadav. This content is for general educational purposes only and must not replace professional medical diagnosis, advice, or treatment plans. Always consult a certified specialist for individual symptoms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Blog Article Grid */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">

            {/* Category Filter pills */}
            <div className="flex flex-wrap gap-2 mb-10 justify-center">
              {CATEGORIES.map((cat) => (
                <span 
                  key={cat} 
                  className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all font-sans ${
                    cat === "All" 
                      ? "bg-primary text-white shadow-xs" 
                      : "bg-bg-sand border border-border/80 text-forest hover:border-primary"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOG_POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-border/80 hover:border-primary-light hover:shadow-sm transition-all flex flex-col justify-between"
                >
                  {/* Thumbnail Banner */}
                  <div className="h-44 bg-gradient-to-br from-primary-light/35 to-bg-sand flex items-center justify-center relative overflow-hidden">
                    <span className="text-5xl group-hover:scale-110 transition-transform">{post.emoji}</span>
                    <div className="absolute inset-0 bg-forest/5" />
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between">
                    
                    <div>
                      {/* Meta data */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[9px] bg-primary-50 border border-primary/20 text-primary font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider font-sans">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-muted text-[11px] font-sans">
                          <Clock size={11} /> {post.readTimeMins} min read
                        </span>
                      </div>

                      {/* Article Title */}
                      <h2 className="text-forest font-sans font-bold text-base leading-snug mb-2 font-hindi group-hover:text-primary transition-colors">
                        {post.titleHi}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted text-xs leading-relaxed font-hindi line-clamp-3 mb-6">
                        {post.excerptHi}
                      </p>
                    </div>

                    {/* Footer information */}
                    <div className="pt-4 border-t border-border/40 flex items-center justify-between font-sans">
                      <div className="flex items-center gap-2">
                        <div className="w-7 h-7 bg-primary-light rounded-full flex items-center justify-center flex-shrink-0 text-primary font-bold text-[10px]">
                          DA
                        </div>
                        <div className="text-[10px] text-muted font-medium">
                          <span className="text-forest font-bold block">{DOCTOR.nameShort} Team</span>
                          <span>Reviewed · {post.publishedAt}</span>
                        </div>
                      </div>
                      <span className="text-primary text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read <ArrowRight size={12} />
                      </span>
                    </div>

                  </div>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Human-Touch Author Team Section */}
        <section className="bg-bg-sand/20 py-16 border-t border-border/40">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="bg-white border border-border/80 rounded-3xl p-6 lg:p-8 flex flex-col md:flex-row gap-6 items-center shadow-xs">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-primary-light border border-border/20 flex-shrink-0 relative">
                <img
                  src="/dr-akhilesh-improved.png"
                  alt="Dr. Akhilesh Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-forest font-sans font-bold text-base">Written by Clinical Specialists &amp; Reviewed by Dr. Akhilesh</h3>
                <p className="text-muted text-xs leading-relaxed font-sans">
                  The health library is compiled by Dr. Akhilesh's clinical content team comprising medical professionals, dieticians, and health writers. Every article undergoes rigorous clinical validation and fact-checking by Dr. Akhilesh Yadav (DM Gastroenterology) to ensure high medical accuracy and compliance with E-E-A-T guidelines.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: High-Conversion Lead CTA */}
        <section className="py-16 lg:py-24">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-12 shadow-sm grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="md:col-span-5 w-full">
                <div className="aspect-[4/5] bg-primary-light rounded-2xl overflow-hidden relative shadow-xs max-w-xs mx-auto">
                  <img
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-border px-3 py-1 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
                  Book a Consultation
                </div>
                
                <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                  स्वस्थ पाचन और लिवर के लिए आज ही परामर्श लें
                </h2>
                
                <p className="font-sans text-muted text-base leading-relaxed">
                  Join thousands of patients who successfully recovered under Dr. Akhilesh's clinical care at Orchid Medical Centre, Ranchi.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                  >
                    <Calendar size={15} /> Book Appointment
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>

                <p className="text-xs text-muted font-sans font-medium uppercase tracking-wider mt-2 block">
                  ORCHID MEDICAL CENTRE, RANCHI · OPD DAILY (SUN CLOSED)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Floating conversion bar */}
        <StickyCTA title="Health Library & Reviews" />

      </article>
    </>
  );
}
