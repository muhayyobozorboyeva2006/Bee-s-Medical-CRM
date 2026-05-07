import type {
    ServiceItem,
    ServicePayload,
    ServicesFilters,
    ServicesResponse,
} from "../types/services.types";

let mockServices: ServiceItem[] = [
    {
        id: 1,
        code: "S-001",
        name: "Konsultatsiya",
        room: "101",
        price: 120000,
        department: "Terapiya",
    },
    {
        id: 2,
        code: "S-002",
        name: "EKG",
        room: "205",
        price: 80000,
        department: "Kardiologiya",
    },
];

export const getServices = async (
    filters?: ServicesFilters
): Promise<ServicesResponse> => {
    let items = [...mockServices];

    if (filters?.search) {
        const search = filters.search.toLowerCase();

        items = items.filter((service) =>
            `${service.code} ${service.name} ${service.room} ${service.department}`
                .toLowerCase()
                .includes(search)
        );
    }

    return {
        items,
        total: items.length,
    };
};

export const getServiceById = async (
    id: number
): Promise<ServiceItem | null> => {
    return mockServices.find((service) => service.id === id) ?? null;
};

export const createService = async (
    payload: ServicePayload
): Promise<ServiceItem> => {
    const newService: ServiceItem = {
        id: Date.now(),
        ...payload,
    };

    mockServices = [newService, ...mockServices];

    return newService;
};

export const updateService = async (
    id: number,
    payload: ServicePayload
): Promise<ServiceItem | null> => {
    mockServices = mockServices.map((service) =>
        service.id === id ? { ...service, ...payload } : service
    );

    return mockServices.find((service) => service.id === id) ?? null;
};

export const deleteService = async (id: number) => {
    mockServices = mockServices.filter((service) => service.id !== id);

    return { success: true, id };
};

/*
HAQIQIY BACKEND KELGANDA SHUNDAM FOYDA:

import axios from "@/lib/axios";

export const getServices = async (filters?: ServicesFilters) => {
  const { data } = await axios.get("/services", {
    params: {
      search: filters?.search || undefined,
    },
  });

  return data;
};

export const getServiceById = async (id: number) => {
  const { data } = await axios.get(`/services/${id}`);
  return data;
};

export const createService = async (payload: ServicePayload) => {
  const { data } = await axios.post("/services", payload);
  return data;
};

export const updateService = async (id: number, payload: ServicePayload) => {
  const { data } = await axios.patch(`/services/${id}`, payload);
  return data;
};

export const deleteService = async (id: number) => {
  const { data } = await axios.delete(`/services/${id}`);
  return data;
};
*/