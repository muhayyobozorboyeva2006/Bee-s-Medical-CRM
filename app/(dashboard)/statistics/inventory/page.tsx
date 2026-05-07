"use client";

import { CalendarDays, Moon } from "lucide-react";
import InventoryUsageChart from "@/components/statistics/inventory-usage-chart";
import { useInventoryStatistics } from "@/features/statistics/hooks/omber-use-statistics";

export default function InventoryStatisticsPage() {
    const { data, isLoading } = useInventoryStatistics();

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                    <h1 className="text-[30px] font-extrabold leading-none text-[#1d2c44]">
                        Statistika
                    </h1>
                    <p className="mt-2 text-[16px] text-[#64748b]">
                        Klinikadagi umumiy ko‘rsatkichlar. Sana bo‘yicha filtrlab
                        ko‘rishingiz mumkin.
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

            <InventoryUsageChart data={data} isLoading={isLoading} />
        </div>
    );
}