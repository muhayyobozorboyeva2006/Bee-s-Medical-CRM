export interface DailyRevenuePoint {
    day: string;
    amount: number;
}

export interface DailyPatientsPoint {
    day: string;
    count: number;
}

export interface AgeDistributionPoint {
    label: string;
    count: number;
}

export interface ServiceDistributionPoint {
    label: string;
    count: number;
}

export interface DoctorsStatisticsResponse {
    dailyRevenue: DailyRevenuePoint[];
    dailyPatients: DailyPatientsPoint[];
    ageDistribution: AgeDistributionPoint[];
    serviceDistribution: ServiceDistributionPoint[];
    totalServices: number;
}