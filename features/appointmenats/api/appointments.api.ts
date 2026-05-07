import type {
    AppointmentItem,
    AppointmentListParams,
    AppointmentListResponse,
} from "../types/appointments.types";
// import axios from "@/lib/axios";

const mockAppointments: AppointmentItem[] = [
    {
        id: 1,
        patient_id: 101,
        doctor_id: 7,
        service_name: "Konsultatsiya",
        patient: {
            id: 101,
            first_name: "Aliya",
            last_name: "Karimova",
            phone: "+998901112233",
        },
        doctor: {
            id: 7,
            full_name: "Dr. Sardor Xasanov",
            specialization: "Terapevt",
        },
        date: "2026-03-11",
        time: "09:00",
        duration_minutes: 60,
        status: "confirmed",
        notes: "Birinchi qabul",
    },
    {
        id: 2,
        patient_id: 102,
        doctor_id: 7,
        service_name: "Konsultatsiya",
        patient: {
            id: 102,
            first_name: "Dilnoza",
            last_name: "Abdullayeva",
            phone: "+998909876543",
        },
        doctor: {
            id: 7,
            full_name: "Dr. Sardor Xasanov",
            specialization: "Terapevt",
        },
        date: "2026-03-11",
        time: "11:30",
        duration_minutes: 30,
        status: "scheduled",
        notes: "Qayta ko‘rik",
    },
];

export const getAppointments = async (
    params: AppointmentListParams,
): Promise<AppointmentListResponse> => {
    const filtered = mockAppointments.filter((item) => {
        const sameDate = item.date === params.date;
        const sameDoctor = params.doctor_id
            ? item.doctor_id === params.doctor_id
            : true;
        const sameService = params.service_name
            ? item.service_name?.toLowerCase() === params.service_name.toLowerCase()
            : true;

        return sameDate && sameDoctor && sameService;
    });

    return {
        items: filtered,
        total: filtered.length,
    };
};

/*
Backend tayyor bo‘lganda man shun tashlayman:

export const getAppointments = async (
  params: AppointmentListParams,
): Promise<AppointmentListResponse> => {
  const { data } = await axios.get("/appointments", { params });
  return data;
};
*/