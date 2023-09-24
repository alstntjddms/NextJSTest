"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import FcmModal from "../../framework/FcmModal";

export default function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });

  const toggleFcmModal = () =>{
    dispatch({type: "toggleFcmModal"});
  }

  return (
    <div className="test4 max-h-screen" style={{ paddingBottom: "150px" }}>
      <h4>Page : alert page</h4>
      <button onClick={toggleFcmModal}>알림열기</button>
      {/* IOS 알림 추가 모달 */}
      <FcmModal />
    </div>
  );
}
