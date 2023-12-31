"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  AiOutlineHome,
  AiOutlineSearch,
  AiOutlineFieldTime,
  AiOutlineBell,
  AiOutlineUser,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

function BottomNavBar() {
  // 현재 활성화된 아이콘을 추적하기 위한 상태 변수
  const currentPage = useSelector((state) => state.currentPage);

  const dispatch = useDispatch();

  // url파싱해 currentPage세팅
  useEffect(() => {
    dispatch({ type: "setCuurentPage", data: settingCurrentPage() });
  }, []);

  // 클릭 이벤트 핸들러
  const handleClick = (clickPage, pageName) => {
    if (currentPage == pageName) {
      return;
    }
    dispatch({ type: clickPage, data: pageName });
    dispatch({ type: "openLoading" });
  };

  return (
    <nav
      className="bg-yc-logo-color text-white p-4 fixed bottom-0 left-0 right-0 rounded-t-lg z-10"
      style={{ borderBottom: "none" }}
    >
      <div
        className="container mx-auto flex justify-between items-center"
        style={{ marginBottom: "5%" }}
      >
        <div className="flex space-x-4 flex-1">
          <Link
            href="/pages/test1"
            replace
            className={`text-3xl flex-1 flex items-center justify-center ${
              currentPage === "home" ? "text-yellow-500" : ""
            }`}
            onClick={() => handleClick("setCuurentPage", "home")}
          >
            <AiOutlineHome />
          </Link>
          <Link
            href="/pages/test2"
            replace
            className={`text-3xl flex-1 flex items-center justify-center ${
              currentPage === "search" ? "text-yellow-500" : ""
            }`}
            onClick={() => handleClick("setCuurentPage", "search")}
          >
            <AiOutlineSearch />
          </Link>
          <Link
            href="/pages/test3"
            replace
            className={`text-3xl flex-1 flex items-center justify-center ${
              currentPage === "time" ? "text-yellow-500" : ""
            }`}
            onClick={() => handleClick("setCuurentPage", "time")}
          >
            <AiOutlineFieldTime />
          </Link>
          <Link
            href="/pages/test4"
            replace
            className={`text-3xl flex-1 flex items-center justify-center ${
              currentPage === "alert" ? "text-yellow-500" : ""
            }`}
            onClick={() => handleClick("setCuurentPage", "alert")}
          >
            <AiOutlineBell />
          </Link>
          <Link
            href="/pages/test5"
            replace
            className={`text-3xl flex-1 flex items-center justify-center ${
              currentPage === "info" ? "text-yellow-500" : ""
            }`}
            onClick={() => handleClick("setCuurentPage", "info")}
          >
            <AiOutlineUser />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default BottomNavBar;

function settingCurrentPage() {
  if (typeof window !== "undefined") {
    const currentURL = window.location.pathname;
    return currentURL === "/pages/test1"
      ? "home"
      : currentURL === "/pages/test2"
      ? "search"
      : currentURL === "/pages/test3"
      ? "time"
      : currentURL === "/pages/test4"
      ? "alert"
      : currentURL === "/pages/test5"
      ? "info"
      : "";
  }
  return "";
}
