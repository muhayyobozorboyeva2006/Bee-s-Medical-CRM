"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import { useState } from "react";
import ServiceFilters from "@/components/services/services-filters";
import ServiceTable from "@/components/services/service-table";
import { useServices } from "@/features/services/hooks/use-services";

export default function ServicesPage() {
    const [search, setSearch] = useState("");

    const { services, isLoading, removeService } = useServices({
        search,
    });

    return (
        <div className="space-y-5">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-[28px] font-extrabold text-[#0f172a]">
                        Xizmatlar
                    </h1>
                    <p className="mt-2 text-[16px] text-[#64748b]">
                        Xizmat yaratish
                    </p>
                </div>

                <Link
                    href="/services/create"
                    className="inline-flex h-12 items-center gap-2 rounded-[14px] bg-gradient-to-r from-[#009b72] to-[#0ea5e9] px-5 text-[15px] font-bold text-white shadow-lg"
                >
                    <Plus className="h-4 w-4" />
                    Yangi Xizmat
                </Link>
            </div>

            <ServiceFilters
                search={search}
                setSearch={setSearch}
                total={services.length}
            />

            <ServiceTable
                services={services}
                isLoading={isLoading}
                onDelete={removeService}
            />
        </div>
    );
}