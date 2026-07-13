import type { Metadata } from "next";
import Link from "next/link";
import { 
  GraduationCap, Award, Phone, CheckCircle2, MessageCircle, Calendar,
  ShieldCheck, HeartHandshake, Compass, HelpCircle, Star
} from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import { cn } from "@/lib/cn";
import StickyCTA from "@/components/service/sticky-cta";
import SymptomFAQSection from "@/components/symptom/symptom-faq"; // Reuse accordion component

export const metadata: Metadata = {
  title: "About Dr. Akhilesh Yadav | DM Gastroenterologist & Hepatologist Ranchi",
  description: "Learn about Dr. Akhilesh Yadav, DM Gastroenterology, Ranchi's leading liver specialist and endoscopist. Profile, credentials, clinical experience & patient principles.",
  alternates: { canonical: "https://drakhileshgastro.com/about" },
};

const EDUCATION = [
  {
    degree: "DM — Gastroenterology & Hepatology",
    institution: "Prestigious Government Medical Institution, India",
    duration: "2014 - 2017",
    desc: "The highest medical specialization degree in gastroenterology. Intensive training in therapeutic endoscopy, ERCP, EUS, and complex liver cirrhosis management.",
    highlight: true,
  },
  {
    degree: "MD — Internal Medicine",
    institution: "Renowned Medical College, India",
    duration: "2011 - 2014",
    desc: "Three years of rigorous clinical residency training in general and internal medicine.",
    highlight: false,
  },
  {
    degree: "MBBS",
    institution: "Government Medical College, India",
    duration: "2005 - 2010",
    desc: "Core undergraduate medical education and rotating clinical internship.",
    highlight: false,
  },
];

const MEMBERSHIPS = [
  { name: "Indian Society of Gastroenterology (ISG)", code: "ISG" },
  { name: "Society of Gastrointestinal Endoscopy of India (SGEI)", code: "SGEI" },
  { name: "Indian Association for the Study of the Liver (INASL)", code: "INASL" },
  { name: "Indian Medical Association (IMA)", code: "IMA" },
];

const PHILOSOPHY = [
  {
    title: "Patient-First Dialogue",
    hindiTitle: "ईमानदार परामर्श और संवाद",
    desc: "Explaining diagnoses and treatment options in simple, clean Hindi. We ensure patients leave with zero confusion and minimal anxiety.",
    icon: Compass,
  },
  {
    title: "Sedated Pain-Free Endoscopy",
    hindiTitle: "दर्दरहित एंडोस्कोपी और कोलोनोस्कोपी",
    desc: "Performing scopes under light, safe sedation. Reducing patient fear and ensuring a fully relaxed procedural experience.",
    icon: ShieldCheck,
  },
  {
    title: "Evidence-Based Diagnostics",
    hindiTitle: "केवल आवश्यक जांच और दवाएं",
    desc: "Adhering strictly to clinical guidelines (Mayo & Cleveland Clinic protocols). Avoid prescribing unnecessary tests, scans, or medications.",
    icon: HeartHandshake,
  },
];

