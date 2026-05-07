"use client";

import { Search } from "lucide-react";

interface ServiceFiltersProps {
    search: string;
    total: number;
    setSearch: (value: string) => void;
}

export default function ServiceFilters({
    search,
    total,
    setSearch,
}: ServiceFiltersProps) {
    return (
        <div className="rounded-[18px] border border-[#dde6f0] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="flex items-center justify-between gap-4">
                <div className="flex h-[54px] w-full max-w-[620px] items-center gap-3 rounded-[20px] border-2 border-[#12bfa5] bg-white px-4 shadow-[0_0_0_1px_rgba(29,155,240,0.35)]">
                    <Search className="h-5 w-5 text-[#10b981]" />

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Qidirish..."
                        className="h-full flex-1 bg-transparent text-[15px] text-[#0f172a] outline-none placeholder:text-[#94a3b8]"
                    />
                </div>

                <span className="text-[15px] font-medium text-[#1d2c44]">
                    {total} ta
                </span>
            </div>
        </div>
    );
}