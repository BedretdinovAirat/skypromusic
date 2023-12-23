import { createSlice } from "@reduxjs/toolkit";

export const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    trackList: [],
    shuffledTrackList: [],
    isShuffled: false,
    changeTrack: null,
    $isPlaying: false,
  },
  reducers: {
    playTracks: (state, action) => {
      state.changeTrack = action.payload;
      state.trackList = action.payload.data;
      state.shuffledTrackList = action.payload.data;
    },
    playTrack: (state) => {
      state.$isPlaying = true;
    },
    pauseTrack: (state) => {
      state.$isPlaying = false;
    },
    switchTrack: (state) => {
      const allTracks = state.isShuffled
        ? state.shuffledTrackList.sort(() => Math.random() - 0.5)
        : state.trackList;
      const trackId = allTracks.findIndex((track) => {
        return track.id === state.changeTrack.id;
      });
      if (allTracks[trackId + 1]) {
        state.changeTrack = allTracks[trackId + 1];
      }
    },
    backSwitchTrack: (state) => {
      const allTracks = state.isShuffled
        ? state.shuffledTrackList.sort(() => Math.random() - 0.5)
        : state.trackList;
      const trackId = allTracks.findIndex((track) => {
        return track.id === state.changeTrack.id;
      });
      if (allTracks[trackId - 1]) {
        state.changeTrack = allTracks[trackId - 1];
      }
    },
    changeIsShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
  },
});
export const {
  playTracks,
  playTrack,
  pauseTrack,
  switchTrack,
  backSwitchTrack,
  changeIsShuffled,
} = tracksSlice.actions;
export default tracksSlice.reducer;
