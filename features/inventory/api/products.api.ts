import type {
    ProductItem,
    ProductPayload,
    ProductsFilters,
    ProductsResponse,
} from "../types/invwntory.types";

const STORAGE_KEY = "products";

//  helper
const getStorage = (): ProductItem[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

const setStorage = (data: ProductItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

//  GET
export const getProducts = async (
    filters?: ProductsFilters
): Promise<ProductsResponse> => {
    let items = getStorage();

    if (filters?.search) {
        const s = filters.search.toLowerCase();
        items = items.filter((p) =>
            `${p.name} ${p.type} ${p.category}`
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
export const getProductById = async (
    id: number
): Promise<ProductItem | null> => {
    const items = getStorage();
    return items.find((p) => p.id === id) ?? null;
};

//  CREATE
export const createProduct = async (
    payload: ProductPayload
): Promise<ProductItem> => {
    const items = getStorage();

    const newItem: ProductItem = {
        id: Date.now(),
        ...payload,
    };

    const updated = [newItem, ...items];
    setStorage(updated);

    return newItem;
};

//  UPDATE
export const updateProduct = async (
    id: number,
    payload: ProductPayload
): Promise<ProductItem | null> => {
    const items = getStorage();

    const updated = items.map((p) =>
        p.id === id ? { ...p, ...payload } : p
    );

    setStorage(updated);

    return updated.find((p) => p.id === id) ?? null;
};

//  DELETE
export const deleteProduct = async (id: number) => {
    const items = getStorage();

    const updated = items.filter((p) => p.id !== id);

    setStorage(updated);

    return { success: true };
};

/* HAQIQIY BACKEND KELGANDA 


import axios from "@/lib/axios";

// GET
export const getProducts = async (
  filters?: ProductsFilters
): Promise<ProductsResponse> => {
  const { data } = await axios.get("/products", {
    params: {
      search: filters?.search || undefined,
      type: filters?.type || undefined,
      category: filters?.category || undefined,
      warehouse: filters?.warehouse || undefined,
    },
  });

  return data;
};

// GET BY ID
export const getProductById = async (
  id: number
): Promise<ProductItem> => {
  const { data } = await axios.get(`/products/${id}`);
  return data;
};

// CREATE
export const createProduct = async (
  payload: ProductPayload
): Promise<ProductItem> => {
  const { data } = await axios.post("/products", payload);
  return data;
};

//UPDATE
export const updateProduct = async (
  id: number,
  payload: ProductPayload
): Promise<ProductItem> => {
  const { data } = await axios.patch(`/products/${id}`, payload);
  return data;
};

// DELETE
export const deleteProduct = async (id: number) => {
  const { data } = await axios.delete(`/products/${id}`);
  return data;
};

*/