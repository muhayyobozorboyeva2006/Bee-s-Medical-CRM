"use client";

import { useRouter } from "next/navigation";

import { useWarehouses } from "@/features/inventory/hooks/use-warehouses";

import WarehouseHeader from "@/components/inventory/waehouse-header";
import WarehouseFilters from "@/components/inventory/warehouse-filters";
import WarehouseTable from "@/components/inventory/warehouse-table";

export default function Page() {
    const router = useRouter();

    const {
        items,
        loading,
        remove,
        filters,
        setFilters,
    } = useWarehouses();

    return (
        <div className="p-4 md:p-6 space-y-4">

            <WarehouseHeader
                total={items.length}
                onCreate={() =>
                    router.push("/inventory/warehouses/create")
                }
            />

            <WarehouseFilters
                filters={filters}
                setFilters={setFilters}
            />

            <WarehouseTable
                items={items}
                loading={loading}
                remove={remove}
            />
        </div>
    );
}
