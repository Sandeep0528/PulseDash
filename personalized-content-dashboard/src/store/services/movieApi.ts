import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const movieApi = createApi({
    reducerPath: 'movieApi',
    // Moving the API key to the baseQuery ensures every request includes it automatically
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/3/',
    }),
    endpoints: (builder) => ({
        // Fetches popular movies for the default feed
        getMovieRecommendations: builder.query<any, void>({
            query: () => ({
                url: 'movie/popular',
                params: {
                    // Use the EXACT same variable name as defined in your .env.local
                    api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
                    language: 'en-US',
                    page: 1,
                },
            }),
        }),

        // Handles the search functionality
        searchMovies: builder.query<any, string>({
            query: (term) => ({
                url: 'search/movie',
                params: {
                    api_key: process.env.NEXT_PUBLIC_TMDB_KEY,
                    query: term,
                    language: 'en-US',
                    page: 1,
                    include_adult: false,
                },
            }),
            // Prevents the API from being called if the search term is empty or just spaces
            keepUnusedDataFor: 60,
        }),
    }),
});

export const { useGetMovieRecommendationsQuery, useSearchMoviesQuery } = movieApi;