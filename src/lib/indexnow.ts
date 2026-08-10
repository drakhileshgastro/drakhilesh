/**
 * IndexNow — instant Bing/Yandex indexing ping
 * Docs: https://www.indexnow.org/documentation
 *
 * Setup:
 *  1. Generate a key: any random string (e.g. openssl rand -hex 16)
 *  2. Add INDEXNOW_KEY=<key> to Vercel env vars
 *  3. Create public/<key>.txt containing just the key string
 *     (IndexNow verifies ownership by fetching this file)
 *
 * Called from:
 *  - Blog publisher after a new post goes live
 *  - Sitemap regeneration
 */

const SITE_HOST = "drakhileshgastro.com";
const SITE_URL  = `https://${SITE_HOST}`;

export async function pingIndexNow(paths: string[]): Promise<{ ok: boolean; status?: number; error?: string }> {
  const key = process.env.INDEXNOW_KEY;
  if (!key) {
    console.warn("[IndexNow] INDEXNOW_KEY not set — skipping ping");
    return { ok: false, error: "INDEXNOW_KEY env var not set" };
  }
  if (paths.length === 0) return { ok: true };

  const urlList = paths.map(p => (p.startsWith("http") ? p : `${SITE_URL}${p}`));

  try {
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host:        SITE_HOST,
        key,
        keyLocation: `${SITE_URL}/${key}.txt`,
        urlList,
      }),
    });

    if (res.ok) {
      console.log(`[IndexNow] Pinged ${urlList.length} URL(s) — HTTP ${res.status}`);
      return { ok: true, status: res.status };
    } else {
      const body = await res.text().catch(() => "");
      console.error(`[IndexNow] Error ${res.status}: ${body}`);
      return { ok: false, status: res.status, error: body };
    }
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("[IndexNow] Network error:", msg);
    return { ok: false, error: msg };
  }
}

/**
 * Convenience: ping a single new blog post after publishing.
 * Also pings /blog (the listing page) since it changes.
 */
export async function pingNewBlog(slug: string): Promise<void> {
  await pingIndexNow([`/blog/${slug}`, "/blog", "/sitemap.xml"]);
}

/**
 * Ping all key pages (call once during sitemap regeneration or major content push).
 */
export async function pingAllPages(): Promise<void> {
  const CORE = ["/", "/about", "/conditions", "/symptoms", "/blog", "/faqs"];
  await pingIndexNow(CORE);
}
