"use client";

import { useEffect, useState } from "react";

import {
    useParams,
    useRouter,
} from "next/navigation";

import WarehouseForm from "@/components/inventory/warehouse-from";

import {
    getWarehouseById,
    updateWarehouse,
} from "@/features/inventory/api/warehouses.api";

export default function Page() {
    const { id } = useParams();

    const router = useRouter();

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const res = await getWarehouseById(
                Number(id)
            );

            if (res) {
                setData({
                    name: res.name,
                    status: res.status,
                    saleStatus: res.saleStatus,
                    queue: res.queue,
                });
            }
        })();
    }, [id]);

    if (!data) {
        return (
            <div className="p-6">
                Yuklanmoqda...
            </div>
        );
    }

    const handleSubmit = async (values: any) => {
        await updateWarehouse(
            Number(id),
            values
        );

        router.push("/inventory/warehouses");
    };

    return (
        <div className="p-4 md:p-6">
            <WarehouseForm
                onSubmit={handleSubmit}
                defaultValues={data}
            />
        </div>
    );
}