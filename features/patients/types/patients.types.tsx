export type PatientGender = "male" | "female";

export type PatientStatus = "active" | "cancelled";

export interface PatientItem {
    id: number;
    first_name: string;
    last_name: string;
    phone: string;
    gender: PatientGender;
    age: number;
    created_at: string;
    doctor_name: string;
    source: string;
    pdf_url: string | null;
    status: PatientStatus;
    cancelled_at: string | null;
}

export interface PatientsResponse {
    items: PatientItem[];
    total: number;
}

export interface PatientsFilters {
    search?: string;
    gender?: "" | PatientGender;
    source?: string;
    doctor?: string;
    status?: PatientStatus;
}