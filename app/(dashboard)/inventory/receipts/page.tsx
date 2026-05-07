"use client";

import { useReceipts } from "@/features/inventory/hooks/use-receipts";
import ReceiptTable from "@/components/inventory/receipt-table";
import { createReceipt } from "@/features/inventory/api/receipts.api";
import { useRouter } from "next/navigation";

export default function Page() {
    const { items, loading, remove, filters, setFilters, refresh } = useReceipts();
    const router = useRouter();
    const handleCreate = async () => {
        await createReceipt({
            status: "Yangi",
            products: "Test mahsulot",
            date: new Date().toISOString(),
            warehouse: "Asosiy ombor",
            supplier: "Test Supplier",
            quantity: 50,
        });
        refresh();
    };

    return (
        <div className="p-6 space-y-4">

            {/* HEADER */}
            <div className="bg-white p-5 rounded-2xl shadow-sm">

                <div className="flex items-start justify-between gap-4">

                    <div>
                        <h1 className="text-xl font-semibold">
                            Mahsulot kelishi{" "}
                            <span className="text-gray-400">
                                {items.length}
                            </span>
                        </h1>

                        <p className="text-sm text-gray-500">
                            Kirim hujjatlari va audit uchun tartibli ro‘yxat
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            router.push("/inventory/receipts/create")
                        }
                        className="
              bg-gradient-to-r
              from-green-400
              to-blue-500
              text-white
              px-4
              py-2
              rounded-xl
              whitespace-nowrap
              flex-shrink-0
            "
                    >
                        + Yaratish
                    </button>

                </div>
            </div>

            {/* FILTER */}
            <div className="bg-white p-4 rounded-2xl shadow-sm overflow-x-auto">

                <div className="flex gap-3 min-w-max">

                    <input
                        value={filters.search || ""}
                        placeholder="Qidiruv (tavsif/raqam)"
                        className="border px-3 py-2 rounded-xl w-64"
                        onChange={(e) =>
                            setFilters((p) => ({
                                ...p,
                                search: e.target.value,
                            }))
                        }
                    />

                    <button
                        onClick={() =>
                            setFilters((p) => ({
                                ...p,
                                status:
                                    p.status === "Yangi"
                                        ? "ALL"
                                        : "Yangi",
                            }))
                        }
                        className="border px-4 py-2 rounded-xl whitespace-nowrap"
                    >
                        Holat
                    </button>

                    <button
                        onClick={() =>
                            setFilters((p) => ({
                                ...p,
                                supplier: "pharma",
                            }))
                        }
                        className="border px-4 py-2 rounded-xl whitespace-nowrap"
                    >
                        Ta'minotchi
                    </button>

                </div>
            </div>

            <ReceiptTable 
            items={items}
            loading={loading}
            remove={remove} />
        </div>
    );
}