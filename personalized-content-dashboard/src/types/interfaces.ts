// Shared Content Interface for the Unified Feed
export interface ContentItem {
    id: string;
    title: string;
    description: string;
    image: string;
    url: string;
    type: 'News' | 'Recommendation' | 'Social';
    timestamp?: string;
    category?: string;
}

// News API specific types
export interface NewsArticle {
    source: { id: string | null; name: string };
    author: string | null;
    title: string;
    description: string;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

// Movie API (TMDB) specific types
export interface MovieResult {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
}

// Redux State Types
export interface UserState {
    categories: string[];
    searchQuery: string;
    theme: 'light' | 'dark';
}

export interface FavoritesState {
    items: ContentItem[];
}