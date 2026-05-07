import type { GenderStatisticsResponse } from "../types/Gender-statistics.types";
// import axios from "@/lib/axios";

export const getGenderStatistics =
    async (): Promise<GenderStatisticsResponse> => {
        // Real backend kelganda  shular ishlatman :
        // const { data } = await axios.get("/statistics/gender");
        // return data;

        return {
            total: 20,
            items: [
                {
                    label: "Erkak",
                    value: 8,
                    color: "#1d9bf0",
                },
                {
                    label: "Ayol",
                    value: 12,
                    color: "#f472b6",
                },
            ],
        };
    };