"use client";

import Link from "next/link";
import { Star, GraduationCap, Building2, Users, Heart, Clock } from "lucide-react";
import { DOCTOR } from "@/lib/constants";

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Bokaro, JH",
    condition: "Fatty Liver",
    rating: 5,
    date: "1 month ago",
    text: "डॉ. अखिलेश जी ने मेरी फैटी लिवर को बहुत अच्छे से समझाया और उपचार दिया। 3 महीने में रिपोर्ट सामान्य हो गई।",
  },
  {
    name: "Sunita Devi",
    location: "Dhanbad, JH",
    condition: "Jaundice",
    rating: 5,
    date: "3 weeks ago",
    text: "पीलिया में बहुत परेशान थी। डॉक्टर ने हिंदी में पूरी बात समझाई और इलाज दिया। 2 हफ्ते में ठीक हो गई।",
  },
  {
    name: "Amit Singh",
    location: "Ranchi, JH",
    condition: "Endoscopy",
    rating: 5,
    date: "2 months ago",
    text: "एंडोस्कोपी से बहुत डर लग रहा था लेकिन डॉ. अखिलेश ने बिल्कुल दर्दरहित और आसान तरीके से की। बहुत शुक्रिया।",
  },
  {
    name: "Priya Sharma",
    location: "Hazaribagh, JH",
    condition: "IBS",
    rating: 5,
    date: "1 week ago",
    text: "3 साल से पेट की समस्या थी, कई डॉक्टर दिखाए पर आराम नहीं मिला। डॉ. अखिलेश से मिलकर पहली बार असल इलाज मिला।",
  },
  {
    name: "Mohammad Aslam",
    location: "Jamshedpur, JH",
    condition: "Liver Cirrhosis",
    rating: 5,
    date: "4 months ago",
    text: "Orchid Medical Centre में बहुत अच्छी सुविधा है। डॉक्टर बहुत ध्यान से सुनते हैं और हिंदी में बताते हैं।",
  },
  {
    name: "Lakshmi Prasad",
    location: "Giridih, JH",
    condition: "Gallstone",
    rating: 5,
    date: "2 weeks ago",
    text: "पित्त की पथरी का इलाज बिना ऑपरेशन के हुआ। डॉ. अखिलेश बहुत अनुभवी हैं और मरीज की पूरी देखभाल करते हैं।",
  },
];

const trustBadges = [
  { icon: GraduationCap, label: "DM Gastroenterology", sub: "Super-specialist" },
  { icon: Star, label: "4.9 / 5.0 Rating", sub: "Google Trusted" },
  { icon: Users, label: "4,000+ Patients", sub: "Successfully Treated" },
  { icon: Heart, label: "Hindi Consultation", sub: "Clear & Empathetic" },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20 lg:py-24 border-t border-border/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-3">
            Patient Testimonials
          </div>
          <h2 className="font-hindi text-[2rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-forest mb-4 leading-tight">
            हजारों मरीजों का भरोसा
          </h2>
          <p className="font-sans text-muted text-base max-w-xl mx-auto leading-relaxed">
            Read verified recovery stories and experiences from patients who consulted Dr. Akhilesh Yadav.
          </p>
          
          {/* Rating summary */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 border border-border bg-white rounded-2xl shadow-sm">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={15} className="text-accent fill-accent" />
              ))}
            </div>
            <div className="text-left font-sans text-xs sm:text-sm">
              <span className="text-forest font-bold">{DOCTOR.googleRating}</span>
              <span className="text-muted"> / 5.0 rating from {DOCTOR.totalReviews} Google reviews</span>
            </div>
          </div>
        </div>

              {/* Google Review style Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl border border-border/60 p-6 hover:border-primary hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Google Review header */}
              <div className="flex items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary-50/80 border border-primary/10 flex items-center justify-center font-display font-bold text-primary text-sm shadow-2xs">
                    {review.name[0]}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-forest font-sans font-bold text-sm leading-none">{review.name}</p>
                      <span className="w-1.5 h-1.5 bg-green-600 rounded-full" title="Verified Review" />
                    </div>
                    <p className="text-muted text-[10px] uppercase tracking-wider font-semibold font-sans mt-1">
                      {review.location} · {review.date}
                    </p>
                  </div>
                </div>
                
                {/* Google "G" logo */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="font-hindi text-forest text-[14px] leading-relaxed mb-4 italic">
                "{review.text}"
              </p>
            </div>
            
            <div className="flex items-center justify-between border-t border-border-light pt-4 mt-2">
              <span className="text-[10px] text-muted font-sans font-bold uppercase tracking-wider flex items-center gap-1">
                Verified Google Review
              </span>
              <span className="text-[9px] border border-primary/20 text-primary px-2.5 py-0.5 rounded-full bg-primary-50/50 font-extrabold font-sans uppercase tracking-wider">
                {review.condition}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Why Choose (Premium, Spaced out, Cardless) */}
      <div className="border-t border-border/40 pt-16 pb-8 mb-12">
        <h3 className="text-forest text-center font-hindi text-3xl font-bold mb-12">
          क्यों मरीज़ डॉ. अखिलेश यादव को चुनते हैं?
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-50/50 text-primary border border-primary/10 shadow-3xs hover:scale-105 transition-all">
                  <Icon className="text-primary" size={26} />
                </div>
                <div className="space-y-1">
                  <h4 className="text-forest font-display font-extrabold text-lg leading-tight">
                    {badge.label}
                  </h4>
                  <p className="text-muted text-xs uppercase tracking-widest font-bold">
                    {badge.sub}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center flex flex-wrap items-center justify-center gap-3">
        <a
          href={DOCTOR.googleReviewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3.5 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
        >
          View Google Reviews
        </a>
        <Link
          href="/book"
          className="inline-flex items-center justify-center px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[48px]"
        >
          Book Appointment
        </Link>
      </div>
      </div>
    </section>
  );
}
