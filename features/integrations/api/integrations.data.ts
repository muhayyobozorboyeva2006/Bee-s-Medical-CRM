import { IntegrationItem } from "../types/integrations.types";

export const integrationsData: IntegrationItem[] = [
    {
        id: 1,
        title: "Instagram",

        description:
            "Ijtimoiy tarmoqlardan lead Ads va DM'lardan leadlarni qabul qilish.",

        icon: "📸",

        connected: false,

        tags: [
            "Leadlar",
            "DM avtomat",
            "Uchrashuvlar",
        ],
    },

    {
        id: 2,
        title: "Telegram Bot",

        description:
            "Bemorlar konsultatsiyasi va uchrashuvlar uchun tibbiy bot yarating.",

        icon: "✈️",

        connected: false,

        tags: [
            "Leadlar",
            "Uchrashuvlar",
            "Bot buyruqlar",
        ],
    },

    {
        id: 3,
        title: "Webhook",

        description:
            "Ilovalar va shu kabi xizmatlardan leadlarni qabul qilish.",

        icon: "🔗",

        connected: false,

        tags: [
            "Maxsus hodisalar",
            "Ikki tomonlama",
        ],
    },
];