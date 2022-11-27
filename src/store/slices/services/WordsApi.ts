import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const wordApi = createApi({
  reducerPath: "wordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://wordsapiv1.p.rapidapi.com/words/",
  }),
  endpoints: (builder) => ({
    getWord: builder.query({
      query(body) {
        return {
          url: body,
          headers: {
            "X-RapidAPI-Key":
              "ae0ee65316msh5d52e77399d0a49p179ca1jsn77e40476657d",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        };
      },
    }),
    getWordSearch: builder.mutation({
      query(word) {
        return {
          url: word,
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "ae0ee65316msh5d52e77399d0a49p179ca1jsn77e40476657d",
            "X-RapidAPI-Host": "wordsapiv1.p.rapidapi.com",
          },
        };
      },
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetWordQuery, useGetWordSearchMutation } = wordApi;
