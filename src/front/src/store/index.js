import { combineReducers, configureStore } from "@reduxjs/toolkit";
import user from "./features/user";
import quiz from "./features/quiz";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user,
  quiz,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
