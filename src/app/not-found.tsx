import Link from "next/link";
import { Phone, Calendar, ArrowLeft, Search, Stethoscope, Activity, FileText } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

export const metadata = {
  title: "404 — Page Not Found | Dr. Akhilesh Yadav, Ranchi",
  description: "The requested medical resource or page could not be found. Find symptoms, procedures, or book an appointment with Dr. Akhilesh Yadav.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg-sand/30 flex flex-col justify-center items-center px-4 sm:px-6 py-20">
      <div className="max-w-2xl w-full bg-white border border-border/80 rounded-3xl p-8 sm:p-12 shadow-sm text-center space-y-6">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-50 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider font-sans">
          <span>Error 404</span>
          <span>·</span>
          <span>Page Not Found</span>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl sm:text-4xl font-display font-bold text-forest">
            यह पेज उपलब्ध नहीं है
          </h1>
          <p className="font-hindi text-muted text-base sm:text-lg">
            आप जिस पेज को खोज रहे हैं वह स्थानांतरित कर दिया गया है या मौजूद नहीं है।
          </p>
        </div>

        <p className="text-muted text-sm font-sans max-w-md mx-auto">
          Don&apos;t worry — you can consult Dr. Akhilesh Yadav at Orchid Medical Centre, Ranchi, or explore our health library below.
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
          >
            <Calendar size={16} /> Book Appointment
          </Link>
          <a
            href={`tel:${DOCTOR.phone}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-border text-forest font-display font-semibold text-sm rounded-xl hover:bg-bg-sand transition-colors min-h-[48px]"
          >
            <Phone size={16} className="text-primary" /> Call Clinic
          </a>
        </div>

        {/* Quick Help Navigation Links */}
        <div className="pt-8 border-t border-border/50 text-left">
          <p className="text-xs font-bold uppercase tracking-wider text-muted font-sans mb-4 text-center">
            Popular Medical Resources
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Link
              href="/conditions"
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-border/60 hover:border-primary/40 hover:bg-bg-sand/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform flex-shrink-0">
                <Stethoscope size={18} />
              </div>
              <div>
                <span className="text-sm font-bold text-forest font-sans block group-hover:text-primary transition-colors">
                  Conditions Treated
                </span>
                <span className="text-xs text-muted font-hindi">फैटी लिवर, पीलिया, एसिडिटी</span>
              </div>
            </Link>

            <Link
              href="/procedures"
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-border/60 hover:border-primary/40 hover:bg-bg-sand/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform flex-shrink-0">
                <Activity size={18} />
              </div>
              <div>
                <span className="text-sm font-bold text-forest font-sans block group-hover:text-primary transition-colors">
                  Endoscopy & Procedures
                </span>
                <span className="text-xs text-muted font-hindi">एंडोस्कोपी, कोलोनोस्कोपी की जानकारी</span>
              </div>
            </Link>

            <Link
              href="/symptoms"
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-border/60 hover:border-primary/40 hover:bg-bg-sand/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform flex-shrink-0">
                <Search size={18} />
              </div>
              <div>
                <span className="text-sm font-bold text-forest font-sans block group-hover:text-primary transition-colors">
                  Check Symptoms
                </span>
                <span className="text-xs text-muted font-hindi">पेट दर्द, गैस, ब्लोटिंग लक्षण</span>
              </div>
            </Link>

            <Link
              href="/blog"
              className="flex items-center gap-3 p-3.5 rounded-2xl border border-border/60 hover:border-primary/40 hover:bg-bg-sand/40 transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-primary group-hover:scale-105 transition-transform flex-shrink-0">
                <FileText size={18} />
              </div>
              <div>
                <span className="text-sm font-bold text-forest font-sans block group-hover:text-primary transition-colors">
                  Health Blog Library
                </span>
                <span className="text-xs text-muted font-hindi">डॉक्टर द्वारा प्रमाणित आर्टिकल्स</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary font-sans hover:text-primary-dark transition-colors"
          >
            <ArrowLeft size={14} /> Back to Homepage
          </Link>
        </div>

      </div>
    </div>
  );
}
