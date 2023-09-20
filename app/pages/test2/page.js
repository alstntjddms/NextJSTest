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
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const showSearchResult = () => {
    setSearchResult(true);
    onClose();
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });

  const clickEnter = (e) => {
    if (e.keyCode == 13) {
      onOpen();
    }
  };

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
            size="lg"
          />
        </CardBody>
      </Card>
      {searchResult && (
        <Card style={{ margin: "3%", width: "94%" }}>
          <CardBody className="flex items-start">
            <h4 className="font-bold text-large">검색 결과</h4>
            <Listbox
              className="p-1 gap-0 divide-y bg-content1 w-full overflow-visible shadow-small rounded-sm"
              aria-label="Actions"
              onAction={(key) => alert(key)}
            >
              <ListboxItem key="전민수" className="rounded-sm">
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
              <ListboxItem key="김민수" className="rounded-sm">
                <User
                  name="김민수"
                  description={
                    <Link href="https://plater.kr" size="sm" isExternal>
                      @minsuKim
                    </Link>
                  }
                  avatarProps={{
                    src: "https://cdn.aitimes.com/news/photo/202204/143854_149286_5624.png",
                  }}
                />
              </ListboxItem>
            </Listbox>
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
