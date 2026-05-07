import {
    IntegrationItem,
    IntegrationsResponse,
} from "../types/integrations.types";

import { integrationsData } from "./integrations.data";

const STORAGE_KEY = "integrations";

const getStorage = (): IntegrationItem[] => {

    if (typeof window === "undefined") {
        return integrationsData;
    }

    const data =
        localStorage.getItem(STORAGE_KEY);

    if (!data) {

        localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify(integrationsData)
        );

        return integrationsData;
    }

    return JSON.parse(data);
};

const setStorage = (
    data: IntegrationItem[]
) => {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );
};

// GET
export const getIntegrations =
    async (): Promise<IntegrationsResponse> => {

        const items = getStorage();

        return {
            items,
        };
    };

// TOGGLE CONNECT
export const toggleIntegration =
    async (id: number) => {

        const items = getStorage();

        const updated = items.map((p) =>
            p.id === id
                ? {
                    ...p,
                    connected: !p.connected,
                }
                : p
        );

        setStorage(updated);

        return updated.find(
            (p) => p.id === id
        );
    };

/*
 REAL BACKEND

import axios from "@/lib/axios";

export const getIntegrations =
    async () => {

        const { data } =
            await axios.get(
                "/integrations"
            );

        return data;
    };

export const toggleIntegration =
    async (id: number) => {

        const { data } =
            await axios.patch(
                `/integrations/${id}/toggle`
            );

        return data;
    };

*/