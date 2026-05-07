"use client";

import { useEffect, useState } from "react";
import { getInventoryStatistics } from "../api/ombor-statistics.api";
import type { InventoryStatisticsResponse } from "../types/ombor-statistics.types";

export const useInventoryStatistics = () => {
    const [data, setData] = useState<InventoryStatisticsResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let active = true;

        const load = async () => {
            try {
                setIsLoading(true);
                const result = await getInventoryStatistics();

                if (active) {
                    setData(result);
                }
            } catch (error) {
                console.error("Inventory statistics error:", error);
            } finally {
                if (active) {
                    setIsLoading(false);
                }
            }
        };

        load();

        return () => {
            active = false;
        };
    }, []);

    return { data, isLoading };
};