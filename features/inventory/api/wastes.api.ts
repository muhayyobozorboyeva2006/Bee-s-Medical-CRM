import type { WasteItem, WastePayload, WastesResponse } from "../types/wastes.types";

const STORAGE_KEY = "wastes";

const getStorage = (): WasteItem[] => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
};

const setStorage = (data: WasteItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// GET
export const getWastes = async (): Promise<WastesResponse> => {
    const items = getStorage();
    return { items, total: items.length };
};

// CREATE
export const createWaste = async (payload: WastePayload) => {
    const items = getStorage();

    const newItem: WasteItem = {
        id: Date.now(),
        ...payload,
    };

    const updated = [newItem, ...items];
    setStorage(updated);

    return newItem;
};

/*
 REAL BACKEND 

import axios from "@/lib/axios";

export const getWastes = async () => {
  const { data } = await axios.get("/wastes");
  return data;
};

export const createWaste = async (payload) => {
  const { data } = await axios.post("/wastes", payload);
  return data;
};
*/