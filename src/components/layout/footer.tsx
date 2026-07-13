"use client";

import Link from "next/link";
import { Phone, MessageCircle, Star, MapPin, Clock } from "lucide-react";
import { DOCTOR, FOOTER_COLUMNS } from "@/lib/constants";

export default function Footer() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <footer className="bg-primary-dark text-white border-t border-white/10 relative z-30">
      {/* Pre-footer Call-to-Action Bar */}
      <div className="border-b border-white/10 bg-black/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-display font-semibold text-lg sm:text-xl">
              Consult Ranchi's Leading Gastroenterologist
            </h3>
            <p className="text-white/60 text-sm mt-1">
              Expert advice, diagnostic procedures, and personalized treatment plans.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`tel:${DOCTOR.phone}`}
              className="flex items-center gap-2 px-5 py-3 border border-white/20 text-white font-bold text-sm rounded-xl hover:bg-white/5 transition-colors min-h-[48px]"
            >
              <Phone size={16} /> Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 border border-white/20 text-primary font-bold text-sm rounded-xl hover:bg-white/5 transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link
              href="/book"
              className="flex items-center gap-2 px-5 py-3 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors min-h-[48px]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">

          {/* Column 1 — About */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-2xl leading-none font-sans">✚</span>
              </div>
              <div>
                <div className="text-white font-display font-bold text-base leading-tight">{DOCTOR.name}</div>
                <div className="text-white/50 text-xs uppercase tracking-wider mt-0.5 font-sans font-semibold">DM Gastroenterology</div>
              </div>
            </div>
            
            <p className="text-white/70 text-[15px] leading-relaxed font-hindi">
              लिवर, पेट एवं पाचन रोग विशेषज्ञ<br />
              {DOCTOR.hospital}, रांची
            </p>
            
            <div className="space-y-3.5 text-[15px] text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                <span className="leading-relaxed">HB Road, Opposite Plaza Cinema, Plaza Chowk, Ranchi, JH — 834001</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock size={16} className="text-primary flex-shrink-0" />
                <span>Mon–Sat: 10:00 AM – 8:00 PM</span>
              </div>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-2.5 hover:text-primary transition-colors font-sans font-semibold"
              >
                <Phone size={16} className="text-primary flex-shrink-0" />
                {DOCTOR.phone}
              </a>
            </div>
            
            {/* Google Reviews badge */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={DOCTOR.googleReviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors text-sm"
              >
                <Star size={14} className="text-accent fill-accent" />
                <span className="text-white font-bold">{DOCTOR.googleRating}</span>
                <span className="text-white/50">Google Reviews</span>
              </a>
              <Link
                href="/book"
                className="inline-flex items-center px-4 py-2.5 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors"
              >
                Book Appointment
              </Link>
            </div>

            {/* Social Media Links Provision */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={DOCTOR.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-primary transition-all duration-300"
                aria-label="Facebook Page"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href={DOCTOR.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-accent transition-all duration-300"
                aria-label="Instagram Profile"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href={DOCTOR.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-red-600 transition-all duration-300"
                aria-label="YouTube Channel"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a
                href={DOCTOR.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Symptoms */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm mb-5 uppercase tracking-wider">Symptoms</h3>
            <ul className="space-y-3">
              {FOOTER_COLUMNS.symptoms.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-[15px] hover:text-primary transition-colors font-hindi"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Conditions */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm mb-5 uppercase tracking-wider">Conditions</h3>
            <ul className="space-y-3">
              {FOOTER_COLUMNS.conditions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-[15px] hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Procedures */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm mb-5 uppercase tracking-wider">Procedures</h3>
            <ul className="space-y-3">
              {FOOTER_COLUMNS.procedures.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-[15px] hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Patient Resources */}
          <div>
            <h3 className="text-white font-sans font-bold text-sm mb-5 uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {FOOTER_COLUMNS.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-white/60 text-[15px] hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-white/40 text-xs font-sans">
              © {new Date().getFullYear()} {DOCTOR.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/40 font-sans">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
              <span>·</span>
              <Link href="/sitemap.xml" className="hover:text-white/70 transition-colors">Sitemap</Link>
              <span>·</span>
              <span>
                Built by{" "}
                <a href="https://scalifylabs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Scalify Labs
                </a>
              </span>
            </div>
          </div>
          <p className="mt-4 text-center text-white/20 text-[11px] leading-relaxed max-w-4xl mx-auto font-sans">
            Medical Disclaimer: Content on this website is for informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. Always consult Dr. Akhilesh Yadav or another qualified healthcare provider regarding any questions about a medical condition.
          </p>
        </div>
      </div>
    </footer>
  );
}
