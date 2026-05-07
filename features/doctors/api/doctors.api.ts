import type {
    DoctorItem,
    DoctorPayload,
    DoctorsFilters,
    DoctorsResponse,
} from "../types/doctors.types";

let mockDoctors: DoctorItem[] = [
    {
        id: 1,
        code: "D-001",
        full_name: "Dr. Azizbek Karimov",
        specialty: "Terapevt",
        room: "101",
        price: 120000,
        department: "Terapiya",
    },
    {
        id: 2,
        code: "D-002",
        full_name: "Dr. Malika Raximova",
        specialty: "Kardiolog",
        room: "205",
        price: 180000,
        department: "Kardiologiya",
    },
];

export const getDoctors = async (
    filters?: DoctorsFilters
): Promise<DoctorsResponse> => {
    let items = [...mockDoctors];

    if (filters?.search) {
        const search = filters.search.toLowerCase();

        items = items.filter((doctor) =>
            `${doctor.code} ${doctor.full_name} ${doctor.specialty} ${doctor.room} ${doctor.department}`
                .toLowerCase()
                .includes(search)
        );
    }

    if (filters?.specialty) {
        items = items.filter(
            (doctor) =>
                doctor.specialty.toLowerCase() === filters.specialty?.toLowerCase()
        );
    }

    if (filters?.department) {
        items = items.filter(
            (doctor) =>
                doctor.department.toLowerCase() === filters.department?.toLowerCase()
        );
    }

    if (filters?.room) {
        items = items.filter((doctor) => doctor.room === filters.room);
    }

    return {
        items,
        total: items.length,
    };
};

export const getDoctorById = async (
    id: number
): Promise<DoctorItem | null> => {
    return mockDoctors.find((doctor) => doctor.id === id) ?? null;
};

export const createDoctor = async (
    payload: DoctorPayload
): Promise<DoctorItem> => {
    const newDoctor: DoctorItem = {
        id: Date.now(),
        ...payload,
    };

    mockDoctors = [newDoctor, ...mockDoctors];

    return newDoctor;
};

export const updateDoctor = async (
    id: number,
    payload: DoctorPayload
): Promise<DoctorItem | null> => {
    mockDoctors = mockDoctors.map((doctor) =>
        doctor.id === id ? { ...doctor, ...payload } : doctor
    );

    return mockDoctors.find((doctor) => doctor.id === id) ?? null;
};

export const deleteDoctor = async (id: number) => {
    mockDoctors = mockDoctors.filter((doctor) => doctor.id !== id);

    return { success: true, id };
};

/*
HAQIQIY BACKEND KELGANDA:

import axios from "@/lib/axios";

export const getDoctors = async (
  filters?: DoctorsFilters
): Promise<DoctorsResponse> => {
  const { data } = await axios.get("/doctors", {
    params: {
      search: filters?.search || undefined,
      specialty: filters?.specialty || undefined,
      department: filters?.department || undefined,
      room: filters?.room || undefined,
    },
  });

  return data;
};

export const getDoctorById = async (
  id: number
): Promise<DoctorItem | null> => {
  const { data } = await axios.get(`/doctors/${id}`);
  return data;
};

export const createDoctor = async (
  payload: DoctorPayload
): Promise<DoctorItem> => {
  const { data } = await axios.post("/doctors", payload);
  return data;
};

export const updateDoctor = async (
  id: number,
  payload: DoctorPayload
): Promise<DoctorItem> => {
  const { data } = await axios.patch(`/doctors/${id}`, payload);
  return data;
};

export const deleteDoctor = async (id: number) => {
  const { data } = await axios.delete(`/doctors/${id}`);
  return data;
};
*/