import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProcedureBySlug, getAllProcedureSlugs } from "@/data/procedures-data-v2";

export const revalidate = 86400;
import { generateProcedureSchema, generateFAQSchema, generatePhysicianSchema } from "@/lib/schema-procedures";

// Components mapping to the 14-section patient anxiety-reduction layout
import ProcedureHero from "@/components/procedure/procedure-hero";
import ProcedureQuickSummary from "@/components/procedure/procedure-quick-summary";
import ProcedureNeeded from "@/components/procedure/procedure-needed";
import DoctorRecommendation from "@/components/procedure/doctor-recommendation";
import ProcedureOverviewTimeline from "@/components/procedure/procedure-overview-timeline";
import PreparationGuidelines from "@/components/procedure/preparation-guidelines";
import ProcedureSteps from "@/components/procedure/procedure-steps";
import ProcedureRecovery from "@/components/procedure/procedure-recovery";
import ProcedureSafety from "@/components/procedure/procedure-safety";
import ProcedureFAQSection from "@/components/procedure/procedure-faq";
import DoctorAdvice from "@/components/procedure/doctor-advice";
import RelatedConditions from "@/components/procedure/related-conditions";
import RelatedBlogs from "@/components/procedure/related-blogs";
import AppointmentCTA from "@/components/procedure/appointment-cta";
import StickyBar from "@/components/procedure/sticky-bar";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProcedureSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) return {};
  return {
    title: procedure.metaTitle,
    description: procedure.metaDescription,
    alternates: { canonical: `https://drakhileshgastro.com/procedures/${procedure.slug}` },
    openGraph: {
      title: procedure.metaTitle,
      description: procedure.metaDescription,
      url: `https://drakhileshgastro.com/procedures/${procedure.slug}`,
    },
  };
}

export default async function ProcedurePage({ params }: Props) {
  const { slug } = await params;
  const procedure = getProcedureBySlug(slug);
  if (!procedure) notFound();

  // Dynamic schema builders
  const procedureSchema = generateProcedureSchema(
    procedure.title,
    procedure.simpleExplanation,
    procedure.preparationFasting,
    procedure.recoveryExpectations
  );
  
  const faqSchema = generateFAQSchema(procedure.faqs);
  const physicianSchema = generatePhysicianSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      <article className="min-h-screen pb-16 sm:pb-0">
        
        {/* Section 1: Hero */}
        <ProcedureHero
          title={procedure.title}
          slug={procedure.slug}
          hindiTitle={procedure.hindiTitle}
          simpleExplanation={procedure.simpleExplanation}
        />

        {/* Section 2: Quick Summary */}
        <ProcedureQuickSummary
          purpose={procedure.summaryPurpose}
          duration={procedure.summaryDuration}
          anaesthesia={procedure.summaryAnaesthesia}
          hospitalStay={procedure.summaryHospitalStay}
          recovery={procedure.summaryRecovery}
          operator={procedure.summaryOperator}
        />

        {/* Section 3: When Needed */}
        <ProcedureNeeded
          title={procedure.title}
          neededSymptoms={procedure.neededSymptoms}
        />

        {/* Section 4: Doctor Recommendation */}
        <DoctorRecommendation
          title={procedure.title}
          recommendation={procedure.doctorRecommendation}
        />

        {/* Section 5: Overview Timeline */}
        <ProcedureOverviewTimeline
          title={procedure.title}
        />

        {/* Section 6: Preparation Before Procedure */}
        <PreparationGuidelines
          title={procedure.title}
          fasting={procedure.preparationFasting}
          diet={procedure.preparationDiet}
          medicines={procedure.preparationMedicines}
          documents={procedure.preparationDocuments}
          companion={procedure.preparationCompanion}
        />

        {/* Section 7: Process Steps */}
        <ProcedureSteps
          title={procedure.title}
          steps={procedure.steps}
        />

        {/* Section 8: Recovery */}
        <ProcedureRecovery
          title={procedure.title}
          expectations={procedure.recoveryExpectations}
          returnHome={procedure.recoveryReturnHome}
          diet={procedure.recoveryDiet}
          activity={procedure.recoveryActivity}
          warningSigns={procedure.recoveryWarningSigns}
        />

        {/* Section 9: Safety & Outcomes */}
        <ProcedureSafety
          title={procedure.title}
          risks={procedure.safetyRisks}
          benefits={procedure.safetyBenefits}
          successRate={procedure.safetySuccessRate}
          monitoring={procedure.safetyMonitoring}
        />

        {/* Section 10: Frequently Asked Questions */}
        <ProcedureFAQSection
          title={procedure.title}
          faqs={procedure.faqs}
        />

        {/* Section 11: Doctor Advice */}
        <DoctorAdvice
          advice={procedure.doctorAdvice}
        />

        {/* Section 12: Related Conditions */}
        <RelatedConditions
          conditions={procedure.relatedConditions}
        />

        {/* Section 13: Related Blogs */}
        <RelatedBlogs
          blogs={procedure.relatedBlogs}
        />

        {/* Section 14: Appointment CTA */}
        <AppointmentCTA
          title={procedure.title}
        />

        {/* Conversion sticky-bar */}
        <StickyBar title={procedure.title} />

      </article>
    </>
  );
}
