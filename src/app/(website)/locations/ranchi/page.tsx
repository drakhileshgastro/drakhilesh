import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Phone, MessageCircle, MapPin, Clock, Star, ShieldCheck,
  CheckCircle2, HelpCircle, ArrowRight, Calendar, ChevronRight,
} from "lucide-react";
import { DOCTOR } from "@/lib/constants";
import BookingForm from "@/components/service/booking-form";
import StickyCTA from "@/components/service/sticky-cta";

export const revalidate = 86400;

export const metadata: Metadata = {
  title: "Gastroenterologist in Ranchi | Dr. Akhilesh Yadav — Orchid Medical Centre",
  description:
    "Consult Dr. Akhilesh Yadav (DM Gastroenterology) — Ranchi's leading gastroenterologist at Orchid Medical Centre, HB Road. Expert care for liver, stomach & digestive diseases. Endoscopy, Colonoscopy, ERCP, FibroScan. Book today.",
  alternates: { canonical: "https://drakhileshgastro.com/locations/ranchi" },
  openGraph: {
    title: "Gastroenterologist in Ranchi | Dr. Akhilesh Yadav — Orchid Medical Centre",
    description:
      "Consult Dr. Akhilesh Yadav (DM Gastroenterology) at Orchid Medical Centre, HB Road, Ranchi. Expert liver, stomach & digestive care.",
    url: "https://drakhileshgastro.com/locations/ranchi",
    type: "website",
    images: [
      { url: "https://drakhileshgastro.com/dr-akhilesh-improved.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
    description: "Expert gastroenterology care at Orchid Medical Centre, HB Road, Ranchi.",
    images: ["https://drakhileshgastro.com/dr-akhilesh-improved.png"],
  },
};

// ─── Page-specific data ──────────────────────────────────────────────────────

const CONDITIONS = [
  { title: "Fatty Liver",           hindiTitle: "फैटी लिवर",              slug: "fatty-liver",       icon: "🫀", desc: "NAFLD/NASH management" },
  { title: "Liver Cirrhosis",       hindiTitle: "लीवर सिरोसिस",           slug: "liver-cirrhosis",   icon: "🏥", desc: "Advanced liver disease care" },
  { title: "Hepatitis B & C",       hindiTitle: "हेपेटाइटिस B & C",       slug: "hepatitis",         icon: "🧬", desc: "Antiviral therapy & care" },
  { title: "Jaundice",              hindiTitle: "पीलिया",                  slug: "jaundice",          icon: "🌕", desc: "Rapid diagnosis & treatment" },
  { title: "IBS",                   hindiTitle: "IBS / आंत की समस्या",    slug: "ibs",               icon: "💊", desc: "Gut health management" },
  { title: "Acid Reflux / GERD",    hindiTitle: "एसिडिटी / GERD",         slug: "acid-reflux",       icon: "🔥", desc: "Reflux & heartburn relief" },
  { title: "Gallstone",             hindiTitle: "पित्त की पथरी",          slug: "gallstone",         icon: "⚕️", desc: "Stone & bile duct care" },
  { title: "Pancreatitis",          hindiTitle: "अग्नाशय की सूजन",        slug: "pancreatitis",      icon: "🫁", desc: "Pancreas disease management" },
  { title: "Peptic Ulcer",          hindiTitle: "पेप्टिक अल्सर",          slug: "peptic-ulcer",      icon: "🩺", desc: "Ulcer diagnosis & treatment" },
  { title: "Ulcerative Colitis",    hindiTitle: "अल्सरेटिव कोलाइटिस",    slug: "ulcerative-colitis",icon: "🌿", desc: "IBD long-term care" },
  { title: "GI Bleeding",           hindiTitle: "GI ब्लीडिंग",            slug: "gi-bleeding",       icon: "🩸", desc: "Emergency endoscopic care" },
  { title: "Abdominal Pain",        hindiTitle: "पेट दर्द",               slug: "abdominal-pain",    icon: "🫃", desc: "Precise diagnosis & relief" },
];

const PROCEDURES = [
  { title: "Upper GI Endoscopy", hindiTitle: "एंडोस्कोपी",         slug: "endoscopy",    icon: "🔭", desc: "Pain-free upper GI scope — 15 min" },
  { title: "Colonoscopy",        hindiTitle: "कोलोनोस्कोपी",       slug: "colonoscopy",  icon: "🔬", desc: "Colon exam & cancer screening" },
  { title: "ERCP",               hindiTitle: "ERCP",                slug: "ercp",         icon: "⚕️", desc: "Bile duct stone removal" },
  { title: "EUS",                hindiTitle: "EUS अल्ट्रासाउंड",   slug: "eus",          icon: "📡", desc: "Deep GI ultrasound imaging" },
  { title: "FibroScan",          hindiTitle: "FibroScan",           slug: "fibroscan",    icon: "📊", desc: "Non-invasive liver stiffness test" },
  { title: "Liver Biopsy",       hindiTitle: "लिवर बायोप्सी",      slug: "liver-biopsy", icon: "💉", desc: "Tissue diagnosis for liver disease" },
];

const SYMPTOMS = [
  { label: "Stomach Pain",           hindiLabel: "पेट दर्द",                slug: "stomach-pain",          icon: "🫃" },
  { label: "Gas & Bloating",         hindiLabel: "गैस व पेट फूलना",         slug: "gas-bloating",          icon: "💨" },
  { label: "Acidity / Heartburn",    hindiLabel: "एसिडिटी / जलन",           slug: "acidity",               icon: "🔥" },
  { label: "Constipation",           hindiLabel: "कब्ज",                     slug: "constipation",          icon: "😣" },
  { label: "Diarrhea",               hindiLabel: "दस्त / लूज़ मोशन",         slug: "diarrhoea",             icon: "🚽" },
  { label: "Blood in Stool",         hindiLabel: "मल में खून",               slug: "blood-in-stool",        icon: "🩸" },
  { label: "Vomiting / Nausea",      hindiLabel: "उल्टी / मतली",             slug: "vomiting",              icon: "🤢" },
  { label: "Jaundice",               hindiLabel: "पीलिया",                   slug: "jaundice",              icon: "🌕" },
  { label: "Difficulty Swallowing",  hindiLabel: "निगलने में तकलीफ",         slug: "difficulty-swallowing", icon: "😔" },
  { label: "Weight Loss",            hindiLabel: "वजन कम होना",              slug: "weight-loss",           icon: "⚖️" },
];

const FAQS = [
  {
    q: "What does a gastroenterologist treat?",
    a: "A gastroenterologist specialises in diseases of the digestive system — including the oesophagus, stomach, small intestine, colon, rectum, liver, gallbladder, bile ducts, and pancreas. Common conditions include fatty liver, jaundice, hepatitis, IBS, GERD, peptic ulcer, gallstones, pancreatitis, Ulcerative Colitis, and GI bleeding.",
  },
  {
    q: "When should I see a gastroenterologist in Ranchi?",
    a: "Consult a gastroenterologist if you have persistent stomach pain (more than 2 weeks), blood in stool, unexplained weight loss, yellowing of skin or eyes (jaundice), difficulty swallowing, chronic acidity, altered bowel habits, or elevated liver enzymes on blood tests. You may consult directly or on referral from your physician.",
  },
  {
    q: "रांची में सबसे अच्छा गैस्ट्रोएंटेरोलॉजिस्ट कौन है?",
    a: "डॉ. अखिलेश यादव रांची के प्रमुख DM गैस्ट्रोएंटेरोलॉजिस्ट हैं — जो पेट, लिवर और पाचन रोगों में भारत की सर्वोच्च चिकित्सा विशेषज्ञता (DM Gastroenterology) रखते हैं। वे ऑर्किड मेडिकल सेंटर, HB रोड, रांची में OPD करते हैं और 4,000 से अधिक मरीजों का इलाज कर चुके हैं।",
  },
  {
    q: "Which is the best gastroenterology clinic in Ranchi?",
    a: "Dr. Akhilesh Yadav's clinic at Orchid Medical Centre, HB Road, Ranchi offers comprehensive GI diagnostic services — Endoscopy, Colonoscopy, FibroScan, ERCP, and EUS — all under one roof with same-day reports and a 4.9 Google rating.",
  },
  {
    q: "Can I get endoscopy done in Ranchi on the same day?",
    a: "Yes. Diagnostic Upper GI Endoscopy and Colonoscopy at Orchid Medical Centre take 15–20 minutes under light conscious sedation. Reports are typically ready within 30–60 minutes, allowing same-day discharge. Book an early morning slot for maximum convenience.",
  },
  {
    q: "What are Dr. Akhilesh Yadav's OPD timings in Ranchi?",
    a: "OPD is available Monday to Saturday: Morning 10:00 AM – 2:00 PM and Evening 5:00 PM – 8:00 PM at Orchid Medical Centre, HB Road, Ranchi. Sunday OPD is closed. Call +91 9031669888 or WhatsApp to confirm availability and book a preferred slot.",
  },
  {
    q: "Is Dr. Akhilesh Yadav also a liver specialist (hepatologist) in Ranchi?",
    a: "Yes. DM Gastroenterology includes Hepatology — the study and treatment of liver diseases. Dr. Akhilesh Yadav treats all liver conditions including fatty liver (NAFLD/NASH), jaundice, liver cirrhosis, hepatitis B & C, ascites, and liver failure. He is Ranchi's dedicated gastroenterologist and hepatologist.",
  },
  {
    q: "How do I book an appointment with Dr. Akhilesh Yadav in Ranchi?",
    a: "Call or WhatsApp +91 9031669888 to book an appointment at Orchid Medical Centre, HB Road, Ranchi. You can also use the appointment form on this page. Mention your symptoms so the clinic can prepare for your visit.",
  },
];

// ─── Structured Data ─────────────────────────────────────────────────────────

const physicianLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "@id": "https://drakhileshgastro.com/#physician",
  "name": DOCTOR.name,
  "description":
    "Dr. Akhilesh Yadav is a Gastroenterologist and Hepatologist at Orchid Medical Centre, HB Road, Ranchi, Jharkhand. He holds MBBS, MD, and DM Gastroenterology qualifications with 10+ years of specialist experience in digestive and liver diseases.",
  "medicalSpecialty": "Gastroenterology",
  "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
  "url": "https://drakhileshgastro.com/about",
  "worksFor": { "@id": "https://drakhileshgastro.com/#clinic" },
};

const clinicLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "@id": "https://drakhileshgastro.com/#clinic",
  "name": "Orchid Medical Centre — Gastroenterology",
  "description":
    "Orchid Medical Centre, HB Road, Ranchi offers specialist gastroenterology and hepatology services including Endoscopy, Colonoscopy, ERCP, EUS, FibroScan, and Liver Biopsy.",
  "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
  "telephone": DOCTOR.phone,
  "url": "https://drakhileshgastro.com/locations/ranchi",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "HB Road, Opposite Plaza Cinema, Plaza Chowk",
    "addressLocality": "Ranchi",
    "addressRegion": "Jharkhand",
    "postalCode": "834001",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.3705,
    "longitude": 85.3250,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "17:00",
      "closes": "20:00",
    },
  ],
  "employee": { "@id": "https://drakhileshgastro.com/#physician" },
  "medicalSpecialty": "Gastroenterology",
};

const breadcrumbLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://drakhileshgastro.com" },
    { "@type": "ListItem", position: 2, name: "Locations", item: "https://drakhileshgastro.com/locations" },
    { "@type": "ListItem", position: 3, name: "Gastroenterologist in Ranchi", item: "https://drakhileshgastro.com/locations/ranchi" },
  ],
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a },
  })),
};

const webPageLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://drakhileshgastro.com/locations/ranchi#webpage",
  "url": "https://drakhileshgastro.com/locations/ranchi",
  "name": "Gastroenterologist in Ranchi | Dr. Akhilesh Yadav",
  "isPartOf": { "@id": "https://drakhileshgastro.com/#website" },
  "about": { "@id": "https://drakhileshgastro.com/#physician" },
  "lastReviewed": "2026-08-11",
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function RanchiGastroPage() {
  const whatsappHref = `https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(
    "Namaskar, mujhe Dr. Akhilesh Yadav se gastroenterology appointment chahiye."
  )}`;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageLd) }} />

      <article className="min-h-screen pb-16 sm:pb-0 bg-white">

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 pt-5">
          <ol className="flex items-center gap-1.5 text-xs text-muted font-sans flex-wrap">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/locations" className="hover:text-primary transition-colors">Locations</Link></li>
            <li>/</li>
            <li className="text-forest font-semibold">Ranchi</li>
          </ol>
        </nav>

        {/* ── Hero ────────────────────────────────────────────────────────── */}
        <section className="bg-bg-sand/30 pt-8 pb-16 lg:py-20 border-b border-border/40 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/4 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

              {/* Text */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="inline-flex items-center gap-1.5 bg-primary-50 border border-primary/20 text-primary font-bold px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-sans">
                    Ranchi&apos;s GI Specialist
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-white border border-border/50 text-forest px-3 py-1 rounded-full text-[10px] font-semibold font-sans">
                    <MapPin size={10} className="text-primary" /> Orchid Medical Centre, HB Road
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-display font-bold text-forest leading-tight">
                  Gastroenterologist in Ranchi —{" "}
                  <span className="text-primary">Dr. Akhilesh Yadav</span>
                </h1>

                <p className="font-hindi text-forest/80 text-lg font-semibold leading-relaxed">
                  रांची में पेट, लिवर और पाचन रोगों का DM विशेषज्ञ इलाज
                </p>

                <p className="text-muted text-base leading-relaxed font-sans max-w-xl">
                  Dr. Akhilesh Yadav (MBBS, MD, DM Gastroenterology) offers specialist care for all digestive and liver
                  conditions at Orchid Medical Centre, HB Road, Ranchi — including Endoscopy, Colonoscopy, ERCP, EUS,
                  and FibroScan under one roof.
                </p>

                {/* Trust stats */}
                <div className="flex flex-wrap gap-5 py-4 border-t border-b border-border/40">
                  {[
                    { icon: <ShieldCheck size={15} className="text-primary" />, value: "10+ Years", label: "DM Experience" },
                    { icon: <Star size={15} className="text-accent fill-accent" />, value: "4.9 ⭐", label: "Google Rating" },
                    { icon: <CheckCircle2 size={15} className="text-primary" />, value: "4,000+", label: "Patients Treated" },
                    { icon: <Clock size={15} className="text-primary" />, value: "Mon–Sat", label: "OPD Available" },
                  ].map(({ icon, value, label }, i) => (
                    <div key={i} className={`space-y-0.5 ${i > 0 ? "border-l border-border/40 pl-5" : ""}`}>
                      <div className="flex items-center gap-1">
                        {icon}
                        <span className="text-forest font-bold text-sm font-sans">{value}</span>
                      </div>
                      <span className="text-[10px] text-muted uppercase font-bold tracking-wider block font-sans">{label}</span>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={`tel:${DOCTOR.phone}`}
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-primary text-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-dark transition-colors shadow-xs min-h-[48px]"
                  >
                    <Phone size={13} /> Call {DOCTOR.phone}
                  </a>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-border text-primary hover:bg-primary-50 transition-colors bg-white font-display font-semibold text-xs uppercase tracking-wider rounded-xl min-h-[48px]"
                  >
                    <MessageCircle size={13} /> WhatsApp
                  </a>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-5 py-3 border border-primary/40 bg-primary-50/50 text-primary hover:bg-primary-50 transition-colors font-display font-semibold text-xs uppercase tracking-wider rounded-xl min-h-[48px]"
                  >
                    <Calendar size={13} /> Book Appointment
                  </Link>
                </div>
              </div>

              {/* Doctor photo */}
              <div className="lg:col-span-5">
                <div className="aspect-[4/5] bg-primary-light rounded-3xl overflow-hidden relative shadow-sm max-w-xs mx-auto border border-border/20">
                  <Image
                    src="/dr-akhilesh-improved.png"
                    alt="Dr. Akhilesh Yadav — Gastroenterologist in Ranchi at Orchid Medical Centre"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs border border-border/50 rounded-2xl px-4 py-2.5 shadow-md">
                    <div className="text-[10px] text-muted font-sans font-bold uppercase tracking-wider">DM Gastroenterology</div>
                    <div className="text-forest font-sans font-bold text-xs mt-0.5">{DOCTOR.name} · Orchid Medical Centre</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Main Content + Sidebar ───────────────────────────────────────── */}
        <section className="py-16 lg:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

              {/* Left: Content */}
              <div className="lg:col-span-8 space-y-14">

                {/* ── Doctor Introduction ──────────────────────────────── */}
                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">About the Doctor</span>
                    <h2 className="text-2xl font-display font-bold text-forest">Dr. Akhilesh Yadav — DM Gastroenterologist, Ranchi</h2>
                  </div>
                  <p className="text-muted text-base leading-relaxed font-sans">
                    Dr. Akhilesh Yadav holds MBBS, MD (Medicine), and DM Gastroenterology — the highest specialist
                    qualification in digestive and liver medicine in India. With over 10 years of clinical experience
                    and 4,000+ patients treated across Jharkhand, he practices at Orchid Medical Centre, HB Road, Ranchi.
                  </p>
                  <p className="text-muted text-base leading-relaxed font-sans">
                    His clinical focus includes liver diseases (fatty liver, cirrhosis, hepatitis, jaundice),
                    complex GI disorders (IBS, Crohn&apos;s, Ulcerative Colitis), and advanced endoscopic procedures
                    including ERCP for bile duct stones, EUS-guided biopsies, and therapeutic colonoscopy.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    {[
                      { label: "Specialty",      value: "Gastroenterology & Hepatology" },
                      { label: "Qualification",  value: "MBBS · MD · DM Gastroenterology" },
                      { label: "Hospital",       value: "Orchid Medical Centre, HB Road" },
                      { label: "Experience",     value: "10+ Years · 4,000+ Patients" },
                    ].map(({ label, value }) => (
                      <div key={label} className="bg-bg-sand/30 border border-border/50 rounded-2xl px-5 py-4">
                        <span className="text-[9px] text-primary uppercase font-bold tracking-wider block font-sans mb-0.5">{label}</span>
                        <span className="text-forest font-sans font-semibold text-sm">{value}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans uppercase tracking-wider hover:text-primary-dark transition-colors"
                  >
                    Full profile — About Dr. Akhilesh <ArrowRight size={12} />
                  </Link>
                </div>

                {/* ── Conditions Treated ───────────────────────────────── */}
                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">Gastroenterology Services</span>
                    <h2 className="text-2xl font-display font-bold text-forest">Conditions Treated in Ranchi</h2>
                    <p className="text-muted text-sm mt-1 font-sans">
                      Dr. Akhilesh Yadav diagnoses and treats the following conditions at Orchid Medical Centre, Ranchi.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {CONDITIONS.map((c) => (
                      <Link
                        key={c.slug}
                        href={`/conditions/${c.slug}`}
                        className="group bg-white border border-border/70 hover:border-primary rounded-2xl p-4 flex gap-3 items-start shadow-3xs transition-all"
                      >
                        <span className="text-2xl flex-shrink-0">{c.icon}</span>
                        <div>
                          <h3 className="text-forest font-sans font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                            {c.title}
                          </h3>
                          <p className="text-muted text-[11px] font-hindi mt-0.5">{c.hindiTitle}</p>
                          <p className="text-muted/80 text-[10px] font-sans mt-1">{c.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link href="/conditions" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans hover:text-primary-dark transition-colors">
                    View all conditions <ArrowRight size={12} />
                  </Link>
                </div>

                {/* ── Procedures ───────────────────────────────────────── */}
                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">Diagnostic & Therapeutic Procedures</span>
                    <h2 className="text-2xl font-display font-bold text-forest">Procedures Available in Ranchi</h2>
                    <p className="text-muted text-sm mt-1 font-sans">
                      All procedures are performed at Orchid Medical Centre with same-day reports.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {PROCEDURES.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/procedures/${p.slug}`}
                        className="group bg-white border border-border/70 hover:border-primary rounded-2xl p-4 flex gap-3 items-start shadow-3xs transition-all"
                      >
                        <span className="text-2xl flex-shrink-0">{p.icon}</span>
                        <div>
                          <h3 className="text-forest font-sans font-bold text-sm leading-snug group-hover:text-primary transition-colors">
                            {p.title}
                          </h3>
                          <p className="text-muted text-[11px] font-hindi mt-0.5">{p.hindiTitle}</p>
                          <p className="text-muted/80 text-[10px] font-sans mt-1">{p.desc}</p>
                        </div>
                      </Link>
                    ))}
                  </div>

                  <Link href="/procedures" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans hover:text-primary-dark transition-colors">
                    All procedures at Orchid Medical Centre <ArrowRight size={12} />
                  </Link>
                </div>

                {/* ── Symptoms ─────────────────────────────────────────── */}
                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">When to Consult</span>
                    <h2 className="text-2xl font-display font-bold text-forest">Symptoms That Need a GI Specialist</h2>
                    <p className="text-muted text-sm mt-1 font-sans">
                      See Dr. Akhilesh Yadav if you experience any of the following — early consultation leads to better outcomes.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {SYMPTOMS.map((s) => (
                      <Link
                        key={s.slug}
                        href={`/symptoms/${s.slug}`}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-bg-sand/40 border border-border/60 hover:border-primary hover:bg-primary-50/20 rounded-full text-xs font-sans font-semibold text-forest transition-all"
                      >
                        <span>{s.icon}</span>
                        <span>{s.label}</span>
                        <span className="text-muted font-hindi font-normal text-[10px]">({s.hindiLabel})</span>
                      </Link>
                    ))}
                  </div>

                  <Link href="/symptoms" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans hover:text-primary-dark transition-colors">
                    Full symptoms directory <ArrowRight size={12} />
                  </Link>
                </div>

                {/* ── Why consult a gastroenterologist ─────────────────── */}
                <div className="bg-bg-sand/25 border border-border/50 rounded-3xl p-6 lg:p-8 space-y-5">
                  <div>
                    <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">Patient Education</span>
                    <h2 className="text-xl font-display font-bold text-forest">Why Consult a Gastroenterologist?</h2>
                  </div>
                  <div className="space-y-4 text-sm text-muted leading-relaxed font-sans">
                    <p>
                      A general physician treats a broad range of conditions. A gastroenterologist focuses exclusively on the
                      digestive system — stomach, intestines, liver, gallbladder, and pancreas. This specialisation means more
                      accurate diagnosis, access to advanced procedures (Endoscopy, ERCP, EUS), and disease-specific treatment
                      protocols for conditions like cirrhosis, IBD, and GI cancers.
                    </p>
                    <p>
                      Many GI conditions — fatty liver, early colon cancer, gastric ulcers — can be silent for years. A
                      gastroenterologist uses tools like FibroScan, Endoscopy, and blood markers to detect disease before
                      symptoms become severe.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3 text-xs font-sans pt-2">
                    {[
                      "Persistent stomach pain or cramps",
                      "Jaundice or yellowing of skin/eyes",
                      "Blood in stool or vomiting blood",
                      "Abnormal liver function tests",
                      "Difficulty swallowing food",
                      "Unexplained significant weight loss",
                      "Chronic diarrhea or constipation",
                      "Family history of colon cancer",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── Clinic Information ───────────────────────────────── */}
                <div className="space-y-5">
                  <div>
                    <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">Clinic Details</span>
                    <h2 className="text-2xl font-display font-bold text-forest">Orchid Medical Centre, Ranchi</h2>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-white border border-border/70 rounded-2xl p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <MapPin size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-primary uppercase font-bold tracking-wider block font-sans">Address</span>
                          <p className="text-forest font-sans text-sm font-semibold mt-0.5 leading-snug">
                            Orchid Medical Centre<br />
                            HB Road, Opposite Plaza Cinema<br />
                            Plaza Chowk, Ranchi — 834001
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border/70 rounded-2xl p-5 space-y-3">
                      <div className="flex items-start gap-3">
                        <Clock size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-primary uppercase font-bold tracking-wider block font-sans">OPD Timings</span>
                          <p className="text-forest font-sans text-sm font-semibold mt-0.5 leading-relaxed">
                            Monday – Saturday<br />
                            Morning: 10:00 AM – 2:00 PM<br />
                            Evening: 5:00 PM – 8:00 PM
                          </p>
                          <p className="text-muted/70 text-[10px] font-sans mt-1">Sunday: Closed</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border/70 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-3">
                        <Phone size={16} className="text-primary flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-primary uppercase font-bold tracking-wider block font-sans">Contact</span>
                          <a href={`tel:${DOCTOR.phone}`} className="text-forest font-sans font-bold text-sm hover:text-primary transition-colors">
                            {DOCTOR.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white border border-border/70 rounded-2xl p-5 space-y-2">
                      <div className="flex items-center gap-3">
                        <MessageCircle size={16} className="text-primary flex-shrink-0" />
                        <div>
                          <span className="text-[9px] text-primary uppercase font-bold tracking-wider block font-sans">WhatsApp</span>
                          <a
                            href={whatsappHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-forest font-sans font-bold text-sm hover:text-primary transition-colors"
                          >
                            {DOCTOR.phone} →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <a
                    href={DOCTOR.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary text-xs font-bold font-sans hover:text-primary-dark transition-colors"
                  >
                    <MapPin size={13} /> Open in Google Maps <ArrowRight size={12} />
                  </a>
                </div>

                {/* ── Related resources ────────────────────────────────── */}
                <div className="space-y-4 pt-2 border-t border-border/40">
                  <h3 className="text-forest font-display font-bold text-lg">Patient Resources</h3>
                  <div className="grid sm:grid-cols-3 gap-3">
                    {[
                      { href: "/patient-guide", emoji: "📋", label: "Patient Guide", desc: "Pre & post procedure guides" },
                      { href: "/diet",          emoji: "🥗", label: "Diet Guides",   desc: "Condition-specific diet charts" },
                      { href: "/blog",          emoji: "📚", label: "Health Blog",   desc: "Hindi articles on GI health" },
                    ].map(({ href, emoji, label, desc }) => (
                      <Link key={href} href={href} className="group bg-bg-sand/30 border border-border/60 hover:border-primary rounded-2xl p-4 transition-all">
                        <span className="text-2xl block mb-2">{emoji}</span>
                        <h4 className="text-forest font-sans font-bold text-sm group-hover:text-primary transition-colors">{label}</h4>
                        <p className="text-muted text-[11px] font-sans mt-0.5">{desc}</p>
                      </Link>
                    ))}
                  </div>
                </div>

              </div>

              {/* ── Right Sidebar ──────────────────────────────────────────── */}
              <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">

                <div className="bg-white border border-border/80 rounded-3xl p-6 shadow-2xs space-y-4">
                  <div>
                    <span className="text-[10px] text-primary uppercase font-bold tracking-wider font-sans block mb-1">
                      Book Appointment
                    </span>
                    <h3 className="text-forest font-sans font-bold text-base">परामर्श के लिए अनुरोध करें</h3>
                    <p className="text-muted text-xs font-sans mt-0.5">30-minute callback guaranteed.</p>
                  </div>
                  <BookingForm compact />
                </div>

                {/* Doctor card */}
                <div className="bg-bg-sand/35 border border-border/80 rounded-3xl p-5 shadow-xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 bg-primary-light rounded-xl overflow-hidden relative border border-border/20 flex-shrink-0">
                      <Image src="/dr-akhilesh-improved.png" alt={DOCTOR.name} fill className="object-cover object-top" />
                    </div>
                    <div>
                      <h4 className="text-forest font-sans font-bold text-sm leading-tight">{DOCTOR.name}</h4>
                      <p className="text-muted text-[10px] font-sans mt-0.5">{DOCTOR.qualification}</p>
                      <p className="text-primary text-[10px] font-bold font-sans mt-0.5">DM Gastroenterologist</p>
                    </div>
                  </div>
                  <p className="text-muted text-xs leading-relaxed font-hindi border-t border-border/40 pt-3">
                    ऑर्किड मेडिकल सेंटर, HB रोड, रांची में 10+ वर्षों का विशेषज्ञ अनुभव।
                  </p>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${DOCTOR.phone}`}
                      className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 bg-primary text-white font-display font-semibold text-[11px] rounded-xl hover:bg-primary-dark transition-colors"
                    >
                      <Phone size={12} /> Call
                    </a>
                    <a
                      href={whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 h-10 inline-flex items-center justify-center gap-1.5 bg-white border border-primary text-primary font-display font-semibold text-[11px] rounded-xl hover:bg-primary-50 transition-colors"
                    >
                      <MessageCircle size={12} /> WhatsApp
                    </a>
                  </div>
                </div>

                {/* Quick links */}
                <div className="border border-border/60 rounded-2xl p-5 space-y-2">
                  <span className="text-[9px] text-primary uppercase font-bold tracking-wider font-sans block">Quick Links</span>
                  {[
                    { href: "/conditions/fatty-liver",    label: "Fatty Liver Treatment" },
                    { href: "/procedures/endoscopy",       label: "Endoscopy in Ranchi" },
                    { href: "/procedures/fibroscan",       label: "FibroScan Test" },
                    { href: "/procedures/ercp",            label: "ERCP for Bile Stones" },
                    { href: "/patient-guide",              label: "Patient Guide" },
                    { href: "/about",                      label: "About Dr. Akhilesh" },
                  ].map(({ href, label }) => (
                    <Link key={href} href={href} className="flex items-center gap-2 text-muted text-xs font-sans hover:text-primary transition-colors py-1 border-b border-border/30 last:border-0">
                      <ChevronRight size={11} className="text-primary flex-shrink-0" />
                      {label}
                    </Link>
                  ))}
                </div>

              </aside>

            </div>
          </div>
        </section>

        {/* ── FAQ Section ─────────────────────────────────────────────────── */}
        <section className="bg-bg-sand/15 py-16 lg:py-20 border-t border-border/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-primary font-display text-xs font-bold tracking-wider uppercase block">FAQ</span>
              <h2 className="text-2xl font-display font-bold text-forest mt-2">
                Frequently Asked Questions
              </h2>
              <p className="text-muted text-sm mt-2 font-hindi">Gastroenterologist in Ranchi के बारे में सामान्य प्रश्न</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white border border-border/50 rounded-2xl p-6 shadow-3xs">
                  <h3 className="text-forest font-sans font-bold text-sm sm:text-base font-hindi flex items-start gap-2.5">
                    <HelpCircle size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-muted text-xs sm:text-sm mt-3 leading-relaxed pl-6 border-l border-primary/25 font-hindi font-medium">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA Banner ─────────────────────────────────────────────── */}
        <section className="bg-primary py-12 lg:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
              Book a Consultation at Orchid Medical Centre, Ranchi
            </h2>
            <p className="text-white/80 text-sm font-hindi leading-relaxed max-w-lg mx-auto">
              पेट, लिवर या पाचन की किसी भी समस्या के लिए — डॉ. अखिलेश यादव से मिलें। HB रोड, रांची।
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a
                href={`tel:${DOCTOR.phone}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-primary font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-primary-50 transition-colors min-h-[48px]"
              >
                <Phone size={13} /> Call {DOCTOR.phone}
              </a>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-dark text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-forest transition-colors min-h-[48px]"
              >
                <MessageCircle size={13} /> WhatsApp Us
              </a>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/40 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white/10 transition-colors min-h-[48px]"
              >
                <Calendar size={13} /> Online Appointment
              </Link>
            </div>
          </div>
        </section>

        <StickyCTA title="Gastroenterologist in Ranchi" />
      </article>
    </>
  );
}
