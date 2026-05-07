import type {
    PatientItem,
    PatientsResponse,
    PatientsFilters,
} from "../types/patients.types";



let mockPatients: PatientItem[] = [
    {
        id: 1,
        first_name: "Aliya",
        last_name: "Karimova",
        phone: "+998901112233",
        gender: "female",
        age: 22,
        created_at: "2026-03-11",
        doctor_name: "Dr. Azizbek",
        source: "Telegram",
        pdf_url: null,
        status: "active",
        cancelled_at: null,
    },
    {
        id: 2,
        first_name: "Javohir",
        last_name: "Aliyev",
        phone: "+998901234567",
        gender: "male",
        age: 28,
        created_at: "2026-03-10",
        doctor_name: "Dr. Malika",
        source: "Instagram",
        pdf_url: null,
        status: "active",
        cancelled_at: null,
    },
];

export const getPatients = async (
    filters: PatientsFilters
): Promise<PatientsResponse> => {
    let data = [...mockPatients];

    if (filters.status) {
        data = data.filter((patient) => patient.status === filters.status);
    }

    if (filters.search) {
        const search = filters.search.toLowerCase();

        data = data.filter((patient) =>
            `${patient.first_name} ${patient.last_name} ${patient.phone} ${patient.doctor_name} ${patient.source}`
                .toLowerCase()
                .includes(search)
        );
    }

    if (filters.gender) {
        data = data.filter((patient) => patient.gender === filters.gender);
    }

    if (filters.source) {
        data = data.filter(
            (patient) =>
                patient.source.toLowerCase() === filters.source?.toLowerCase()
        );
    }

    if (filters.doctor) {
        data = data.filter((patient) =>
            patient.doctor_name
                .toLowerCase()
                .includes(filters.doctor!.toLowerCase())
        );
    }

    return {
        items: data,
        total: data.length,
    };
};

export const getPatientById = async (
    id: number
): Promise<PatientItem | null> => {
    return mockPatients.find((patient) => patient.id === id) ?? null;
};

export const updatePatient = async (
    id: number,
    payload: PatientPayload
): Promise<PatientItem | null> => {
    mockPatients = mockPatients.map((patient) =>
        patient.id === id
            ? {
                ...patient,
                ...payload,
            }
            : patient
    );

    return mockPatients.find((patient) => patient.id === id) ?? null;
};


export type PatientPayload = {
    first_name: string;
    last_name: string;
    phone: string;
    gender: "male" | "female";
    age: number;
    created_at: string;
    doctor_name: string;
    source: string;
};

export const createPatient = async (
    payload: PatientPayload
): Promise<PatientItem> => {
    const newPatient: PatientItem = {
        id: Date.now(),
        first_name: payload.first_name,
        last_name: payload.last_name,
        phone: payload.phone,
        gender: payload.gender,
        age: payload.age,
        created_at: payload.created_at,
        doctor_name: payload.doctor_name,
        source: payload.source,
        pdf_url: null,
        status: "active",
        cancelled_at: null,
    };

    mockPatients = [newPatient, ...mockPatients];

    return newPatient;
};


export const cancelPatient = async (id: number) => {
    mockPatients = mockPatients.map((patient) =>
        patient.id === id
            ? {
                ...patient,
                status: "cancelled",
                cancelled_at: new Date().toISOString().slice(0, 10),
            }
            : patient
    );

    return { success: true, id };
};

export const restorePatient = async (id: number) => {
    mockPatients = mockPatients.map((patient) =>
        patient.id === id
            ? {
                ...patient,
                status: "active",
                cancelled_at: null,
            }
            : patient
    );

    return { success: true, id };
};

/*
  HAQIQIY BACKEND KELGANDA:
.env.local ichiga backend URL qo'yman

  NEXT_PUBLIC_API_URL=https://backend-url.com/api/v1


  import axios from "@/lib/axios";
  import type {
    PatientItem,
    PatientsResponse,
    PatientsFilters,
  } from "../types/patients.types";

  type PatientPayload = Omit<
    PatientItem,
    "id" | "status" | "cancelled_at" | "pdf_url"
  >;

  export const getPatients = async (
    filters: PatientsFilters
  ): Promise<PatientsResponse> => {
    const { data } = await axios.get("/patients", {
      params: {
        search: filters.search || undefined,
        gender: filters.gender || undefined,
        source: filters.source || undefined,
        doctor: filters.doctor || undefined,
        status: filters.status || undefined,
      },
    });

    return data;
  };

export const getPatientById = async (
  id: number
): Promise<PatientItem | null> => {
  const { data } = await axios.get(`/patients/${id}`);
  return data;
};

export const updatePatient = async (
  id: number,
  payload: PatientPayload
): Promise<PatientItem> => {
  const { data } = await axios.patch(`/patients/${id}`, payload);
  return data;
};

  export const createPatient = async (
    payload: PatientPayload
  ): Promise<PatientItem> => {
    const { data } = await axios.post("/patients", payload);
    return data;
  };

 

  export const cancelPatient = async (id: number) => {
    const { data } = await axios.patch(`/patients/${id}/cancel`);
    return data;
  };

  export const restorePatient = async (id: number) => {
    const { data } = await axios.patch(`/patients/${id}/restore`);
    return data;
  };
*/