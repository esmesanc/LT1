// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: "AIzaSyARb3fUE70QrjRYvHyCoqw-mSYKQ1AzgOk",
  authDomain: "learningtogether-faae4.firebaseapp.com",
  projectId: "learningtogether-faae4",
  storageBucket: "learningtogether-faae4.appspot.com",
  messagingSenderId: "56880993418",
  appId: "1:56880993418:web:1781c04d5e16b4baa88973",
  measurementId: "G-XM85CRG2EV",
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
