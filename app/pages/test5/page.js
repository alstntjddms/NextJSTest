"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";

import {
  User,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { checkJwtTokenCookie } from "../../framework/login.js";

export default function () {
  // 토큰체크
  useEffect(() => {
    checkJwtTokenCookie();
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
    // dispatch({ type: "setProfile", data: getprofile() });
  }, []);

  // const getprofile = () => {
  //   const token = getCookie("jwtToken");
  //   console.log("token = " + token);
  //   const payloadBase64 = token.split(".")[1]; // 여기에 실제 JWT 토큰이 있다고 가정합니다.
  //   const payload = JSON.parse(atob(payloadBase64));
  //   console.log("payload = " + payload.email);
  //   return { name: payload.aud, email: payload.email };
  // };

  const profile = useSelector((state) => state.profile);

  const {
    isOpen: isModal1,
    onOpen: Modal1Open,
    onOpenChange: onOpenChange1,
  } = useDisclosure();
  const {
    isOpen: isModal2,
    onOpen: Modal2Open,
    onOpenChange: onOpenChange2,
  } = useDisclosure();

  const clickLogout = () => {
    if (confirm("로그아웃 하시겠습니까?")) {
      document.cookie =
        "jwtToken=; expires=Thu, 01 Jan 1999 00:00:10 GMT; domain=.yulchon.com; path=/;";
      window.location.href =
        "https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=https%3A%2F%2Fsso1.yulchon.com/login";
    }
  };

  const checkJWT = async () => {
    await axios
      .get("https://sso1.yulchon.com:8888/api/sso/checkJWT", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data === true) {
          alert("토큰 정상");
        }
      })
      .catch((err) => {
        console.log(err);
        if (typeof err.response.data === "string") {
          alert("토큰에러 : " + err.response.data);
        } else {
          alert("토큰에러 : " + err.code);
        }

        if (confirm("다시 토큰 발급 받기")) {
          window.location.href =
            "https://login.microsoftonline.com/6369db95-476d-4bbe-8b2b-f6f3926531fb/oauth2/v2.0/authorize?" +
            "client_id=5a8cdf85-1801-4862-8844-724f72ccfbfe" +
            "&response_type=id_token" +
            "&redirect_uri=https%3A%2F%2Fsso1.yulchon.com/login" +
            "&response_mode=fragment" +
            "&scope=openid+profile+email" +
            "&state=12345" +
            "&nonce=678910";
        }
      });
  };

  return (
    <div className="test5 max-h-screen" style={{ paddingBottom: "150px" }}>
      <Card style={{ margin: "3%", width: "94%" }} className="max-h-screen">
        <CardBody className="flex items-start">
          <h4 className="font-bold text-large">프로필</h4>
          <User
            name={profile.name}
            description={
              <Link href="https://www.naver.com" size="sm" isExternal>
                {profile.email}
              </Link>
            }
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/79839332?v=4",
            }}
          />
          <Button
            style={{ marginTop: "3%", width: "100%" }}
            size="sm"
            className="bg-gradient-to-tr from-pink-500 to-red-500 text-white shadow-lg"
            onPress={clickLogout}
          >
            로그아웃
          </Button>
          <Button
            style={{ marginTop: "3%", width: "100%" }}
            size="sm"
            className="bg-gradient-to-tr from-green-500 to-blue-500 text-white shadow-lg"
            onPress={checkJWT}
          >
            토큰 확인
          </Button>
        </CardBody>
      </Card>
      <Card style={{ margin: "3%", width: "94%" }} className="max-h-screen">
        <CardBody>
          <h4 className="font-bold text-large">개인정보</h4>
          <Card
            onPress={Modal1Open}
            isPressable="true"
            radius="none"
            shadow="sm"
            fullWidth="true"
          >
            <CardBody style={{ padding: "10px" }}>
              <p>내정보</p>
            </CardBody>
          </Card>
          <Card
            isPressable="true"
            radius="none"
            shadow="sm"
            onPress={Modal2Open}
          >
            <CardBody style={{ padding: "10px" }}>
              <p>환경설정</p>
            </CardBody>
          </Card>
          <Card isPressable="true" radius="none" shadow="sm">
            <CardBody style={{ padding: "10px" }}>
              <p>알림</p>
            </CardBody>
          </Card>
        </CardBody>
      </Card>

      <Card style={{ margin: "3%", width: "94%" }} className="max-h-screen">
        <CardBody>
          <h4 className="font-bold text-large">신청내역</h4>

          <Card isPressable="true" radius="none" shadow="sm">
            <CardBody style={{ padding: "10px" }}>
              <p>휴가신청</p>
            </CardBody>
          </Card>
          <Card isPressable="true" radius="none" shadow="sm">
            <CardBody style={{ padding: "10px" }}>
              <p>권한신청</p>
            </CardBody>
          </Card>
          <Card isPressable="true" radius="none" shadow="sm">
            <CardBody style={{ padding: "10px" }}>
              <p>추가신청</p>
            </CardBody>
          </Card>
        </CardBody>
      </Card>
      <Modal
        size="xs"
        placement="center"
        isOpen={isModal1}
        onOpenChange={onOpenChange1}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                모달 테스트
              </ModalHeader>
              <ModalBody>
                <p>현재 내정보는 볼 수 없습니다.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  닫기
                </Button>
                <Button color="primary" onPress={onClose}>
                  확인
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      <Modal
        size="xs"
        placement="center"
        isOpen={isModal2}
        onOpenChange={onOpenChange2}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                모달 테스트
              </ModalHeader>
              <ModalBody>
                <p>모달2 테스트.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  닫기
                </Button>
                <Button color="primary" onPress={onClose}>
                  확인
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
