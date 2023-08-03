import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const FETCH_SEARCH = "https://api.github.com/search/";

export const searchApi = createApi({
  reducerPath: "searchReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: FETCH_SEARCH,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<any, { login: string; params: string }>({
      query: (args) => {
        const { login, params } = args;
        return {
          url: `/users?q=${login}&sort=repositories&order=${params}`,
        };
      },
    }),
  }),
});
export const { useGetUsersQuery } = searchApi;
