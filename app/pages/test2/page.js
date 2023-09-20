"use client";

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Button,
  Input,
  Card,
  CardBody,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  User,
  Link,
  Listbox,
  ListboxItem,
} from "@nextui-org/react";
import { AiOutlineSearch } from "react-icons/ai";
import { ListboxWrapper } from "@/app/components/ListboxWrapper";

export default function () {
  const [searchResult, setSearchResult] = useState(false);

  const showSearchResult = () => {
    setSearchResult(true);
    onClose();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });

  const clickEnter = (e) => {
    console.log("aaa");
    if (e.keyCode == 13) {
      onOpen(); // 작성한 댓글 post 요청하는 함수
    }
  };

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <div className="test2 max-h-screen" style={{ paddingBottom: "150px" }}>
      <Card style={{ margin: "3%", width: "94%" }}>
        <CardBody className="flex items-start">
          <Input
            label="통합 검색"
            onKeyDown={clickEnter}
            endContent={
              <AiOutlineSearch onClick={onOpen} className="text-3xl" />
            }
          />
        </CardBody>
      </Card>
      {searchResult && (
        <Card style={{ margin: "3%", width: "94%" }}>
          <CardBody className="flex items-start">
            <h4 className="font-bold text-large">검색 결과</h4>
            <ListboxWrapper className="max-h-screen">
              <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
                <ListboxItem key="전민수">
                  <User
                    name="전민수"
                    description={
                      <Link href="https://plater.kr" size="sm" isExternal>
                        @minsuJeon
                      </Link>
                    }
                    avatarProps={{
                      src: "https://avatars.githubusercontent.com/u/79839332?v=4",
                    }}
                  />
                </ListboxItem>
                <ListboxItem key="김민수">
                  <User
                    name="김민수"
                    description={
                      <Link href="https://plater.kr" size="sm" isExternal>
                        @minsuKim
                      </Link>
                    }
                    avatarProps={{
                      src: "https://avatars.githubusercontent.com/u/79839332?v=4",
                    }}
                  />
                </ListboxItem>
              </Listbox>
            </ListboxWrapper>
          </CardBody>
        </Card>
      )}
      <Modal
        size="xs"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            검색 모달 테스트
          </ModalHeader>
          <ModalBody>
            <p>현재 테스트 검색만 할 수 있습니다.</p>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              닫기
            </Button>
            <Button color="primary" onPress={showSearchResult}>
              확인
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
}
