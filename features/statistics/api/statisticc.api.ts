import type {
    StatisticsOverviewParams,
    StatisticsOverviewResponse,
} from "../types/statistics.types";
// import axios from "@/lib/axios" ishlatman;


export const getStatisticsOverview = async (
    _params?: StatisticsOverviewParams,
): Promise<StatisticsOverviewResponse> => {
    return {
        stats: [
            {
                title: "UMUMIY TUSHUM",
                value: "12500000",
                suffix: "UZS",
                subtext: "Oxirgi 30 kunlik tushum",
            },
            {
                title: "FAKTURALAR (JAMI)",
                value: "30",
                suffix: "",
                subtext: "To‘langan 18 • Bekor qilingan 4 • Kutilmoqda 8",
            },
            {
                title: "JINS BO‘YICHA ULUSH",
                value: "60%",
                suffix: "Ayol",
                subtext: "12 / 20",
            },
            {
                title: "30 KUN",
                value: "42",
                suffix: "Bemor",
                subtext: "Yangi: 14",
            },
        ],
        chartDates: [
            "2026-03-07",
            "2026-03-08",
            "2026-03-09",
            "2026-03-10",
            "2026-03-11",
        ],
        dailyRevenue: [
            {
                date: "2026-03-07",
                amount: 2100000,
            },
            {
                date: "2026-03-08",
                amount: 1850000,
            },
            {
                date: "2026-03-09",
                amount: 2560000,
            },
            {
                date: "2026-03-10",
                amount: 1980000,
            },
            {
                date: "2026-03-11",
                amount: 4010000,
            },
        ],
        dailyPatients: [
            {
                date: "2026-03-07",
                count: 8,
            },
            {
                date: "2026-03-08",
                count: 6,
            },
            {
                date: "2026-03-09",
                count: 11,
            },
            {
                date: "2026-03-10",
                count: 7,
            },
            {
                date: "2026-03-11",
                count: 10,
            },
        ],
        topDoctors: [
            {
                id: 1,
                doctor_name: "Dr. Azizbek Karimov",
                patients_count: 18,
                revenue: 5400000,
            },
            {
                id: 2,
                doctor_name: "Dr. Malika Raximova",
                patients_count: 14,
                revenue: 3900000,
            },
            {
                id: 3,
                doctor_name: "Dr. Sardor Tursunov",
                patients_count: 10,
                revenue: 3200000,
            },
        ],
        sourceTrends: [
            {
                source: "Telegram",
                count: 12,
            },
            {
                source: "Instagram",
                count: 9,
            },
            {
                source: "Tavsiya",
                count: 7,
            },
            {
                source: "Sayt",
                count: 5,
            },
            {
                source: "Qo‘ng‘iroq",
                count: 3,
            },
        ],
        cacheInfo: {
            last_calculated_at: "2026-03-11T10:45:00Z",
            progress_label: "Hisoblab bo‘lindi (7/7)",
        },
        invoiceStatusOverview: {
            total: 30,
            items: [
                {
                    label: "To‘langan",
                    value: 18,
                    color: "#10b981",
                },
                {
                    label: "To‘lanmagan",
                    value: 8,
                    color: "#f59e0b",
                },
                {
                    label: "Qoralama",
                    value: 0,
                    color: "#64748b",
                },
                {
                    label: "Bekor qilingan",
                    value: 4,
                    color: "#ef4444",
                },
            ],
        },
    };
}
/*
Backend tayyor   bo‘lganda  man shun qo'yman :

export const getStatisticsOverview = async (
  params?: StatisticsOverviewParams,
): Promise<StatisticsOverviewResponse> => {
  const { data } = await axios.get("/statistics/overview", { params });
  return data;
};
*/


