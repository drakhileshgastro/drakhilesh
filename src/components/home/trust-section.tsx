"use client";

import Link from "next/link";
import { Star, Quote, GraduationCap, Building2, Users, Heart, Clock } from "lucide-react";
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
  { icon: GraduationCap, label: "DM Gastroenterology", sub: "Super-specialist" },
  { icon: Building2, label: "Orchid Medical Centre", sub: "Modern Facility" },
  { icon: Star, label: "4.9 / 5.0 Rating", sub: "Google Trusted" },
  { icon: Users, label: "4,000+ Patients", sub: "Successfully Treated" },
  { icon: Heart, label: "Hindi Consultation", sub: "Empathetic & Clear" },
  { icon: Clock, label: "OPD Available", sub: "Mon – Sat" },
];

export default function TrustSection() {
  return (
    <section className="bg-white py-20 lg:py-24">
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
            Read first-hand recovery stories and experiences from patients who consulted Dr. Akhilesh Yadav.
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

        {/* Review Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-border p-6 hover:border-primary hover:shadow-sm transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={13} className="text-accent fill-accent" />
                  ))}
                </div>
                <div className="flex items-start gap-2.5 mb-4">
                  <Quote size={14} className="text-primary/30 flex-shrink-0 mt-1" />
                  <p className="font-hindi text-forest text-sm leading-relaxed">{review.text}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-border-light pt-4 mt-2">
                <div>
                  <p className="text-forest font-sans font-bold text-xs uppercase tracking-wider">{review.name}</p>
                  <p className="text-muted text-xs font-sans mt-0.5">{review.location}</p>
                </div>
                <span className="text-[10px] border border-border text-primary px-2 py-1 rounded-lg font-semibold font-sans uppercase tracking-wider bg-bg-sand">
                  {review.condition}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="bg-bg-sand border border-border rounded-3xl p-8 lg:p-12 mb-16">
          <h3 className="text-forest text-center font-hindi text-2xl font-bold mb-8">
            क्यों मरीज़ डॉ. अखिलेश यादव को चुनते हैं?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.label} className="bg-white border border-border rounded-2xl p-5 text-center shadow-sm flex flex-col items-center justify-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary-50 mb-3">
                    <Icon className="text-primary" size={18} />
                  </div>
                  <div className="text-forest font-sans font-bold text-xs leading-snug">{badge.label}</div>
                  <div className="text-muted text-[10px] mt-1 font-sans uppercase tracking-wider font-semibold">{badge.sub}</div>
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
