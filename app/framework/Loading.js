"use client";
import React from "react";
import { CircularProgress } from "@nextui-org/react";
import { useSelector } from "react-redux";

function Loading() {
  const LoadingDisplay = useSelector((state) => state.Loading);

  const overlayStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // 반투명 배경색
    display: LoadingDisplay,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 9999, // 다른 요소 위에 나타나도록 설정
  };

  return (
    <div style={overlayStyles}>
      <CircularProgress label="Loading..." size="lg" />
    </div>
  );
}

export default Loading;
