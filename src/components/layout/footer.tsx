import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle, Star } from "lucide-react";
import { DOCTOR, FOOTER_COLUMNS } from "@/lib/constants";

export default function Footer() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <footer className="bg-forest text-white">
      {/* Pre-footer CTA strip */}
      <div className="bg-primary py-5 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-white text-lg font-hindi">पेट या लिवर की कोई भी समस्या?</p>
            <p className="text-white/80 text-sm mt-0.5">
              Dr. Akhilesh Yadav से आज ही मिलें — Orchid Medical Centre, Ranchi
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-white text-whatsapp font-bold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} />
              WhatsApp करें
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Column 1 — About */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl leading-none">✚</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">{DOCTOR.name}</div>
                <div className="text-white/50 text-[11px] uppercase tracking-wider">DM Gastroenterology</div>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Liver & Digestive Specialist<br />
              {DOCTOR.hospital}, Ranchi
            </p>
            <div className="space-y-2 text-sm text-white/60">
              <div className="flex items-start gap-2">
                <MapPin size={13} className="text-primary mt-0.5 flex-shrink-0" />
                <span>HB Road, Ranchi, Jharkhand — 834001</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={13} className="text-primary flex-shrink-0" />
                <span>Mon–Sat: 10am–2pm &amp; 5pm–8pm</span>
              </div>
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone size={13} className="text-primary flex-shrink-0" />
                {DOCTOR.phone}
              </a>
            </div>
            {/* Google Reviews badge */}
            <a
              href={DOCTOR.googleReviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 px-4 py-2.5 bg-white/8 border border-white/15 rounded-xl hover:bg-white/12 transition-colors text-sm"
            >
              <Star size={14} className="text-accent fill-accent" />
              <span className="text-white font-semibold">{DOCTOR.googleRating}</span>
              <span className="text-white/50">Google Reviews</span>
            </a>
            <div className="mt-3">
              <Link
                href="/book"
                className="inline-flex items-center px-5 py-2.5 bg-accent text-white font-bold text-sm rounded-xl hover:bg-accent-dark transition-colors"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          {/* Column 2 — Symptoms */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Symptoms</h3>
            <ul className="space-y-2">
              {FOOTER_COLUMNS.symptoms.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Conditions */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Conditions</h3>
            <ul className="space-y-2">
              {FOOTER_COLUMNS.conditions.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Procedures */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Procedures</h3>
            <ul className="space-y-2">
              {FOOTER_COLUMNS.procedures.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 — Patient Resources */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Patient Resources</h3>
            <ul className="space-y-2">
              {FOOTER_COLUMNS.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-white/60 text-sm hover:text-primary transition-colors"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} {DOCTOR.name}. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-white/40">
              <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
              <span>·</span>
              <Link href="/terms" className="hover:text-white/70 transition-colors">Terms</Link>
              <span>·</span>
              <Link href="/sitemap" className="hover:text-white/70 transition-colors">Sitemap</Link>
              <span>·</span>
              <span>
                Built by{" "}
                <a href="https://scalifylabs.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Scalify Labs
                </a>
              </span>
            </div>
          </div>
          <p className="mt-3 text-center text-white/25 text-xs">
            Medical Disclaimer: Content on this website is for informational purposes only and does not constitute medical advice. Always consult Dr. Akhilesh Yadav or a qualified physician for diagnosis and treatment.
          </p>
        </div>
      </div>
    </footer>
  );
}
