// ═══════════════════════════════════════════════════════════════
// GrowthIve Monitor — Service Worker v2
// Smart caching — fast on mobile, never blocks Supabase data
// ═══════════════════════════════════════════════════════════════

const CACHE_NAME = 'growthive-v3';

// Static assets to cache immediately on install
// Keep this list small — only the core files needed to render pages
const CORE_ASSETS = [
  '/monitor/css/style.css',
  '/monitor/js/supabase.js',
  '/monitor/js/auth.js',
  '/monitor/js/lang.js',
  '/monitor/js/app.js',
  '/monitor/icons/icon-192.png',
  '/monitor/icons/icon-512.png',
];

// ── INSTALL: only cache core static assets ──
// Do NOT pre-cache HTML pages — fetch them fresh every time
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CORE_ASSETS))
      .then(() => self.skipWaiting())
      .catch(err => {
        console.warn('SW install cache failed:', err);
        self.skipWaiting();
      })
  );
});

// ── ACTIVATE: clean up old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── FETCH: smart routing ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // ── RULE 1: Never touch non-GET requests ──
  if (event.request.method !== 'GET') return;

  // ── RULE 2: Never touch Supabase API calls ──
  // Let ALL Supabase requests go directly to network — no interception
  if (url.hostname.includes('supabase.co')) return;

  // ── RULE 3: Never touch CDN requests on first load ──
  // Let jsdelivr and cdnjs go to network, cache for next time
  if (url.hostname.includes('jsdelivr.net') || url.hostname.includes('cdnjs.cloudflare.com')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);
      })
    );
    return;
  }

  // ── RULE 4: Skip non-http requests ──
  if (!url.protocol.startsWith('http')) return;

  // ── RULE 5: HTML pages — Network First ──
  // Always try to get fresh HTML. Fall back to cache if offline.
  if (url.pathname.endsWith('.html') || url.pathname.endsWith('/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request).then(cached => {
            if (cached) return cached;
            // Last resort — return cached dashboard if available
            return caches.match('/monitor/dashboard.html');
          });
        })
    );
    return;
  }

  // ── RULE 6: Static assets (CSS, JS, images) — Cache First ──
  // Serve instantly from cache. Update cache in background.
  event.respondWith(
    caches.match(event.request).then(cached => {
      const networkFetch = fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);

      // Return cache immediately if available, fetch in background
      return cached || networkFetch;
    })
  );
});
