const CACHE_NAME = 'project-northstar-v20';
const APP_SHELL = [
  './', './index.html', './manifest.json', './icon-192.png', './icon-512.png', './apple-touch-icon.png',
  './assets/northstar-hero.svg', './assets/mountain-trail.svg', './assets/forge-mark.svg',
  './weekly-reflection-saturday-5pm.ics', './northstar-daily-checkin-5pm.ics'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, copy).catch(() => {});
              cache.put('./index.html', response.clone()).catch(() => {});
            }).catch(() => {});
          }
          return response;
        })
        .catch(() => caches.match(event.request)
          .then(cached => cached || caches.match('./index.html') || caches.match('./')))
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy)).catch(() => {});
      }
      return response;
    }))
  );
});
