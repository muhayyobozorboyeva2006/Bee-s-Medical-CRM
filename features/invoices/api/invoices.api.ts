import type {
    InvoiceItem,
    InvoicePayload,
    InvoicesFilters,
    InvoicesResponse,
} from "../types/invoices.types";

let mockInvoices: InvoiceItem[] = [
    {
        id: 1,
        code: "INV-001",
        patient_name: "Aliya Karimova",
        total: 250000,
        status: "paid",
        created_at: "2026-03-11",
    },
    {
        id: 2,
        code: "INV-002",
        patient_name: "Javohir Aliyev",
        total: 180000,
        status: "unpaid",
        created_at: "2026-03-12",
    },
];

const getStats = (items: InvoiceItem[]) => ({
    all: items.length,
    paid: items.filter((item) => item.status === "paid").length,
    unpaid: items.filter((item) => item.status === "unpaid").length,
    deleted: items.filter((item) => item.status === "deleted").length,
});

export const getInvoices = async (
    filters?: InvoicesFilters
): Promise<InvoicesResponse> => {
    let items = [...mockInvoices];

    if (filters?.status) {
        items = items.filter((item) => item.status === filters.status);
    }

    if (filters?.search) {
        const search = filters.search.toLowerCase();

        items = items.filter((item) =>
            `${item.code} ${item.patient_name}`.toLowerCase().includes(search)
        );
    }

    if (filters?.sort === "date_desc") {
        items.sort((a, b) => b.created_at.localeCompare(a.created_at));
    }

    if (filters?.sort === "date_asc") {
        items.sort((a, b) => a.created_at.localeCompare(b.created_at));
    }

    if (filters?.sort === "code_desc") {
        items.sort((a, b) => b.code.localeCompare(a.code));
    }

    if (filters?.sort === "code_asc") {
        items.sort((a, b) => a.code.localeCompare(b.code));
    }

    if (filters?.sort === "total_desc") {
        items.sort((a, b) => b.total - a.total);
    }

    if (filters?.sort === "total_asc") {
        items.sort((a, b) => a.total - b.total);
    }

    return {
        items,
        total: items.length,
        stats: getStats(mockInvoices),
    };
};

export const getInvoiceById = async (
    id: number
): Promise<InvoiceItem | null> => {
    return mockInvoices.find((invoice) => invoice.id === id) ?? null;
};

export const createInvoice = async (
    payload: InvoicePayload
): Promise<InvoiceItem> => {
    const newInvoice: InvoiceItem = {
        id: Date.now(),
        ...payload,
        created_at: new Date().toISOString().slice(0, 10),
    };

    mockInvoices = [newInvoice, ...mockInvoices];

    return newInvoice;
};

export const deleteInvoice = async (id: number) => {
    mockInvoices = mockInvoices.map((invoice) =>
        invoice.id === id ? { ...invoice, status: "deleted" } : invoice
    );

    return { success: true, id };
};

/*
 BACKEND :

import axios from "@/lib/axios";

export const getInvoices = async (filters?: InvoicesFilters) => {
  const { data } = await axios.get("/invoices", {
    params: {
      search: filters?.search || undefined,
      status: filters?.status || undefined,
      sort: filters?.sort || undefined,
    },
  });

  return data;
};

export const getInvoiceById = async (id: number) => {
  const { data } = await axios.get(`/invoices/${id}`);
  return data;
};

export const createInvoice = async (payload: InvoicePayload) => {
  const { data } = await axios.post("/invoices", payload);
  return data;
};

export const deleteInvoice = async (id: number) => {
  const { data } = await axios.patch(`/invoices/${id}/delete`);
  return data;
};
*/