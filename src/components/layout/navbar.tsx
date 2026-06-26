"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/cn";
import { DOCTOR, NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-light"
          : "bg-white"
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 min-h-[44px]">
            <div className="w-9 h-9 bg-navy rounded-xl flex items-center justify-center flex-shrink-0">
              <span className="text-teal font-bold text-lg leading-none">✚</span>
            </div>
            <div className="flex flex-col">
              <span className="text-navy font-bold text-sm sm:text-[15px] leading-tight">
                {DOCTOR.name}
              </span>
              <span className="text-slate text-[11px] tracking-wider uppercase font-medium leading-tight hidden xs:block">
                Gastroenterologist · Ranchi
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2.5 text-slate text-sm font-medium rounded-lg hover:text-navy hover:bg-offwhite transition-colors min-h-[44px] flex items-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href={`tel:${DOCTOR.phone}`}
              className="flex items-center gap-1.5 px-3 py-2.5 text-navy text-sm font-medium border border-gray-light rounded-lg hover:border-navy transition-colors min-h-[44px]"
            >
              <Phone size={14} />
              <span>Call</span>
            </a>
            <Link
              href="/book"
              className="px-4 py-2.5 bg-teal text-white text-sm font-semibold rounded-lg hover:bg-teal-dark transition-colors shadow-sm min-h-[44px] flex items-center"
            >
              Book Appointment
            </Link>
          </div>

          {/* Mobile menu toggle — 44px touch target */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center text-navy rounded-lg hover:bg-offwhite transition-colors"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-light bg-white px-4 pb-4 pt-2">
          <nav className="flex flex-col gap-1 mb-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 text-slate text-sm font-medium rounded-lg hover:text-navy hover:bg-offwhite transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex gap-2">
            <a
              href={`tel:${DOCTOR.phone}`}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 text-navy text-sm font-semibold border border-navy rounded-lg min-h-[48px]"
            >
              <Phone size={14} />
              Call Now
            </a>
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="flex-1 flex items-center justify-center py-3 bg-teal text-white text-sm font-semibold rounded-lg min-h-[48px]"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
