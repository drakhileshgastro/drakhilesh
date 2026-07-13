"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle, ChevronDown, MapPin, Clock } from "lucide-react";
import { cn } from "@/lib/cn";
import {
  DOCTOR,
  NAV_LINKS,
  SYMPTOMS_LIST,
  CONDITIONS_LIST,
  PROCEDURES_LIST,
  HEALTH_LIBRARY_LINKS,
  PATIENT_RESOURCE_LINKS,
} from "@/lib/constants";

type Dropdown = "symptoms" | "conditions" | "procedures" | "library" | "resources" | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<Dropdown>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Dropdown>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setTopBarVisible(y < 60);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`;

  const openDropdown = (key: Dropdown) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setActiveDropdown(key);
  };

  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header ref={navRef} className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar */}
      <div
        className={cn(
          "bg-primary text-white transition-all duration-300 overflow-hidden",
          topBarVisible ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-11 text-xs sm:text-[13px]">
          <div className="flex items-center gap-4 min-w-0">
            <span className="hidden sm:flex items-center gap-1.5 truncate">
              <MapPin size={12} className="flex-shrink-0" />
              Orchid Medical Centre, HB Road, Ranchi
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={12} className="flex-shrink-0" />
              <span className="hidden xs:inline">Mon–Sat: </span>10am–2pm &amp; 5pm–8pm
            </span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${DOCTOR.phone}`}
              className="flex items-center gap-1 hover:text-accent-light transition-colors font-medium"
            >
              <Phone size={12} />
              <span className="hidden sm:inline">{DOCTOR.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-accent-light transition-colors font-medium"
            >
              <MessageCircle size={12} />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={cn(
          "bg-white transition-all duration-300",
          scrolled ? "shadow-md border-b border-border" : "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 lg:h-[70px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 min-h-[44px]" onClick={() => setMobileOpen(false)}>
              <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl leading-none">✚</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-forest font-bold text-[15px]">{DOCTOR.name}</span>
                <span className="text-muted text-[11px] tracking-wide uppercase font-medium">
                  DM Gastroenterology · Ranchi
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div
                    key={link.href}
                    className="relative"
                    onMouseEnter={() => openDropdown(link.dropdown as Dropdown)}
                    onMouseLeave={closeDropdown}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 px-3 py-2.5 text-[13.5px] font-medium rounded-lg transition-colors min-h-[44px]",
                        activeDropdown === link.dropdown
                          ? "text-primary bg-primary-light"
                          : "text-forest hover:text-primary hover:bg-primary-50"
                      )}
                    >
                      {link.label}
                      <ChevronDown
                        size={13}
                        className={cn(
                          "transition-transform duration-200",
                          activeDropdown === link.dropdown ? "rotate-180 text-primary" : ""
                        )}
                      />
                    </button>

                    {/* Dropdown panel */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-xl border border-border overflow-hidden transition-all duration-200",
                        activeDropdown === link.dropdown
                          ? "opacity-100 translate-y-0 pointer-events-auto"
                          : "opacity-0 -translate-y-2 pointer-events-none"
                      )}
                      onMouseEnter={() => openDropdown(link.dropdown as Dropdown)}
                      onMouseLeave={closeDropdown}
                    >
                      <DropdownContent type={link.dropdown} />
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-3 py-2.5 text-[13.5px] font-medium text-forest hover:text-primary hover:bg-primary-50 rounded-lg transition-colors min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-2">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center gap-1.5 px-3 py-2 text-forest text-sm font-medium border border-border rounded-xl hover:border-primary hover:text-primary transition-colors min-h-[44px]"
              >
                <Phone size={14} />
                Call
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 text-whatsapp text-sm font-medium border border-border rounded-xl hover:border-whatsapp hover:bg-green-50 transition-colors min-h-[44px]"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <Link
                href="/book"
                className="px-5 py-2.5 bg-accent text-white text-[13.5px] font-bold rounded-xl hover:bg-accent-dark transition-colors shadow-sm min-h-[44px] flex items-center"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center text-forest rounded-xl hover:bg-primary-50 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[calc(var(--header-h,112px))] bg-white z-40 overflow-y-auto">
          <div className="px-4 pt-4 pb-28">
            {/* Quick CTAs */}
            <div className="grid grid-cols-2 gap-2 mb-5">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center justify-center gap-2 py-3.5 bg-primary-light text-primary font-bold text-sm rounded-xl min-h-[52px]"
                onClick={() => setMobileOpen(false)}
              >
                <Phone size={16} /> Call Now
              </a>
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 py-3.5 bg-accent text-white font-bold text-sm rounded-xl min-h-[52px]"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col">
              {NAV_LINKS.map((link) =>
                link.dropdown ? (
                  <div key={link.href}>
                    <button
                      className="w-full flex items-center justify-between px-2 py-3.5 text-forest text-[15px] font-medium border-b border-border-light"
                      onClick={() =>
                        setMobileExpanded(
                          mobileExpanded === link.dropdown ? null : (link.dropdown as Dropdown)
                        )
                      }
                    >
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={cn(
                          "text-muted transition-transform",
                          mobileExpanded === link.dropdown ? "rotate-180" : ""
                        )}
                      />
                    </button>
                    {mobileExpanded === link.dropdown && (
                      <MobileDropdownContent type={link.dropdown} onClose={() => setMobileOpen(false)} />
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-2 py-3.5 text-forest text-[15px] font-medium border-b border-border-light hover:text-primary transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* WhatsApp */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 w-full flex items-center justify-center gap-2 py-4 bg-whatsapp text-white font-bold rounded-xl"
              onClick={() => setMobileOpen(false)}
            >
              <MessageCircle size={18} /> WhatsApp पर Message करें
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ── Dropdown Content ── */
function DropdownContent({ type }: { type: string }) {
  switch (type) {
    case "symptoms":
      return (
        <div className="p-4">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Common Symptoms</p>
          <div className="grid grid-cols-2 gap-1">
            {SYMPTOMS_LIST.slice(0, 8).map((s) => (
              <Link
                key={s.slug}
                href={`/symptoms/${s.slug}`}
                className="flex items-center gap-2 px-2 py-2 text-sm text-forest hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                <span className="text-base">{s.icon}</span>
                <span className="font-hindi text-[13px]">{s.hindiLabel}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/symptoms"
            className="mt-3 flex items-center justify-center py-2 text-primary text-sm font-semibold border border-primary-light rounded-xl hover:bg-primary-light transition-colors"
          >
            All Symptoms →
          </Link>
        </div>
      );

    case "conditions":
      return (
        <div className="p-4">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Conditions Treated</p>
          <div className="space-y-0.5">
            {CONDITIONS_LIST.slice(0, 8).map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="flex items-center gap-2 px-2 py-1.5 text-sm text-forest hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                <span className="text-base">{c.icon}</span>
                <span>{c.title}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/conditions"
            className="mt-3 flex items-center justify-center py-2 text-primary text-sm font-semibold border border-primary-light rounded-xl hover:bg-primary-light transition-colors"
          >
            View All 15 Conditions →
          </Link>
        </div>
      );

    case "procedures":
      return (
        <div className="p-4">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Advanced Procedures</p>
          <div className="space-y-0.5">
            {PROCEDURES_LIST.map((p) => (
              <Link
                key={p.slug}
                href={`/procedures/${p.slug}`}
                className="flex items-center gap-2 px-2 py-1.5 text-sm text-forest hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                <span className="text-base">{p.icon}</span>
                <span>{p.title}</span>
              </Link>
            ))}
          </div>
          <Link
            href="/procedures"
            className="mt-3 flex items-center justify-center py-2 text-primary text-sm font-semibold border border-primary-light rounded-xl hover:bg-primary-light transition-colors"
          >
            All Procedures →
          </Link>
        </div>
      );

    case "library":
      return (
        <div className="p-4">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Health Library</p>
          <div className="space-y-0.5">
            {HEALTH_LIBRARY_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center px-2 py-2 text-sm text-forest hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      );

    case "resources":
      return (
        <div className="p-4">
          <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">Patient Resources</p>
          <div className="space-y-0.5">
            {PATIENT_RESOURCE_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                {...("external" in l && l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center px-2 py-2 text-sm text-forest hover:text-primary hover:bg-primary-50 rounded-lg transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      );

    default:
      return null;
  }
}

/* ── Mobile Dropdown Content ── */
function MobileDropdownContent({ type, onClose }: { type: string; onClose: () => void }) {
  const items =
    type === "symptoms"
      ? SYMPTOMS_LIST.map((s) => ({ label: s.hindiLabel + " · " + s.label, href: `/symptoms/${s.slug}` }))
      : type === "conditions"
      ? CONDITIONS_LIST.map((c) => ({ label: c.title, href: `/conditions/${c.slug}` }))
      : type === "procedures"
      ? PROCEDURES_LIST.map((p) => ({ label: p.title, href: `/procedures/${p.slug}` }))
      : type === "library"
      ? [...HEALTH_LIBRARY_LINKS]
      : [...PATIENT_RESOURCE_LINKS];

  return (
    <div className="bg-primary-50 rounded-xl mx-2 my-2 overflow-hidden">
      {items.map((item, i) => (
        <Link
          key={i}
          href={item.href}
          className="block px-4 py-2.5 text-sm text-forest hover:text-primary border-b border-border-light last:border-0 transition-colors"
          onClick={onClose}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}
