import Link from "next/link";
import { Star, Quote } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Bokaro, Jharkhand",
    condition: "Fatty Liver",
    rating: 5,
    text: "डॉ. अखिलेश जी ने मेरी फैटी लिवर को बहुत अच्छे से समझाया और उपचार दिया। 3 महीने में रिपोर्ट सामान्य हो गई।",
  },
  {
    name: "Sunita Devi",
    location: "Dhanbad, Jharkhand",
    condition: "Jaundice",
    rating: 5,
    text: "पीलिया में बहुत परेशान थी। डॉक्टर ने हिंदी में पूरी बात समझाई और इलाज दिया। 2 हफ्ते में ठीक हो गई।",
  },
  {
    name: "Amit Singh",
    location: "Ranchi",
    condition: "Endoscopy",
    rating: 5,
    text: "एंडोस्कोपी से बहुत डर लग रहा था लेकिन डॉ. अखिलेश ने बिल्कुल दर्दरहित और आसान तरीके से की। बहुत शुक्रिया।",
  },
  {
    name: "Priya Sharma",
    location: "Hazaribagh",
    condition: "IBS",
    rating: 5,
    text: "3 साल से पेट की समस्या थी, कई डॉक्टर दिखाए पर आराम नहीं मिला। डॉ. अखिलेश से मिलकर पहली बार असल इलाज मिला।",
  },
  {
    name: "Mohammad Aslam",
    location: "Jamshedpur",
    condition: "Liver Cirrhosis",
    rating: 5,
    text: "Orchid Medical Centre में बहुत अच्छी सुविधा है। डॉक्टर बहुत ध्यान से सुनते हैं और हिंदी में बताते हैं।",
  },
  {
    name: "Lakshmi Prasad",
    location: "Giridih, Jharkhand",
    condition: "Gallstone",
    rating: 5,
    text: "पित्त की पथरी का इलाज बिना ऑपरेशन के हुआ। डॉ. अखिलेश बहुत अनुभवी हैं और मरीज की पूरी देखभाल करते हैं।",
  },
];

const trustBadges = [
  { icon: "🎓", label: "DM Gastroenterology", sub: "Super-specialist" },
  { icon: "🏥", label: "Orchid Medical Centre", sub: "Modern Facility" },
  { icon: "⭐", label: "4.9 / 5.0", sub: "Google Rating" },
  { icon: "👥", label: "4,000+ Patients", sub: "Successfully Treated" },
  { icon: "🗣️", label: "Hindi Consultation", sub: "Rural-friendly" },
  { icon: "📅", label: "Mon – Sat", sub: "10am–8pm" },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary text-xs font-semibold rounded-full mb-3 uppercase tracking-wider">
            Patient Reviews
          </span>
          <h2 className="font-hindi text-3xl lg:text-4xl font-bold text-forest mb-3">
            हजारों मरीजों का भरोसा
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Real patients, real recoveries. Here's what patients say about Dr. Akhilesh Yadav.
          </p>
          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 mt-5 px-5 py-3 bg-accent-light border border-accent/20 rounded-2xl">
            <div className="flex">
              {[1,2,3,4,5].map((i) => (
                <Star key={i} size={18} className="text-accent fill-accent" />
              ))}
            </div>
            <div className="text-left">
              <span className="text-forest font-bold text-lg">{DOCTOR.googleRating}</span>
              <span className="text-muted text-sm"> / 5.0 · {DOCTOR.totalReviews} reviews</span>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-bg rounded-2xl border border-border p-5 hover:border-primary-light hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={13} className="text-accent fill-accent" />
                ))}
              </div>
              <div className="flex items-start gap-2 mb-3">
                <Quote size={16} className="text-primary flex-shrink-0 mt-0.5" />
                <p className="font-hindi text-forest text-sm leading-relaxed">{review.text}</p>
              </div>
              <div className="flex items-center justify-between border-t border-border-light pt-3 mt-3">
                <div>
                  <p className="text-forest font-semibold text-sm">{review.name}</p>
                  <p className="text-muted text-xs">{review.location}</p>
                </div>
                <span className="text-xs bg-primary-50 text-primary px-2 py-1 rounded-lg font-semibold">
                  {review.condition}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="bg-forest rounded-3xl p-8 mb-10">
          <h3 className="text-white text-center font-hindi text-xl font-bold mb-6">
            क्यों मरीज़ डॉ. अखिलेश यादव को चुनते हैं?
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {trustBadges.map((badge) => (
              <div key={badge.label} className="text-center">
                <div className="text-3xl mb-2">{badge.icon}</div>
                <div className="text-white font-semibold text-sm">{badge.label}</div>
                <div className="text-white/50 text-xs mt-0.5">{badge.sub}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={DOCTOR.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 border border-border text-forest text-sm font-medium rounded-xl hover:border-primary hover:text-primary transition-colors mr-3"
          >
            ⭐ Google पर Reviews देखें
          </a>
          <Link
            href="/book"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors"
          >
            अपॉइंटमेंट बुक करें
          </Link>
        </div>
      </div>
    </section>
  );
}
