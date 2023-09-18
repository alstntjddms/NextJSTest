"use client";
import React from "react";
import BottomNavBar from "./framework/BottomNavBar";
import TopBar from "./framework/TopNavBar";
import Loading from "./framework/Loading";
import "./globals.css";
import { Provider } from "react-redux";
import store from "./store/store";
import { NextUIProvider } from "@nextui-org/react";

export const metadata = {
  title: "YC NextJS Test",
  description: "NextJS TESTING...",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* PWA관련 설정 추가 시작*/}
      <meta charSet="utf-8" />
      <meta
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        name="viewport"
      />
      <meta name="HandheldFriendly" content="true" />

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
      <link rel="apple-touch-icon" href="images/icons/icon-192x192.png"></link>
      <meta name="msapplication-TileColor" content="#FF98BA"></meta>
      <meta name="theme-color" content="#FFFFFF"></meta>
      {/* PWA관련 설정 추가 끝 */}

      <body>
        <React.Fragment>
          <Provider store={store}>
            <NextUIProvider>
              <TopBar />
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
