import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsApi = createApi({
    reducerPath: 'newsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/' }),
    endpoints: (builder) => ({
        // Endpoint 1: Personalized News based on categories
        getPersonalizedNews: builder.query<any, string>({
            query: (category) =>
                `top-headlines?category=${category}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
        }),

        // Endpoint 2: Global Search
        searchEverything: builder.query<any, string>({
            query: (query) =>
                `everything?q=${query}&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`,
        }),
    }),
});

// Note the change in hook names to match the endpoint keys above
export const {
    useGetPersonalizedNewsQuery,
    useSearchEverythingQuery
} = newsApi;