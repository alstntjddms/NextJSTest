"use client";
import { AiOutlineSearch, AiOutlineUser, AiOutlineBell } from "react-icons/ai";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

function TopNavBar() {
  const currentPage = useSelector((state) => state.currentPage);

  const dispatch = useDispatch();

  // 클릭 이벤트 핸들러
  const handleClick = (clickPage, pageName) => {
    dispatch({ type: clickPage, data: pageName });
  };

  return (
    <nav
      className="bg-white text-yc-backgroud-color fixed p-4 top-0 left-0 right-0 z-10"
      style={{ padding: "8px", zIndex: "99" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* 왼쪽에 이미지 */}
          <img src="/images/logo1.png" alt="logo" className="h-10" />
        </div>
        <h1>
          <b>{currentPage}</b>
        </h1>
        <div className="flex items-center space-x-4 justify-end">
          <div className="text-2xl text-yc-logo-color">
            <Link
              href="/pages/test2"
              className={`text-2xl flex-1 flex items-center justify-center ${
                currentPage === "search" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleClick("setCuurentPage", "search")}
            >
              <AiOutlineSearch />
            </Link>
          </div>
          <div className="text-2xl text-yc-logo-color">
            <Link
              href="/pages/test4"
              className={`text-2xl flex-1 flex items-center justify-center ${
                currentPage === "alert" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleClick("setCuurentPage", "alert")}
            >
              <AiOutlineBell />
            </Link>
          </div>
          <div className="text-2xl text-yc-logo-color">
            <Link
              href="/pages/test5"
              className={`text-2xl flex-1 flex items-center justify-center ${
                currentPage === "info" ? "text-yellow-500" : ""
              }`}
              onClick={() => handleClick("setCuurentPage", "info")}
            >
              <AiOutlineUser />
            </Link>
          </div>
        </div>
      </div>
      <style>{`
                nav {
                    border-bottom: 1px solid #ccc; /* 테두리 스타일 및 색상 설정 */
                }
            `}</style>
    </nav>
  );
}

export default TopNavBar;
