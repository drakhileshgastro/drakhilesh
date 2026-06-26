import type { Metadata } from "next";
import { Phone, MessageCircle, Clock, CheckCircle, MapPin } from "lucide-react";
import BookingForm from "@/components/service/booking-form";
import { DOCTOR } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Book Appointment | Dr. Akhilesh Yadav — Gastroenterologist Ranchi",
  description: "Book an appointment with Dr. Akhilesh Yadav, DM Gastroenterologist at Orchid Medical Centre, Ranchi. Online appointment form — our team calls within 2 hours.",
  alternates: { canonical: "https://drakhileshgastro.com/book" },
};

const STEPS = [
  { step: "1", title: "Fill the Form", desc: "Name, phone, city and your condition. Takes under 60 seconds.", icon: "📝" },
  { step: "2", title: "Team Calls You", desc: "Our team calls within 2 hours to confirm date & time.", icon: "📞" },
  { step: "3", title: "WhatsApp Confirmation", desc: "You receive appointment details on WhatsApp instantly.", icon: "💬" },
  { step: "4", title: "Visit the Clinic", desc: "Come to Orchid Medical Centre, HB Road, Ranchi.", icon: "🏥" },
];

const TRUST_POINTS = [
  "No OTP, no registration required",
  "Free callback — no charges for enquiry",
  "Hindi-speaking team",
  "Same-day appointments often available",
  "Mon–Sat: 10am–2pm & 5pm–8pm",
];

export default function BookPage() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-navy pt-24 pb-0 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-3 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-teal rounded-full animate-pulse" />
                <span className="text-teal text-xs font-semibold uppercase tracking-wider">Appointments Open</span>
              </div>
              <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight mb-4">
                Book an Appointment<br />
                <span className="text-teal">with Dr. Akhilesh Yadav</span>
              </h1>
              <p className="text-gray-muted text-sm leading-relaxed mb-2">
                {DOCTOR.name} — {DOCTOR.qualification}
              </p>
              <p className="text-gray-muted text-sm mb-6 font-hindi">
                {DOCTOR.hospital}, रांची · सोमवार से शनिवार उपलब्ध
              </p>

              {/* Trust points */}
              <div className="space-y-2 mb-7">
                {TRUST_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-teal flex-shrink-0" />
                    <span className="text-slate-300 text-sm">{point}</span>
                  </div>
                ))}
              </div>

              {/* Alternative contact */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
                <p className="text-gray-muted text-xs mb-3">Prefer to contact directly?</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${DOCTOR.phone}`}
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-navy font-bold text-sm rounded-xl flex-1">
                    <Phone size={14} /> Call Now
                  </a>
                  <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 bg-whatsapp text-white font-bold text-sm rounded-xl flex-1">
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right — Booking form */}
            <div>
              <BookingForm />
            </div>
          </div>
        </div>
        <div className="h-8 bg-navy">
          <svg viewBox="0 0 1440 32" className="w-full" preserveAspectRatio="none" style={{ height: 32 }}>
            <path d="M0,32 L1440,32 L1440,0 Q720,32 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="section-pad bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Process</p>
            <h2 className="text-navy text-2xl font-bold mb-2">How Appointment Booking Works</h2>
            <p className="text-slate text-sm font-hindi">Appointment लेना बिल्कुल आसान है — सिर्फ 4 steps</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <div key={s.step} className="relative text-center">
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-[-50%] h-0.5 bg-gray-light z-0" />
                )}
                <div className="relative z-10 w-16 h-16 bg-teal-50 border-2 border-teal-light rounded-2xl flex items-center justify-center text-2xl mx-auto mb-4">
                  {s.icon}
                </div>
                <p className="text-teal text-xs font-bold mb-1">Step {s.step}</p>
                <h3 className="text-navy font-bold text-sm mb-1">{s.title}</h3>
                <p className="text-slate text-xs leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLINIC INFO ── */}
      <section className="section-pad bg-offwhite">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8">
            <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">Location</p>
            <h2 className="text-navy text-2xl font-bold">Where to Find Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl border border-gray-light p-5 text-center">
              <MapPin size={24} className="text-teal mx-auto mb-3" />
              <h3 className="text-navy font-bold text-sm mb-2">Address</h3>
              <p className="text-slate text-xs leading-relaxed">{DOCTOR.hospital}<br />HB Road, Ranchi<br />Jharkhand — 834001</p>
              <a href={DOCTOR.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 text-teal text-xs font-semibold hover:underline">
                Open in Google Maps →
              </a>
            </div>
            <div className="bg-white rounded-2xl border border-gray-light p-5 text-center">
              <Clock size={24} className="text-teal mx-auto mb-3" />
              <h3 className="text-navy font-bold text-sm mb-2">OPD Timings</h3>
              <div className="space-y-1 text-xs text-slate">
                <p><span className="font-medium text-navy">Morning:</span> 10:00 AM – 2:00 PM</p>
                <p><span className="font-medium text-navy">Evening:</span> 5:00 PM – 8:00 PM</p>
                <p className="text-teal font-medium mt-2">Monday – Saturday</p>
                <p className="text-gray-muted">Sunday: Closed</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-gray-light p-5 text-center">
              <Phone size={24} className="text-teal mx-auto mb-3" />
              <h3 className="text-navy font-bold text-sm mb-2">Contact</h3>
              <div className="space-y-2">
                <a href={`tel:${DOCTOR.phone}`} className="block text-navy font-bold text-sm hover:text-teal transition-colors">{DOCTOR.phone}</a>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-whatsapp text-xs font-semibold hover:underline">
                  <MessageCircle size={13} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
