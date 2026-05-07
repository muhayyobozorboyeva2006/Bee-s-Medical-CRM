"use client";

import {
    Boxes,
    ChevronUp,
    CircleCheck,
    TrendingDown,
    TrendingUp,
} from "lucide-react";
import type { InventoryStatisticsResponse } from "@/features/statistics/types/ombor-statistics.types";

interface InventoryUsageChartProps {
    data: InventoryStatisticsResponse | null;
    isLoading?: boolean;
}
import { useState } from "react";

export default function InventoryUsageChart({
    data,
    isLoading = false,
}: InventoryUsageChartProps) {
    const total = data?.total ?? 0;
    const flow = data?.flow ?? [];

    const gradient = flow.length
        ? (() => {
            let current = 0;

            const stops = flow.map((item) => {
                const percent = total > 0 ? (item.value / total) * 100 : 0;
                const start = current;
                const end = current + percent;
                current = end;

                return `${item.color} ${start}% ${end}%`;
            });

            return `conic-gradient(${stops.join(", ")})`;
        })()
        : "conic-gradient(#e2e8f0 0% 100%)";
    const [collapsed, setCollapsed] = useState(false);
    return (
        <section className="rounded-[28px] border border-[#e6edf5] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-[20px] font-bold text-[#1d2c44]">
                    Ombor analitikasi
                </h2>

                <button
                    type="button"
                    onClick={() => setCollapsed((prev) => !prev)}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-[#7d8ca3] transition hover:bg-[#f3f7fb]"
                >
                    <ChevronUp
                        className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""
                            }`}
                    />
                </button>
            </div>
            
            {!collapsed && (
                <div className="mt-5 grid gap-6 xl:grid-cols-[1fr_0.95fr]">
                <div className="rounded-[24px] border border-[#8eecc7] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
                    <h3 className="text-[16px] font-bold text-[#16253d]">
                        Kirim vs Chiqim
                    </h3>

                    {isLoading ? (
                        <div className="flex h-[330px] items-center justify-center text-[#8ea1bb]">
                            Yuklanmoqda...
                        </div>
                    ) : (
                        <>
                            <div className="mt-8 grid items-center gap-8 lg:grid-cols-[320px_1fr]">
                                <div className="flex justify-center">
                                    <div
                                        className="flex h-[220px] w-[220px] items-center justify-center rounded-full"
                                        style={{ background: gradient }}
                                    >
                                        <div className="flex h-[170px] w-[170px] items-center justify-center rounded-full bg-white">
                                            <div className="text-center">
                                                <p className="text-[15px] font-medium text-[#64748b]">
                                                    Jami
                                                </p>
                                                <p className="mt-1 text-[34px] font-extrabold leading-none text-[#0f172a]">
                                                    {total}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {flow.map((item) => (
                                        <div
                                            key={item.label}
                                            className="flex items-center justify-between gap-4"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span
                                                    className="inline-block h-3.5 w-3.5 rounded-full"
                                                    style={{ backgroundColor: item.color }}
                                                />
                                                <span className="text-[15px] font-medium text-[#334155]">
                                                    {item.label}
                                                </span>
                                            </div>

                                            <span className="text-[18px] font-bold text-[#0f172a]">
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 grid gap-4 md:grid-cols-2">
                                <div className="rounded-[18px] border border-[#e6edf5] bg-white px-4 py-4 shadow-[0_6px_16px_rgba(15,23,42,0.03)]">
                                    <div className="flex items-center gap-2 text-[#10b981]">
                                        <TrendingUp className="h-4 w-4" />
                                        <span className="text-[15px] font-bold">Kirim</span>
                                    </div>
                                    <p className="mt-3 text-[26px] font-extrabold text-[#0f172a]">
                                        {data?.income ?? 0}
                                    </p>
                                </div>

                                <div className="rounded-[18px] border border-[#e6edf5] bg-white px-4 py-4 shadow-[0_6px_16px_rgba(15,23,42,0.03)]">
                                    <div className="flex items-center gap-2 text-[#1d9bf0]">
                                        <TrendingDown className="h-4 w-4" />
                                        <span className="text-[15px] font-bold">Chiqim</span>
                                    </div>
                                    <p className="mt-3 text-[26px] font-extrabold text-[#0f172a]">
                                        {data?.outcome ?? 0}
                                    </p>
                                </div>
                            </div>
                        </>
                    )}
                </div>

                <div className="rounded-[24px] border border-[#e6edf5] bg-white p-5 shadow-[0_16px_35px_rgba(15,23,42,0.08)]">
                    <div className="flex items-center gap-3">
                        <Boxes className="h-5 w-5 text-[#6366f1]" />
                        <h3 className="text-[16px] font-bold text-[#16253d]">
                            Top sarflangan tovarlar
                        </h3>
                    </div>

                    {data?.topUsedProducts?.length ? (
                        <div className="mt-5 max-h-[340px] space-y-3 overflow-y-auto pr-2">
                            {data.topUsedProducts.map((product, index) => (
                                <div
                                    key={product.id}
                                    className="rounded-[18px] border border-[#eef2f7] bg-[#f8fafc] p-4"
                                >
                                    <div className="flex items-center justify-between gap-4">
                                        <div className="flex min-w-0 items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef2ff] text-[14px] font-bold text-[#6366f1]">
                                                {index + 1}
                                            </div>

                                            <div className="min-w-0">
                                                <p className="truncate text-[15px] font-semibold text-[#1d2c44]">
                                                    {product.name}
                                                </p>
                                                <p className="mt-1 text-[13px] text-[#94a3b8]">
                                                    Sarflangan mahsulot
                                                </p>
                                            </div>
                                        </div>

                                        <div className="shrink-0 text-right">
                                            <p className="text-[20px] font-extrabold text-[#6366f1]">
                                                {product.used_quantity}
                                            </p>
                                            <p className="text-[12px] font-medium text-[#94a3b8]">
                                                {product.unit}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="mt-6 text-[24px] font-medium text-[#94a3b8]">—</p>
                    )}
                </div>

                <div className="rounded-[22px] border border-[#facc15] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.07)] xl:col-span-1">
                    <div className="flex items-center gap-3">
                        <Boxes className="h-5 w-5 text-[#f43f5e]" />
                        <h3 className="text-[16px] font-bold text-[#16253d]">
                            Kam qolganlar
                        </h3>
                    </div>

                    {data?.lowStockProducts?.length ? (
                        <div className="mt-4 space-y-3">
                            {data.lowStockProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="flex items-center justify-between rounded-[16px] border border-[#fee2e2] bg-[#fff7f7] px-4 py-3"
                                >
                                    <div>
                                        <p className="text-[15px] font-semibold text-[#1d2c44]">
                                            {product.name}
                                        </p>
                                        <p className="mt-1 text-[13px] text-[#94a3b8]">
                                            Minimum: {product.min_quantity} {product.unit}
                                        </p>
                                    </div>

                                    <p className="text-[18px] font-extrabold text-[#f43f5e]">
                                        {product.quantity} {product.unit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="mt-4 flex items-center gap-2 text-[#10b981]">
                            <CircleCheck className="h-5 w-5" />
                            <span className="text-[15px] font-medium">Ma’lumot yo‘q</span>
                        </div>
                    )}
                </div>
            
                </div>
            )}
        </section>
    );
}