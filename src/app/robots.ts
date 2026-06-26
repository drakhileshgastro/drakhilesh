import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/crm", "/api/"],
      },
    ],
    sitemap: "https://drakhileshgastro.com/sitemap.xml",
    host: "https://drakhileshgastro.com",
  };
}
