import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tracksURL = "https://skypro-music-api.skyeng.tech";
export const apiMusic = createApi({
  reducerPath: "apiMusic",
  tagTypes: ["track"],
  baseQuery: fetchBaseQuery({
    baseUrl: tracksURL,
  }),
  endpoints: (build) => ({
    getCategory: build.query({
      query: ({ id }) => `/catalog/selection/${id}`,
      providesTags: ["track"]
    }),
    allTracks: build.query({ query: () => "/catalog/track/all/" }),
    getFavoriteTracks: build.query({
      query: ({ token }) => ({
        url: "/catalog/track/favorite/all/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type: "track", id })), "track"]
          : ["track"],
    }),
    addMyTracks: build.mutation({
      query: ({ token, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: (arg) => [{ type: "track", id: arg.id }],
    }),
    deleteMyTracks: build.mutation({
      query: ({ token, id }) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: "Delete",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      invalidatesTags: (arg) => [{ type: "track", id: arg.id }],
    }),
  }),
});
export const {
  useAllTracksQuery,
  useAddMyTracksMutation,
  useGetFavoriteTracksQuery,
  useDeleteMyTracksMutation,
  useGetCategoryQuery,
} = apiMusic;
