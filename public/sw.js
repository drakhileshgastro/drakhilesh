const CACHE = "drakhilesh-v3";
const STATIC = ["/", "/book", "/manifest.json", "/icons/icon-192x192.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(STATIC).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Push notification handler
self.addEventListener("push", (e) => {
  if (!e.data) return;
  try {
    const data = e.data.json();
    e.waitUntil(
      self.registration.showNotification(data.title ?? "Dr. Akhilesh CRM", {
        body: data.body ?? "",
        icon: data.icon ?? "/icons/icon-192x192.png",
        badge: "/icons/icon-72x72.png",
        tag: data.tag ?? "crm-notification",
        data: { url: data.url ?? "/crm" },
        requireInteraction: false,
      })
    );
  } catch {
    e.waitUntil(
      self.registration.showNotification("New Alert", { body: e.data.text() })
    );
  }
});

self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = e.notification.data?.url ?? "/crm";
  e.waitUntil(
    self.clients.matchAll({ type: "window" }).then((clients) => {
      const existing = clients.find((c) => c.url.includes(url));
      if (existing) return existing.focus();
      return self.clients.openWindow(url);
    })
  );
});

self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  // Never cache API or CRM routes
  if (url.pathname.startsWith("/api/") || url.pathname.startsWith("/crm") || url.pathname.startsWith("/admin")) return;

  e.respondWith(
    caches.match(e.request).then((cached) => {
      const fresh = fetch(e.request).then((res) => {
        if (res.ok && url.origin === self.location.origin) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(e.request, clone));
        }
        return res;
      });
      return cached || fresh;
    })
  );
});
