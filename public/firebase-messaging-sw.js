importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAcZ7o0xeLwfitSWFbmu1hYHaMd9JXFRko",
  projectId: "notificationtest1-aa546",
  messagingSenderId: "1049985258685",
  appId: "1:1049985258685:web:d7f9c4dfa6e57f320b53d4",
});
const messaging = firebase.messaging();

// onMessage(messaging, (payload) => {
//   console.log("Message received11111. ", payload);
//   alert(payload.notification.title + "\n" + payload.notification.body);
// });

// // 백그라운드 수신
// messaging.onBackgroundMessage((payload) => {
//   console.log(
//     "[firebase-messaging-sw.js] Received background message ",
//     payload
//   );
//   // Customize notification here
//   const notificationTitle = "Background Message Title";
//   const notificationOptions = {
//     body: "Background Message body.",
//     icon: "/logo2.png",
//   };

//   self.registration.showNotification(notificationTitle, notificationOptions);
// });

// self.addEventListener("push", (event) => {
//   console.log("[Service Worker] Push Received.", event.data.text());
//   const { title, body } = event.data.json();
//   event.waitUntil(self.registration.showNotification(title, { body }));https://sso1.yulchon.com/pages/test1
// });

// self.addEventListener("notificationclick", (event) => {
//   console.log("[Service Worker] notificationclick");
//   console.log(event);
//   console.log(event.notification.data.link);
//   clients.openWindow(event.fcmOptions.link);
// });

// self.addEventListener("install", () => {
//   console.log("[Service Worker] install");
//   self.skipWaiting();
// });
