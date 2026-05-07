"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ReceiptForm from "@/components/inventory/receipt-form";
import {
    getReceiptById,
    updateReceipt,
} from "@/features/inventory/api/receipts.api";

export default function Page() {
    const { id } = useParams();
    const router = useRouter();

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const res = await getReceiptById(Number(id));
            if (res) setData(res);
        })();
    }, [id]);

    if (!data) return <div className="p-6">Yuklanmoqda...</div>;

    const handleSubmit = async (values: any) => {
        await updateReceipt(Number(id), values);
        router.push("/inventory/receipts");
    };

    return (
        <div className="p-6">
            <ReceiptForm onSubmit={handleSubmit} defaultValues={data} />
        </div>
    );
}