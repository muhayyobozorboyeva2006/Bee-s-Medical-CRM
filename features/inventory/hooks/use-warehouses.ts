"use client";

import { useEffect, useState } from "react";

import {
    getWarehouses,
    deleteWarehouse,
} from "../api/warehouses.api";

import type {
    WarehouseItem,
    WarehousesFilters,
} from "../types/warehouses.types";

export const useWarehouses = () => {
    const [items, setItems] = useState<WarehouseItem[]>([]);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] =
        useState<WarehousesFilters>({});

    const fetchData = async () => {
        setLoading(true);

        const res = await getWarehouses(filters);

        setItems(res.items);

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, [filters]);

    const remove = async (id: number) => {
        await deleteWarehouse(id);

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