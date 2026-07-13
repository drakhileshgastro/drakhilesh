"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { 
  Menu, X, Phone, MessageCircle, ChevronDown, MapPin, Clock,
  Flame, Wind, Droplet, TrendingDown, AlertTriangle, Activity, AlertCircle, Frown, RefreshCw, Eye,
  Shield, Heart, Sparkles, Search, Radio, Disc, Scissors, Compass, PlusCircle, HelpCircle
} from "lucide-react";
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

const SYMPTOM_ICONS: Record<string, any> = {
  "stomach-pain": Activity,
  "gas-bloating": Wind,
  "acidity": Flame,
  "constipation": RefreshCw,
  "diarrhoea": Droplet,
  "vomiting": Frown,
  "blood-in-stool": AlertTriangle,
  "difficulty-swallowing": AlertCircle,
  "weight-loss": TrendingDown,
  "jaundice": Eye,
};

const CONDITION_ICONS: Record<string, any> = {
  "fatty-liver": Shield,
  "jaundice": Eye,
  "liver-cirrhosis": Heart,
  "hepatitis": Shield,
  "ibs": Wind,
  "acid-reflux": Flame,
  "peptic-ulcer": Flame,
  "gallstone": Sparkles,
  "gi-bleeding": AlertTriangle,
  "pancreatitis": Activity,
  "ulcerative-colitis": Sparkles,
  "abdominal-pain": Activity,
  "weight-loss": TrendingDown,
};

const PROCEDURE_ICONS: Record<string, any> = {
  "endoscopy": Eye,
  "colonoscopy": Search,
  "ercp": Activity,
  "eus": Radio,
  "enteroscopy": Disc,
  "gi-bleeding-treatment": PlusCircle,
};

