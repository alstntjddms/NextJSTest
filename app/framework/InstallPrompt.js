"use client";
import { useEffect } from "react";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
const InstallPrompt = () => {
  const [isIOS, setIsIOS] = useState(true);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const { isOpen: isModal1, onOpenChange: onOpenChange1 } = useDisclosure();
  const { isOpen: isModal2, onOpenChange: onOpenChange2 } = useDisclosure();

  const handleBeforeInstallPrompt = (e) => {
    setIsIOS(false);
    e.preventDefault();
    setDeferredPrompt(e);
    // ios제외 PWA설치 여부 모달
    onOpenChange1();
  };

  useEffect(() => {
    const initialize = async () => {
      // PWA 설치 유무 확인
      if ("serviceWorker" in navigator) {
        try {
          // const registration = await navigator.serviceWorker.register("/sw.js");
          const registration = await navigator.serviceWorker.register(
            "/firebase-messaging-sw.js"
          );
          console.log(
            "Service Worker registered with scope:",
            registration.scope
          );
        } catch (err) {
          console.log("Service Worker registration failed", err);
        }
      }
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      // ios PWA로 안 열었을시 설치문구
      if (
        !window.matchMedia("(display-mode: standalone)").matches &&
        /iPad|iPhone|iPod/.test(window.navigator.userAgent) &&
        isIOS
      ) {
        onOpenChange2();
      }
    };

    initialize();

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  // PWA추가
  const handleClick = async () => {
    onOpenChange1();
    if (!deferredPrompt) {
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  // if (!isShown) {
  //   console.log("aaaaa22");

  //   return null;
  // }
  // if (!isIOS && !isShown) {
  //   return null;
  // }

  return (
    /* 설치 프롬프트 컴포넌트 */
    <div>
      {/* {isShown && <button onClick={onOpen}>click</button>} */}
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
                PWA 추가
              </ModalHeader>
              <ModalBody>
                <p>PWA로 설치하시겠습니까?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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
                PWA 추가
              </ModalHeader>
              <ModalBody>
                <p>IOS는 하단바에서 추가하세요.</p>
                <p>PWA로 여세요.</p>
              </ModalBody>
              <ModalFooter>
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
};

export default InstallPrompt;
