import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
