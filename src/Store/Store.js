import { configureStore } from "@reduxjs/toolkit";
import CustomerReducer from "./CustomerReducer";

export const store = configureStore({
  reducer: {
    counter: CustomerReducer,
  },
});
