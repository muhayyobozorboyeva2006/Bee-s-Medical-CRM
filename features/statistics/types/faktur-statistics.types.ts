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