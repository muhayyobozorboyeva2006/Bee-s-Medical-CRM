import axios from "@/lib/axios";
import type { InventoryStatisticsResponse } from "../types/ombor-statistics.types";

export const getInventoryStatistics =
    async (): Promise<InventoryStatisticsResponse> => {
        // Real backend kelganda shuni ishlatman
        // const { data } = await axios.get("/statistics/inventory");
        // return data;

        // Hozircha mock data
        return {
            total: 35,
            income: 22,
            outcome: 13,
            flow: [
                {
                    label: "Kirim",
                    value: 22,
                    color: "#10b981",
                },
                {
                    label: "Chiqim",
                    value: 13,
                    color: "#1d9bf0",
                },
            ],
            topUsedProducts: [
                {
                    id: 1,
                    name: "Shprits 5ml",
                    used_quantity: 34,
                    unit: "dona",
                },
                {
                    id: 2,
                    name: "Bint",
                    used_quantity: 21,
                    unit: "dona",
                },
                {
                    id: 3,
                    name: "Spirt",
                    used_quantity: 15,
                    unit: "ml",
                },
            ],
            lowStockProducts: [
                {
                    id: 1,
                    name: "Qo‘lqop",
                    quantity: 4,
                    min_quantity: 10,
                    unit: "dona",
                },
                {
                    id: 2,
                    name: "Maska",
                    quantity: 6,
                    min_quantity: 20,
                    unit: "dona",
                },
            ],
        };
    };