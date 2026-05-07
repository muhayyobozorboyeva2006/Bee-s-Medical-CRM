"use client";

import InvoiceForm from "@/components/cashier/invoice-form";
import { useCreateInvoice } from "@/features/invoices/hooks/use-invoices";

export default function CreateInvoicePage() {
    const { submitInvoice } = useCreateInvoice();

    return <InvoiceForm onSubmit={submitInvoice} />;
}