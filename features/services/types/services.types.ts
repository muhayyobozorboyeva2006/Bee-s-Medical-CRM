export interface ServiceItem {
    id: number;
    code: string;
    name: string;
    room: string;
    price: number;
    department: string;
}

export interface ServicesFilters {
    search?: string;
}

export interface ServicesResponse {
    items: ServiceItem[];
    total: number;
}


export type ServicePayload = Omit<ServiceItem, "id">;