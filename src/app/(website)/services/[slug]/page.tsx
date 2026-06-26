import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Phone, AlertCircle } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services-data";
import BookingForm from "@/components/service/booking-form";
import ServiceFaq from "@/components/service/service-faq";
import { DOCTOR } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [service.targetKeyword, "Dr Akhilesh Yadav", "gastroenterologist Ranchi", "Orchid Medical Centre"],
    alternates: { canonical: `https://drakhileshgastro.com/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://drakhileshgastro.com/services/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: service.h1,
    description: service.metaDescription,
    url: `https://drakhileshgastro.com/services/${service.slug}`,
    about: { "@type": "MedicalCondition", name: service.title },
    author: {
      "@type": "Physician",
      name: DOCTOR.name,
      medicalSpecialty: "Gastroenterology",
      affiliation: { "@type": "Hospital", name: DOCTOR.hospital },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakhileshgastro.com" },
        { "@type": "ListItem", position: 2, name: "Services", item: "https://drakhileshgastro.com/services" },
        { "@type": "ListItem", position: 3, name: service.title, item: `https://drakhileshgastro.com/services/${service.slug}` },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ── */}
      <section className="bg-navy pt-16 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal/5 rounded-full translate-x-1/3 -translate-y-1/3" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-14">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-gray-muted mb-6">
            <Link href="/" className="hover:text-teal transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-teal transition-colors">Services</Link>
            <span>/</span>
            <span className="text-teal">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal/10 border border-teal/20 px-3 py-1.5 rounded-full mb-4">
                <span className="text-2xl">{service.emoji}</span>
                <span className="text-teal text-xs font-semibold uppercase tracking-wider">{service.title}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                {service.h1.split("|")[0].trim()}
              </h1>
              <p className="text-gray-muted text-sm font-hindi leading-relaxed mb-6">{service.introHi}</p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.whyChoose.slice(0, 3).map((w) => (
                  <span key={w} className="inline-flex items-center gap-1.5 bg-white/10 border border-white/10 text-gray-muted text-xs px-3 py-1.5 rounded-full">
                    <CheckCircle size={11} className="text-teal flex-shrink-0" />
                    {w}
                  </span>
                ))}
              </div>

              {/* Quick CTAs */}
              <div className="flex flex-wrap gap-3">
                <a href={`tel:${DOCTOR.phone}`}
                  className="flex items-center gap-2 px-5 py-3 bg-white text-navy font-bold text-sm rounded-xl hover:bg-offwhite transition-colors">
                  <Phone size={15} /> Call Now
                </a>
                <a href={`https://wa.me/${DOCTOR.whatsappNumber}?text=${encodeURIComponent(DOCTOR.whatsappPrefilledMessage)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-whatsapp text-white font-bold text-sm rounded-xl">
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Booking form */}
            <div>
              <BookingForm defaultCondition={service.title} />
            </div>
          </div>
        </div>
        {/* Wave */}
        <div className="relative h-8 bg-navy">
          <svg viewBox="0 0 1440 32" className="absolute bottom-0 w-full" preserveAspectRatio="none">
            <path d="M0,32 L1440,32 L1440,0 Q720,32 0,0 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="section-pad bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Main content — on mobile appears after sidebar CTA */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-2">About this Condition</p>
                <h2 className="text-navy text-2xl font-bold mb-4">{service.title} — सम्पूर्ण जानकारी</h2>
                {service.introEn.split("\n\n").map((para, i) => (
                  <p key={i} className="text-slate text-sm leading-relaxed mb-3">{para}</p>
                ))}
              </div>

              {/* Symptoms */}
              <div className="bg-offwhite rounded-2xl p-5 border border-gray-light">
                <div className="flex items-center gap-2 mb-4">
                  <AlertCircle size={18} className="text-gold" />
                  <h3 className="text-navy font-bold text-base">लक्षण — Symptoms</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.symptoms.map((symptom) => (
                    <div key={symptom} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-teal rounded-full mt-1.5 flex-shrink-0" />
                      <p className="text-slate text-sm leading-relaxed font-hindi">{symptom}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Treatment */}
              <div className="bg-navy rounded-2xl p-5">
                <h3 className="text-teal font-bold text-base mb-4">Treatment Approach at Orchid Medical Centre</h3>
                <div className="space-y-2">
                  {service.treatments.map((t, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-teal/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-teal text-xs font-bold">{i + 1}</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar — shown ABOVE main content on mobile for quick CTA access */}
            <div className="space-y-5 order-first lg:order-last">
              {/* Why Choose */}
              <div className="bg-teal-50 border border-teal-light rounded-2xl p-5">
                <h3 className="text-navy font-bold text-sm mb-4">Why Choose Dr. Akhilesh?</h3>
                <div className="space-y-2.5">
                  {service.whyChoose.map((w) => (
                    <div key={w} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-teal mt-0.5 flex-shrink-0" />
                      <p className="text-slate text-xs leading-relaxed">{w}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clinic info */}
              <div className="bg-white border border-gray-light rounded-2xl p-5">
                <h3 className="text-navy font-bold text-sm mb-3">Clinic Details</h3>
                <div className="space-y-2 text-xs text-slate">
                  <p><span className="font-semibold text-navy">Doctor:</span> {DOCTOR.name}</p>
                  <p><span className="font-semibold text-navy">Hospital:</span> {DOCTOR.hospital}</p>
                  <p><span className="font-semibold text-navy">Timings:</span> Mon–Sat, 10am–2pm & 5pm–8pm</p>
                  <p><span className="font-semibold text-navy">Phone:</span> {DOCTOR.phone}</p>
                </div>
                <Link href="/book"
                  className="mt-4 w-full flex items-center justify-center py-2.5 bg-teal text-white text-sm font-semibold rounded-xl hover:bg-teal-dark transition-colors">
                  Book Appointment
                </Link>
              </div>

              {/* Related services */}
              <div className="bg-white border border-gray-light rounded-2xl p-5">
                <h3 className="text-navy font-bold text-sm mb-3">Other Services</h3>
                <div className="space-y-1">
                  {["Fatty Liver", "Endoscopy", "Liver Cirrhosis", "Jaundice", "Gallstone"].filter(s => s !== service.title).slice(0, 4).map(s => {
                    const slugMap: Record<string, string> = {
                      "Fatty Liver": "fatty-liver", "Endoscopy": "endoscopy",
                      "Liver Cirrhosis": "liver-cirrhosis", "Jaundice": "jaundice", "Gallstone": "gallstone"
                    };
                    return (
                      <Link key={s} href={`/services/${slugMap[s]}`}
                        className="block text-xs text-slate hover:text-teal transition-colors py-1 border-b border-gray-light last:border-0">
                        → {s}
                      </Link>
                    );
                  })}
                  <Link href="/services" className="block text-xs text-teal font-semibold mt-2 hover:underline">
                    View all 15 services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <ServiceFaq faqs={service.faqs} serviceName={service.title} />

      {/* ── BOTTOM CTA ── */}
      <section className="bg-navy section-pad">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-teal text-xs font-semibold uppercase tracking-widest mb-3">Appointment</p>
          <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3">
            {service.titleHindi} के लिए आज ही मिलें
          </h2>
          <p className="text-gray-muted text-sm font-hindi mb-7">
            Dr. Akhilesh Yadav · {DOCTOR.hospital}, Ranchi · Mon–Sat available
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/book"
              className="px-8 py-3.5 bg-teal hover:bg-teal-dark text-white font-bold text-sm rounded-xl transition-colors shadow-lg">
              Book Appointment Online
            </Link>
            <a href={`tel:${DOCTOR.phone}`}
              className="flex items-center gap-2 px-6 py-3.5 border-2 border-white/30 text-white font-semibold text-sm rounded-xl hover:border-teal transition-colors">
              <Phone size={15} /> {DOCTOR.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
