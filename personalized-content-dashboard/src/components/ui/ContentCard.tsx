"use client";
import React from 'react';
import { Heart, ExternalLink } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleFavorite } from '@/store/slices/favoriteSlice';

export default function ContentCard({ data }: { data: any }) {
    const dispatch = useDispatch();

    // Get favorites to check status
    const favorites = useSelector((state: RootState) => state.favorites.items);
    const isFavorite = favorites.some((item: any) => item.id === data.id);

    // Dynamic data variables
    const title = data.title || data.headline || "Trending Topic";
    const description = data.description || data.overview || "Click read more to view the full details of this update.";
    const fallbackImage = "https://images.unsplash.com/photo-1560177112-fbfd5fde226f?w=800";
    const image = data.image || data.urlToImage || fallbackImage;
    const type = data.type || "News";

    const handleFavoriteClick = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // Now dispatch is a function, so this will work perfectly
        dispatch(toggleFavorite(data));
    };

    return (
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col h-full group">
            <div className="relative h-48 w-full bg-zinc-100 dark:bg-zinc-800">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                        e.currentTarget.src = fallbackImage;
                    }}
                />
                {/* Heart Button Overlay */}
                <button
                    onClick={handleFavoriteClick}
                    className="absolute top-3 right-3 p-2 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-sm shadow-sm hover:scale-110 transition-all z-10"
                >
                    <Heart
                        className={`h-5 w-5 transition-colors ${isFavorite ? 'fill-red-500 text-red-500' : 'text-zinc-400 hover:text-red-400'}`}
                    />
                </button>
            </div>

            <div className="p-5 flex flex-col flex-1">
                <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">
                        {type}
                    </span>
                </div>

                <h3 className="mt-3 font-bold text-lg text-zinc-900 dark:text-zinc-100 line-clamp-2 min-h-[3.5rem]">
                    {title}
                </h3>

                <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 flex-1">
                    {description}
                </p>

                <div className="mt-5 pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    <a
                        href={data.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full py-2.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity"
                    >
                        Read More <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </div>
    );
}