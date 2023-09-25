// self.addEventListener("install", (event) => {
//   event.waitUntil(
//     caches.open("your-cache-name").then((cache) => {
//       return cache.addAll([
//         // "/",
//         // '/index.html',
//         // '/manifest.json',
//         // 다른 캐시할 리소스들 추가
//       ]);
//     })
//   );
// });

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

// 알림 메세지를 클릭했을때의 이벤트.
self.addEventListener("notificationclick", function (event) {
  event.notification.close(); // 푸쉬 종료 처리
  event.waitUntil(
    // `push` 에서 받은 url로 새창으로 열어 이동
    clients.openWindow(event.notification.data.url)
  );
});
