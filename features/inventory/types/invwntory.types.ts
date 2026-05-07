export interface ProductItem {
    id: number;
    code: string;
    name: string;
    unit: string;
    quantity: number;
    min: number;
    price: number;
    type: string;
    category: string;
    supplier: string;
    warehouse: string;
    active: boolean;
    service: string;
    section: string;
}

export type ProductPayload = {
    name: string;
    unit: string;
    quantity: number;
    min: number;
    price: number;

    type: string;
    category: string;

    section: string;     
    code: string;        
    supplier: string;
    warehouse: string;

    active: boolean;
    service: string;     
};

export interface ProductsFilters {
    search?: string;
    type?: string;
    category?: string;
    supplier?: string;
    warehouse?: string;
}

export interface ProductsResponse {
    items: ProductItem[];
    total: number;
}
//receipts type

export type ReceiptStatus = "Yangi" | "Qabul qilindi";

export type ReceiptItem = {
    id: number;
    status: ReceiptStatus;
    products: string;
    date: string; 
    warehouse: string;
    supplier: string;
    quantity: number;
};

export type ReceiptsFilters = {
    search?: string;
    status?: ReceiptStatus | "ALL";
    supplier?: string;
};

export type ReceiptsResponse = {
    items: ReceiptItem[];
    total: number;
};
export type ReceiptTableProps = {
    items: ReceiptItem[];
    loading: boolean;
    remove: (id: number) => void;
};

