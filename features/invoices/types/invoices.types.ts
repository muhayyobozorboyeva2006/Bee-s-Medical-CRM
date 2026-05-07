export type InvoiceStatus = "paid" | "unpaid" | "deleted";

export type InvoiceSort =
    | "date_desc"
    | "date_asc"
    | "code_desc"
    | "code_asc"
    | "total_desc"
    | "total_asc";

export interface InvoiceItem {
    id: number;
    code: string;
    patient_name: string;
    total: number;
    status: InvoiceStatus;
    created_at: string;
}

export interface InvoiceStats {
    all: number;
    paid: number;
    unpaid: number;
    deleted: number;
}

export interface InvoicesFilters {
    search?: string;
    status?: "" | InvoiceStatus;
    sort?: InvoiceSort;
}

export interface InvoicesResponse {
    items: InvoiceItem[];
    total: number;
    stats: InvoiceStats;
}

export type InvoicePayload = {
    code: string;
    patient_name: string;
    total: number;
    status: InvoiceStatus;
};