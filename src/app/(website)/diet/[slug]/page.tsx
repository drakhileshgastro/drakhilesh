import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDietBySlug, getAllDietSlugs } from "@/data/diet-data";
import { DOCTOR } from "@/lib/constants";
import DietChartPage from "@/components/diet/diet-chart-page";

export const revalidate = 86400;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllDietSlugs().map(slug => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const diet = getDietBySlug(slug);
  if (!diet) return {};
  return {
    title:       diet.metaTitle,
    description: diet.metaDesc,
    alternates:  { canonical: `https://drakhileshgastro.com/diet/${diet.slug}` },
    openGraph: {
      title:       diet.metaTitle,
      description: diet.metaDesc,
      url:         `https://drakhileshgastro.com/diet/${diet.slug}`,
      type:        "article",
    },
  };
}

export default async function DietSlugPage({ params }: Props) {
  const { slug } = await params;
  const diet = getDietBySlug(slug);
  if (!diet) notFound();

  return <DietChartPage diet={diet} />;
}
