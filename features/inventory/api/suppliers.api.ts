import type {
    SupplierItem,
    SupplierPayload,
    SuppliersFilters,
    SuppliersResponse,
} from "../types/suppliers.tpyes";

const STORAGE_KEY = "suppliers";

const getStorage = (): SupplierItem[] => {
    if (typeof window === "undefined") return [];

    const data = localStorage.getItem(STORAGE_KEY);

    return data
        ? JSON.parse(data)
        : [];
};

const setStorage = (
    data: SupplierItem[]
) => {
    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
};

// GET
export const getSuppliers = async (
    filters?: SuppliersFilters
): Promise<SuppliersResponse> => {

    let items = getStorage();

    if (filters?.search) {

        const s =
            filters.search.toLowerCase();

        items = items.filter((p) =>
            `
        ${p.name}
        ${p.phone}
        ${p.inn}
        ${p.description}
      `
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
export const getSupplierById =
    async (
        id: number
    ): Promise<SupplierItem | null> => {

        const items = getStorage();

        return (
            items.find(
                (p) => p.id === id
            ) ?? null
        );
    };

// CREATE
export const createSupplier =
    async (
        payload: SupplierPayload
    ) => {

        const items = getStorage();

        const newItem: SupplierItem = {
            id: Date.now(),
            ...payload,
        };

        const updated = [
            newItem,
            ...items,
        ];

        setStorage(updated);

        return newItem;
    };

// UPDATE
export const updateSupplier =
    async (
        id: number,
        payload: SupplierPayload
    ) => {

        const items = getStorage();

        const updated = items.map((p) =>
            p.id === id
                ? { ...p, ...payload }
                : p
        );

        setStorage(updated);

        return (
            updated.find(
                (p) => p.id === id
            ) ?? null
        );
    };

// DELETE
export const deleteSupplier =
    async (id: number) => {

        const items = getStorage();

        const updated = items.filter(
            (p) => p.id !== id
        );

        setStorage(updated);

        return { success: true };
    };

/*

REAL BACKEND

import axios from "@/lib/axios";

export const getSuppliers =
  async (filters) => {

  const { data } =
    await axios.get(
      "/suppliers",
      {
        params: filters,
      }
    );

  return data;
};

export const getSupplierById =
  async (id) => {

  const { data } =
    await axios.get(
      `/suppliers/${id}`
    );

  return data;
};

export const createSupplier =
  async (payload) => {

  const { data } =
    await axios.post(
      "/suppliers",
      payload
    );

  return data;
};

export const updateSupplier =
  async (id, payload) => {

  const { data } =
    await axios.patch(
      `/suppliers/${id}`,
      payload
    );

  return data;
};

export const deleteSupplier =
  async (id) => {

  const { data } =
    await axios.delete(
      `/suppliers/${id}`
    );

  return data;
};

*/