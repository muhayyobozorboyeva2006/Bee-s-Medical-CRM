export type SupplierItem = {
    id: number;
    name: string;
    balance: number;
    description: string;
    phone: string;
    inn: string;
};

export type SupplierPayload =
    Omit<SupplierItem, "id">;

export type SuppliersFilters = {
    search?: string;
};

export type SuppliersResponse = {
    items: SupplierItem[];
    total: number;
};

export type SupplierTableProps = {
    items: SupplierItem[];
    loading: boolean;
    remove: (id: number) => void;
};