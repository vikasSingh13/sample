var cacheName = 'shell-content';
var filesToCache = [
  '/css/animate.css',
  '/css/plugin.css',
  '/css/style.css',
  '/js/app.js',
  '/js/jquery.min.js',
  '/js/particle.min.js',
  '/js/plugin.js',
  '/js/scripts.js',
  '/contact.php',
  '/index.php',
  '/index.html',
  '/',
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});