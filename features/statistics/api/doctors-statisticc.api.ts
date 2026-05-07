import type { DoctorsStatisticsResponse } from "../types/doctors-statistics.types";
// import axios from "@/lib/axios";

export const getDoctorsStatistics =
    async (): Promise<DoctorsStatisticsResponse> => {
        return {
            dailyRevenue: [
                { day: "Pay", amount: 12 },
                { day: "Juma", amount: 16 },
                { day: "Shan", amount: 8 },
                { day: "Yak", amount: 10 },
                { day: "Dush", amount: 14 },
                { day: "Sesh", amount: 18 },
                { day: "Chor", amount: 11 },
            ],
            dailyPatients: [
                { day: "Pay", count: 4 },
                { day: "Juma", count: 7 },
                { day: "Shan", count: 3 },
                { day: "Yak", count: 5 },
                { day: "Dush", count: 8 },
                { day: "Sesh", count: 6 },
                { day: "Chor", count: 4 },
            ],
            ageDistribution: [
                { label: "0-12", count: 3 },
                { label: "13-25", count: 8 },
                { label: "26-40", count: 14 },
                { label: "41-55", count: 9 },
                { label: "55+", count: 4 },
            ],
            serviceDistribution: [
                { label: "Terapiya", count: 12 },
                { label: "UZI", count: 7 },
                { label: "Analiz", count: 10 },
                { label: "Konsultatsiya", count: 6 },
            ],
            totalServices: 35,
        };
    };

/*
Haqiqiy backend kelganda shun qo'yman:

export const getDoctorsStatistics =
  async (): Promise<DoctorsStatisticsResponse> => {
    const { data } = await axios.get("/statistics/doctors");
    return data;
  };
*/
