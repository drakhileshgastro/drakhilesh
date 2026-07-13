import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CONDITIONS_LIST } from "@/lib/constants";

export default function ConditionsSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
            Conditions Treated
          </span>
          <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-3">
            हम किन बीमारियों का इलाज करते हैं?
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Dr. Akhilesh Yadav provides expert treatment for all major gastroenterology and liver conditions.
            Click any condition to learn more.
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {CONDITIONS_LIST.map((condition) => (
            <Link
              key={condition.slug}
              href={`/conditions/${condition.slug}`}
              className="group bg-bg rounded-2xl border border-border p-4 hover:border-primary hover:bg-primary-50 hover:shadow-md transition-all duration-200"
            >
              <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {condition.icon}
              </div>
              <h3 className="font-hindi text-forest font-bold text-sm leading-tight mb-1">
                {condition.hindiTitle}
              </h3>
              <p className="text-muted text-xs">{condition.title}</p>
              <p className="text-muted text-[11px] mt-2 leading-relaxed font-hindi line-clamp-2">
                {condition.description}
              </p>
              <div className="mt-3 flex items-center gap-1 text-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                Know More <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>

        {/* View all CTA */}
        <div className="text-center mt-10">
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors"
          >
            सभी बीमारियाँ देखें — View All Conditions <ArrowRight size={16} />
          </Link>
        </div>

        {/* Early diagnosis callout */}
        <div className="mt-12 bg-primary-50 rounded-3xl p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="font-hindi text-forest text-xl font-bold mb-2">
                समय पर जांच क्यों जरूरी है?
              </h3>
              <p className="text-muted text-sm leading-relaxed mb-4 font-hindi">
                कई गंभीर बीमारियाँ शुरुआत में सामान्य लक्षण दिखाती हैं। समय पर गैस्ट्रोएंटेरोलॉजिस्ट से मिलना
                बड़ी जटिलताओं से बचा सकता है।
              </p>
              <div className="grid grid-cols-2 gap-2">
                {["समय पर जांच", "सही इलाज", "कम खर्च", "जल्दी रिकवरी"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-forest font-hindi">
                    <span className="text-primary font-bold">✓</span> {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-3">⏰</div>
              <p className="text-forest font-bold text-base font-hindi mb-3">
                देर न करें — अभी अपॉइंटमेंट लें
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors"
              >
                Book Appointment →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
