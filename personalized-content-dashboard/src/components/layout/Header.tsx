"use client";
import { Search, Bell, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes'; // Assumes next-themes installation

export default function Header() {
    const { theme, setTheme } = useTheme();

    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-white/80 px-4 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 lg:px-8">
            <div className="flex w-full max-w-md items-center gap-2">
                <div className="relative w-full">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                    <input
                        type="text"
                        placeholder="Search news, movies, or posts..."
                        className="h-10 w-full rounded-full border border-zinc-200 bg-zinc-50 pl-10 pr-4 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                >
                    {theme === 'dark' ? (
                        <Sun className="h-5 w-5 text-zinc-400 hover:text-yellow-500" />
                    ) : (
                        <Moon className="h-5 w-5 text-zinc-500 hover:text-blue-600" />
                    )}
                </button>

                <button className="relative rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors">
                    <Bell className="h-5 w-5 text-zinc-500 dark:text-zinc-400" />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 border-2 border-white dark:border-zinc-950" />
                </button>
            </div>
        </header>
    );
}