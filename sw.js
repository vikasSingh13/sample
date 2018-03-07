
self.addEventListener('install', function (event) {
  console.log('SW installed');
  event.waitUntil(
    caches.open('static').then(function(cache) {
      cache.addAll([
        '/',
        '/index.html',
        '/js/jquery.min.js',
        '/js/particle.min.js',
        '/js/plugin.js',
        '/js/scripts.js',
        '/css/animate.css',
        '/css/plugin.css',
        '/css/style.css',
        '/images/bg/about-me.jpg',
        '/images/bg/bg-home.jpg',
        '/images/bg/call-to-action.png',
        '/images/bg/face-icon.png',
        '/images/bg/profile.png',
        '/images/bg/pattern-bg.png',
        '/images/bg/services.jpg',
        'https://fonts.googleapis.com/css?family=Poppins:400,300,500,600,700',
        'https://fonts.googleapis.com/css?family=Roboto:100'
      ]);
    })
  );
});

self.addEventListener('activate', function () {
  console.log('SW activated');
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if(res) {
        return res;
      }else {
        return fetch(event.request);
      }
    })
  );
});