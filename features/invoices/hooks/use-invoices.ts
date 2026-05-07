"use client";

import { useCallback, useEffect, useState } from "react";
import {
    createInvoice,
    deleteInvoice,
    getInvoiceById,
    getInvoices,
} from "../api/invoices.api";
import type {
    InvoiceItem,
    InvoicePayload,
    InvoiceSort,
    InvoiceStats,
    InvoiceStatus,
} from "../types/invoices.types";

const defaultStats: InvoiceStats = {
    all: 0,
    paid: 0,
    unpaid: 0,
    deleted: 0,
};

export const useInvoices = () => {
    const [items, setItems] = useState<InvoiceItem[]>([]); 
    const [stats, setStats] = useState<InvoiceStats>(defaultStats);
    const [search, setSearch] = useState("");
    const [status, setStatus] = useState<"" | InvoiceStatus>("");
    const [sort, setSort] = useState<InvoiceSort>("date_desc");
    const [isLoading, setIsLoading] = useState(true);

    const loadInvoices = useCallback(async () => {
        try {
            setIsLoading(true);

            const result = await getInvoices({
                search,
                status,
                sort,
            });

            setItems(Array.isArray(result.items) ? result.items : []); 
            setStats(result.stats ?? defaultStats);
        } finally {
            setIsLoading(false);
        }
    }, [search, status, sort]);

    const removeInvoice = async (id: number) => {
        const ok = window.confirm("Hisob-fakturani o‘chirishni xohlaysizmi?");
        if (!ok) return;

        await deleteInvoice(id);
        await loadInvoices();
    };

    useEffect(() => {
        loadInvoices();
    }, [loadInvoices]);

    return {
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
        refetch: loadInvoices,
    };
};

export const useCreateInvoice = () => {
    const submitInvoice = async (payload: InvoicePayload) => {
        return createInvoice(payload);
    };

    return { submitInvoice };
};

export const useInvoice = (id: number) => {
    const [invoice, setInvoice] = useState<InvoiceItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const load = async () => {
            setIsLoading(true);
            const result = await getInvoiceById(id);
            setInvoice(result);
            setIsLoading(false);
        };

        load();
    }, [id]);

    return { invoice, isLoading };
};