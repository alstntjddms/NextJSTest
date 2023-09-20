"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });
  return <h4>Page : alert page</h4>;
}
