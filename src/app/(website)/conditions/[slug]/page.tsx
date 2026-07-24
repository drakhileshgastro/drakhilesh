import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services-data";

export const revalidate = 86400;
import { getRelatedBlogsForCondition } from "@/data/related-content";
import { DOCTOR } from "@/lib/constants";

// Modular Service components
import ConditionHero from "@/components/service/condition-hero";
import QuickSummary from "@/components/service/quick-summary";
import ClinicalInfoTabs from "@/components/service/clinical-info-tabs";
import DiagnosisTreatment from "@/components/service/diagnosis-treatment";
import RecoveryDiet from "@/components/service/recovery-diet";
import ServiceReviews from "@/components/service/service-reviews";
import ServiceFaq from "@/components/service/service-faq";
import RelatedBlogs from "@/components/service/related-blogs";
import StickyCTA from "@/components/service/sticky-cta";

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
    alternates: { canonical: `https://drakhileshgastro.com/conditions/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://drakhileshgastro.com/conditions/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const relatedBlogs = getRelatedBlogsForCondition(slug, 3);

  const faqLd = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": service.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      }
    : null;

  // JSON-LD dynamic schema definitions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": service.h1,
    "description": service.metaDescription,
    "url": `https://drakhileshgastro.com/conditions/${service.slug}`,
    "about": { 
      "@type": "MedicalCondition", 
      "name": service.title,
      "signOrSymptom": service.symptoms.map(s => ({ "@type": "MedicalSymptom", "name": s }))
    },
    "author": {
      "@type": "Physician",
      "name": DOCTOR.name,
      "medicalSpecialty": "Gastroenterology",
      "affiliation": { "@type": "Hospital", name: DOCTOR.hospital },
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://drakhileshgastro.com" },
        { "@type": "ListItem", position: 2, name: "Conditions", item: "https://drakhileshgastro.com/conditions" },
        { "@type": "ListItem", position: 3, name: service.title, item: `https://drakhileshgastro.com/conditions/${service.slug}` },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {faqLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      )}

      <article className="min-h-screen pb-16 sm:pb-0">
        <ConditionHero
          title={service.title}
          h1={service.h1}
          slug={service.slug}
          hindiTitle={service.titleHindi}
          metaDescription={service.metaDescription}
          whyChoose={[...service.whyChoose]}
        />

        <QuickSummary
          title={service.title}
          introEn={service.introEn}
          introHi={service.introHi}
        />

        <ClinicalInfoTabs
          title={service.title}
          symptoms={[...service.symptoms]}
        />

        <DiagnosisTreatment
          title={service.title}
          treatments={[...service.treatments]}
        />

        <RecoveryDiet
          title={service.title}
        />

        <ServiceReviews
          title={service.title}
          conditionSlug={service.slug}
        />

        {/* Dynamic FAQ */}
        <ServiceFaq faqs={[...service.faqs]} serviceName={service.title} />

        <RelatedBlogs blogs={relatedBlogs} conditionTitle={service.title} />

        <StickyCTA title={service.title} />
      </article>
    </>
  );
}
