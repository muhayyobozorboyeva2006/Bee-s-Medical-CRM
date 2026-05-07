"use client";

import { useCallback, useEffect, useState } from "react";
import {
    createService,
    deleteService,
    getServiceById,
    getServices,
    updateService,
} from "../api/services.api";
import type {
    ServiceItem,
    ServicePayload,
    ServicesFilters,
} from "../types/services.types";

export const useServices = (filters: ServicesFilters) => {
    const [services, setServices] = useState<ServiceItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadServices = useCallback(async () => {
        try {
            setIsLoading(true);
            const result = await getServices(filters);
            setServices(Array.isArray(result.items) ? result.items : []);
        } catch (error) {
            console.error("Services load error:", error);
            setServices([]);
        } finally {
            setIsLoading(false);
        }
    }, [filters.search]);

    const removeService = async (id: number) => {
        const ok = window.confirm("Xizmatni o‘chirishni xohlaysizmi?");
        if (!ok) return;

        await deleteService(id);
        await loadServices();
    };

    useEffect(() => {
        loadServices();
    }, [loadServices]);

    return {
        services,
        isLoading,
        removeService,
        refetch: loadServices,
    };
};

export const useService = (id: number) => {
    const [service, setService] = useState<ServiceItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const loadService = async () => {
            try {
                setIsLoading(true);
                const result = await getServiceById(id);
                setService(result);
            } catch (error) {
                console.error("Service load error:", error);
                setService(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadService();
    }, [id]);

    return { service, isLoading };
};

export const useCreateService = () => {
    const submitService = async (payload: ServicePayload) => {
        return createService(payload);
    };

    return { submitService };
};

export const useUpdateService = () => {
    const submitUpdateService = async (id: number, payload: ServicePayload) => {
        return updateService(id, payload);
    };

    return { submitUpdateService };
};