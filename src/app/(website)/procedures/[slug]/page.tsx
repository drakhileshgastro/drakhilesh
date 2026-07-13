import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProcedureBySlug, getAllProcedureSlugs } from "@/data/procedures-data";
import { generateProcedureSchema, generateFAQSchema, generatePhysicianSchema } from "@/lib/schema-procedures";

// Components
import ProcedureHero from "@/components/procedure/procedure-hero";
import ProcedureOverview from "@/components/procedure/procedure-overview";
import ProcedureReqs from "@/components/procedure/procedure-reqs";
import ProcedurePrep from "@/components/procedure/procedure-prep";
import ProcedureSteps from "@/components/procedure/procedure-steps";
import ProcedureSafety from "@/components/procedure/procedure-safety";
import ProcedureBenefits from "@/components/procedure/procedure-benefits";
import ProcedureRecovery from "@/components/procedure/procedure-recovery";
import ProcedureReviews from "@/components/procedure/procedure-reviews";
import ProcedureFAQSection from "@/components/procedure/procedure-faq";
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

  // Generate dynamic JSON-LD schemas
  const procedureSchema = generateProcedureSchema(
    procedure.title,
    procedure.overview,
    procedure.preparation.map(p => p.step).join(", "),
    procedure.recoveryGuidelines
  );
  
  const faqSchema = generateFAQSchema(procedure.faqs);
  const physicianSchema = generatePhysicianSchema();

  return (
    <>
      {/* JSON-LD Schemas injection */}
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
        <ProcedureHero
          title={procedure.title}
          hindiTitle={procedure.hindiTitle}
          duration={procedure.duration}
          sedation={procedure.sedation}
          recoveryTime={procedure.recoveryTime}
        />

        <ProcedureOverview
          title={procedure.title}
          overview={procedure.overview}
          duration={procedure.duration}
          sedation={procedure.sedation}
          recoveryTime={procedure.recoveryTime}
        />

        <ProcedureReqs
          title={procedure.title}
          whenRequired={procedure.whenRequired}
        />

        <ProcedurePrep
          title={procedure.title}
          preparation={procedure.preparation}
        />

        <ProcedureSteps
          title={procedure.title}
          steps={procedure.steps}
        />

        <ProcedureSafety
          title={procedure.title}
          safetySedation={procedure.safetySedation}
        />

        <ProcedureBenefits
          title={procedure.title}
          benefits={procedure.benefits}
        />

        <ProcedureRecovery
          title={procedure.title}
          recoveryGuidelines={procedure.recoveryGuidelines}
        />

        <ProcedureReviews
          title={procedure.title}
          procedureSlug={procedure.slug}
        />

        <ProcedureFAQSection
          title={procedure.title}
          faqs={procedure.faqs}
        />

        <StickyBar title={procedure.title} />
      </article>
    </>
  );
}
