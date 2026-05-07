export type AppointmentStatus =
    | "scheduled"
    | "confirmed"
    | "in_progress"
    | "completed"
    | "cancelled";

export interface AppointmentPatient {
    id: number;
    first_name: string;
    last_name: string;
    phone?: string;
}

export interface AppointmentDoctor {
    id: number;
    full_name: string;
    specialization?: string;
}

export interface AppointmentItem {
    id: number;
    patient_id: number;
    doctor_id: number;
    service_name?: string;
    patient: AppointmentPatient;
    doctor: AppointmentDoctor;
    date: string; // 2026-03-11
    time: string; // 09:30
    duration_minutes: number;
    status: AppointmentStatus;
    notes?: string;
}

export interface AppointmentListParams {
    date: string;
    doctor_id?: number;
    service_name?: string;
}

export interface AppointmentListResponse {
    items: AppointmentItem[];
    total: number;
}