export interface InventoryFlowItem {
    label: "Kirim" | "Chiqim";
    value: number;
    color: string;
}

export interface TopUsedProductItem {
    id: number;
    name: string;
    used_quantity: number;
    unit: string;
}

export interface LowStockProductItem {
    id: number;
    name: string;
    quantity: number;
    min_quantity: number;
    unit: string;
}

export interface InventoryStatisticsResponse {
    total: number;
    income: number;
    outcome: number;
    flow: InventoryFlowItem[];
    topUsedProducts: TopUsedProductItem[];
    lowStockProducts: LowStockProductItem[];
}