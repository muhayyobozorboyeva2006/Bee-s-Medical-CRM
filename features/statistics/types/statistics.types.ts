export interface OverviewStatCard {
    title: string;
    value: string;
    suffix: string;
    subtext: string;
}

export interface DailyRevenueItem {
    date: string;
    amount: number;
}

export interface DailyPatientsItem {
    date: string;
    count: number;
}

export interface TopDoctorItem {
    id:number;
    doctor_name: string;
    patients_count: number;
    revenue: number;
}

export interface SourceTrendItem {
    source: string;
    count: number;
}

export interface StatisticsOverviewResponse {
    stats: OverviewStatCard[];
    chartDates: string[];
    dailyRevenue: DailyRevenueItem[];
    dailyPatients: DailyPatientsItem[];
    topDoctors: TopDoctorItem[];
    sourceTrends: SourceTrendItem[];
    cacheInfo: {
        last_calculated_at: string | null;
        progress_label: string;
    };
}

export interface StatisticsOverviewParams {
    from?: string;
    to?: string;
}


export interface InvoiceStatusItem {
    label: string;
    value: number;
    color: string;
}

export interface InvoiceStatusOverview {
    items: InvoiceStatusItem[];
    total: number;
}

export interface StatisticsOverviewResponse {
    invoiceStatusOverview: InvoiceStatusOverview;
}