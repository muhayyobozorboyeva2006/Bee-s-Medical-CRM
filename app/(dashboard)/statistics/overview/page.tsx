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
import { useState } from "react";
import { useStatisticsOverview } from "@/features/statistics/hooks/use-statistics";

export default function StatisticsOverviewPage() {
    const [collapsed, setCollapsed] = useState(false);

    const { data, isLoading } = useStatisticsOverview();

    const stats = data?.stats ?? [];
    const chartDates = data?.chartDates ?? [];
    const cacheInfo = data?.cacheInfo;

    return (
        <div className="space-y-6">
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

                            <span>
                                Oxirgi: {cacheInfo?.last_calculated_at ?? "—"}
                            </span>

                            <span className="mx-2 text-[#d4a24a]">•</span>

                            <span>{cacheInfo?.progress_label ?? "Hisoblanmoqda (0/7)"}</span>

                            <button
                                type="button"
                                className="ml-4 rounded-full bg-white/70 px-4 py-1.5 text-[14px] font-semibold text-[#b7791f] transition hover:bg-white"
                            >
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
                    {isLoading
                        ? Array.from({ length: 4 }).map((_, index) => (
                            <div
                                key={index}
                                className="rounded-[24px] border border-white/10 bg-white/10 p-5 backdrop-blur-[2px]"
                            >
                                <div className="space-y-4">
                                    <div className="h-5 w-36 rounded bg-white/20" />
                                    <div className="h-14 w-24 rounded bg-white/20" />
                                    <div className="h-5 w-28 rounded bg-white/20" />
                                </div>
                            </div>
                        ))
                        : stats.map((item) => (
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
                        {/* umumiy statistics qismni manbalar bo'yicha trend qism */}
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

                            <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_320px]">
                                <div className="rounded-[20px] border border-[#f0eaff] bg-gradient-to-br from-[#fcfbff] to-[#f8faff] p-5">
                                    <div className="flex h-full min-h-[260px] items-center justify-center">
                                        <div className="w-full">
                                            <div className="mb-6 flex items-center justify-between text-[13px] font-medium text-[#94a3b8]">
                                                <span>Boshlanish</span>
                                                <span>Trend chizig‘i</span>
                                                <span>Oxiri</span>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-[#ede9fe] via-[#c4b5fd] to-[#ede9fe]" />
                                                <div className="h-[2px] w-[92%] rounded-full bg-gradient-to-r from-[#e9f7ff] via-[#93c5fd] to-[#e9f7ff]" />
                                                <div className="h-[2px] w-[96%] rounded-full bg-gradient-to-r from-[#eef2ff] via-[#818cf8] to-[#eef2ff]" />
                                                <div className="h-[2px] w-[88%] rounded-full bg-gradient-to-r from-[#f5f3ff] via-[#a78bfa] to-[#f5f3ff]" />
                                            </div>

                                            <div className="mt-8 grid grid-cols-3 gap-3 text-center">
                                                <div className="rounded-[14px] bg-white px-3 py-3 shadow-[0_4px_14px_rgba(15,23,42,0.04)]">
                                                    <p className="text-[12px] text-[#94a3b8]">Faol manba</p>
                                                    <p className="mt-1 text-[16px] font-bold text-[#1d2c44]">
                                                        {data?.sourceTrends?.[0]?.source ?? "—"}
                                                    </p>
                                                </div>

                                                <div className="rounded-[14px] bg-white px-3 py-3 shadow-[0_4px_14px_rgba(15,23,42,0.04)]">
                                                    <p className="text-[12px] text-[#94a3b8]">Jami manba</p>
                                                    <p className="mt-1 text-[16px] font-bold text-[#1d2c44]">
                                                        {data?.sourceTrends?.length ?? 0}
                                                    </p>
                                                </div>

                                                <div className="rounded-[14px] bg-white px-3 py-3 shadow-[0_4px_14px_rgba(15,23,42,0.04)]">
                                                    <p className="text-[12px] text-[#94a3b8]">Jami lead</p>
                                                    <p className="mt-1 text-[16px] font-bold text-[#1d2c44]">
                                                        {data?.sourceTrends?.reduce((sum, item) => sum + item.count, 0) ?? 0}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="rounded-[20px] border border-[#eef2f7] bg-[#fbfcfe] p-3">
                                    {data?.sourceTrends?.length ? (
                                        <div className="max-h-[320px] space-y-3 overflow-y-auto pr-2">
                                            {data.sourceTrends.map((item, index) => {
                                                const maxCount = Math.max(
                                                    ...data.sourceTrends.map((trend) => trend.count),
                                                    1
                                                );
                                                const percent = (item.count / maxCount) * 100;

                                                return (
                                                    <div
                                                        key={item.source}
                                                        className="rounded-[18px] border border-[#eef2f7] bg-white p-4 shadow-[0_8px_20px_rgba(15,23,42,0.05)]"
                                                    >
                                                        <div className="flex items-center justify-between gap-4">
                                                            <div className="flex min-w-0 items-center gap-3">
                                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3f4ff] text-[14px] font-bold text-[#7c3aed]">
                                                                    {index + 1}
                                                                </div>

                                                                <div className="min-w-0">
                                                                    <p className="truncate text-[15px] font-semibold text-[#1d2c44]">
                                                                        {item.source}
                                                                    </p>
                                                                    <p className="mt-1 text-[13px] text-[#94a3b8]">
                                                                        Kelgan bemorlar manbasi
                                                                    </p>
                                                                </div>
                                                            </div>

                                                            <div className="shrink-0 text-right">
                                                                <p className="text-[20px] font-extrabold leading-none text-[#7c3aed]">
                                                                    {item.count}
                                                                </p>
                                                                <p className="mt-1 text-[12px] font-medium text-[#94a3b8]">
                                                                    ta lead
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 h-[8px] overflow-hidden rounded-full bg-[#eef2ff]">
                                                            <div
                                                                className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] transition-all duration-500"
                                                                style={{ width: `${percent}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="flex min-h-[260px] items-center justify-center rounded-[16px] border border-dashed border-[#dbe4ee] bg-white text-center text-[#8ea1bb]">
                                            <div>
                                                <Share2 className="mx-auto h-8 w-8 text-[#b0bfd4]" />
                                                <p className="mt-3 text-[16px] font-medium">Ma’lumot yo‘q</p>
                                                <p className="mt-1 text-[13px] text-[#a0aec0]">
                                                    Manbalar statistikasi hali shakllanmagan
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        {/* umumiy statistics qismni kunlar bo'yicha tushun */}
                        <div className="grid gap-6 xl:grid-cols-[1fr_0.95fr]">
                            <div className="rounded-[26px] border border-[#88efc9] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <TrendingUp className="h-5 w-5 text-[#10b981]" />
                                        <h3 className="text-[18px] font-bold text-[#16253d]">
                                            Kunlar bo‘yicha tushum
                                        </h3>
                                    </div>

                                    <span className="text-[15px] font-medium text-[#97a6bc]">
                                        {data?.dailyRevenue?.length ?? 0} ta kun
                                    </span>
                                </div>

                                <div className="mt-5 rounded-[18px] bg-white">
                                    <div className="grid gap-3">
                                        {data?.dailyRevenue?.length ? (
                                            data.dailyRevenue.map((item) => {
                                                const maxAmount = Math.max(
                                                    ...data.dailyRevenue.map((revenue) => revenue.amount),
                                                    1
                                                );
                                                const percent = (item.amount / maxAmount) * 100;

                                                return (
                                                    <div
                                                        key={item.date}
                                                        className="rounded-[16px] border border-[#eef2f7] bg-[#fbfcfe] p-4"
                                                    >
                                                        <div className="flex items-center justify-between gap-4">
                                                            <div>
                                                                <p className="text-[14px] font-semibold text-[#1d2c44]">
                                                                    {item.date}
                                                                </p>
                                                                <p className="mt-1 text-[13px] text-[#94a3b8]">
                                                                    Kunlik tushum
                                                                </p>
                                                            </div>

                                                            <p className="text-[18px] font-extrabold text-[#7c3aed]">
                                                                {item.amount.toLocaleString()} UZS
                                                            </p>
                                                        </div>

                                                        <div className="mt-3 h-[8px] overflow-hidden rounded-full bg-[#eef2ff]">
                                                            <div
                                                                className="h-full rounded-full bg-gradient-to-r from-[#8b5cf6] to-[#6366f1]"
                                                                style={{ width: `${percent}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            <div className="flex h-[240px] items-center justify-center text-[#8ea1bb]">
                                                Ma’lumot yo‘q
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-2 text-[15px] font-medium text-[#3a4b64]">
                                    <span className="inline-block h-3 w-3 rounded-full bg-[#7c3aed]" />
                                    Umumiy tushum
                                </div>
                            </div>
                            {/* umumiy statistics qismni kunlar bo'yicha bemorlar */}
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
                                            {data?.dailyPatients?.length ?? 0} ta kun
                                        </span>
                                    </div>

                                    {data?.dailyPatients?.length ? (
                                        <div className="mt-5 max-h-[260px] space-y-3 overflow-y-auto pr-2">
                                            {data.dailyPatients.map((item) => {
                                                const maxCount = Math.max(
                                                    ...data.dailyPatients.map((patient) => patient.count),
                                                    1
                                                );
                                                const percent = (item.count / maxCount) * 100;

                                                return (
                                                    <div
                                                        key={item.date}
                                                        className="rounded-[18px] border border-[#e7eef6] bg-[#f8fbff] p-4 shadow-[0_6px_16px_rgba(15,23,42,0.04)]"
                                                    >
                                                        <div className="flex items-center justify-between gap-4">
                                                            <div className="min-w-0">
                                                                <p className="text-[15px] font-semibold text-[#1d2c44]">
                                                                    {item.date}
                                                                </p>
                                                                <p className="mt-1 text-[13px] text-[#94a3b8]">
                                                                    Kunlik bemorlar soni
                                                                </p>
                                                            </div>

                                                            <div className="shrink-0 text-right">
                                                                <p className="text-[22px] font-extrabold leading-none text-[#1d9bf0]">
                                                                    {item.count}
                                                                </p>
                                                                <p className="mt-1 text-[12px] font-medium text-[#94a3b8]">
                                                                    ta bemor
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <div className="mt-4 h-[8px] overflow-hidden rounded-full bg-[#dff0ff]">
                                                            <div
                                                                className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb] transition-all duration-500"
                                                                style={{ width: `${percent}%` }}
                                                            />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    ) : (
                                        <div className="flex h-[190px] items-center justify-center">
                                            <div className="text-center text-[#8ea1bb]">
                                                <ChartColumn className="mx-auto h-8 w-8" />
                                                <p className="mt-3 text-[16px] font-medium">Ma’lumot yo‘q</p>
                                                <p className="mt-1 text-[13px] text-[#a0aec0]">
                                                    Kunlik bemorlar statistikasi hali mavjud emas
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="h-[126px]" />
                            </div>

                        </div>
                        {/* umumiy statistics qismni eng faol shifokorlar soni */}
                        <div className="rounded-[24px] border border-[#e6edf5] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                            <div className="flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3">
                                    <Users className="h-5 w-5 text-[#1d9bf0]" />
                                    <h3 className="text-[18px] font-bold text-[#16253d]">
                                        Eng faol shifokorlar — Soni
                                    </h3>
                                </div>

                                <span className="text-[15px] font-medium text-[#97a6bc]">
                                    {data?.topDoctors?.length ?? 0} ta
                                </span>
                            </div>

                            {data?.topDoctors?.length ? (
                                <div className="mt-5 max-h-[260px] space-y-3 overflow-y-auto pr-2">
                                    {data.topDoctors.map((doctor) => {
                                        const maxPatients = Math.max(
                                            ...data.topDoctors.map((item) => item.patients_count),
                                            1
                                        );
                                        const percent = (doctor.patients_count / maxPatients) * 100;

                                        return (
                                            <div
                                                key={doctor.id}
                                                className="rounded-[18px] border border-[#eef2f7] bg-[#fbfcfe] p-4"
                                            >
                                                <div className="flex items-center justify-between gap-4">
                                                    <div className="flex min-w-0 items-center gap-3">
                                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e8f4ff] text-[14px] font-bold text-[#1d9bf0]">
                                                            {doctor.id}
                                                        </div>

                                                        <div className="min-w-0">
                                                            <p className="truncate text-[15px] font-semibold text-[#1d2c44]">
                                                                {doctor.doctor_name}
                                                            </p>
                                                            <p className="mt-1 text-[13px] text-[#94a3b8]">
                                                                Faol qabul soni
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="shrink-0 text-right">
                                                        <p className="text-[20px] font-extrabold leading-none text-[#1d9bf0]">
                                                            {doctor.patients_count}
                                                        </p>
                                                        <p className="mt-1 text-[12px] font-medium text-[#94a3b8]">
                                                            ta bemor
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="mt-4 h-[8px] overflow-hidden rounded-full bg-[#e8f4ff]">
                                                    <div
                                                        className="h-full rounded-full bg-gradient-to-r from-[#38bdf8] to-[#2563eb]"
                                                        style={{ width: `${percent}%` }}
                                                    />
                                                </div>

                                                <div className="mt-3 flex items-center justify-between text-[13px]">
                                                    <span className="text-[#94a3b8]">Tushum</span>
                                                    <span className="font-semibold text-[#1d2c44]">
                                                        {doctor.revenue.toLocaleString()} UZS
                                                    </span>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            ) : (
                                <div className="mt-5 flex h-[180px] items-center justify-center rounded-[18px] border border-dashed border-[#dbe4ee] bg-[#f8fafc] text-center text-[#8ea1bb]">
                                    <div>
                                        <Users className="mx-auto h-8 w-8 text-[#b0bfd4]" />
                                        <p className="mt-3 text-[16px] font-medium">Ma’lumot yo‘q</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* umumiy statistics qismi date bo'g'liq */}
                        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
                            {chartDates.map((date) => {
                                const revenueItem = data?.dailyRevenue?.find((item) => item.date === date);
                                const patientItem = data?.dailyPatients?.find((item) => item.date === date);

                                return (
                                    <div
                                        key={date}
                                        className="rounded-[16px] border border-[#edf2f7] bg-[#f8fafc] px-5 py-4 shadow-[0_6px_16px_rgba(15,23,42,0.03)]"
                                    >
                                        <p className="text-[16px] font-medium text-[#7b8aa0]">
                                            {date}
                                        </p>

                                        <p className="mt-3 text-[26px] font-extrabold leading-none text-[#1d2c44]">
                                            {revenueItem ? revenueItem.amount.toLocaleString() : 0}
                                        </p>

                                        <div className="mt-3 flex items-center justify-between text-[13px]">
                                            <span className="text-[#94a3b8]">Bemorlar</span>
                                            <span className="font-semibold text-[#1d9bf0]">
                                                {patientItem ? patientItem.count : 0} ta
                                            </span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                )}
            </section>
        </div>
    );
}