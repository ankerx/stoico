import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "../config";
import { SortOptions, SupportedLanguages } from "../../types";
import { NewsResponse } from "./types";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: NEWS_API_BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, QueryParams>({
      query: ({ sortBy, lng, searchQuery }) => ({
        url: `/everything?q=${searchQuery}&sortBy=${sortBy}&language=${lng}&apiKey=${NEWS_API_KEY}`,
      }),
    }),
  }),
});

export const { useGetNewsQuery } = newsApi;

type QueryParams = {
  searchQuery: string;
  sortBy: SortOptions;
  lng: SupportedLanguages;
};
