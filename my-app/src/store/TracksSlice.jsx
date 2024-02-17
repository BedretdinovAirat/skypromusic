import { createSlice } from "@reduxjs/toolkit";

export const tracksSlice = createSlice({
  name: "tracks",
  initialState: {
    trackList: [],
    shuffledTrackList: [],
    isShuffled: false,
    changeTrack: null,
    $isPlaying: false,
    initialTracks: [],
    filteredTracks: [],
    isFiltered: false,
    baseDataTracks: { author: [], genre: [], search: "", years: "" },
  },
  reducers: {
    filterTracks: (state, action) => {
      // if (
      //   !state.baseDataTracks.author.length > 0 &&
      //   !state.baseDataTracks.genre.length > 0 &&
      //   !state.baseDataTracks.years &&
      //   !state.baseDataTracks.search
      // ) {
      //   state.isFiltered = false;
      //   return;
      // }
      if (
        action.payload.filterName !== "years" &&
        action.payload.filterName !== "search"
      ) {
        if (
          state.baseDataTracks[action.payload.filterName]?.includes(
            action.payload.filterValue
          )
        ) {
          state.baseDataTracks[action.payload.filterName] =
            state.baseDataTracks[action.payload.filterName].filter(
              (element) => element !== action.payload.filterValue
            );
        } else {
          state.baseDataTracks[action.payload.filterName]?.push(
            action.payload.filterValue
          );
        }
      } else {
        state.baseDataTracks[action.payload.filterName] =
          action.payload.filterValue;
      }
      state.filteredTracks = state.initialTracks;
      state.isFiltered = true;
      if (state.baseDataTracks.author.length > 0) {
        state.filteredTracks = state.baseDataTracks.author
          .map((elemAuthor) => {
            return state.filteredTracks.filter(
              (element) => element.author === elemAuthor
            );
          })
          .flat();
      }
      if (state.baseDataTracks.search) {
        state.filteredTracks = state.filteredTracks.filter((track) => {
          return (
            track.name
              .toLowerCase()
              .includes(state.baseDataTracks.search.toLowerCase()) ||
            track.author
              .toLowerCase()
              .includes(state.baseDataTracks.search.toLowerCase())
          );
        });
      }
    },
    putFilteredTracks: (state, action) => {
      state.initialTracks = action.payload;
    },
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
  filterTracks,
  putFilteredTracks,
} = tracksSlice.actions;
export default tracksSlice.reducer;
