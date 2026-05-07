export type WarehouseItem = {
    id: number;
    name: string;
    status: string;
    saleStatus: string;
    queue: string;
};

export type WarehousePayload = Omit<WarehouseItem, "id">;

export type WarehousesResponse = {
    items: WarehouseItem[];
    total: number;
};

export type WarehousesFilters = {
    search?: string;
};

export type WarehouseTableProps = {
    items: WarehouseItem[];
    loading: boolean;
    remove: (id: number) => void;
};