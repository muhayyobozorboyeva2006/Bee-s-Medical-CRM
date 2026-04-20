import {
    CalendarDays,
    ChartNoAxesColumn,
    Activity,
    Users,
    UserRound,
    ClipboardList,
    BriefcaseMedical,
    CreditCard,
    Boxes,
    Package,
    Truck,
    Trash2,
    Warehouse,
    Plug,
    LogOut,
} from "lucide-react";

export type MenuChild = {
    label: string;
    href: string;
    icon: any;
};

export type MenuItem = {
    label: string;
    href?: string;
    icon: any;
    children?: MenuChild[];
};

export const sidebarMenu: MenuItem[] = [
    {
        label: "Kalendar",
        href: "/calendar",
        icon: CalendarDays,
    },
    {
        label: "Statistika",
        icon: ChartNoAxesColumn,
        children: [
            {
                label: "Umumiy statistika",
                href: "/statistics/overview",
                icon: Activity,
            },
            {
                label: "Doktor statistika",
                href: "/statistics/doctors",
                icon: Users,
            },
            {
                label: "Ombor statistika",
                href: "/statistics/inventory",
                icon: Boxes,
            },
            {
                label: "Fakturalar ko‘rinishi",
                href: "/statistics/invoices",
                icon: ClipboardList,
            },
            {
                label: "Jins bo‘yicha bemorlar",
                href: "/statistics/gender",
                icon: Users,
            },
        ],
    },
    {
        label: "Bemorlar",
        icon: Users,
        children: [
            {
                label: "Barchasi",
                href: "/patients",
                icon: Users,
            },
            {
                label: "Bekor qilinganlar",
                href: "/patients/cancelled",
                icon: Trash2,
            },
        ],
    },
    {
        label: "Shifokorlar",
        href: "/doctors",
        icon: UserRound,
    },
    {
        label: "Xizmatlar",
        icon: BriefcaseMedical,
        children: [
            {
                label: "Xizmatlar",
                href: "/services",
                icon: BriefcaseMedical,
            },
            {
                label: "Xonalar",
                href: "/services/rooms",
                icon: Warehouse,
            },
        ],
    },
    {
        label: "Kassir",
        href: "/cashier",
        icon: CreditCard,
    },
    {
        label: "Inventarizatsiya",
        icon: Boxes,
        children: [
            {
                label: "Mahsulotlar",
                href: "/inventory/products",
                icon: Package,
            },
            {
                label: "Mahsulot kelishi",
                href: "/inventory/receipts",
                icon: Truck,
            },
            {
                label: "Yo‘q qilish",
                href: "/inventory/wastes",
                icon: Trash2,
            },
            {
                label: "Omborlar",
                href: "/inventory/warehouses",
                icon: Warehouse,
            },
            {
                label: "Ta’minotchilar",
                href: "/inventory/suppliers",
                icon: Truck,
            },
        ],
    },
    {
        label: "Integratsiyalar",
        href: "/integrations",
        icon: Plug,
    },
];

export const logoutItem = {
    label: "Chiqish",
    href: "/login",
    icon: LogOut,
};