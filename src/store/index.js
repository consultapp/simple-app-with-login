import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./entities/auth";

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});
