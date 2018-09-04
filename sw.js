var CACHE_NAME = 'restaurants-static-v2';
var urlsToCache = [
  '/',
  '/js/main.js',
  '/js/dbhelper.js',
  '/js/restaurant_info.js',
  '/css/styles.css',
  '/data/restaurants.json',
  '/restaurant.html',
  '/sw.js'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      console.log(response);
      return response || fetch(event.request);
    })
  );
});
