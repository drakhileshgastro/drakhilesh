import { BLOG_POSTS } from "@/data/blog-data";

const BASE_URL = "https://drakhileshgastro.com";

function parsePubDate(raw: string): Date {
  // Handles "June 2026", "December 7, 2026", "February 15, 2027", etc.
  const d = new Date(raw);
  if (!isNaN(d.getTime())) return d;
  // Fallback: "Month Year" → 1st of that month
  const parts = raw.trim().split(" ");
  if (parts.length === 2) {
    return new Date(`${parts[0]} 1, ${parts[1]}`);
  }
  return new Date();
}

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const posts = [...BLOG_POSTS].sort(
    (a, b) => parsePubDate(b.publishedAt).getTime() - parsePubDate(a.publishedAt).getTime()
  );

  const lastBuildDate = posts.length
    ? parsePubDate(posts[0].publishedAt).toUTCString()
    : new Date().toUTCString();

  const items = posts
    .map((post) => {
      const url      = `${BASE_URL}/blog/${post.slug}`;
      const pubDate  = parsePubDate(post.publishedAt).toUTCString();
      const title    = escapeXml(`${post.emoji} ${post.titleEn} — ${post.titleHi}`);
      const desc     = escapeXml(post.metaDescription || post.excerptEn);
      const image    = post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/dr-akhilesh-improved.png`;
      const cats     = post.tags.map((t) => `      <category>${escapeXml(t)}</category>`).join("\n");

      return `
    <item>
      <title>${title}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${desc}</description>
      <pubDate>${pubDate}</pubDate>
      <author>doctor@drakhileshgastro.com (Dr. Akhilesh Yadav)</author>
${cats}
      <enclosure url="${image}" type="image/png" length="0" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>Dr. Akhilesh Yadav — Gastroenterology Health Blog | Ranchi</title>
    <link>${BASE_URL}/blog</link>
    <description>Expert health articles on liver disease, fatty liver, jaundice, IBS, endoscopy &amp; digestive health in Hindi and English by Dr. Akhilesh Yadav, DM Gastroenterologist, Orchid Medical Centre, Ranchi, Jharkhand.</description>
    <language>hi-IN</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <managingEditor>doctor@drakhileshgastro.com (Dr. Akhilesh Yadav)</managingEditor>
    <webMaster>admin@drakhileshgastro.com (Scalify Labs)</webMaster>
    <copyright>© ${new Date().getFullYear()} Dr. Akhilesh Yadav. All rights reserved.</copyright>
    <ttl>720</ttl>
    <image>
      <url>${BASE_URL}/icons/icon-192x192.png</url>
      <title>Dr. Akhilesh Yadav</title>
      <link>${BASE_URL}</link>
      <width>144</width>
      <height>144</height>
    </image>
    <atom:link href="${BASE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
