"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });
  return (
    <div className="test4 max-h-screen" style={{ paddingBottom: "150px" }}>
      <h4>Page : alert page</h4>
    </div>
  );
}
