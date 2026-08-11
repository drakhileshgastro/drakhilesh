import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATIONS_DATA } from "@/data/locations-data";
import { DOCTOR } from "@/lib/constants";
import LocationClient from "./location-client";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  // "ranchi" is handled by /locations/ranchi/page.tsx (static route takes precedence)
  return Object.keys(LOCATIONS_DATA)
    .filter((slug) => slug !== "ranchi")
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS_DATA[slug];
  if (!location) return {};
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `https://drakhileshgastro.com/locations/${location.slug}` },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      url: `https://drakhileshgastro.com/locations/${location.slug}`,
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = LOCATIONS_DATA[slug];
  if (!location) notFound();

  // ── Local Business / MedicalClinic Schema ─────────────────────
  const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": `Orchid Medical Centre - Gastroenterology Service for ${location.name} Patients`,
    "description": location.metaDescription,
    "image": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "telephone": DOCTOR.phone,
    "url": `https://drakhileshgastro.com/locations/${location.slug}`,
    "logo": "https://drakhileshgastro.com/dr-akhilesh-improved.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "HB Road, Opposite Plaza Cinema, Plaza Chowk",
      "addressLocality": "Ranchi",
      "addressRegion": "JH",
      "postalCode": "834001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "23.3705",
      "longitude": "85.3250"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00",
      "closes": "20:00"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": location.name
    },
    "serviceArea": {
      "@type": "AdministrativeArea",
      "name": location.name
    }
  };

  // ── Breadcrumb List Schema ────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://drakhileshgastro.com" },
      { "@type": "ListItem", position: 2, name: `Services in ${location.name}`, item: `https://drakhileshgastro.com/locations/${location.slug}` }
    ]
  };

  // ── FAQ Page Schema (Location-specific FAQs + Outstation FAQ) ──
  const mergedFaqs = [
    ...location.faqs,
    {
      q: "क्या एंडोस्कोपी के बाद भर्ती होना पड़ता है?",
      a: "नहीं। एंडोस्कोपी/कोलोनोस्कोपी ओपीडी आधार पर की जाती है। यह प्रक्रिया केवल 10 मिनट की होती है, और 2 घंटे के आराम के बाद मरीज उसी दिन वापस अपने शहर लौट सकते हैं।"
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": mergedFaqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(clinicSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LocationClient location={location} />
    </>
  );
}
