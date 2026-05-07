export type WasteItem = {
    id: number;
    warehouse: string;
    reason: string;
    product: string;
    unit: string;
    quantity: number;
    date: string;
};

export type WastePayload = Omit<WasteItem, "id">;

export type WastesResponse = {
    items: WasteItem[];
    total: number;
};