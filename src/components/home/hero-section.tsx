"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, Star, CheckCircle, ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR, CONDITIONS, TRUST_STATS } from "@/lib/constants";

export default function HeroSection() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <section className="bg-white pt-10 pb-16 lg:pt-14 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — Headline + Stats + CTAs */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary-50 border border-primary-light rounded-full text-primary text-xs font-semibold mb-5">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
              Ranchi का भरोसेमंद Gastro Specialist
            </div>

            {/* Hindi Headline */}
            <h1 className="font-hindi text-[2rem] sm:text-[2.4rem] lg:text-[2.75rem] font-bold text-forest leading-[1.3] mb-3">
              पेट, लीवर या पाचन की<br />
              <span className="text-primary">समस्या से परेशान हैं?</span>
            </h1>
            <p className="text-muted text-base sm:text-lg mb-2">
              Troubled by stomach, liver or digestive problems?
            </p>

            {/* Doctor intro */}
            <p className="text-forest/80 text-[15px] leading-relaxed mb-8 max-w-lg">
              <strong>Dr. Akhilesh Yadav</strong> — DM Gastroenterology, Orchid Medical Centre, Ranchi —
              provides expert, compassionate care in Hindi for all digestive &amp; liver conditions.
            </p>

            {/* Trust stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {TRUST_STATS.map((stat) => (
                <div key={stat.label} className="bg-bg-sand rounded-xl p-3 text-center">
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-[11px] text-muted font-hindi mt-0.5">{stat.labelHindi}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/book"
                className="flex items-center gap-2 px-6 py-3.5 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors shadow-sm min-h-[52px]"
              >
                <span>📅</span> Book Appointment
              </Link>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-2 px-5 py-3.5 bg-primary-50 text-primary font-bold text-sm rounded-xl hover:bg-primary-light transition-colors min-h-[52px]"
              >
                <Phone size={16} /> Call Now
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3.5 bg-green-50 text-whatsapp font-bold text-sm rounded-xl hover:bg-green-100 transition-colors min-h-[52px]"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>
            </div>

            {/* Google rating */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={15} className="text-accent fill-accent" />
                ))}
              </div>
              <span className="text-forest/80 text-sm">
                <strong>{DOCTOR.googleRating}</strong> rating · {DOCTOR.totalReviews} Google reviews
              </span>
            </div>
          </div>

          {/* Right — Doctor Photo + Booking Form */}
          <div className="order-1 lg:order-2">
            {/* Doctor photo placeholder */}
            <div className="relative mb-6">
              <div className="aspect-[4/3] lg:aspect-[3/2] bg-primary-light rounded-2xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-primary">
                  <div className="text-7xl mb-3">👨‍⚕️</div>
                  <p className="text-sm font-medium text-primary/70">Dr. Akhilesh Yadav</p>
                  <p className="text-xs text-primary/50">with patient at Orchid Medical Centre</p>
                </div>
              </div>
              {/* Floating credential badge */}
              <div className="absolute -bottom-4 -left-2 lg:-left-4 bg-white border border-border rounded-2xl px-4 py-3 shadow-md">
                <div className="text-[11px] text-muted uppercase tracking-wider font-semibold">Qualification</div>
                <div className="text-forest font-bold text-sm mt-0.5">DM Gastroenterology</div>
                <div className="text-muted text-xs">MBBS · MD · DM</div>
              </div>
              {/* Floating availability badge */}
              <div className="absolute -top-3 -right-2 lg:-right-4 bg-primary text-white rounded-2xl px-3 py-2 shadow-md">
                <div className="text-[10px] font-semibold">Available</div>
                <div className="text-xs font-bold">Mon – Sat</div>
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
      <div className="bg-primary-50 border border-primary-light rounded-2xl p-6 text-center">
        <CheckCircle size={40} className="text-primary mx-auto mb-3" />
        <h3 className="text-forest font-bold text-lg font-hindi mb-1">अपॉइंटमेंट अनुरोध भेजा गया!</h3>
        <p className="text-muted text-sm">हमारी टीम 30 मिनट में आपसे संपर्क करेगी।</p>
        <p className="text-muted text-sm">Our team will call you within 30 minutes to confirm.</p>
        <a
          href={`tel:${DOCTOR.phone}`}
          className="mt-4 inline-flex items-center gap-2 px-5 py-3 bg-primary text-white font-bold text-sm rounded-xl"
        >
          <Phone size={14} /> {DOCTOR.phone}
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white border border-border rounded-2xl p-5 shadow-sm">
      <h3 className="text-forest font-bold text-base mb-1">अपॉइंटमेंट बुक करें</h3>
      <p className="text-muted text-sm mb-4">Free consultation · 30-minute callback</p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="आपका नाम (Full Name)"
          required
          value={form.patient_name}
          onChange={(e) => setForm({ ...form, patient_name: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-xl text-forest text-sm placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-bg transition-colors"
        />
        <input
          type="tel"
          placeholder="मोबाइल नंबर (Phone Number)"
          required
          value={form.patient_phone}
          onChange={(e) => setForm({ ...form, patient_phone: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-xl text-forest text-sm placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-bg transition-colors"
        />
        <input
          type="text"
          placeholder="आपका शहर (City)"
          required
          value={form.patient_city}
          onChange={(e) => setForm({ ...form, patient_city: e.target.value })}
          className="w-full px-4 py-3 border border-border rounded-xl text-forest text-sm placeholder-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-bg transition-colors"
        />
        <div className="relative">
          <select
            required
            value={form.condition}
            onChange={(e) => setForm({ ...form, condition: e.target.value })}
            className={cn(
              "w-full px-4 py-3 border border-border rounded-xl text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary bg-bg transition-colors appearance-none",
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
        {error && <p className="text-red-500 text-xs">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors disabled:opacity-60 min-h-[52px]"
        >
          {loading ? "भेजा जा रहा है..." : "अपॉइंटमेंट बुक करें →"}
        </button>
      </form>
      <p className="mt-3 text-center text-muted text-xs">
        या सीधे कॉल करें: <a href={`tel:${DOCTOR.phone}`} className="text-primary font-semibold">{DOCTOR.phone}</a>
      </p>
    </div>
  );
}
