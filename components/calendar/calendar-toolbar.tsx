"use client";

import { ChevronLeft, ChevronRight, CalendarDays, ChevronDown } from "lucide-react";

interface CalendarToolbarProps {
    title: string;
    subtitle: string;
    selectedService: string;
    selectedDate: string;
    onServiceChange: (value: string) => void;
    onDateChange: (value: string) => void;
    onPrevDay: () => void;
    onNextDay: () => void;
    onFilter: () => void;
}

const services = ["Konsultatsiya", "UZI", "Analiz", "Qayta ko‘rik"];

export default function CalendarToolbar({
    title,
    subtitle,
    selectedService,
    selectedDate,
    onServiceChange,
    onDateChange,
    onPrevDay,
    onNextDay,
    onFilter,
}: CalendarToolbarProps) {
    return (
        <div className="rounded-[22px] bg-gradient-to-r from-[#1ec7ad] via-[#18a7ef] to-[#4d5ef6] p-5 text-white shadow-[0_18px_40px_rgba(37,99,235,0.18)]">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                    <h1 className="text-[22px] font-bold leading-none">{title}</h1>
                    <p className="mt-2 text-sm text-white/85">{subtitle}</p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <div className="relative">
                        <select
                            value={selectedService}
                            onChange={(e) => onServiceChange(e.target.value)}
                            className="h-11 min-w-[200px] appearance-none rounded-2xl border border-white/40 bg-white px-4 pr-10 text-sm font-medium text-slate-700 outline-none ring-0"
                        >
                            {services.map((service) => (
                                <option key={service} value={service}>
                                    {service}
                                </option>
                            ))}
                        </select>

                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-500" />
                    </div>

                    <button
                        type="button"
                        onClick={onPrevDay}
                        className="flex size-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
                    >
                        <ChevronLeft className="size-5" />
                    </button>

                    <label className="flex h-11 items-center gap-2 rounded-2xl border border-white/35 bg-white px-4 text-sm font-medium text-slate-700">
                        <CalendarDays className="size-4 text-emerald-500" />
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => onDateChange(e.target.value)}
                            className="bg-transparent outline-none"
                        />
                    </label>

                    <button
                        type="button"
                        onClick={onNextDay}
                        className="flex size-11 items-center justify-center rounded-full bg-white/20 text-white transition hover:bg-white/30"
                    >
                        <ChevronRight className="size-5" />
                    </button>

                    <button
                        type="button"
                        onClick={onFilter}
                        className="h-11 rounded-2xl bg-[#1f7ca5] px-5 text-sm font-semibold text-white transition hover:bg-[#17698c]"
                    >
                        Filtrlash
                    </button>
                </div>
            </div>
        </div>
    );
}