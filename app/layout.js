"use client";
import React from "react";
import BottomNavBar from "./framework/BottomNavBar";
import TopNavBar from "./framework/TopNavBar";
import InstallPrompt from "./framework/InstallPrompt";
import Loading from "./framework/Loading";
import FirstLoading from "./framework/FirstLoading";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "YC NextJS Test",
  description: "NextJS TESTING...",
};

export default function RootLayout({ children }) {
  // fcmForAndroidAndChrome();
  return (
    <html>
      <head>
        {/* PWA관련 설정 추가 시작*/}
        <meta charSet="utf-8" />
        <meta name="HandheldFriendly" content="true" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no"
        />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="../images/favicons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="../images/favicons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link
          rel="apple-touch-icon"
          href="images/icons/icon-192x192.png"
        ></link>
        <meta name="msapplication-TileColor" content="#FF98BA"></meta>
        <meta name="theme-color" content="#FFFFFF"></meta>
        {/* PWA관련 설정 추가 끝 */}
      </head>
      <body>
        <React.Fragment>
          <Provider store={store}>
            <FirstLoading />
            <NextUIProvider>
              <TopNavBar />
              <InstallPrompt />
              {children}
              <BottomNavBar />
              <Loading />
            </NextUIProvider>
          </Provider>
        </React.Fragment>
      </body>
      
    </html>
  );
}
// const test = async () => {
//   let permission = await Notification.requestPermission();
//   if (permission === "granted") {
//     console.log("Notification permission granted. Requesting for token.");
//     const firebaseConfig = {
//       apiKey: "AIzaSyAcZ7o0xeLwfitSWFbmu1hYHaMd9JXFRko",
//       authDomain: "notificationtest1-aa546.firebaseapp.com",
//       projectId: "notificationtest1-aa546",
//       storageBucket: "notificationtest1-aa546.appspot.com",
//       messagingSenderId: "1049985258685",
//       appId: "1:1049985258685:web:d7f9c4dfa6e57f320b53d4",
//       measurementId: "G-6ZE6R93CYB",
//     };

//     const app = initializeApp(firebaseConfig);
//     const messaging = getMessaging(app);
    
//     let token = await messaging.getToken({
//       vapidKey: "BEx5nXo-kwhTEAaRlSPv_kt7xZ8y1dT7qjKrAcEJlpmDUs5Wj1gU6NXJU_Fnc_qRdmiBz1EzqA92vKC7LmQ8rHE",
//     });
//     // do something with the FCM token
    
//   } else {
//     console.log("Notification permission denied");
//     // Handle denied permission
//   }
// }

// const fcmForAndroidAndChrome = () => {      
//   useEffect(() => {
//     const firebaseConfig = {
//       apiKey: "AIzaSyAcZ7o0xeLwfitSWFbmu1hYHaMd9JXFRko",
//       authDomain: "notificationtest1-aa546.firebaseapp.com",
//       projectId: "notificationtest1-aa546",
//       storageBucket: "notificationtest1-aa546.appspot.com",
//       messagingSenderId: "1049985258685",
//       appId: "1:1049985258685:web:d7f9c4dfa6e57f320b53d4",
//       measurementId: "G-6ZE6R93CYB",
//     };

//     const app = initializeApp(firebaseConfig);
//     const messaging = getMessaging(app);

//     // 알림요청 팝업
//     Notification.requestPermission().then((permission) => {
//       if (permission === "granted") {
//         // 푸시 거부됐을 때 처리할 내용
//         console.log("푸시 승인됨");
//         getToken(messaging, {
//           vapidKey:
//             "BEx5nXo-kwhTEAaRlSPv_kt7xZ8y1dT7qjKrAcEJlpmDUs5Wj1gU6NXJU_Fnc_qRdmiBz1EzqA92vKC7LmQ8rHE",
//         })
//           .then(async (currentToken) => {
//             if (!currentToken) {
//               // 토큰 생성 불가시 처리할 내용, 주로 브라우저 푸시 허용이 안된 경우에 해당한다.
//               console.log("토큰 생성 불가");
//             } else {
//               // 토큰을 받았다면 호다닥 서버에 저장
//               console.log("토큰 = " + currentToken);
//             }
//           })
//           .catch((error) => {
//             // 예외처리
//             console.log("예외생김 = " + error);
//           });
//       } else {
//         // 푸시 승인됐을 때 처리할 내용
//         console.log("푸시 거부됨");
//       }
//     });

//     // 메세지가 수신되면 역시 콘솔에 출력합니다.
//     onMessage(messaging, (payload) => {
//       console.log("Message received. ", payload);
//     });
//   }, []);
// };

// ios 추가
// const fcmForIos = async () => {
//   const firebaseConfig = {
//     apiKey: "AIzaSyAcZ7o0xeLwfitSWFbmu1hYHaMd9JXFRko",
//     authDomain: "notificationtest1-aa546.firebaseapp.com",
//     projectId: "notificationtest1-aa546",
//     storageBucket: "notificationtest1-aa546.appspot.com",
//     messagingSenderId: "1049985258685",
//     appId: "1:1049985258685:web:d7f9c4dfa6e57f320b53d4",
//     measurementId: "G-6ZE6R93CYB",
//   };

//   const app = initializeApp(firebaseConfig);
//   const messaging = getMessaging(app);

//   console.log('Requesting permission...');
//   await Notification.requestPermission().then( async (permission) => {
//     if (permission === 'granted') {
//       console.log('Notification permission granted.');
//       alert("Notification permission granted.");
//       // TODO(developer): Retrieve a registration token for use with FCM.
//       // In many cases once an app has been granted notification permission,
//       // it should update its UI reflecting this.
//       // resetUI();
//       await getToken(messaging,{vapidKey: 'BEx5nXo-kwhTEAaRlSPv_kt7xZ8y1dT7qjKrAcEJlpmDUs5Wj1gU6NXJU_Fnc_qRdmiBz1EzqA92vKC7LmQ8rHE'}).then((currentToken) => {
//         if (currentToken) {
//           alert(currentToken);

//         }
//       });
//     } else {
//       console.log('Unable to get permission to notify.');
//       alert("Notification permission granted.");
//     }
//   });
// }