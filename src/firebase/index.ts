import "firebase/auth";
import "firebase/firebase-firestore";
import firebase from "firebase";
import * as config from "./config";

console.log (config);
firebase.initializeApp(config);
// firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore()
const messaging = firebase.messaging();

// messaging.requestPermission();

// // register service worker
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', async () => {
//       const registration = await navigator.serviceWorker.register('./firebase-messaging-sw.js', {
//           updateViaCache: 'none'
//       });
//       messaging.useServiceWorker(registration);
//   });
// }

export { auth, db, messaging };