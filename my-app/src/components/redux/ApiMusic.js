import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tracksURL = "https://skypro-music-api.skyeng.tech";
export const apiMusic = createApi({
  reducerPath: "apiMusic",
  baseQuery: fetchBaseQuery({
    baseUrl: tracksURL,
  }),
  endpoints: (build) => ({
    allTracks: build.query({ query: () => "/catalog/track/all/" }),
    addMyTracks: build.mutation({
      query: ({ token, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});
export const { useAllTracksQuery, useAddMyTracksMutation } = apiMusic;
