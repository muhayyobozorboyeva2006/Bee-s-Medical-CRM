"use client";

import InvoiceTable from "@/components/cashier/invoice-table";
import { useInvoices } from "@/features/invoices/hooks/use-invoices";

export default function InvoicesPage() {
    const { items, isLoading, removeInvoice } = useInvoices();

    return (
        <div className="space-y-6">
            <h1 className="text-xl font-bold">Hisob-fakturalar</h1>
            <InvoiceTable
                items={items}
                isLoading={isLoading}
                onDelete={removeInvoice}
            />
        </div>
    );
}