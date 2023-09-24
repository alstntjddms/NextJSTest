import { legacy_createStore as createStore } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  체중: 100,
  currentPage: "",
  Loading: "flex",
  FcmModal: false
};

function reducer(state = initialState, action) {
  const newState = { ...state };
  // state 변경
  switch (action.type) {
    case "setCuurentPage":
      newState.currentPage = action.data;
      break;
    case "openLoading":
      newState.Loading = "flex";
      break;
    case "closeLoading":
      newState.Loading = "none";
      break;
    case "toggleFcmModal":
      newState.FcmModal = !state.FcmModal;
    break;
  }
  return newState;
}

const store = createStore(reducer);
export default store;
