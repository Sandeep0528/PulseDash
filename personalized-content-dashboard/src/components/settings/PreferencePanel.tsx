"use client";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleCategory } from '@/store/slices/userSlice';

const AVAILABLE_CATEGORIES = ['technology', 'sports', 'business', 'entertainment', 'science'];

export default function PreferencePanel() {
    const dispatch = useDispatch();
    const selectedCategories = useSelector((state: RootState) => state.user.categories);

    return (
        <div className="p-6 bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-4 dark:text-white">Content Preferences</h2>
            <div className="flex flex-wrap gap-3">
                {AVAILABLE_CATEGORIES.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => dispatch(toggleCategory(cat))}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategories.includes(cat)
                                ? 'bg-blue-600 text-white'
                                : 'bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                            }`}
                    >
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}