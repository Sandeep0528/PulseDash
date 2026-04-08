"use client";
import React from 'react';
import { useGetPersonalizedNewsQuery } from '@/store/services/newsApi';
import ContentCard from '@/components/ui/ContentCard';
import { TrendingUp } from 'lucide-react';

export default function TrendingPage() {
    // Fetching 'general' or 'business' to act as Trending
    const { data, isLoading } = useGetPersonalizedNewsQuery('business');

    const trendingItems = data?.articles?.map((a: any, i: number) => ({
        id: `trending-${i}`,
        type: 'Trending',
        title: a.title,
        description: a.description,
        image: a.urlToImage || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800',
        url: a.url
    })) || [];

    return (
        <div className="space-y-8">
            <header className="flex items-center gap-3">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Trending Now</h1>
                    <p className="text-zinc-500 text-sm">The most talked-about stories across the globe.</p>
                </div>
            </header>

            {isLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Simple loading text for now */}
                    <p className="text-zinc-400">Loading trends...</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingItems.map((item: any) => (
                        <ContentCard key={item.id} data={item} />
                    ))}
                </div>
            )}
        </div>
    );
}