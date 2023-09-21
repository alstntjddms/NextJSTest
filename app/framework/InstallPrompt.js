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
  const [isShown, setIsShown] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleBeforeInstallPrompt = (e) => {
    e.preventDefault();
    setDeferredPrompt(e);
    setIsShown(true);
  };
  useEffect(() => {
    const initialize = async () => {
      // PWA 설치 유무 확인
      if ("serviceWorker" in navigator) {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js");
          console.log("Service Worker registered with scope:", registration.scope);
        } catch (err) {
          console.log("Service Worker registration failed", err);
        }
      }
      const isDeviceIOS =
        /iPad|iPhone|iPod/.test(window.navigator.userAgent) && !window.MSStream;
      setIsIOS(isDeviceIOS);
      window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      if(!isDeviceIOS){
        onOpenChange();
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
    onOpenChange();
    setIsShown(false);
    if (!deferredPrompt) {
      return;
    }
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
  };

  if (!isIOS && !isShown) {
    return null;
  }

  return (
    /* 설치 프롬프트 컴포넌트 */
    <div>
      {/* {isShown && <button onClick={onOpen}>click</button>} */}
      <Modal
        size="xs"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
    </div>
  );
};

export default InstallPrompt;
