"use client";

import { useEffect, useState } from "react";
import {
    Bell,
    ChevronDown,
    Moon,
    PanelLeft,
    Sun,
    User2,
} from "lucide-react";

type AppHeaderProps = {
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppHeader({ setMobileOpen }: AppHeaderProps) {
    const [mounted, setMounted] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        setMounted(true);

        const savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
            return;
        }

        if (savedTheme === "light") {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
            return;
        }

        const prefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;

        if (prefersDark) {
            document.documentElement.classList.add("dark");
            setDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setDarkMode(false);
        }
    }, []);

    const toggleTheme = () => {
        const nextMode = !darkMode;
        setDarkMode(nextMode);

        if (nextMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-[#e9eef5] bg-white px-4 transition-colors duration-300 sm:px-6 lg:px-8 dark:border-[#1e293b] dark:bg-[#0f172a]">
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setMobileOpen(true)}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e9eef5] bg-white text-[#53627a] transition hover:bg-[#f8fafc] dark:border-[#1e293b] dark:bg-[#111827] dark:text-[#cbd5e1] dark:hover:bg-[#1f2937] lg:hidden"
                >
                    <PanelLeft className="h-5 w-5" />
                </button>

                <p className="text-[18px] font-medium text-[#6b7b92] dark:text-[#cbd5e1]">
                    Boshqaruv paneli
                </p>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
                {/* Desktop theme button */}
                <button
                    onClick={toggleTheme}
                    className="hidden h-11 items-center gap-2 rounded-2xl border border-[#e6edf5] bg-white px-4 text-[#22324a] transition hover:bg-[#f8fafc] dark:border-[#1e293b] dark:bg-[#111827] dark:text-white dark:hover:bg-[#1f2937] sm:flex"
                >
                    {mounted && darkMode ? (
                        <Sun className="h-4 w-4 text-[#f59e0b]" />
                    ) : (
                        <Moon className="h-4 w-4 text-[#3aa6ff]" />
                    )}

                    <span className="text-[15px] font-medium">
                        {mounted ? (darkMode ? "Kunduz" : "Tungi") : "Tungi"}
                    </span>
                </button>

                {/* Mobile theme button */}
                <button
                    onClick={toggleTheme}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e6edf5] bg-white text-[#22324a] transition hover:bg-[#f8fafc] dark:border-[#1e293b] dark:bg-[#111827] dark:text-white dark:hover:bg-[#1f2937] sm:hidden"
                >
                    {mounted && darkMode ? (
                        <Sun className="h-5 w-5 text-[#f59e0b]" />
                    ) : (
                        <Moon className="h-5 w-5 text-[#3aa6ff]" />
                    )}
                </button>

                {/* Language */}
                <div className="hidden items-center overflow-hidden rounded-2xl border border-[#e6edf5] bg-white dark:border-[#1e293b] dark:bg-[#111827] sm:flex">
                    <button className="bg-[#11b981] px-3 py-2 text-[14px] font-semibold text-white">
                        Uz
                    </button>
                    <button className="px-3 py-2 text-[14px] font-medium text-[#67778f] dark:text-[#cbd5e1]">
                        Ru
                    </button>
                </div>

                {/* Notification */}
                <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#e6edf5] bg-white text-[#5a6b83] transition hover:bg-[#f8fafc] dark:border-[#1e293b] dark:bg-[#111827] dark:text-[#cbd5e1] dark:hover:bg-[#1f2937]">
                    <Bell className="h-5 w-5" />
                </button>

                {/* Avatar */}
                <button className="flex items-center gap-2 rounded-full border border-[#e6edf5] bg-white px-2 py-1.5 transition hover:bg-[#f8fafc] dark:border-[#1e293b] dark:bg-[#111827] dark:hover:bg-[#1f2937]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f9fc] text-[#5a6b83] dark:bg-[#0f172a] dark:text-[#cbd5e1]">
                        <User2 className="h-5 w-5" />
                    </div>

                    <ChevronDown className="hidden h-4 w-4 text-[#7b8aa0] dark:text-[#cbd5e1] sm:block" />
                </button>
            </div>
        </header>
    );
}