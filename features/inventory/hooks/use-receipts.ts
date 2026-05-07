"use client";

import { useEffect, useState } from "react";
import {
    getReceipts,
    deleteReceipt,
} from "../api/receipts.api";
import type {
    ReceiptItem,
    ReceiptsFilters,
} from "../types/invwntory.types";

export const useReceipts = () => {
    const [items, setItems] = useState<ReceiptItem[]>([]);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState<ReceiptsFilters>({
        search: "",
        status: "ALL",
    });

    const fetchData = async () => {
        setLoading(true);
        const res = await getReceipts(filters);
        setItems(res.items);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    const remove = async (id: number) => {
        await deleteReceipt(id);
        fetchData(); // refresh
    };

    return {
        items,
        loading,
        filters,
        setFilters,
        remove,
        refresh: fetchData,
    };
};