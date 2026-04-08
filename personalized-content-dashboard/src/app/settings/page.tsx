"use client";
import { User, Bell, Shield, Palette } from 'lucide-react';

export default function SettingsPage() {
    const settings = [
        { name: 'Profile', icon: User, desc: 'Update your personal info' },
        { name: 'Notifications', icon: Bell, desc: 'Manage alerts' },
        { name: 'Privacy', icon: Shield, desc: 'Security settings' },
        { name: 'Appearance', icon: Palette, desc: 'Theme preferences' },
    ];

    return (
        <div className="max-w-2xl space-y-8">
            <h1 className="text-3xl font-bold">Settings</h1>
            <div className="grid gap-4">
                {settings.map((s) => (
                    <div key={s.name} className="flex items-center gap-4 p-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl cursor-pointer hover:border-blue-500 transition-colors">
                        <div className="p-3 bg-zinc-100 dark:bg-zinc-800 rounded-xl"><s.icon className="h-5 w-5" /></div>
                        <div>
                            <h3 className="font-semibold">{s.name}</h3>
                            <p className="text-sm text-zinc-500">{s.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}