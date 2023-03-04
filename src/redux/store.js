import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todoSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
  reducer: { todo },
});
