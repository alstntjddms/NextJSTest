importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAcZ7o0xeLwfitSWFbmu1hYHaMd9JXFRko",
  projectId: "notificationtest1-aa546",
  messagingSenderId: "1049985258685",
  appId: "1:1049985258685:web:d7f9c4dfa6e57f320b53d4",
});
const messaging = firebase.messaging();
