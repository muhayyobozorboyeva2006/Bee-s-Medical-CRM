"use client";

import { useEffect, useState } from "react";
import { getGenderStatistics } from "../api/Gender-statistisc.api";
import type { GenderStatisticsResponse } from "../types/Gender-statistics.types";

export const useGenderStatistics = () => {
    const [data, setData] = useState<GenderStatisticsResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let active = true;

        const load = async () => {
            try {
                setIsLoading(true);
                const result = await getGenderStatistics();

                if (active) {
                    setData(result);
                }
            } catch (error) {
                console.error("Gender statistics error:", error);
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