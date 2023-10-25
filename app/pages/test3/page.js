"use client";
import React, { useEffect } from "react";

import { Listbox, ListboxItem } from "@nextui-org/react";
import { ListboxWrapper } from "../../components/ListboxWrapper";
import { useDispatch } from "react-redux";
import { checkJwtTokenCookie } from "../../framework/login.js";

export default function () {
  // 토큰체크
  useEffect(() => {
    checkJwtTokenCookie();
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "closeLoading" });
  });
  return (
    <div
      className="test3 max-h-screen"
      style={{ paddingBottom: "150px", margin: "3%" }}
    >
      <ListboxWrapper>
        <h4 className="font-bold text-large">Listbox Test</h4>

        <Listbox aria-label="Actions" onAction={(key) => alert(key)}>
          <ListboxItem key="new">New file</ListboxItem>
          <ListboxItem key="copy">Copy link</ListboxItem>
          <ListboxItem key="edit">Edit file</ListboxItem>
          <ListboxItem key="delete" className="text-danger" color="danger">
            Delete file
          </ListboxItem>
        </Listbox>
      </ListboxWrapper>
    </div>
  );
}
