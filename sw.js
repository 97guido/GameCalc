// Nome della cache (cambialo quando aggiorni i file del sito)
const CACHE_NAME = 'gamecalc-pwa-v1.2';
// Lista dei file da salvare per l'utilizzo offline
const urlsToCache = [
  './',
  './index.html',
  './index.css',
  './main.js',
  './manifest.json',
  './icon-192x192.png',
  './icon-512x512.png',
  './BG_GameCalc.jpeg'
];

// Installazione: salva i file nella cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Intercettazione richieste: serve i file dalla cache se offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
