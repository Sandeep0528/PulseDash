"use client";
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useGetPersonalizedNewsQuery, useSearchEverythingQuery } from '@/store/services/newsApi';
import { useGetMovieRecommendationsQuery, useSearchMoviesQuery } from '@/store/services/movieApi';
import DraggableFeed from '@/components/dashboard/DraggableFeed';

export default function Dashboard() {
  const { searchQuery } = useSelector((state: RootState) => state.user);

  // 1. Fetch Default Data (Skipped when searching)
  const { data: newsData, isLoading: newsLoading } = useGetPersonalizedNewsQuery('technology', {
    skip: searchQuery.length > 0
  });
  const { data: movieData, isLoading: moviesLoading } = useGetMovieRecommendationsQuery(undefined, {
    skip: searchQuery.length > 0
  });

  // 2. Fetch Search Data (Skipped when search is empty)
  const { data: searchedNews, isFetching: searchNewsLoading } = useSearchEverythingQuery(searchQuery, {
    skip: searchQuery.length === 0
  });
  const { data: searchedMovies, isFetching: searchMoviesLoading } = useSearchMoviesQuery(searchQuery, {
    skip: searchQuery.length === 0
  });

  // 3. Determine which data source to use
  const finalNews = searchQuery.length > 0 ? searchedNews?.articles : newsData?.articles;
  const finalMovies = searchQuery.length > 0 ? searchedMovies?.results : movieData?.results;

  // 4. Combine and Format Data
  const unifiedFeed = useMemo(() => {
    const newsItems = (finalNews || []).map((article: any, index: number) => ({
      id: article.url || `news-${index}`,
      type: 'News',
      title: article.title,
      description: article.description,
      image: article.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
      url: article.url,
    }));

    const movieItems = (finalMovies || []).map((movie: any) => ({
      id: `movie-${movie.id}`,
      type: 'Movie',
      title: movie.title || movie.name,
      description: movie.overview,
      image: movie.backdrop_path
        ? `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
        : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800',
      url: `https://www.themoviedb.org/movie/${movie.id}`,
    }));

    // Interleave the items (one news, one movie)
    const combined = [];
    const maxLen = Math.max(newsItems.length, movieItems.length);
    for (let i = 0; i < maxLen; i++) {
      if (newsItems[i]) combined.push(newsItems[i]);
      if (movieItems[i]) combined.push(movieItems[i]);
    }
    return combined;
  }, [finalNews, finalMovies]);

  // Loading State
  const isLoading = newsLoading || moviesLoading || searchNewsLoading || searchMoviesLoading;

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
          {searchQuery ? `Results for "${searchQuery}"` : "Welcome back, Alex"}
        </h1>
        <p className="text-zinc-500">
          {searchQuery
            ? "We found these matches across news and cinema."
            : "Here is what is happening in technology & movies today."}
        </p>
      </header>

      {isLoading && unifiedFeed.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="h-80 w-full bg-zinc-100 dark:bg-zinc-800 animate-pulse rounded-2xl" />
          ))}
        </div>
      ) : unifiedFeed.length > 0 ? (
        <DraggableFeed initialData={unifiedFeed} />
      ) : (
        <div className="py-20 text-center border-2 border-dashed rounded-3xl border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500">No content found. Try a different search term.</p>
        </div>
      )}
    </div>
  );
}