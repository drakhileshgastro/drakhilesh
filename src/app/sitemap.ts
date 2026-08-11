import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services-data";
import { getAllBlogsForSitemap } from "@/data/blog-data";
import { getAllProcedureSlugs } from "@/data/procedures-data-v2";
import { getAllSymptomSlugs } from "@/data/symptoms-data";
import { LOCATIONS_DATA } from "@/data/locations-data";
import { getAllDietSlugs } from "@/data/diet-data";
import { getAllPatientGuideSlugs } from "@/data/patient-guide-data";

const BASE = "https://drakhileshgastro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();
  const blogs = getAllBlogsForSitemap();
  const procedureSlugs = getAllProcedureSlugs();
  const symptomSlugs = getAllSymptomSlugs();
  const locationSlugs = Object.keys(LOCATIONS_DATA);
  const dietSlugs = getAllDietSlugs();
  const patientGuideSlugs = getAllPatientGuideSlugs();

  // Use actual deployment date for static pages; never a future date
  const stableDate = new Date("2026-08-11T00:00:00.000Z");

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                           lastModified: stableDate, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                lastModified: stableDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/conditions`,           lastModified: stableDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/procedures`,           lastModified: stableDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/symptoms`,             lastModified: stableDate, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/patient-stories`,      lastModified: stableDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/patient-guide`,        lastModified: stableDate, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/book`,                 lastModified: stableDate, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/blog`,                 lastModified: stableDate, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${BASE}/diet`,                 lastModified: stableDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,              lastModified: stableDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faqs`,                 lastModified: stableDate, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/videos`,               lastModified: stableDate, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`,              lastModified: stableDate, changeFrequency: "monthly", priority: 0.3 },
    { url: `${BASE}/terms`,                lastModified: stableDate, changeFrequency: "monthly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE}/conditions/${slug}`,
    lastModified: stableDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const procedurePages: MetadataRoute.Sitemap = procedureSlugs.map((slug) => ({
    url: `${BASE}/procedures/${slug}`,
    lastModified: stableDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const symptomPages: MetadataRoute.Sitemap = symptomSlugs.map((slug) => ({
    url: `${BASE}/symptoms/${slug}`,
    lastModified: stableDate,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE}/locations/${slug}`,
    lastModified: stableDate,
    changeFrequency: "monthly" as const,
    // /locations/ranchi is the primary local SEO page — higher priority than other city pages
    priority: slug === "ranchi" ? 0.95 : 0.8,
  }));

  const dietPages: MetadataRoute.Sitemap = dietSlugs.map((slug) => ({
    url: `${BASE}/diet/${slug}`,
    lastModified: stableDate,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const patientGuidePages: MetadataRoute.Sitemap = patientGuideSlugs.map((slug) => ({
    url: `${BASE}/patient-guide/${slug}`,
    lastModified: stableDate,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map(({ slug, isoDate }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(isoDate),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...procedurePages,
    ...symptomPages,
    ...locationPages,
    ...dietPages,
    ...patientGuidePages,
    ...blogPages,
  ];
}

