"use client";

import { CalendarDays, Search } from "lucide-react";
import type {
    InvoiceSort,
    InvoiceStatus,
    InvoiceStats,
} from "@/features/invoices/types/invoices.types";

interface InvoiceFiltersProps {
    stats: InvoiceStats;
    search: string;
    status: "" | InvoiceStatus;
    sort: InvoiceSort;
    setSearch: (value: string) => void;
    setStatus: (value: "" | InvoiceStatus) => void;
    setSort: (value: InvoiceSort) => void;
}

export default function InvoiceFilters({
    stats,
    search,
    status,
    sort,
    setSearch,
    setStatus,
    setSort,
}: InvoiceFiltersProps) {
    const tabs = [
        { label: "Hammasi", value: "" as const, count: stats.all },
        { label: "To‘langan", value: "paid" as const, count: stats.paid },
        { label: "To‘lanmagan", value: "unpaid" as const, count: stats.unpaid },
        { label: "O‘chirilgan", value: "deleted" as const, count: stats.deleted },
    ];

    return (
        <>
            <div className="rounded-[18px] border border-[#dde6f0] bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="flex flex-wrap gap-2">
                    {tabs.map((tab) => {
                        const active = status === tab.value;

                        return (
                            <button
                                key={tab.label}
                                type="button"
                                onClick={() => setStatus(tab.value)}
                                className={`inline-flex h-10 items-center gap-3 rounded-[12px] border px-4 text-[15px] font-bold transition ${active
                                        ? "border-[#111827] bg-[#111827] text-white"
                                        : "border-[#cbd5e1] bg-white text-[#0f172a] hover:bg-[#f8fafc]"
                                    }`}
                            >
                                {tab.label}
                                <span
                                    className={`rounded-full px-2 py-0.5 text-[13px] ${active
                                            ? "bg-white/15 text-white"
                                            : "bg-[#f1f5f9] text-[#64748b]"
                                        }`}
                                >
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="rounded-[18px] border border-[#dde6f0] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex h-[54px] w-full max-w-[720px] items-center gap-3 rounded-[20px] border-2 border-[#12bfa5] bg-white px-4 shadow-[0_0_0_1px_rgba(29,155,240,0.35)]">
                        <Search className="h-5 w-5 text-[#10b981]" />

                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Hisob-faktura kodi yoki bemor bo‘yicha qidirish"
                            className="h-full flex-1 bg-transparent text-[15px] text-[#0f172a] outline-none placeholder:text-[#94a3b8]"
                        />
                    </div>

                    <button
                        type="button"
                        onClick={() => alert("Keyin date picker ulanadi")}
                        className="inline-flex h-11 items-center gap-2 rounded-[999px] border border-[#dde6f0] bg-white px-4 text-[15px] font-medium text-[#0f172a] shadow-sm"
                    >
                        <CalendarDays className="h-4 w-4 text-[#10b981]" />
                        Maxsus
                    </button>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-2">
                    <span className="text-[13px] font-bold text-[#64748b]">
                        ↕ Saralash
                    </span>

                    <SortButton active={sort === "date_desc"} onClick={() => setSort("date_desc")}>
                        Sana ↓
                    </SortButton>

                    <SortButton active={sort === "date_asc"} onClick={() => setSort("date_asc")}>
                        Sana ↑
                    </SortButton>

                    <SortButton active={sort === "code_desc"} onClick={() => setSort("code_desc")}>
                        Kod ↓
                    </SortButton>

                    <SortButton active={sort === "code_asc"} onClick={() => setSort("code_asc")}>
                        Kod ↑
                    </SortButton>

                    <SortButton active={sort === "total_desc"} onClick={() => setSort("total_desc")}>
                        Umumiy ↓
                    </SortButton>

                    <SortButton active={sort === "total_asc"} onClick={() => setSort("total_asc")}>
                        Umumiy ↑
                    </SortButton>
                </div>
            </div>
        </>
    );
}

function SortButton({
    active,
    onClick,
    children,
}: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={`h-8 rounded-[999px] border px-3 text-[13px] font-semibold transition ${active
                    ? "border-[#12bfa5] bg-[#ecfeff] text-[#0284c7]"
                    : "border-[#cbd5e1] bg-white text-[#334155]"
                }`}
        >
            {children}
        </button>
    );
}