import type {
    WarehouseItem,
    WarehousePayload,
    WarehousesFilters,
    WarehousesResponse,
} from "../types/warehouses.types";

const STORAGE_KEY = "warehouses";

const getStorage = (): WarehouseItem[] => {
    if (typeof window === "undefined") return [];

    const data = localStorage.getItem(STORAGE_KEY);

    return data ? JSON.parse(data) : [
        {
            id: 1,
            name: "Asosiy ombor",
            status: "Faol",
            saleStatus: "Asosiy",
            queue: "FIFO",
        },
    ];
};

const setStorage = (data: WarehouseItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// GET
export const getWarehouses = async (
    filters?: WarehousesFilters
): Promise<WarehousesResponse> => {
    let items = getStorage();

    if (filters?.search) {
        const s = filters.search.toLowerCase();

        items = items.filter((w) =>
            `${w.name} ${w.status} ${w.saleStatus}`
                .toLowerCase()
                .includes(s)
        );
    }

    return {
        items,
        total: items.length,
    };
};

// GET BY ID
export const getWarehouseById = async (
    id: number
): Promise<WarehouseItem | null> => {
    const items = getStorage();

    return items.find((w) => w.id === id) ?? null;
};

// CREATE
export const createWarehouse = async (
    payload: WarehousePayload
) => {
    const items = getStorage();

    const newItem: WarehouseItem = {
        id: Date.now(),
        ...payload,
    };

    const updated = [newItem, ...items];

    setStorage(updated);

    return newItem;
};

// UPDATE
export const updateWarehouse = async (
    id: number,
    payload: WarehousePayload
) => {
    const items = getStorage();

    const updated = items.map((w) =>
        w.id === id ? { ...w, ...payload } : w
    );

    setStorage(updated);

    return updated.find((w) => w.id === id) ?? null;
};

// DELETE
export const deleteWarehouse = async (id: number) => {
    const items = getStorage();

    const updated = items.filter((w) => w.id !== id);

    setStorage(updated);

    return { success: true };
};

/*
 REAL BACKEND

import axios from "@/lib/axios";

export const getWarehouses = async (filters) => {
  const { data } = await axios.get("/warehouses", {
    params: filters,
  });

  return data;
};

export const getWarehouseById = async (id) => {
  const { data } = await axios.get(`/warehouses/${id}`);
  return data;
};

export const createWarehouse = async (payload) => {
  const { data } = await axios.post("/warehouses", payload);
  return data;
};

export const updateWarehouse = async (id, payload) => {
  const { data } = await axios.patch(`/warehouses/${id}`, payload);
  return data;
};

export const deleteWarehouse = async (id) => {
  const { data } = await axios.delete(`/warehouses/${id}`);
  return data;
};
*/