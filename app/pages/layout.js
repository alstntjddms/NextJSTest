"use client";
import React, { useEffect } from "react";
import BottomNavBar from "../framework/BottomNavBar";
import TopNavBar from "../framework/TopNavBar";
import InstallPrompt from "../framework/InstallPrompt";
import Loading from "../framework/Loading";
import { useDispatch } from "react-redux";
import FirstLoading from "../framework/FirstLoading";

export default function ({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkJwtTokenCookie = () => {
      const cookies = document.cookie.split(";");
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].trim().startsWith("jwtToken=")) {
          return true;
        }
      }
      return false;
    };

    if (checkJwtTokenCookie()) {
      dispatch({ type: "setProfile", data: getprofile() });
    } else {
      window.location.href = "https://sso1.yulchon.com/login";
    }
  }, []);

  return (
    <>
      <TopNavBar />
      <InstallPrompt />
      <Loading />
      <FirstLoading />
      {children}
      <BottomNavBar />
    </>
  );
}

const getprofile = () => {
  const token = getCookie("jwtToken");
  const payloadBase64 = token.split(".")[1]; // 여기에 실제 JWT 토큰이 있다고 가정합니다.
  const payload = JSON.parse(atob(payloadBase64));
  return { name: payload.name, email: payload.email };
};

const getCookie = (cName) => {
  cName = cName + "=";
  var cookieData = document.cookie;
  var start = cookieData.indexOf(cName);
  var cValue = "";
  if (start != -1) {
    start += cName.length;
    var end = cookieData.indexOf(";", start);
    if (end == -1) end = cookieData.length;
    cValue = cookieData.substring(start, end);
  }
  return unescape(cValue);
};
