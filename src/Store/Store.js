import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slices/AuthSlice";
import uiReducer from "./Slices/UiSlice";
import peerReducer from "./Slices/PeerSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    ui: uiReducer,
    peers: peerReducer,
  },
});

export default store;
