"use client";
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { HeartOff } from 'lucide-react';
import ContentCard from '@/components/ui/ContentCard';

export default function FavoritesPage() {
    const favorites = useSelector((state: RootState) => state.favorites.items);
    console.log("Current Favorites in Redux:", favorites)
    return (
        <div className="space-y-8 p-4 lg:p-0">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">My Favorites</h1>
                <p className="text-zinc-500">Items you've saved for later.</p>
            </header>

            {favorites.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((item: any) => (
                        <ContentCard key={item.id} data={item} />
                    ))}
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl">
                    <HeartOff className="h-12 w-12 text-zinc-300 mb-4" />
                    <p className="text-zinc-500 font-medium">No favorites saved yet.</p>
                </div>
            )}
        </div>
    );
}