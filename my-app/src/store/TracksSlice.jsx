import { createSlice } from "@reduxjs/toolkit";

export const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    track: [],
    changeTrack: null,
  },
  reducers: {
    playTracks: (state, action) => {
      state.changeTrack = action.payload;
      console.log(state.changeTrack);
    },
  },
});
export const { playTracks } = tracksSlice.actions;
export default tracksSlice.reducer;
