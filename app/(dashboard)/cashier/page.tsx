"use client";

import Link from "next/link";
import { Plus } from "lucide-react";
import InvoiceFilters from "@/components/cashier/invoice-filters";
import InvoiceTable from "@/components/cashier/invoice-table";
import { useInvoices } from "@/features/invoices/hooks/use-invoices";

export default function CashierInvoicesPage() {
    const {
        items,
        stats,
        search,
        status,
        sort,
        isLoading,
        setSearch,
        setStatus,
        setSort,
        removeInvoice,
    } = useInvoices();

    const cards = [
        { label: "Hammasi", value: stats.all },
        { label: "To‘langan", value: stats.paid },
        { label: "To‘lanmagan", value: stats.unpaid },
        { label: "O‘chirilgan", value: stats.deleted },
    ];

    return (
        <div className="space-y-5">
            <section className="rounded-[18px] border border-[#dde6f0] bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="flex items-start justify-between">
                    <div>
                        <h1 className="text-[26px] font-extrabold text-[#0f172a]">
                            Hisob-fakturalar
                        </h1>
                        <p className="mt-2 text-[15px] text-[#334155]">
                            {stats.paid} / {stats.all}
                        </p>
                    </div>

                    <Link
                        href="/cashier/invoices/create"
                        className="inline-flex h-10 items-center gap-2 rounded-[12px] bg-[#111827] px-4 text-[14px] font-bold text-white"
                    >
                        <Plus className="h-4 w-4" />
                        Yangi Hisob-Faktura
                    </Link>
                </div>

                <div className="mt-5 grid gap-3 md:grid-cols-4">
                    {cards.map((card) => (
                        <div
                            key={card.label}
                            className="rounded-[12px] border border-[#dbe4ee] bg-[#fbfcfe] px-4 py-3"
                        >
                            <p className="text-[13px] text-[#64748b]">{card.label}</p>
                            <p className="mt-2 text-[22px] font-extrabold text-[#0f172a]">
                                {card.value}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            <InvoiceFilters
                stats={stats}
                search={search}
                status={status}
                sort={sort}
                setSearch={setSearch}
                setStatus={setStatus}
                setSort={setSort}
            />

            <InvoiceTable
                items={items}
                isLoading={isLoading}
                onDelete={removeInvoice}
            />
        </div>
    );
}