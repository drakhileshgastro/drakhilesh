import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSymptomBySlug, getAllSymptomSlugs } from "@/data/symptoms-data";

export const revalidate = 86400;
import { DOCTOR } from "@/lib/constants";

// Reusable Symptom Components
import SymptomHero from "@/components/symptom/symptom-hero";
import SymptomQuickSummary from "@/components/symptom/symptom-quick-summary";
import SymptomCommonCauses from "@/components/symptom/symptom-common-causes";
import SymptomRedFlags from "@/components/symptom/symptom-red-flags";
import PossibleConditionsList from "@/components/symptom/possible-conditions-list";
import SymptomEvaluation from "@/components/symptom/symptom-evaluation";
import RecommendedTests from "@/components/symptom/recommended-tests";
import SymptomLifestyleAdvice from "@/components/symptom/symptom-lifestyle-advice";
import SymptomFAQSection from "@/components/symptom/symptom-faq";
import SymptomRelatedConditions from "@/components/symptom/symptom-related-conditions";
import SymptomRelatedProcedures from "@/components/symptom/symptom-related-procedures";
import SymptomRelatedArticles from "@/components/symptom/symptom-related-articles";
import SymptomAppointmentCTA from "@/components/symptom/symptom-appointment-cta";
import StickyCTA from "@/components/service/sticky-cta"; // Reusing high-conversions sticky bar

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSymptomSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);
  if (!symptom) return {};
  return {
    title: symptom.metaTitle,
    description: symptom.metaDescription,
    alternates: { canonical: `https://drakhileshgastro.com/symptoms/${symptom.slug}` },
    openGraph: {
      title: symptom.metaTitle,
      description: symptom.metaDescription,
      url: `https://drakhileshgastro.com/symptoms/${symptom.slug}`,
    },
  };
}

export default async function SymptomPage({ params }: Props) {
  const { slug } = await params;
  const symptom = getSymptomBySlug(slug);
  if (!symptom) notFound();

  // JSON-LD dynamic schema definitions
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "name": symptom.title,
    "description": symptom.metaDescription,
    "url": `https://drakhileshgastro.com/symptoms/${symptom.slug}`,
    "about": { 
      "@type": "MedicalSymptom", 
      "name": symptom.title 
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
        { "@type": "ListItem", position: 2, name: "Symptoms", item: "https://drakhileshgastro.com/symptoms" },
        { "@type": "ListItem", position: 3, name: symptom.title, item: `https://drakhileshgastro.com/symptoms/${symptom.slug}` },
      ],
    },
  };

  const faqPageJsonLd = symptom.faqs && symptom.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": symptom.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a,
      },
    })),
  } : null;

  return (
    <>
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />
      {faqPageJsonLd && (
        <script 
          type="application/ld+json" 
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd) }} 
        />
      )}

      <article className="min-h-screen pb-16 sm:pb-0">
        
        {/* Section 1: Hero */}
        <SymptomHero
          title={symptom.title}
          hindiTitle={symptom.hindiTitle}
          simpleExplanation={symptom.simpleExplanation}
        />

        {/* Section 2: Quick Summary */}
        <SymptomQuickSummary
          title={symptom.title}
          quickSummary={symptom.quickSummary}
          doctorReassurance={symptom.doctorReassurance}
        />

        {/* Section 3: Common Causes */}
        <SymptomCommonCauses
          title={symptom.title}
          causesLifestyle={symptom.causesLifestyle}
          causesMedical={symptom.causesMedical}
        />

        {/* Section 4: Red Flag Warnings */}
        <SymptomRedFlags
          warningRedFlags={symptom.warningRedFlags}
        />

        {/* Section 5: Possible Conditions */}
        <PossibleConditionsList
          possibleConditions={symptom.possibleConditions}
        />

        {/* Section 6: How Evaluated */}
        <SymptomEvaluation
          title={symptom.title}
          steps={symptom.evaluationSteps}
        />

        {/* Section 7: Recommended Tests */}
        <RecommendedTests
          title={symptom.title}
          tests={symptom.recommendedTests}
        />

        {/* Section 8: Lifestyle Advice */}
        <SymptomLifestyleAdvice
          title={symptom.title}
          advice={symptom.lifestyleAdvice}
        />

        {/* Section 9: FAQs */}
        <SymptomFAQSection
          title={symptom.title}
          faqs={symptom.faqs}
        />

        {/* Section 10: Related Conditions */}
        <SymptomRelatedConditions
          conditions={symptom.relatedConditions}
        />

        {/* Section 11: Related Procedures */}
        <SymptomRelatedProcedures
          procedures={symptom.relatedProcedures}
        />

        {/* Section 12: Related Articles */}
        <SymptomRelatedArticles
          articles={symptom.relatedArticles}
        />

        {/* Section 13: Appointment CTA */}
        <SymptomAppointmentCTA
          title={symptom.title}
        />

        {/* Floating conversion bar */}
        <StickyCTA title={symptom.title} />

      </article>
    </>
  );
}
