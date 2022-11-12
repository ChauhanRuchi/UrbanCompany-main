import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import { combineReducers } from "redux";

const store = configureStore({
  reducer: combineReducers({
    auth: authSlice,
    category:categorySlice
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { ignoredPaths: ["some.nested.path"] },
      serializableCheck: { ignoredPaths: ["some.nested.path"] },
    }),
});

export default store;