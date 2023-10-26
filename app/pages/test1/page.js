"use client";
import React, { useEffect } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  NextUIProvider,
  useDisclosure,
} from "@nextui-org/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { useDispatch } from "react-redux";
import { checkJwtTokenCookie } from "../../framework/Login.js";

export default function () {
  // 토큰체크
  useEffect(() => {
    checkJwtTokenCookie();
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="test1 max-h-screen" style={{ paddingBottom: "150px" }}>
      <Card
        onPress={onOpen}
        className="py-4 max-h-screen"
        isPressable="true"
        style={{ margin: "3%", width: "94%" }}
      >
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">Yulchon</p>
          <small className="text-default-500">image test</small>
          <h4 className="font-bold text-large">LOGO</h4>
        </CardHeader>
        <CardBody className="flex-row justify-between  align-items-center py-2">
          <img
            alt="Card background"
            className="h-14 pr-2"
            src="/images/logo4.png"
          />
          <img
            alt="Card background"
            className="h-14 pr-2"
            src="/images/logo5.png"
          />
          <img
            alt="Card background"
            className="h-14 pr-2"
            src="/images/logo6.png"
          />
          <img
            alt="Card background"
            className="h-14 pr-2"
            src="/images/logo7.png"
          />
        </CardBody>
      </Card>
      <Card style={{ margin: "3%", width: "94%" }}>
        <CardBody>
          <h4 className="font-bold text-large">Card Test</h4>
          <Card isPressable="true">
            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b>테스트중</b>
              <p className="text-default-500">테스트</p>
            </CardFooter>
          </Card>
        </CardBody>
      </Card>

      <Card style={{ margin: "3%", width: "94%" }}>
        <CardBody>
          <h4 className="font-bold text-large">Card List Test</h4>

          <Card isPressable="true" radius="none" shadow="sm" fullWidth="true">
            <CardBody>
              <p>테스트111</p>
            </CardBody>
          </Card>
          <Card isPressable="true" radius="none" shadow="sm">
            <CardBody>
              <p>테스트111</p>
            </CardBody>
          </Card>
          <Card isPressable="true" radius="none" shadow="sm">
            <CardBody>
              <p>테스트111</p>
            </CardBody>
          </Card>
        </CardBody>
      </Card>

      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <CustomCard />
      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  모달 팝업 테스트..... Nullam pulvinar risus non risus
                  hendrerit venenatis. Pellentesque sit amet hendrerit risus,
                  sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
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

function CustomCard() {
  return (
    <Card isPressable="true" style={{ margin: "3%", width: "94%" }}>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}

function CustomCard2() {
  return (
    <Card>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
  );
}
