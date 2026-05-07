"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    useParams,
    useRouter,
} from "next/navigation";

import SupplierForm
    from "@/components/inventory/supplier-from";

import {
    getSupplierById,
    updateSupplier,
} from "@/features/inventory/api/suppliers.api";

export default function Page() {

    const { id } = useParams();

    const router = useRouter();

    const [data, setData] =
        useState<any>(null);

    useEffect(() => {

        (async () => {

            const res =
                await getSupplierById(
                    Number(id)
                );

            if (res) {
                setData(res);
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

    const handleSubmit =
        async (values: any) => {

            await updateSupplier(
                Number(id),
                values
            );

            router.push(
                "/inventory/suppliers"
            );
        };

    return (
        <SupplierForm
            onSubmit={handleSubmit}
            defaultValues={data}
        />
    );
}