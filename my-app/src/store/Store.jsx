import { configureStore } from "@reduxjs/toolkit";
import tracksSlice from "./TracksSlice";

export const store = configureStore({
  reducer: {
    track: tracksSlice,
  },
});
