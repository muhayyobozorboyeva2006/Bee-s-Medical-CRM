"use client";

import { useEffect, useState } from "react";
import { getStatisticsOverview } from "../api/faktur-statistics.api";
import type { StatisticsOverviewResponse } from "../types/faktur-statistics.types";

export const useStatisticsOverview = () => {
    const [data, setData] = useState<StatisticsOverviewResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let active = true;

        const load = async () => {
            try {
                setIsLoading(true);
                const result = await getStatisticsOverview();
                if (active) {
                    setData(result);
                }
            } catch (error) {
                console.error("statistics overview error:", error);
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