const CACHE_NAME = 'vias-bolivia-v1';
const ASSETS = [
  './',
  './index.html'
];

// Instalar el service worker y guardar archivos en caché
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

// Interceptar peticiones y servir desde caché si no hay internet
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});