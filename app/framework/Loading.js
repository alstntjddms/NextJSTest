"use client";
import React from "react";
import { CircularProgress } from "@nextui-org/react";
import { useSelector } from "react-redux";

function Loading() {
  const LoadingDisplay = useSelector((state) => state.Loading);

  const overlayStyles = {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    display: LoadingDisplay,
    color: "white",
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-10"
      style={overlayStyles}
    >
      <CircularProgress size="lg" label="Loading..." />
    </div>
  );
}

export default Loading;
