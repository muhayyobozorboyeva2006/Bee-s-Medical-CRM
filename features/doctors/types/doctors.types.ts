export interface DoctorItem {
    id: number;
    code: string;
    full_name: string;
    specialty: string;
    room: string;
    price: number;
    department: string;
}

export interface DoctorsFilters {
    search?: string;
    specialty?: string;
    department?: string;
    room?: string;
}

export interface DoctorsResponse {
    items: DoctorItem[];
    total: number;
}

export type DoctorPayload = Omit<DoctorItem, "id">;