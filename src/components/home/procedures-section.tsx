import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { PROCEDURES_LIST } from "@/lib/constants";

export default function ProceduresSection() {
  return (
    <section className="bg-bg-sand py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-white text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider border border-primary-light">
            Advanced Procedures
          </span>
          <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-3">
            उन्नत तकनीक से इलाज
          </h2>
          <p className="text-muted text-base max-w-2xl mx-auto">
            Dr. Akhilesh Yadav performs advanced endoscopic procedures using the latest technology —
            most are done in under 30 minutes, without surgery.
          </p>
        </div>

        {/* Procedure Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROCEDURES_LIST.map((proc) => (
            <div
              key={proc.slug}
              className="bg-white rounded-2xl border border-border p-6 hover:border-primary hover:shadow-md transition-all duration-200 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary-light rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">{proc.icon}</span>
                </div>
                <div>
                  <h3 className="text-forest font-bold text-base">{proc.title}</h3>
                  <p className="font-hindi text-muted text-sm">{proc.hindiTitle}</p>
                </div>
              </div>

              <p className="font-hindi text-muted text-sm leading-relaxed mb-3">
                {proc.description}
              </p>

              <div className="flex items-start gap-2 bg-primary-50 rounded-xl p-3 mb-4">
                <CheckCircle size={14} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="text-forest text-sm font-medium">{proc.benefit}</p>
              </div>

              <Link
                href={`/procedures/${proc.slug}`}
                className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:gap-2.5 transition-all group-hover:text-primary-dark"
              >
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom trust line */}
        <div className="mt-10 text-center">
          <p className="text-muted text-sm font-hindi mb-4">
            सभी प्रक्रियाएं आधुनिक उपकरणों से, अनुभवी डॉक्टर की देखरेख में की जाती हैं।
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-forest/70">
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Painless &amp; Safe</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> 15–30 Minute Procedure</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Same-day Results</span>
            <span className="flex items-center gap-1.5"><CheckCircle size={14} className="text-primary" /> Hindi Explanation</span>
          </div>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/procedures"
              className="px-6 py-3 border border-primary text-primary font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors"
            >
              सभी प्रक्रियाएं — All Procedures
            </Link>
            <Link
              href="/book"
              className="px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors"
            >
              Book Procedure Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
