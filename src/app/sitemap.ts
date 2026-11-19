import type { MetadataRoute } from "next";
import { getAllServiceSlugs } from "@/data/services-data";
import { getAllBlogsForSitemap } from "@/data/blog-data";
import { getAllProcedureSlugs } from "@/data/procedures-data-v2";
import { LOCATIONS_DATA } from "@/data/locations-data";
import { getAllDietSlugs } from "@/data/diet-data";
import { getAllPatientGuideSlugs } from "@/data/patient-guide-data";

const BASE = "https://drakhileshgastro.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceSlugs = getAllServiceSlugs();
  const blogs = getAllBlogsForSitemap();
  const procedureSlugs = getAllProcedureSlugs();
  // ranchi is consolidated into the Homepage / via 301
  const locationSlugs = Object.keys(LOCATIONS_DATA).filter((slug) => slug !== "ranchi");
  const dietSlugs = getAllDietSlugs();
  const patientGuideSlugs = getAllPatientGuideSlugs();

  // Dynamic build timestamp for fresh crawl signals across actively updated sections
  const now = new Date();

  // Baseline deployment date for static legal/compliance pages that rarely change
  const baselineDate = new Date("2026-08-11T00:00:00.000Z");

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE,                           lastModified: now,          changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/about`,                lastModified: now,          changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/conditions`,           lastModified: now,          changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/procedures`,           lastModified: now,          changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/patient-guide`,        lastModified: now,          changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/book`,                 lastModified: now,          changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/blog`,                 lastModified: now,          changeFrequency: "daily",   priority: 0.8 },
    { url: `${BASE}/diet`,                 lastModified: now,          changeFrequency: "weekly",  priority: 0.75 },
    { url: `${BASE}/contact`,              lastModified: now,          changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/faqs`,                 lastModified: now,          changeFrequency: "weekly",  priority: 0.75 },
    { url: `${BASE}/videos`,               lastModified: now,          changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/privacy`,              lastModified: baselineDate, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,                lastModified: baselineDate, changeFrequency: "yearly",  priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = serviceSlugs.map((slug) => ({
    url: `${BASE}/conditions/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const procedurePages: MetadataRoute.Sitemap = procedureSlugs.map((slug) => ({
    url: `${BASE}/procedures/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const locationPages: MetadataRoute.Sitemap = locationSlugs.map((slug) => ({
    url: `${BASE}/locations/${slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const dietPages: MetadataRoute.Sitemap = dietSlugs.map((slug) => ({
    url: `${BASE}/diet/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const patientGuidePages: MetadataRoute.Sitemap = patientGuideSlugs.map((slug) => ({
    url: `${BASE}/patient-guide/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const blogPages: MetadataRoute.Sitemap = blogs.map(({ slug, isoDate }) => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: new Date(isoDate),
    changeFrequency: "weekly" as const,
    priority: 0.75,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...procedurePages,
    ...locationPages,
    ...dietPages,
    ...patientGuidePages,
    ...blogPages,
  ];
}
