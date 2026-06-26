import Link from "next/link";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { DOCTOR, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <footer className="bg-navy text-white">
      {/* Top CTA strip */}
      <div className="bg-teal py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div>
            <p className="font-bold text-white text-base">पेट या लिवर की कोई भी समस्या?</p>
            <p className="text-teal-light text-sm font-hindi">
              Dr. Akhilesh Yadav से आज ही मिलें — Orchid Medical Centre, Ranchi
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-white text-whatsapp font-bold text-sm rounded-lg hover:bg-offwhite transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp करें
            </a>
            <Link
              href="/book"
              className="flex items-center gap-2 px-4 py-2 bg-navy text-white font-bold text-sm rounded-lg hover:bg-navy-dark transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 bg-teal rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-lg leading-none">✚</span>
              </div>
              <div>
                <div className="text-white font-bold text-sm leading-tight">{DOCTOR.name}</div>
                <div className="text-gray-muted text-[10px] uppercase tracking-wider">Gastroenterologist · Ranchi</div>
              </div>
            </div>
            <p className="text-gray-muted text-sm leading-relaxed mb-4">
              {DOCTOR.qualification}<br />
              {DOCTOR.hospital}, Ranchi
            </p>
            <div className="flex items-center gap-1.5 text-sm text-gray-muted">
              <Clock size={13} className="text-teal flex-shrink-0" />
              <span>Mon–Sat: 10am–2pm & 5pm–8pm</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-muted text-sm hover:text-teal transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/book" className="text-gray-muted text-sm hover:text-teal transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-gray-muted text-sm hover:text-teal transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-muted text-sm">
                <MapPin size={14} className="text-teal mt-0.5 flex-shrink-0" />
                <span>{DOCTOR.hospital}, HB Road, Ranchi, Jharkhand — 834001</span>
              </li>
              <li>
                <a
                  href={`tel:${DOCTOR.phone}`}
                  className="flex items-center gap-2 text-gray-muted text-sm hover:text-teal transition-colors"
                >
                  <Phone size={14} className="text-teal flex-shrink-0" />
                  {DOCTOR.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-muted text-sm hover:text-teal transition-colors"
                >
                  <MessageCircle size={14} className="text-whatsapp flex-shrink-0" />
                  WhatsApp Appointment
                </a>
              </li>
              <li>
                <a
                  href={DOCTOR.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal text-sm hover:underline"
                >
                  Get Directions →
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-center">
          <p className="text-gray-muted text-xs">
            © {new Date().getFullYear()} {DOCTOR.name}. All rights reserved.
          </p>
          <p className="text-gray-muted text-xs">
            Designed & built by{" "}
            <span className="text-teal font-medium">Scalify Labs</span>
            {" · "}
            <Link href="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
