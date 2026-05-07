"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    deleteSupplier,
    getSuppliers,
} from "../api/suppliers.api";

import type {
    SupplierItem,
    SuppliersFilters,
} from "../types/suppliers.tpyes";

export const useSuppliers = () => {

    const [items, setItems] =
        useState<SupplierItem[]>([]);

    const [loading, setLoading] =
        useState(false);

    const [filters, setFilters] =
        useState<SuppliersFilters>({});

    const fetchData = async () => {

        setLoading(true);

        const res =
            await getSuppliers(filters);

        setItems(res.items);

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    const remove = async (
        id: number
    ) => {

        await deleteSupplier(id);

        fetchData();
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