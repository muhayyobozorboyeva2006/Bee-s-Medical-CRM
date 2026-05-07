"use client";

import { useEffect, useState } from "react";
import { getWastes, createWaste } from "../api/wastes.api";
import type { WasteItem, WastePayload } from "../types/wastes.types";

export const useWastes = () => {
    const [items, setItems] = useState<WasteItem[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        const res = await getWastes();
        setItems(res.items);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const add = async (payload: WastePayload) => {
        await createWaste(payload);
        fetchData();
    };

    return { items, loading, add };
};