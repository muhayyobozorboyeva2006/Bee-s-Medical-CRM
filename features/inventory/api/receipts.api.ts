import type {
    ReceiptItem,
    ReceiptsFilters,
    ReceiptsResponse,
} from "../types/invwntory.types";

const STORAGE_KEY = "receipts";

// seed (bo‘sh bo‘lsa to‘ldiradi)
const seed: ReceiptItem[] = [
    {
        id: 1,
        status: "Yangi",
        products: "Paracetamol, Analgin",
        date: "2026-03-11T10:30:00",
        warehouse: "Asosiy ombor",
        supplier: "Pharma LLC",
        quantity: 120,
    },
    {
        id: 2,
        status: "Qabul qilindi",
        products: "Ibuprofen",
        date: "2026-03-10T14:00:00",
        warehouse: "Filial ombor",
        supplier: "Med Import",
        quantity: 80,
    },
];

const getStorage = (): ReceiptItem[] => {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
        return seed;
    }
    return JSON.parse(raw);
};

const setStorage = (data: ReceiptItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// GET (filter bilan)
export const getReceipts = async (
    filters?: ReceiptsFilters
): Promise<ReceiptsResponse> => {
    let items = getStorage();

    if (filters?.search) {
        const s = filters.search.toLowerCase();

        items = items.filter((r) =>
            `${r.products} ${r.supplier} ${r.warehouse} ${r.id}`
                .toLowerCase()
                .includes(s)
        );
    }

    if (filters?.status && filters.status !== "ALL") {
        items = items.filter((r) => r.status === filters.status);
    }

    if (filters?.supplier) {
        const s = filters.supplier.toLowerCase();
        items = items.filter((r) =>
            r.supplier.toLowerCase().includes(s)
        );
    }

    return { items, total: items.length };
};

export const createReceipt = async (
    payload: Omit<ReceiptItem, "id">
): Promise<ReceiptItem> => {
    const items = getStorage();
    const newItem: ReceiptItem = { id: Date.now(), ...payload };
    const updated = [newItem, ...items];
    setStorage(updated);
    return newItem;
};

export const updateReceipt = async (
    id: number,
    payload: Omit<ReceiptItem, "id">
): Promise<ReceiptItem | null> => {
    const items = getStorage();
    const updated = items.map((r) =>
        r.id === id ? { ...r, ...payload } : r
    );
    setStorage(updated);
    return updated.find((r) => r.id === id) ?? null;
};

export const deleteReceipt = async (id: number) => {
    const items = getStorage();
    const updated = items.filter((r) => r.id !== id);
    setStorage(updated);
    return { success: true };
};

//  GET BY ID
export const getReceiptById = async (
    id: number
): Promise<ReceiptItem | null> => {
    const items = getStorage();
    return items.find((r) => r.id === id) ?? null;
};


/*
 REAL BACKEND (axios)

import axios from "@/lib/axios";

export const getReceipts = async (filters?: ReceiptsFilters) => {
  const { data } = await axios.get("/receipts", { params: filters });
  return data;
};

export const createReceipt = async (payload) => {
  const { data } = await axios.post("/receipts", payload);
  return data;
};

export const updateReceipt = async (id, payload) => {
  const { data } = await axios.patch(`/receipts/${id}`, payload);
  return data;
};

export const deleteReceipt = async (id) => {
  const { data } = await axios.delete(`/receipts/${id}`);
  return data;
};
*/