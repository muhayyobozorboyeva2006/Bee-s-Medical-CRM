"use client";

import { useEffect, useState } from "react";
import { getDoctorsStatistics } from "../api/doctors-statisticc.api";
import type { DoctorsStatisticsResponse } from "../types/doctors-statistics.types";

export const useDoctorsStatistics = () => {
    const [data, setData] = useState<DoctorsStatisticsResponse | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let active = true;

        const load = async () => {
            try {
                setIsLoading(true);
                const result = await getDoctorsStatistics();
                if (active) {
                    setData(result);
                }
            } catch (error) {
                console.error("Doctors statistics error:", error);
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