type Dropdown = "symptoms" | "conditions" | "procedures" | "library" | "about" | null;

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<Dropdown>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setTopBarVisible(y < 60);
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
              <span className="hidden xs:inline">OPD: </span>10:00 AM – 8:00 PM
            </span>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href={`tel:${DOCTOR.phone}`}
              className="flex items-center gap-1 hover:text-accent-light transition-colors font-medium font-sans"
            >
              <Phone size={12} />
              <span>{DOCTOR.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <div
        className={cn(
          "bg-white transition-all duration-300 border-b",
          scrolled ? "shadow-sm border-border" : "border-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-[80px] lg:h-[92px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 min-h-[44px]" onClick={() => setMobileOpen(false)}>
              <div className="w-11 h-11 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-sans font-bold text-2xl leading-none">✚</span>
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-forest font-display font-bold text-base tracking-tight">{DOCTOR.name}</span>
                <span className="text-muted text-[10px] tracking-wider uppercase font-semibold font-sans mt-0.5">
                  DM Gastroenterology
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
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
                        "flex items-center gap-1 px-3.5 py-2.5 text-sm font-semibold rounded-lg transition-colors min-h-[44px] cursor-pointer font-display",
                        activeDropdown === link.dropdown
                          ? "text-primary bg-bg-sand"
                          : "text-forest hover:text-primary hover:bg-bg-sand/50"
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
                        "absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-lg border border-border overflow-hidden transition-all duration-200",
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
                    className="px-3.5 py-2.5 text-sm font-semibold text-forest hover:text-primary hover:bg-bg-sand/50 rounded-lg transition-colors min-h-[44px] flex items-center font-display"
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>


            {/* Mobile toggle */}
            <button
              className="lg:hidden w-11 h-11 flex items-center justify-center text-forest rounded-xl hover:bg-bg-sand transition-colors cursor-pointer"
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
        <div className="lg:hidden fixed inset-0 top-[124px] bg-white z-40 overflow-y-auto border-t border-border">
          <div className="px-4 pt-4 pb-28">
            {/* Quick CTAs */}
            <div className="grid grid-cols-2 gap-2 mb-6">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="flex items-center justify-center gap-2 py-3.5 bg-bg-sand border border-border text-primary font-bold text-sm rounded-xl min-h-[50px]"
                onClick={() => setMobileOpen(false)}
              >
                <Phone size={16} /> Call Now
              </a>
              <Link
                href="/book"
                className="flex items-center justify-center gap-2 py-3.5 bg-primary text-white font-bold text-sm rounded-xl min-h-[50px]"
                onClick={() => setMobileOpen(false)}
              >
                Book Appointment
              </Link>
            </div>

            {/* Nav Links */}
            <nav className="flex flex-col space-y-1">
              {NAV_LINKS.map((link) => (
                <div key={link.href} className="border-b border-border-light last:border-0 pb-2">
                  <Link
                    href={link.href}
                    className="flex items-center justify-between py-3 text-base font-bold text-forest font-display"
                    onClick={() => {
                      if (!link.dropdown) setMobileOpen(false);
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.dropdown && (
                    <MobileDropdownContent type={link.dropdown} onClose={() => setMobileOpen(false)} />
                  )}
                </div>
              ))}
            </nav>
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
        <div className="p-4 w-[340px]">
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-3 px-1 font-sans">Common Symptoms</p>
          <div className="grid grid-cols-1 gap-0.5">
            {SYMPTOMS_LIST.slice(0, 8).map((s) => {
              const IconComponent = SYMPTOM_ICONS[s.slug] || Activity;
              return (
                <Link
                  key={s.slug}
                  href={`/symptoms/${s.slug}`}
                  className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold text-forest hover:text-primary hover:bg-bg-sand rounded-xl transition-all font-sans"
                >
                  <IconComponent size={14} className="text-primary/75 flex-shrink-0" />
                  <span>{s.label}</span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/symptoms"
            className="mt-3 flex items-center justify-center py-2 text-primary text-[10px] font-bold uppercase tracking-wider border border-border rounded-xl hover:bg-bg-sand transition-colors font-sans"
          >
            All Symptoms →
          </Link>
        </div>
      );

    case "conditions":
      return (
        <div className="p-4 w-[340px]">
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-3 px-1 font-sans">Conditions Treated</p>
          <div className="grid grid-cols-1 gap-0.5">
            {CONDITIONS_LIST.slice(0, 6).map((c) => {
              const IconComponent = CONDITION_ICONS[c.slug] || Shield;
              return (
                <Link
                  key={c.slug}
                  href={`/conditions/${c.slug}`}
                  className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold text-forest hover:text-primary hover:bg-bg-sand rounded-xl transition-all font-sans"
                >
                  <IconComponent size={14} className="text-primary/75 flex-shrink-0" />
                  <span>{c.title}</span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/conditions"
            className="mt-3 flex items-center justify-center py-2 text-primary text-[10px] font-bold uppercase tracking-wider border border-border rounded-xl hover:bg-bg-sand transition-colors font-sans"
          >
            View All Conditions →
          </Link>
        </div>
      );

    case "procedures":
      return (
        <div className="p-4 w-[340px]">
          <p className="text-[10px] font-bold text-muted uppercase tracking-wider mb-3 px-1 font-sans">Advanced Procedures</p>
          <div className="grid grid-cols-1 gap-0.5">
            {PROCEDURES_LIST.slice(0, 6).map((p) => {
              const IconComponent = PROCEDURE_ICONS[p.slug] || Search;
              return (
                <Link
                  key={p.slug}
                  href={`/procedures/${p.slug}`}
                  className="flex items-center gap-2.5 px-2.5 py-2 text-xs font-semibold text-forest hover:text-primary hover:bg-bg-sand rounded-xl transition-all font-sans"
                >
                  <IconComponent size={14} className="text-primary/75 flex-shrink-0" />
                  <span>{p.title}</span>
                </Link>
              );
            })}
          </div>
          <Link
            href="/procedures"
            className="mt-3 flex items-center justify-center py-2 text-primary text-[10px] font-bold uppercase tracking-wider border border-border rounded-xl hover:bg-bg-sand transition-colors font-sans"
          >
            All Procedures →
          </Link>
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
      ? SYMPTOMS_LIST.map((s) => ({ label: s.label, href: `/symptoms/${s.slug}`, slug: s.slug, type: "symptom" }))
      : type === "conditions"
      ? CONDITIONS_LIST.map((c) => ({ label: c.title, href: `/conditions/${c.slug}`, slug: c.slug, type: "condition" }))
      : type === "procedures"
      ? PROCEDURES_LIST.map((p) => ({ label: p.title, href: `/procedures/${p.slug}`, slug: p.slug, type: "procedure" }))
      : [];

  return (
    <div className="bg-bg-sand/35 rounded-xl mx-2 my-2 overflow-hidden border border-border/50">
      {items.map((item, i) => {
        let IconComponent = HelpCircle;
        if ("type" in item) {
          if (item.type === "symptom") IconComponent = SYMPTOM_ICONS[item.slug] || Activity;
          else if (item.type === "condition") IconComponent = CONDITION_ICONS[item.slug] || Shield;
          else if (item.type === "procedure") IconComponent = PROCEDURE_ICONS[item.slug] || Search;
        }
        return (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-2.5 px-4 py-3 text-xs text-forest hover:text-primary border-b border-border/30 last:border-0 transition-colors font-sans font-medium"
            onClick={onClose}
          >
            <IconComponent size={13} className="text-primary flex-shrink-0" />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
