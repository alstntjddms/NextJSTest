"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { initializeApp } from "firebase/app";
import {
  getMessaging,
  getToken,
  onMessage,
  isSupported,
} from "firebase/messaging";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function FcmModal() {
  // Redux 자원
  const dispatch = useDispatch();
  const showModal = useSelector((state) => state.FcmModal);
  const toggleModal = () => {
    dispatch({ type: "toggleFcmModal" });
  };

  const handleClick = async () => {
    toggleModal();
    await show();
  };

  useEffect(() => {
    const registration1 = async () => {
      if ("pushManager" in (await navigator.serviceWorker.ready)) {
        console.log("푸시지원됨");
      } else {
        alert("푸시지원안됨");
        return;
      }
    };
    registration1();
    const checkFirebaseServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          "/firebase-messaging-sw.js"
        );
        console.log("firebase-messaging-sw.js 로드 성공", registration.scope);
      } catch (err) {
        alert("firebase-messaging-sw.js 로드 실패", err);
      }
    };
    checkFirebaseServiceWorker();
  }, []);

  return (
    /* 설치 프롬프트 컴포넌트 */
    <div>
      {/* {isShown && <button onClick={onOpen}>click</button>} */}
      <Modal
        size="xs"
        placement="center"
        isOpen={showModal}
        onOpenChange={toggleModal}
      >
        <ModalContent>
          {(toggleModal) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                알림 추가
              </ModalHeader>
              <ModalBody>
                <p>알림을 키시겠습니까?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={toggleModal}>
                  닫기
                </Button>
                <Button color="primary" onPress={handleClick}>
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

export default FcmModal;

const show = async () => {
  if (!isSupported()) {
    alert("현재 기종은 지원 안하고 있습니다.");
    return;
  }
  if (!("Notification" in window)) {
    alert("알림기능은 PWA로 추가해야 가능합니다.");
    return;
  }
  let permission = await Notification.requestPermission();
  if (
    permission === "granted" &&
    typeof window !== "undefined" &&
    typeof window.navigator !== "undefined"
  ) {
    const firebaseConfig = {
      apiKey: "AIzaSyAcZ7o0xeLwfitSWFbmu1hYHaMd9JXFRko",
      authDomain: "notificationtest1-aa546.firebaseapp.com",
      projectId: "notificationtest1-aa546",
      storageBucket: "notificationtest1-aa546.appspot.com",
      messagingSenderId: "1049985258685",
      appId: "1:1049985258685:web:d7f9c4dfa6e57f320b53d4",
      measurementId: "G-6ZE6R93CYB",
    };

    const app = initializeApp(firebaseConfig);
    const messaging = getMessaging(app);
    let token = await getToken(messaging, {
      vapidKey:
        "BEx5nXo-kwhTEAaRlSPv_kt7xZ8y1dT7qjKrAcEJlpmDUs5Wj1gU6NXJU_Fnc_qRdmiBz1EzqA92vKC7LmQ8rHE",
    });
    console.log(token);
    // alert(token);
    callFcm(token);

    // 메세지가 수신되면 역시 콘솔에 출력합니다.
    onMessage(messaging, (payload) => {
      console.log("Message received. ", payload);
      alert(payload.notification.title + "\n" + payload.notification.body);
    });
    

    return true;
  } else if (permission === "denied") {
    alert("삭제 후 다시 알림신청 하세요.");
    return false;
  }
};

const checkIOS = () => {
  const isDeviceIOS = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
  console.log("isDeviceIOS2 = " + isDeviceIOS);

  if (/iPhone|iPad|iPod/.test(navigator.userAgent)) {
    alert("checkIOS ios임");
    console.log(true);
    return true;
  } else {
    alert("checkIOS ios아님");
    console.log(false);
    return false;
  }
};

const callFcm = (token) => {
  console.log("알림요청보냄");
  const url = "https://sso1.yulchon.com:8888/api/kace/notification";
  // const url = "https://plater.kr/api/notification";
  // const url = "http://localhost:8081/api/kakao/notification";
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "text/plain", // 텍스트 데이터라면 Content-Type을 text/plain으로 설정
    },
    body: token, // 원하는 텍스트 데이터를 본문에 지정
  };

  fetch(url, requestOptions)
    .then((res) => {
      if (!res.ok) {
        console.log(res);
      }
    })
    .then((data) => {
      if (data) {
        console.log(data);
      }
    });
};
