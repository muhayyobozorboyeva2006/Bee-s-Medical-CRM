"use client";

import {
    useEffect,
    useState,
} from "react";

import {
    getIntegrations,
    toggleIntegration,
} from "../api/itegrations.api";

import { IntegrationItem }
    from "../types/integrations.types";

export const useIntegrations = () => {

    const [items, setItems] =
        useState<IntegrationItem[]>([]);

    const [loading, setLoading] =
        useState(false);

    const fetchData = async () => {

        setLoading(true);

        const res =
            await getIntegrations();

        setItems(res.items);

        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const toggle =
        async (id: number) => {

            await toggleIntegration(id);

            fetchData();
        };

    return {
        items,
        loading,
        toggle,
    };
};