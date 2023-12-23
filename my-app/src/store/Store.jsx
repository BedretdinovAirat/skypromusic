import { configureStore } from "@reduxjs/toolkit";
import tracksSlice from "./TracksSlice";
import { apiMusic } from "../components/redux/ApiMusic";
export const store = configureStore({
  reducer: {
    track: tracksSlice,
    [apiMusic.reducerPath]: apiMusic.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(apiMusic.middleware),
});
