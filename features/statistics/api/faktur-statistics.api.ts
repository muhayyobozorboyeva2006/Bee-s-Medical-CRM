import type { StatisticsOverviewResponse } from "../types/faktur-statistics.types";
// import axios from "@/lib/axios";

export const getStatisticsOverview =
    async (): Promise<StatisticsOverviewResponse> => {
        return {
            invoiceStatusOverview: {
                total: 24,
                items: [
                    { label: "To‘langan", value: 9, color: "#10b981" },
                    { label: "To‘lanmagan", value: 7, color: "#f59e0b" },
                    { label: "Qoralama", value: 5, color: "#64748b" },
                    { label: "Bekor qilingan", value: 3, color: "#ef4444" },
                ],
            },
        };
    };

/*
Haqqiy backend kelganda  shun qo'yish kerak:

export const getStatisticsOverview =
  async (): Promise<StatisticsOverviewResponse> => {
    const { data } = await axios.get("/statistics/overview");
    return data;
  };
*/