// DialiStock SW - v4.0 - NO CACHE
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(k => Promise.all(k.map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});
// Always fetch from network - never cache
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request));
});
