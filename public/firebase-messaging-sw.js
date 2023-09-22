importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);
// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyAcZ7o0xeLwfitSWFbmu1hYHaMd9JXFRko",
  projectId: "notificationtest1-aa546",
  messagingSenderId: "1049985258685",
  appId: "1:1049985258685:web:d7f9c4dfa6e57f320b53d4",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
