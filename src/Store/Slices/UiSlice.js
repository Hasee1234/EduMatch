import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginOpen: false,
  signupOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLogin: (state) => {
      state.loginOpen = true;
      state.signupOpen = false;
    },
    closeLogin: (state) => {
      state.loginOpen = false;
    },
    openSignup: (state) => {
      state.signupOpen = true;
      state.loginOpen = false;
    },
    closeSignup: (state) => {
      state.signupOpen = false;
    },
  },
});

export const { openLogin, closeLogin, openSignup, closeSignup } = uiSlice.actions;
export default uiSlice.reducer;
