'use client';

import { Home, TrendingUp, Heart, Settings, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils'

const navItems = [
    { name: 'My Feed', href: '/', icon: Home },
    { name: 'Trending', href: '/trending', icon: TrendingUp },
    { name: 'Favorites', href: '/favorites', icon: Heart },
    { name: 'Settings', href: '/settings', icon: Settings }
];

export default function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 hidden h-screen w-64 border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950 lg:block">
            <div className="flex h-full flex-col p-6">
                <div className="flex items-center gap-2 mb-10 px-2">
                    <LayoutDashboard className="h-8 w-8 text-blue-600" />
                    <span className="text-xl font-bold tracking-tight dark:text-white">PulseDash</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {navItems.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                                    isActive
                                        ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                                        : "text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50"
                                )}
                            >
                                <Icon className="h-5 w-5" />
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto border-t border-zinc-100 pt-4 dark:border-zinc-800">
                    <div className="flex items-center gap-3 px-2">
                        <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                        <div className="flex flex-col">
                            <span className="text-sm font-medium dark:text-white">Alex Doe</span>
                            <span className="text-xs text-zinc-500">Premium Member</span>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
}
