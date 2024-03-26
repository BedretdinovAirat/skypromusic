import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const tracksURL = "https://skypro-music-api.skyeng.tech";
const baseQueryWithReauth = async (args, api, extraOptions) => {
  const baseQuery = fetchBaseQuery({
    baseUrl: tracksURL,
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem("access");

      console.debug("Использую токен из стора", { token });

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  });
  const result = await baseQuery(args, api, extraOptions);
  console.debug("Результат первого запроса", { result });

  if (result?.error?.status !== 401) {
    return result;
  }

  const forceLogout = () => {
    console.debug("Принудительная авторизация!");
    localStorage.removeItem("auth");
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "http://localhost:3000/login";
  };
  forceLogout();
};
export const apiMusic = createApi({
  reducerPath: "apiMusic",
  tagTypes: ["track"],
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    getCategory: build.query({
      query: ({ id }) => `/catalog/selection/${id}`,
      transformResponse: (response) => {
        const data = response.items.map((track) => {
          const id = JSON.parse(localStorage.getItem("auth")).id;
          const isLiked = track.stared_user.find((user) => user.id === id);
          if (isLiked) {
            return { ...track, isLiked: true };
          } else {
            return { ...track, isLiked: false };
          }
        });
        return { ...response, items: data };
      },
      providesTags: ["track"],
    }),
    allTracks: build.query({
      query: () => "/catalog/track/all/",
      transformResponse: (response) => {
        return response.map((track) => {
          const id = JSON.parse(localStorage.getItem("auth")).id;
          const isLiked = track.stared_user.find((user) => user.id === id);
          if (isLiked) {
            return { ...track, isLiked: true };
          } else {
            return { ...track, isLiked: false };
          }
        });
      },
      providesTags: ["track"],
    }),
    getFavoriteTracks: build.query({
      query: ({ token }) => ({
        url: "/catalog/track/favorite/all/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      transformResponse: (response) => {
        return response.map((track) => {
          return { ...track, isLiked: true };
        });
      },
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
