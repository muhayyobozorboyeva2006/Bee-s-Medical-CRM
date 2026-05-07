export interface GenderStatisticsItem {
    label: "Erkak" | "Ayol";
    value: number;
    color: string;
}

export interface GenderStatisticsResponse {
    total: number;
    items: GenderStatisticsItem[];
}