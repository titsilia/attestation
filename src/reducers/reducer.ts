import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const FETCH_SEARCH = "https://api.github.com/search/";

export const searchApi = createApi({
  reducerPath: "searchReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_SEARCH,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<
      any,
      { login: string; params: string; page: number }
    >({
      query: (args) => {
        const { login, params, page } = args;
        return {
          url: `/users?q=${login}&sort=repositories&order=${params}&per_page=15&page=${page}`,
        };
      },
    }),
    getUser: builder.query<unknown, string>({
      query: (name) => {
        return { url: `/users?q=${name}` };
      },
    }),
  }),
});
export const { useGetUsersQuery, useGetUserQuery } = searchApi;
