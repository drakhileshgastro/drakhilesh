"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Star, CheckCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR, CONDITIONS, TRUST_STATS } from "@/lib/constants";

export default function HeroSection() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Headline + Stats + CTAs */}
          <div className="order-2 lg:order-1 lg:pr-4">
            {/* Badge */}
            <div className="text-primary font-display text-xs font-bold tracking-wider uppercase mb-5">
              Ranchi's Trusted Gastroenterologist
            </div>

            {/* Hindi Headline */}
            <h1 className="font-hindi text-3xl sm:text-4xl lg:text-[3rem] font-bold text-forest leading-[1.2] mb-4">
              पेट, लीवर या पाचन की<br />
              <span className="text-primary">समस्या से परेशान हैं?</span>
            </h1>
            <p className="font-sans text-muted text-base sm:text-lg mb-8 leading-relaxed max-w-lg">
              Expert super-specialist care for stomach, liver, and digestive conditions by Dr. Akhilesh Yadav, DM Gastroenterology, at Orchid Medical Centre, Ranchi.
            </p>

            {/* Trust stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="bg-white border border-border rounded-2xl p-4 shadow-sm text-center">
                  <div className="text-2xl font-display font-bold text-primary">{stat.value}</div>
                  <div className="text-[11px] text-muted font-hindi mt-1 leading-normal">{stat.labelHindi}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-sm min-h-[50px] text-center"
              >
                Book Appointment
              </Link>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[50px]"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-primary hover:text-primary-dark font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[50px]"
              >
                <Phone size={16} /> Call Now
              </a>
            </div>

            {/* Google rating */}
            <div className="mt-8 flex items-center gap-3 border-t border-border/60 pt-6">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="text-muted text-sm font-sans">
                <strong>{DOCTOR.googleRating}</strong> rating from {DOCTOR.totalReviews} patients
              </span>
            </div>
          </div>

          {/* Right — Doctor Photo + Booking Form */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Doctor photo */}
            <div className="relative">
              <div className="aspect-[4/3] lg:aspect-[3/2] bg-primary-light rounded-2xl overflow-hidden relative shadow-sm">
                <img
                  src="/dr-akhilesh-improved.png"
                  alt="Dr. Akhilesh Yadav"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-4 -left-4 bg-white border border-border rounded-2xl px-5 py-3.5 shadow-sm hidden sm:block">
                <div className="text-[10px] text-muted uppercase tracking-wider font-bold font-display">Qualification</div>
                <div className="text-primary font-display font-bold text-sm mt-0.5">DM Gastroenterology</div>
                <div className="text-muted text-xs font-sans mt-0.5">MBBS · MD · DM</div>
              </div>
              {/* Floating availability badge */}
              <div className="absolute -top-3 -right-4 bg-primary text-white border border-primary rounded-2xl px-4 py-2 shadow-sm">
                <div className="text-[10px] text-accent font-bold uppercase tracking-wider font-display">Status</div>
                <div className="text-xs font-semibold font-display">Available Mon – Sat</div>
              </div>
            </div>

            {/* Appointment booking form */}
            <HeroBookingForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBookingForm() {
  const [form, setForm] = useState({ patient_name: "", patient_phone: "", patient_city: "", condition: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.patient_name || !form.patient_phone || !form.patient_city || !form.condition) return;
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, source: "Homepage Hero Form" }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError("Something went wrong. Please call us directly.");
      }
    } catch {
      setError("Unable to connect. Please call us at " + DOCTOR.phone);
    }
    setLoading(false);
  };

  if (success) {
    return (
      <div className="bg-white border border-border rounded-2xl p-6 text-center shadow-sm">
        <CheckCircle size={40} className="text-primary mx-auto mb-3" />
        <h3 className="text-forest font-bold text-lg font-hindi mb-1">अपॉइंटमेंट अनुरोध भेजा गया!</h3>
        <p className="text-muted text-sm font-sans mb-1">Our team will call you within 30 minutes to confirm.</p>
        <p className="text-muted text-sm font-hindi">हमारी टीम 30 मिनट में आपसे संपर्क करेगी।</p>
        <a
          href={`tel:${DOCTOR.phone}`}
          className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-display font-semibold text-sm rounded-xl"
        >
          <Phone size={14} /> {DOCTOR.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-6 shadow-sm">
      <div className="text-[10px] text-primary uppercase font-bold tracking-wider mb-1 font-sans">
        Takes less than 30 seconds
      </div>
      <h3 className="text-forest font-display font-bold text-lg mb-1">अपॉइंटमेंट बुक करें</h3>
      <p className="text-muted text-sm mb-5 font-sans">Direct appointment request · 30-minute callback</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="आपका नाम (Full Name)"
          required
          value={form.patient_name}
          onChange={(e) => setForm({ ...form, patient_name: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-xl text-forest text-sm placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white transition-colors"
        />
        <input
          type="tel"
          placeholder="मोबाइल नंबर (Phone Number)"
          required
          value={form.patient_phone}
          onChange={(e) => setForm({ ...form, patient_phone: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-xl text-forest text-sm placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white transition-colors"
        />
        <input
          type="text"
          placeholder="आपका शहर (City)"
          required
          value={form.patient_city}
          onChange={(e) => setForm({ ...form, patient_city: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-xl text-forest text-sm placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white transition-colors"
        />
        <div className="relative">
          <select
            required
            value={form.condition}
            onChange={(e) => setForm({ ...form, condition: e.target.value })}
            className={cn(
              "w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-white transition-colors appearance-none cursor-pointer",
              form.condition ? "text-forest" : "text-muted"
            )}
          >
            <option value="">समस्या चुनें (Select Problem)</option>
            {CONDITIONS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
        </div>
        {error && <p className="text-red-600 text-xs font-sans">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-primary text-white font-display font-bold text-sm rounded-xl hover:bg-primary-dark transition-colors disabled:opacity-60 min-h-[50px] cursor-pointer"
        >
          {loading ? "भेजा जा रहा है..." : "अपॉइंटमेंट बुक करें"}
        </button>
      </form>
      <p className="mt-4 text-center text-muted text-xs font-sans">
        Or call directly: <a href={`tel:${DOCTOR.phone}`} className="text-primary font-semibold hover:underline">{DOCTOR.phone}</a>
      </p>
    </div>
  );
}
