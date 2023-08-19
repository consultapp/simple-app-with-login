import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuth: false, name: "" };

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    preload: (state) => {
      let { isAuth, name } = initialState;

      if (typeof localStorage !== "undefined") {
        isAuth = localStorage.getItem("isAuth") === "true" || false;
        name = localStorage.getItem("name") || "";
      }

      state.isAuth = isAuth;
      state.name = name;
    },
    signOut: (state) => {
      state.isAuth = initialState.isAuth;
      state.name = initialState.name;

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("isAuth", initialState.isAuth);
        localStorage.setItem("name", initialState.name);
      }
    },
    signIn: (state, { payload }) => {
      state.isAuth = payload.isAuth;
      state.name = payload.name;

      if (typeof localStorage !== "undefined") {
        localStorage.setItem("isAuth", payload.isAuth);
        localStorage.setItem("name", payload.name);
      }
    },
  },
});

export const { preload } = authSlice.actions;
export const { signOut } = authSlice.actions;
export const { signIn } = authSlice.actions;
