export type IntegrationItem = {
    id: number;

    title: string;

    description: string;

    icon: string;

    connected: boolean;

    tags: string[];
};

export type IntegrationsResponse = {
    items: IntegrationItem[];
};