"use client";

import { useEffect, useState } from "react";
import { getProducts, createProduct, deleteProduct, updateProduct } from "../api/products.api";
import type {
    ProductItem,
    ProductsFilters,
    ProductPayload,
} from "../types/invwntory.types";

export const useProducts = () => {
    const [items, setItems] = useState<ProductItem[]>([]);
    const [loading, setLoading] = useState(false);

    const [filters, setFilters] = useState<ProductsFilters>({});

    const fetchData = async () => {
        setLoading(true);

      
        const res = await getProducts(filters);

        setItems(res.items);
        setLoading(false);
    };

   
    useEffect(() => {
        fetchData();
    }, [filters]);

    const remove = async (id: number) => {
        await deleteProduct(id);
        fetchData(); 
    };

    const update = async (id: number, payload: ProductPayload) => {
        await updateProduct(id, payload);
        fetchData(); 
    };

    return {
        items,
        loading,
        filters,     
        setFilters,  
        remove,
    };
};