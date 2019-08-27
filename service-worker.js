const cacheName = "v1";
const cacheAssets = ["index.ejs", "./src/app.css", "src/app.html"];

self.addEventListener("install", event => {
  console.log(" ====> service worker is installed ", event);
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log(" ====> caching files ");
      cache.addAll(cacheAssets).then(res => {
        self.skipWaiting();
      });
    })
  );
});
self.addEventListener("activate", event => {
  console.log(" ====> service worker is activated", event);
});
self.addEventListener("fetch", event => {
  console.log(" ====> service worker is fetched ", event);
});
