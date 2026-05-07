"use client";

import { ChevronUp } from "lucide-react";
import type { InvoiceStatusOverview } from "@/features/statistics/types/faktur-statistics.types";

interface InvoiceStatusOverviewProps {
    data?: InvoiceStatusOverview;
    isLoading?: boolean;
}
import { useState } from "react";
export default function InvoiceStatusOverview({
    data,
    isLoading = false,
}: InvoiceStatusOverviewProps) {
    const items = data?.items ?? [];
    const total = data?.total ?? 0;

    const gradient = items.length
        ? (() => {
            let current = 0;

            const stops = items.map((item) => {
                const percent = total > 0 ? (item.value / total) * 100 : 0;
                const start = current;
                const end = current + percent;
                current = end;

                return `${item.color} ${start}% ${end}%`;
            });

            return `conic-gradient(${stops.join(", ")})`;
        })()
        : "conic-gradient(#e5e7eb 0% 100%)";
    const [collapsed, setCollapsed] = useState(false);
    return (
        <div className="w-full max-w-[520px] rounded-[24px] border border-[#e6edf5] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
            <div className="flex items-start justify-between gap-4">
                <h3 className="text-[18px] font-bold text-[#1d2c44]">
                    Fakturalar bo‘yicha ko‘rinish
                </h3>

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
  <div className="mt-5 rounded-[22px] border border-[#eef2ff] bg-gradient-to-br from-[#fbfdff] via-white to-[#f8fbff] p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
    
    {isLoading ? (
      <div className="grid gap-5 sm:grid-cols-[150px_1fr]">
        <div className="mx-auto h-[128px] w-[128px] rounded-full bg-gradient-to-br from-[#eef2ff] to-[#e0f2fe]" />
        
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="h-7 rounded-[12px] bg-gradient-to-r from-[#f1f5f9] to-[#eaf2ff]"
            />
          ))}
        </div>
      </div>
    ) : (
      <div className="grid items-center gap-6 sm:grid-cols-[150px_1fr]">
        
        {/* DONUT */}
        <div className="flex justify-center">
          <div
            className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full p-[10px] shadow-[0_12px_28px_rgba(59,130,246,0.12)]"
            style={{ background: gradient }}
          >
            <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white text-center shadow-inner">
              <div>
                <p className="text-[12px] font-semibold text-[#94a3b8]">
                  Jami
                </p>
                <p className="mt-1 text-[28px] font-extrabold leading-none text-[#1d2c44]">
                  {total}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* LIST */}
        <div className="space-y-3">
          {items.length ? (
            items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between gap-4 rounded-[16px] border border-[#eef2f7] bg-white px-4 py-3 shadow-[0_6px_16px_rgba(15,23,42,0.035)] transition hover:-translate-y-[1px] hover:shadow-[0_10px_22px_rgba(15,23,42,0.06)]"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="inline-block h-3.5 w-3.5 rounded-full ring-4 ring-[#f1f5f9]"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-[15px] font-semibold text-[#334155]">
                    {item.label}
                  </span>
                </div>

                <span
                  className="rounded-full bg-[#f8fafc] px-3 py-1 text-[17px] font-extrabold"
                  style={{ color: item.color }}
                >
                  {item.value}
                </span>
              </div>
            ))
          ) : (
            <div className="flex h-[120px] items-center justify-center rounded-[18px] border border-dashed border-[#dbe4ee] bg-gradient-to-br from-[#f8fafc] to-[#eef6ff] text-[#8ea1bb]">
              Ma’lumot yo‘q
            </div>
          )}
        </div>
      </div>
    )}
  </div>
)}
        </div>
    );
}