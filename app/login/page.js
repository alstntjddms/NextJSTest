"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Button } from "@nextui-org/react";
import Loading from "../framework/Loading";

export default function () {
  const name = useSelector((state) => state.name);
  const dispatch = useDispatch();

  const closeLoading = () => {
    dispatch({ type: "closeLoading" });
  };

  useEffect(() => {
    const idToken = new URL(window.location.href).hash.split("id_token=")[1];

    if (idToken) {
      // &state= 이후의 문자열 제거
      const cleanIdToken = idToken.split("&state=")[0];
      console.log("cleanIdToken:", cleanIdToken);

      const validate = async () => {
        await axios
          .post(
            "https://sso1.yulchon.com:8888/api/sso/validateToken",
            cleanIdToken,
            {
              headers: {
                "Content-Type": "text/plain",
              },
            }
          )
          .then((res) => {
            if (res.data !== "false") {
              // JWT에서 만료 시간 추출
              const payloadBase64 = res.data.split(".")[1]; // 여기에 실제 JWT 토큰이 있다고 가정합니다.
              const payload = JSON.parse(atob(payloadBase64));
              const expTime = payload.exp * 1000; // JWT에서의 만료 시간 (밀리초 단위)

              // 현재 시간 가져오기
              const currentTime = new Date().getTime();

              // 만료 시간을 계산하여 쿠키의 만료 시간으로 설정
              let cookieExpireTime = new Date(expTime);

              // 현재 시간보다 빠른 시간으로 쿠키가 만료되면, 만료 시간을 현재 시간으로 설정
              if (expTime < currentTime) {
                cookieExpireTime = new Date(currentTime);
              }

              // 쿠키 설정
              document.cookie = `jwtToken=${
                res.data
              }; domain=.yulchon.com; expires=${cookieExpireTime.toUTCString()}`;

              // 페이지 이동
              window.location.href = "https://sso1.yulchon.com/pages/test1";
            } else {
              console.log("인증 실패");
            }
          });
      };
      validate();

      // // JWT의 페이로드 부분을 가져옵니다.
      // const payloadBase64 = idToken.split(".")[1];
      // const payload = JSON.parse(atob(payloadBase64));

      // // "name" 값을 가져옵니다.
      // // this.name = payload.name;
      // dispatch({ type: "setName", data: payload.name });
    } else {
      login();
    }
    closeLoading();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Loading />
      <Button
        className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg"
        style={{ top: "30vh" }}
        color="default"
        onPress={login}
      >
        다시 시도
      </Button>
    </div>
  );
}

const login = () => {
  // if (confirm("로그인 하러 가기")) {
  window.location.href =
    "https://login.microsoftonline.com/6369db95-476d-4bbe-8b2b-f6f3926531fb/oauth2/v2.0/authorize?" +
    "client_id=5a8cdf85-1801-4862-8844-724f72ccfbfe" +
    "&response_type=id_token" +
    "&redirect_uri=https%3A%2F%2Fsso1.yulchon.com/login" +
    "&response_mode=fragment" +
    "&scope=openid+profile+email" +
    "&state=12345" +
    "&nonce=678910";
  // }
};
