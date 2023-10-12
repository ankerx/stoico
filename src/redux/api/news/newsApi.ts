import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { NEWS_API_BASE_URL, NEWS_API_KEY } from "../config";
import { SortOptions, SupportedLanguages } from "../../types";
import { NewsResponse } from "./types";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({ baseUrl: NEWS_API_BASE_URL }),
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, NewsQueryParams>({
      query: ({ sortBy, lng, searchQuery }) => ({
        url: `/everything?q=${searchQuery}&sortBy=${sortBy}&language=${lng}&apiKey=${NEWS_API_KEY}`,
      }),
    }),

    getHeadlines: builder.query<allResults, void>({
      async queryFn(_arg, _queryApi, _extraOptions, fetchWithBQ) {
        const resultsOfCategories = await Promise.all(
          categories.map((category) =>
            fetchWithBQ(
              `/top-headlines?category=${category}&apiKey=${NEWS_API_KEY}`
            )
          )
        );
        const resultsOfCountries = await Promise.all(
          countries.map((country) =>
            fetchWithBQ(
              `/top-headlines?country=${country}&apiKey=${NEWS_API_KEY}`
            )
          )
        );
        const allResults = [
          {
            categories: resultsOfCategories.map(
              (result) => result.data
            ) as unknown as NewsResponse[],
          },
          {
            countries: resultsOfCountries.map(
              (result) => result.data
            ) as unknown as NewsResponse[],
          },
        ];

        return { data: allResults };
      },
    }),
  }),
});

export const { useGetNewsQuery, useGetHeadlinesQuery } = newsApi;

type allResults = (
  | {
      categories: NewsResponse[];
      countries?: undefined;
    }
  | {
      countries: NewsResponse[];
      categories?: undefined;
    }
)[];

type NewsQueryParams = {
  searchQuery: string;
  sortBy: SortOptions;
  lng: SupportedLanguages;
};

export const categories = ["business", "entertainment", "technology"];
export const countries = ["us", "pl", "gb"];
