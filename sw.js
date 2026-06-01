// ═══════════════════════════════════════════════════════════════
// GrowthIve Monitor — Service Worker v1
// Caches all pages and assets for fast loading and offline use
// ═══════════════════════════════════════════════════════════════

const CACHE_NAME = 'growthive-monitor-v1';

// All pages and assets to pre-cache on install
const PRECACHE_URLS = [
  '/monitor/',
  '/monitor/index.html',
  '/monitor/dashboard.html',
  '/monitor/sales.html',
  '/monitor/expenses.html',
  '/monitor/debts.html',
  '/monitor/inventory.html',
  '/monitor/purchases.html',
  '/monitor/reports.html',
  '/monitor/health-score.html',
  '/monitor/calendar.html',
  '/monitor/settings.html',
  '/monitor/contact.html',
  '/monitor/faq.html',
  '/monitor/login.html',
  '/monitor/register.html',
  '/monitor/welcome.html',
  '/monitor/returning.html',
  '/monitor/css/style.css',
  '/monitor/js/supabase.js',
  '/monitor/js/auth.js',
  '/monitor/js/lang.js',
  '/monitor/js/app.js',
  '/monitor/icons/icon-192.png',
  '/monitor/icons/icon-512.png',
];

// External CDN resources to cache on first use
const CDN_DOMAINS = [
  'cdn.jsdelivr.net',
  'cdnjs.cloudflare.com',
];

// ── INSTALL: pre-cache all app pages and assets ──
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache what we can — skip individual failures silently
      return Promise.allSettled(
        PRECACHE_URLS.map(url =>
          cache.add(url).catch(err => {
            console.warn('Pre-cache skipped:', url, err.message);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// ── ACTIVATE: remove old caches ──
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => {
            console.log('Deleting old cache:', name);
            return caches.delete(name);
          })
      )
    ).then(() => self.clients.claim())
  );
});

// ── FETCH: serve from cache, fall back to network ──
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Skip non-GET requests (POST to Supabase etc)
  if (event.request.method !== 'GET') return;

  // Skip Supabase API calls — always need fresh data from server
  if (url.hostname.includes('supabase.co')) return;

  // Skip chrome-extension and other non-http requests
  if (!event.request.url.startsWith('http')) return;

  // Strategy: Cache First for app files, Network First for HTML pages
  const isHTMLPage = url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  const isCDN = CDN_DOMAINS.some(d => url.hostname.includes(d));

  if (isHTMLPage && !isCDN) {
    // Network First for HTML — get fresh page, cache it, fall back to cache if offline
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache First for CSS, JS, images, CDN libs — serve instantly from cache
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        // Not in cache — fetch, store and return
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => {
          // Truly offline and not cached — return nothing gracefully
          console.warn('Resource not available offline:', event.request.url);
        });
      })
    );
  }
});

// ── MESSAGE: allow pages to trigger cache refresh ──
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
