"use client";

import { useRouter } from "next/navigation";

import SupplierForm
    from "@/components/inventory/supplier-from";

import {
    createSupplier,
} from "@/features/inventory/api/suppliers.api";

export default function Page() {

    const router = useRouter();

    const handleSubmit =
        async (data: any) => {

            await createSupplier(data);

            router.push(
                "/inventory/suppliers"
            );
        };

    return (
        <SupplierForm
            onSubmit={handleSubmit}
        />
    );
}