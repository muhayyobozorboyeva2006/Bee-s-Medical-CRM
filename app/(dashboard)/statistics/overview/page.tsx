"use client";

import {
    CalendarDays,
    ChevronUp,
    Dot,
    Moon,
    Share2,
    TrendingUp,
    Users,
    ChartColumn,
} from "lucide-react";
import { useMemo, useState } from "react";

const chartDates = [
    "2026-03-07",
    "2026-03-08",
    "2026-03-09",
    "2026-03-10",
    "2026-03-11",
];

export default function StatisticsOverviewPage() {
    const [collapsed, setCollapsed] = useState(false);

    const stats = useMemo(
        () => [
            {
                title: "UMUMIY TUSHUM",
                value: "0",
                suffix: "UZS",
                subtext: "",
            },
            {
                title: "FAKTURALAR (JAMI)",
                value: "0",
                suffix: "",
                subtext: "To‘langan 0 • Bekor qilingan 0",
            },
            {
                title: "JINS BO‘YICHA ULUSH",
                value: "0%",
                suffix: "Erkak",
                subtext: "0 / 0",
            },
            {
                title: "30 KUN",
                value: "0",
                suffix: "UZS",
                subtext: "Soni: 0",
            },
        ],
        []
    );

    return (
        <div className="space-y-6">
            {/* TOP HERO */}
            <section className="overflow-hidden rounded-[30px] bg-gradient-to-r from-[#10b981] via-[#0796c9] to-[#1686d9] px-8 py-9 text-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
                <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
                    <div className="max-w-[760px]">
                        <h1 className="text-[52px] font-extrabold leading-none tracking-[-0.02em]">
                            Statistika
                        </h1>

                        <p className="mt-6 text-[22px] font-medium leading-[1.4] text-white/90">
                            Klinikadagi umumiy ko‘rsatkichlar. Sana bo‘yicha filtrlab
                            ko‘rishingiz mumkin.
                        </p>

                        <div className="mt-6 inline-flex flex-wrap items-center rounded-full border border-[#ffe8b0] bg-[#fff4cf] px-4 py-2 text-[15px] font-medium text-[#b7791f] shadow-sm">
                            <span className="flex items-center">
                                <Dot className="-ml-2 h-5 w-5" />
                                Kundalik kesh
                            </span>

                            <span className="mx-2 text-[#d4a24a]">•</span>

                            <span>Oxirgi: —</span>

                            <span className="mx-2 text-[#d4a24a]">•</span>

                            <span>Hisoblanmoqda (0/7)</span>

                            <button className="ml-4 rounded-full bg-white/70 px-4 py-1.5 text-[14px] font-semibold text-[#b7791f] transition hover:bg-white">
                                Qayta hisoblash
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 xl:justify-end">
                        <button className="inline-flex h-[54px] items-center gap-2 rounded-[18px] border border-white/40 bg-white px-5 text-[18px] font-semibold text-[#4b5d76] shadow-sm transition hover:bg-white/95">
                            <CalendarDays className="h-5 w-5 text-[#19b87d]" />
                            Maxsus
                        </button>

                        <button className="inline-flex h-[54px] items-center gap-2 rounded-[18px] border border-white/50 bg-transparent px-5 text-[18px] font-semibold text-white transition hover:bg-white/10">
                            <Moon className="h-5 w-5 text-white/90" />
                            Tungi
                        </button>
                    </div>
                </div>

                <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-[2px]"
                        >
                            <p className="text-[16px] font-bold uppercase tracking-wide text-white/65">
                                {item.title}
                            </p>

                            <div className="mt-4 flex items-end gap-2">
                                <span className="text-[54px] font-extrabold leading-none">
                                    {item.value}
                                </span>
                                {item.suffix && (
                                    <span className="pb-1 text-[24px] font-bold text-white/90">
                                        {item.suffix}
                                    </span>
                                )}
                            </div>

                            <p className="mt-3 min-h-[24px] text-[18px] font-medium text-white/65">
                                {item.subtext}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* MAIN WRAPPER */}
            <section className="rounded-[28px] border border-[#e6edf5] bg-white p-4 shadow-[0_16px_35px_rgba(15,23,42,0.05)] sm:p-5 lg:p-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-[33px] font-extrabold tracking-[-0.02em] text-[#1d2c44]">
                        Umumiy statistika
                    </h2>

                    <button
                        onClick={() => setCollapsed((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center rounded-full text-[#7d8ca3] transition hover:bg-[#f3f7fb]"
                    >
                        <ChevronUp
                            className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""
                                }`}
                        />
                    </button>
                </div>

                {!collapsed && (
                    <div className="mt-5 space-y-6">
                        {/* TOP LONG CARD */}
                        <div className="rounded-[26px] border border-[#d8ccff] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <Share2 className="h-5 w-5 text-[#8b5cf6]" />
                                    <h3 className="text-[18px] font-bold text-[#16253d]">
                                        Manbalar bo‘yicha trend
                                    </h3>
                                </div>

                                <span className="text-[15px] font-medium text-[#97a6bc]">
                                    Oxirgi oylar
                                </span>
                            </div>

                            <div className="flex h-[220px] items-center justify-center">
                                <div className="text-center text-[#8ea1bb]">
                                    <Share2 className="mx-auto h-8 w-8" />
                                    <p className="mt-3 text-[16px] font-medium">Ma’lumot yo‘q</p>
                                </div>
                            </div>
                        </div>

                        {/* MIDDLE GRID */}
                        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
                            {/* LEFT CHART */}
                            <div className="rounded-[26px] border border-[#88efc9] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="h-5 w-5 text-[#10b981]" />
                                        <h3 className="text-[18px] font-bold text-[#16253d]">
                                            Kunlar bo‘yicha tushum
                                        </h3>
                                    </div>

                                    <span className="text-[15px] font-medium text-[#97a6bc]">
                                        7 ta kun
                                    </span>
                                </div>

                                <div className="mt-5 rounded-[18px] bg-white">
                                    <div className="relative h-[240px] overflow-hidden rounded-[16px]">
                                        <div className="absolute inset-0 px-5">
                                            <div className="h-[25%] border-b border-[#eef2f7]" />
                                            <div className="h-[25%] border-b border-[#eef2f7]" />
                                            <div className="h-[25%] border-b border-[#eef2f7]" />
                                            <div className="h-[25%]" />
                                        </div>

                                        <div className="absolute bottom-5 left-6 right-6 h-[4px] rounded-full bg-[#7c3aed]" />
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-[15px] font-medium text-[#3a4b64]">
                                    <span className="inline-block h-3 w-3 rounded-full bg-[#7c3aed]" />
                                    Umumiy tushum
                                </div>
                            </div>

                            {/* RIGHT CARD */}
                            <div className="overflow-hidden rounded-[26px] border border-[#9ae6c4] bg-gradient-to-r from-[#abd8f7] to-[#9ae6c4] shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                                <div className="m-[1px] rounded-[25px] bg-white p-5">
                                    <div className="flex items-center justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <Users className="h-5 w-5 text-[#1d9bf0]" />
                                            <h3 className="text-[18px] font-bold text-[#16253d]">
                                                Kunlar bo‘yicha bemorlar
                                            </h3>
                                        </div>

                                        <span className="text-[15px] font-medium text-[#97a6bc]">
                                            0 ta kun
                                        </span>
                                    </div>

                                    <div className="flex h-[190px] items-center justify-center">
                                        <div className="text-center text-[#8ea1bb]">
                                            <ChartColumn className="mx-auto h-8 w-8" />
                                            <p className="mt-3 text-[16px] font-medium">
                                                Ma’lumot yo‘q
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="h-[126px]" />
                            </div>
                        </div>

                        {/* BOTTOM GRID */}
                        <div className="grid gap-6 xl:grid-cols-2">
                            <div className="rounded-[24px] border border-[#e6edf5] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                                <div className="flex items-center gap-3">
                                    <Users className="h-5 w-5 text-[#1d9bf0]" />
                                    <h3 className="text-[18px] font-bold text-[#16253d]">
                                        Eng faol shifokorlar — Soni
                                    </h3>
                                </div>

                                <p className="mt-5 text-[24px] font-medium text-[#94a3b8]">—</p>
                            </div>

                            <div className="rounded-[24px] border border-[#e6edf5] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                                <div className="flex items-center gap-3">
                                    <ChartColumn className="h-5 w-5 text-[#10b981]" />
                                    <h3 className="text-[18px] font-bold text-[#16253d]">
                                        Shifokorlar: bemorlar va tushum
                                    </h3>
                                </div>

                                <div className="mt-10 h-[120px]" />
                            </div>
                        </div>

                        {/* DATE CARDS */}
                        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                            {chartDates.map((date) => (
                                <div
                                    key={date}
                                    className="rounded-[14px] border border-[#edf2f7] bg-[#f8fafc] px-5 py-4"
                                >
                                    <p className="text-[18px] font-medium text-[#7b8aa0]">
                                        {date}
                                    </p>
                                    <p className="mt-2 text-[28px] font-extrabold leading-none text-[#1d2c44]">
                                        0
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
}