const ABOUT_FAQS = [
  {
    q: "डॉ. अखिलेश यादव किस अस्पताल में बैठते हैं?",
    a: "डॉ. अखिलेश यादव रांची के प्रसिद्ध 'ऑर्किड मेडिकल सेंटर' (Orchid Medical Centre, HB Road, Ranchi) में ओपीडी (OPD) संचालित करते हैं।"
  },
  {
    q: "ओपीडी का समय और दिन क्या हैं?",
    a: "ओपीडी सोमवार से शनिवार दैनिक रूप से खुली रहती है (सुबह 10:00 बजे से दोपहर 2:00 बजे तक और शाम 5:00 बजे से रात 8:00 बजे तक)। रविवार ओपीडी बंद रहती है।"
  },
  {
    q: "क्या डॉक्टर साहब एंडोस्कोपी खुद करते हैं?",
    a: "हाँ, एंडोस्कोपी, कोलोनोस्कोपी, ईआरसीपी (ERCP) और सभी जांच प्रक्रियाएं डॉ. अखिलेश यादव स्वयं आधुनिक एंडोस्कोपी सुइट में करते हैं।"
  },
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": DOCTOR.name,
    "description": "DM Gastroenterologist & Hepatologist at Orchid Medical Centre, Ranchi",
    "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "medicalSpecialty": "Gastroenterology",
    "telephone": DOCTOR.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": DOCTOR.address,
      "addressLocality": "Ranchi",
      "addressRegion": "Jharkhand",
      "postalCode": "834001",
      "addressCountry": "IN"
    },
    "affiliation": {
      "@type": "Hospital",
      "name": DOCTOR.hospital,
    },
    "alumniOf": [
      { "@type": "CollegeOrUniversity", name: "DM Gastroenterology — Prestigious Medical University of India" }
    ],
    "memberOf": MEMBERSHIPS.map(m => ({
      "@type": "MedicalOrganization",
      "name": m.name
    }))
  };

  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe Dr. Akhilesh Yadav se consultation ke baare me jankari chahiye."
  )}`;

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      <article className="min-h-screen pb-16 sm:pb-0">
        
        {/* Section 1: Hero Block */}
        <section className="bg-white pt-12 pb-16 lg:pt-20 lg:pb-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column — Credentials & Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-border px-3 py-1 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
                  E-E-A-T Verified Expert
                </div>
                
                <h1 className="text-4xl sm:text-5xl font-display font-bold text-forest leading-tight">
                  {DOCTOR.name}
                </h1>
                
                <p className="text-primary font-display text-lg font-bold">
                  {DOCTOR.qualification} · Senior Gastroenterologist
                </p>

                <p className="font-sans text-muted text-base sm:text-lg leading-relaxed">
                  Dr. Akhilesh Yadav is Ranchi's leading Gastroenterologist &amp; Liver Specialist, offering over 10 years of clinical experience. Based at Orchid Medical Centre, Ranchi, he specializes in safe, pain-free endoscopic procedures and the comprehensive treatment of advanced liver and digestive conditions.
                </p>

                {/* Verification points list */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span className="font-sans text-forest font-semibold text-sm">DM Gastroenterology — India's highest clinical specialty qualification.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span className="font-sans text-forest font-semibold text-sm">10+ years of dedicated practice with 4,000+ successfully treated patients.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span className="font-sans text-forest font-semibold text-sm">Practising daily at Orchid Medical Centre, Ranchi (Mon - Sat).</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={16} />
                    <span className="font-sans text-forest font-semibold text-sm">Comprehensive consultations offered in clean Hindi &amp; English.</span>
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3 pt-4">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                  >
                    Book Appointment
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>
              </div>

              {/* Right Column — Large Portrait */}
              <div className="lg:col-span-5 relative">
                <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-sm mx-auto">
                  <img
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating qualification badge */}
                <div className="absolute -bottom-4 -left-2 bg-white border border-border rounded-2xl px-5 py-3.5 shadow-xs hidden sm:block">
                  <div className="text-[10px] text-muted uppercase tracking-wider font-bold font-sans">Specialty</div>
                  <div className="text-primary font-display font-bold text-sm mt-0.5">DM Gastroenterology</div>
                  <div className="text-muted text-[10px] font-sans mt-0.5 uppercase font-medium">Orchid Medical Centre</div>
                </div>
                {/* Floating status badge */}
                <div className="absolute -top-3 -right-2 bg-primary text-white border border-primary rounded-2xl px-4 py-2 shadow-xs">
                  <div className="text-[9px] text-accent font-bold uppercase tracking-wider font-sans">Status</div>
                  <div className="text-xs font-semibold font-sans">OPD Available Daily</div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section 2: Clinical Stats Banner */}
        <section className="bg-bg-sand py-12 border-t border-b border-border/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <span className="text-4xl font-display font-bold text-primary block">10+ Years</span>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans mt-1 block">Clinical Practice</span>
              </div>
              <div>
                <span className="text-4xl font-display font-bold text-primary block">4,000+</span>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans mt-1 block">Patients Treated</span>
              </div>
              <div>
                <span className="text-4xl font-display font-bold text-primary block">15+</span>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans mt-1 block">Scopes Daily</span>
              </div>
              <div>
                <span className="text-4xl font-display font-bold text-primary block">4.9 ★</span>
                <span className="text-[10px] text-muted uppercase font-bold tracking-wider font-sans mt-1 block">Google Rating</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Clinical Care Principles */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            
            <div className="text-center mb-16">
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
                Philosophy of Care
              </span>
              <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                मरीज़ों के प्रति हमारी सोच — Care Principles
              </h2>
              <p className="font-sans text-muted text-base mt-2">
                Core clinical commitments that Dr. Akhilesh Yadav makes to every patient.
              </p>
            </div>

            {/* Principles Cards */}
            <div className="grid md:grid-cols-3 gap-8">
              {PHILOSOPHY.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="bg-bg-sand/15 border border-border/60 rounded-3xl p-6 shadow-2xs space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="text-primary" size={18} />
                    </div>
                    <div>
                      <h3 className="text-forest font-sans font-bold text-base">
                        {item.title}
                      </h3>
                      <p className="font-hindi text-primary text-xs font-bold mt-0.5">
                        {item.hindiTitle}
                      </p>
                    </div>
                    <p className="text-muted text-xs leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* Section 4: Qualifications Timeline */}
        <section className="bg-bg-sand py-16 lg:py-20 border-t border-b border-border/40">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            
            <div className="text-center mb-16">
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
                Qualifications
              </span>
              <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                शैक्षणिक योग्यता और प्रशिक्षण — Timeline
              </h2>
              <p className="font-sans text-muted text-base mt-2">
                Educational profile and clinical residencies of Dr. Akhilesh Yadav.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-[1px] bg-border/60" />
              
              <div className="space-y-8">
                {EDUCATION.map((edu, idx) => (
                  <div key={idx} className="relative flex gap-6 items-start">
                    
                    {/* Circle icon */}
                    <div className={cn(
                      "w-12 h-12 rounded-full border flex items-center justify-center flex-shrink-0 z-10 shadow-xs",
                      edu.highlight
                        ? "bg-primary border-primary text-white"
                        : "bg-white border-border text-muted"
                    )}>
                      <GraduationCap size={16} />
                    </div>

                    {/* Timeline card */}
                    <div className="flex-1 bg-white border border-border rounded-2xl p-6 shadow-2xs">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                        <div>
                          <h3 className={cn(
                            "font-sans font-bold text-base",
                            edu.highlight ? "text-primary" : "text-forest"
                          )}>
                            {edu.degree}
                          </h3>
                          <p className="text-muted text-xs mt-0.5">{edu.institution}</p>
                        </div>
                        <span className="text-[10px] bg-bg-sand border border-border text-forest px-2.5 py-1 rounded-lg font-sans font-bold uppercase tracking-wider flex-shrink-0">
                          {edu.duration}
                        </span>
                      </div>
                      <p className="text-muted text-xs leading-relaxed font-sans">
                        {edu.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Section 5: Professional Memberships */}
        <section className="bg-white py-16 lg:py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            
            <div className="text-center mb-16">
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block mb-3">
                Affiliations
              </span>
              <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                प्रोफेशनल मेंबरशिप्स — Associations
              </h2>
              <p className="font-sans text-muted text-base mt-2">
                Dr. Akhilesh Yadav is an active member of leading national societies.
              </p>
            </div>

            {/* Memberships list grid */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
              {MEMBERSHIPS.map((mem, idx) => (
                <div key={idx} className="bg-bg-sand/10 border border-border rounded-2xl p-5 flex items-center gap-4 shadow-3xs">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="text-primary" size={18} />
                  </div>
                  <div>
                    <h4 className="text-forest font-sans font-bold text-sm leading-snug">
                      {mem.name}
                    </h4>
                    <p className="text-muted text-[10px] uppercase font-bold tracking-wider font-sans mt-0.5">
                      {mem.code} Member
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 6: About FAQ accordion */}
        <SymptomFAQSection
          title="Dr. Akhilesh Yadav"
          faqs={ABOUT_FAQS}
        />

        {/* Section 7: High-Conversion Appointment CTA */}
        <section className="bg-white py-16 lg:py-20 border-t border-border/40">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="bg-bg-sand/30 border border-border rounded-3xl p-8 lg:p-12 shadow-sm grid md:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="md:col-span-5 w-full">
                <div className="aspect-[4/5] bg-primary-light rounded-2xl overflow-hidden relative shadow-xs max-w-xs mx-auto">
                  <img
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-2 bg-primary-50 border border-border px-3 py-1 rounded-full text-primary font-display text-xs font-bold uppercase tracking-wider">
                  Book a Consultation
                </div>
                
                <h2 className="text-3xl font-display font-bold text-forest leading-tight font-hindi">
                  रांची में डॉ. अखिलेश यादव से ओपीडी परामर्श लें
                </h2>
                
                <p className="font-sans text-muted text-base leading-relaxed">
                  For diagnostic endoscopies or expert consultations regarding chronic stomach pain, jaundice, gas, acidity, or liver conditions, schedule your appointment at Orchid Medical Centre today.
                </p>

                <div className="flex flex-wrap gap-3 pt-2">
                  <Link
                    href="/book"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-display font-semibold text-sm rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                  >
                    <Calendar size={15} /> Book Appointment
                  </Link>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-bg-sand/30 font-display font-semibold text-sm rounded-xl min-h-[48px]"
                  >
                    <MessageCircle size={14} /> WhatsApp
                  </a>
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary font-display font-semibold text-sm rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
                  >
                    <Phone size={14} /> Call Now
                  </a>
                </div>

                <p className="text-xs text-muted font-sans font-medium uppercase tracking-wider mt-2 block">
                  ORCHID MEDICAL CENTRE, RANCHI · OPD DAILY (SUN CLOSED)
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Floating conversion bar */}
        <StickyCTA title="Consult Dr. Akhilesh Yadav" />

      </article>
    </>
  );
}
