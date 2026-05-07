"use client";

import InvoiceStatusOverview from "@/components/statistics/invoice-status-chart";
import { useStatisticsOverview } from "@/features/statistics/hooks/faktur-use-statisctics";
import { CalendarDays, Moon } from "lucide-react";

export default function StatisticsOverviewPage() {
    const { data, isLoading } = useStatisticsOverview();

    return (
        <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h1 className="text-[38px] font-extrabold tracking-[-0.02em] text-[#1d2c44]">
                        Statistika
                    </h1>
                    <p className="mt-2 text-[18px] text-[#64748b]">
                        Klinikadagi umumiy ko‘rsatkichlar. Sana bo‘yicha filtrlab ko‘rishingiz mumkin.
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="inline-flex h-10 items-center gap-2 rounded-[18px] border border-[#e2e8f0] bg-white px-4 text-[15px] font-medium text-[#1d2c44] shadow-sm">
                        <CalendarDays className="h-4 w-4 text-[#10b981]" />
                        Maxsus
                    </button>

                    <button className="inline-flex h-10 items-center gap-2 rounded-[18px] border border-[#e2e8f0] bg-white px-4 text-[15px] font-medium text-[#1d2c44] shadow-sm">
                        <Moon className="h-4 w-4 text-[#1d9bf0]" />
                        Tungi
                    </button>
                </div>
            </div>

            <InvoiceStatusOverview
                data={data?.invoiceStatusOverview}
                isLoading={isLoading}
            />
        </div>
    );
}