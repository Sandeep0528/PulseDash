"use client";
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '@/store/slices/userSlice';
import { RootState } from '@/store/store';
import { Search, X } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchBar() {
    const [inputValue, setInputValue] = useState("");
    const dispatch = useDispatch();
    const debouncedValue = useDebounce(inputValue, 500);

    // Synchronize Redux when the debounced value changes
    useEffect(() => {
        dispatch(setSearchQuery(debouncedValue));
    }, [debouncedValue, dispatch]);

    const clearSearch = () => {
        setInputValue("");
        dispatch(setSearchQuery(""));
    };

    return (
        <div className="relative w-full max-w-xl group">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 group-focus-within:text-blue-500 transition-colors">
                <Search className="h-5 w-5" />
            </div>

            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search for movies, actors, or breaking news..."
                className="w-full pl-12 pr-12 py-3 bg-zinc-100 dark:bg-zinc-800/50 border border-transparent focus:border-blue-500/50 focus:bg-white dark:focus:bg-zinc-900 rounded-2xl outline-none transition-all text-zinc-900 dark:text-zinc-100 shadow-sm"
            />

            {inputValue && (
                <button
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-full transition-colors"
                >
                    <X className="h-4 w-4 text-zinc-400" />
                </button>
            )}
        </div>
    );
}