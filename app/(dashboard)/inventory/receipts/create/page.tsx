"use client";

import { useRouter } from "next/navigation";
import ReceiptForm from "@/components/inventory/receipt-form";
import { createReceipt } from "@/features/inventory/api/receipts.api";

export default function Page() {
    const router = useRouter();

    const handleSubmit = async (values: any) => {
        await createReceipt(values);
        router.push("/inventory/receipts");
    };

    return (
        <div className="p-6">
            <ReceiptForm onSubmit={handleSubmit} />
        </div>
    );
}