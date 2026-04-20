"use client";

import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";

export default function CalendarPage() {
    const times = [
        "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
        "11:00", "11:30", "12:00", "12:30", "13:00", "13:30",
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00"
    ];

    return (
        <div className="space-y-6">

            {/* HEADER GRADIENT */}
            <div className="flex flex-col gap-4 rounded-[26px] bg-gradient-to-r from-[#1ec8a5] via-[#17a2ff] to-[#6a5af9] p-6 text-white shadow-lg md:flex-row md:items-center md:justify-between">

                {/* LEFT */}
                <div>
                    <h1 className="text-[28px] font-bold">Kalendar</h1>
                    <p className="text-sm opacity-90">sreda, 11 marta</p>
                </div>

                {/* RIGHT */}
                <div className="flex flex-wrap items-center gap-3">

                    {/* Select */}
                    <select className="rounded-xl border border-white/40 bg-white/20 px-4 py-2 text-sm backdrop-blur outline-none">
                        <option>Konsultatsiya</option>
                        <option>Davolash</option>
                    </select>

                    {/* Prev */}
                    <button className="rounded-xl bg-white/20 p-2 hover:bg-white/30">
                        <ChevronLeft size={18} />
                    </button>

                    {/* Date */}
                    <div className="flex items-center gap-2 rounded-xl bg-white/20 px-4 py-2 text-sm">
                        <CalendarDays size={16} />
                        11.03.2026
                    </div>

                    {/* Next */}
                    <button className="rounded-xl bg-white/20 p-2 hover:bg-white/30">
                        <ChevronRight size={18} />
                    </button>

                    {/* Filter */}
                    <button className="rounded-xl bg-[#2d7cff] px-4 py-2 text-sm font-semibold hover:bg-[#1f6ae6]">
                        Filtrlash
                    </button>
                </div>
            </div>

            {/* TABLE */}
            <div className="overflow-hidden rounded-[20px] border border-[#e6edf5] bg-white shadow-sm">

                {/* Header */}
                <div className="border-b px-6 py-3 text-sm font-semibold text-[#6b7a90]">
                    Vaqt
                </div>

                {/* Time rows */}
                <div>
                    {times.map((time, i) => (
                        <div
                            key={i}
                            className="flex items-center border-b px-6 py-3 text-sm text-[#4a5a70] hover:bg-[#f7faff]"
                        >
                            {time}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}