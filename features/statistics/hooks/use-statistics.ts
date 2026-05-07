"use client";

import { useEffect, useState } from "react";
import { getStatisticsOverview,} from "../api/statisticc.api";
import type { StatisticsOverviewParams, StatisticsOverviewResponse,  } from "../types/statistics.types";


export const useStatisticsOverview = (params?: StatisticsOverviewParams) => {
    const [data, setData] = useState<StatisticsOverviewResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let active = true;

        const load = async () => {
            try {
                setIsLoading(true);
                const result = await getStatisticsOverview(params);
                if (active) {
                    setData(result);
                }
            } catch (error) {
                console.error("Statistics overview load error:", error);
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
    }, [params?.from, params?.to]);

    return { data, isLoading };
};
