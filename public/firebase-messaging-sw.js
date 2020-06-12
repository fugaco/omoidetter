/**
 * @see https://qiita.com/sadnessOjisan/items/05bbca78bca3301d24b2
 */
// importScriptsはservice worker内から他のserviceworkerを読み込むときに使えます
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/6.2.4/firebase-messaging.js");

firebase.initializeApp({
  messagingSenderId: "997292754963"
});

const messaging = firebase.messaging();

// messaging.setBackgroundMessageHandler(function(payload) {
//   const promiseChain = clients
//     .matchAll({
//       type: "window",
//       includeUncontrolled: true
//     })
//     .then(windowClients => {
//       for (let i = 0; i < windowClients.length; i++) {
//         const windowClient = windowClients[i];
//         windowClient.postMessage(payload);
//       }
//     })
//     .then(() => {
//       return registration.showNotification("my notification title");
//     });
//   return promiseChain;
// });
// self.addEventListener('notificationclick', function(event) {
//   // do what you want
//   // ...
// });

/**
 * background時の通知の扱い。ここではconsoleにメッセージを出力した上で、通知を出している。通知の中身はtitleやoptionから設定できる。
 */
messaging.setBackgroundMessageHandler(function(payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const title = "わっしょい1";
  const options = {
    body: "あなたに通知が届きました1",
    // 通知の右にでる画像
    icon: "",
  };

  return self.registration.showNotification(title, options);
});

/**
 * foreground時にメッセージを受け取ると、通知をする。通知の中身はtitleやoptionから設定できる。
 */
self.addEventListener("push", function(event) {
  const title = "わっしょい2";
  const options = {
    body: "あなたに通知が届きました2",
    // 通知の右にでる画像
    icon: "",
    // 通知の左にでる画像
    badge: ""
  };

  event.waitUntil(self.registration.showNotification(title, options));
});