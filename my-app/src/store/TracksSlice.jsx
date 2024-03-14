import { createSlice } from "@reduxjs/toolkit";
import { apiMusic } from "../components/redux/ApiMusic";

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
    baseDataTracks: {
      author: [],
      genre: [],
      search: "",
      years: "По умолчанию",
    },
  },
  reducers: {
    changeCurrentTrack: (state, action) => {
      const { isLiked } = action.payload;
      state.changeTrack.isLiked = isLiked;
    },
    filterTracks: (state, action) => {
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
      if (state.baseDataTracks.genre.length > 0) {
        state.filteredTracks = state.baseDataTracks.genre
          .map((elemGenre) => {
            return state.filteredTracks.filter(
              (element) => element.genre === elemGenre
            );
          })
          .flat();
      }
      if (state.baseDataTracks.years.length > 0) {
        switch (state.baseDataTracks.years) {
          case "Сначала новые":
            const newList = [...state.filteredTracks];
            newList.sort(
              (a, b) => new Date(b.release_date) - new Date(a.release_date)
            );
            state.filteredTracks = newList;
            break;
          case "Сначала старые":
            const oldList = [...state.filteredTracks];
            oldList.sort(
              (a, b) => new Date(a.release_date) - new Date(b.release_date)
            );
            state.filteredTracks = oldList;
            break;
          default:
            state.filteredTracks.sort((a, b) => a.id - b.id);
            break;
        }
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
      const trackId = allTracks.items.findIndex((track) => {
        return track.id === state.changeTrack.id;
      });
      if (allTracks.items[trackId + 1]) {
        state.changeTrack = allTracks.items[trackId + 1];
      }
    },
    backSwitchTrack: (state) => {
      const allTracks = state.isShuffled
        ? state.shuffledTrackList.sort(() => Math.random() - 0.5)
        : state.trackList;
      const trackId = allTracks.items.findIndex((track) => {
        return track.id === state.changeTrack.id;
      });
      if (allTracks.items[trackId - 1]) {
        state.changeTrack = allTracks.items[trackId - 1];
      }
    },
    changeIsShuffled: (state) => {
      state.isShuffled = !state.isShuffled;
    },
  },
  // место где можно ловить асинхронные функции, без RTK QUERY, метод create async thunk;
  extraReducers: (builder) => {
    builder.addMatcher(
      apiMusic.endpoints.addMyTracks.matchFulfilled,
      (state, action) => {
        console.log(action);
        console.log(action.meta.arg.originalArgs);
        const { id } = action.meta.arg.originalArgs;
        if (id === state.changeTrack?.id) {
          state.changeTrack.isLiked = true;
        }
      }
    );
    builder.addMatcher(
      apiMusic.endpoints.deleteMyTracks.matchFulfilled,
      (state, action) => {
        console.log(action);
        const { id } = action.meta.arg.originalArgs;
        if (id === state.changeTrack?.id) {
          state.changeTrack.isLiked = false;
        }
      }
    );
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
  changeCurrentTrack,
} = tracksSlice.actions;
export default tracksSlice.reducer;
