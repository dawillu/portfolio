const CACHE_VERSION = "v4";

const networkFirst = async (req, cacheName) => {
  try {
    const fresh = await fetch(req);
    if (fresh.status === 200) {
      const cache = await caches.open(cacheName);
      cache.put(req, fresh.clone());
    }
    return fresh;
  } catch {
    const cached = await caches.match(req);
    if (cached) return cached;
    if (req.mode === "navigate") return caches.match("/index.html");
    throw new Error("Network and cache both failed");
  }
};

const staleWhileRevalidate = async (req, cacheName) => {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  const fetchPromise = fetch(req)
    .then((resp) => {
      if (resp.status === 200) cache.put(req, resp.clone());
      return resp;
    })
    .catch(() => cached);
  return cached || fetchPromise;
};

const cacheFirst = async (req, cacheName) => {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(req);
  if (cached) return cached;
  const resp = await fetch(req);
  if (resp.status === 200) cache.put(req, resp.clone());
  return resp;
};

self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Bypass caching for range requests (206)
  if (request.headers.has("range")) {
    event.respondWith(fetch(request));
    return;
  }

  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request, STATIC_CACHE));
    return;
  }

  switch (request.destination) {
    case "style":
    case "script":
    case "worker":
      event.respondWith(staleWhileRevalidate(request, ASSETS_CACHE));
      break;
    case "image":
      event.respondWith(cacheFirst(request, IMAGES_CACHE));
      break;
    case "font":
      event.respondWith(cacheFirst(request, FONTS_CACHE));
      break;
    case "video":
    case "audio":
      // Media often uses range; with the check above we’ll skip caching on 206
      event.respondWith(cacheFirst(request, MEDIA_CACHE));
      break;
    default:
      event.respondWith(staleWhileRevalidate(request, ASSETS_CACHE));
  }
});

const STATIC_CACHE = `static-${CACHE_VERSION}`;
const ASSETS_CACHE = `assets-${CACHE_VERSION}`;
const IMAGES_CACHE = `images-${CACHE_VERSION}`;
const FONTS_CACHE = `fonts-${CACHE_VERSION}`;
const MEDIA_CACHE = `media-${CACHE_VERSION}`;

// Precache shell and claim clients
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((c) =>
      c.addAll(["/", "/index.html", "/manifest.json", "/favicon.png"])
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  const keep = new Set([
    STATIC_CACHE,
    ASSETS_CACHE,
    IMAGES_CACHE,
    FONTS_CACHE,
    MEDIA_CACHE,
  ]);
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (!keep.has(k) ? caches.delete(k) : undefined)))
    )
  );
  self.clients.claim();
});