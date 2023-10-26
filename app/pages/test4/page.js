"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FcmModal from "../../framework/FcmModal";
import { Card, CardBody, Button } from "@nextui-org/react";
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

  const toggleFcmModal = () => {
    dispatch({ type: "toggleFcmModal" });
  };

  return (
    <div className="test4 max-h-screen" style={{ paddingBottom: "150px" }}>
      <Card style={{ margin: "3%", width: "94%" }}>
        <CardBody className="flex items-start">
          <h4 className="font-bold text-large">알림 테스트</h4>

          <Button color="primary" onClick={toggleFcmModal}>
            7초뒤 알림 실행
          </Button>
          {/* IOS 알림 추가 모달 */}
          <FcmModal />
        </CardBody>
      </Card>
    </div>
  );
}
