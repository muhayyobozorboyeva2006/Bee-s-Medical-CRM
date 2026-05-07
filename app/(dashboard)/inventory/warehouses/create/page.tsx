"use client";

import { useRouter } from "next/navigation";

import WarehouseForm from "@/components/inventory/warehouse-from";

import {
    createWarehouse,
} from "@/features/inventory/api/warehouses.api";

export default function Page() {
    const router = useRouter();

    const handleSubmit = async (values: any) => {
        await createWarehouse(values);

        router.push("/inventory/warehouses");
    };

    return (
        <div className="p-4 md:p-6">
            <WarehouseForm onSubmit={handleSubmit} />
        </div>
    );
}
