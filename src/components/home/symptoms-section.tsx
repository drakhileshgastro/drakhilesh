import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SYMPTOMS_LIST } from "@/lib/constants";

export default function SymptomsSection() {
  return (
    <section className="bg-bg-sand py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
            Symptom Checker
          </span>
          <h2 className="font-hindi text-[1.75rem] sm:text-3xl lg:text-4xl font-bold text-forest mb-3">
            आज आप किस समस्या से परेशान हैं?
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            What problem are you facing today? Select your symptom to learn more and find the right treatment.
          </p>
        </div>

        {/* Symptom Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {SYMPTOMS_LIST.map((symptom) => (
            <Link
              key={symptom.slug}
              href={`/symptoms/${symptom.slug}`}
              className="group bg-white border border-border rounded-2xl p-4 sm:p-5 text-center hover:border-primary hover:shadow-md transition-all duration-200"
            >
              <div className="text-3xl sm:text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {symptom.icon}
              </div>
              <p className="font-hindi text-forest text-sm font-semibold leading-tight mb-1">
                {symptom.hindiLabel}
              </p>
              <p className="text-muted text-xs">{symptom.label}</p>
            </Link>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-8">
          <Link
            href="/symptoms"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors"
          >
            सभी लक्षण देखें — View All Symptoms <ArrowRight size={16} />
          </Link>
        </div>

        {/* Reassurance strip */}
        <div className="mt-10 bg-primary-50 border border-primary-light rounded-2xl p-5 text-center">
          <p className="font-hindi text-forest text-sm sm:text-base font-semibold mb-1">
            अगर आपको अपनी समस्या नहीं मिली, तो भी घबराएं नहीं।
          </p>
          <p className="text-muted text-sm">
            Not sure what's wrong? Dr. Akhilesh Yadav will diagnose your problem in the first consultation.
          </p>
          <Link
            href="/book"
            className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
