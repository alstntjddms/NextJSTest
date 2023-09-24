self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("your-cache-name").then((cache) => {
      return cache.addAll([
        // "/",
        // '/index.html',
        // '/manifest.json',
        // 다른 캐시할 리소스들 추가
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// 아이폰 푸시 알림
self.addEventListener("push", (event) => {
  const title = event.data.text();
  event.waitUntil(self.ServiceWorkerRegistration.showNotification(title));
});