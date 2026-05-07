"use client";

import Link from "next/link";
import { RefreshCw, Trash2 } from "lucide-react";
import type { InvoiceItem } from "@/features/invoices/types/invoices.types";

interface InvoiceTableProps {
    items: InvoiceItem[];
    isLoading: boolean;
    onDelete: (id: number) => void;
}

export default function InvoiceTable({
    items,
    isLoading,
    onDelete,
}: InvoiceTableProps) {
    return (
        <div className="rounded-[18px] border border-[#dde6f0] bg-white p-4 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="min-h-[220px] rounded-[16px] border border-[#dde6f0]">
                {isLoading ? (
                    <div className="flex h-[220px] items-center justify-center text-[#64748b]">
                        Yuklanmoqda...
                    </div>
                ) : items.length ? (
                    <div className="divide-y divide-[#edf2f7]">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="grid grid-cols-[1fr_1fr_130px_130px_70px] items-center gap-4 px-5 py-4 text-[15px] text-[#0f172a]"
                            >
                                <Link href={`/cashier/invoices/${item.id}`}>
                                    <p className="font-bold">{item.code}</p>
                                    <p className="mt-1 text-[#64748b]">{item.created_at}</p>
                                </Link>

                                <p>{item.patient_name}</p>

                                <p className="font-bold">
                                    {item.total.toLocaleString()} UZS
                                </p>

                                <span className="rounded-full bg-[#f1f5f9] px-3 py-1 text-center text-[13px] font-bold">
                                    {item.status}
                                </span>

                                <button
                                    type="button"
                                    onClick={() => onDelete(item.id)}
                                    className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1f2] text-[#e11d48]"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </button>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex h-[220px] flex-col items-center justify-center text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ccfbf1] text-[#10b981]">
                            <RefreshCw className="h-7 w-7" />
                        </div>

                        <p className="mt-5 text-[18px] font-extrabold text-[#0f172a]">
                            Hech narsa topilmadi
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}