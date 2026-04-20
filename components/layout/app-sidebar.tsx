"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronLeft, Menu } from "lucide-react";
import { useMemo, useState } from "react";
import { logoutItem, sidebarMenu } from "@/constants/menu";

type AppSidebarProps = {
    mobileOpen: boolean;
    setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
    collapsed: boolean;
    setCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function AppSidebar({
    mobileOpen,
    setMobileOpen,
    collapsed,
    setCollapsed,
}: AppSidebarProps) {
    const pathname = usePathname();

    const defaultOpen = useMemo(() => {
        const result: Record<string, boolean> = {};

        sidebarMenu.forEach((item) => {
            if (item.children?.some((child) => pathname.startsWith(child.href))) {
                result[item.label] = true;
            }
        });

        return result;
    }, [pathname]);

    const [openGroups, setOpenGroups] =
        useState<Record<string, boolean>>(defaultOpen);

    const toggleGroup = (label: string) => {
        setOpenGroups((prev) => ({
            ...prev,
            [label]: !prev[label],
        }));
    };

    const isActive = (href?: string) => {
        if (!href) return false;
        return pathname === href || pathname.startsWith(`${href}/`);
    };

    return (
        <>
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/35 lg:hidden"
                    onClick={() => setMobileOpen(false)}
                />
            )}

            <aside
                className={`
          fixed left-0 top-0 z-50 h-screen border-r border-[#e9eef5] bg-white transition-all duration-300
          dark:border-[#1e293b] dark:bg-[#0f172a]
          ${collapsed ? "w-[88px]" : "w-[270px]"}
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
            >
                <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between border-b border-[#eef2f7] px-5 py-5 dark:border-[#1e293b]">
                        <div className={`${collapsed ? "hidden" : "block"}`}>
                            <h1 className="text-[18px] font-extrabold leading-none text-[#0891a8]">
                                Bee&apos;s Medical
                            </h1>
                            <p className="mt-1 text-[14px] leading-none text-[#7b8aa0] dark:text-[#94a3b8]">
                                Medical Practice
                            </p>
                        </div>

                        <button
                            onClick={() => setCollapsed((prev) => !prev)}
                            className="hidden h-11 w-11 items-center justify-center rounded-2xl bg-[#f4f7fb] text-[#56657c] dark:bg-[#111827] dark:text-[#cbd5e1] lg:flex"
                        >
                            <ChevronLeft
                                className={`h-5 w-5 transition-transform ${collapsed ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <button
                            onClick={() => setMobileOpen(false)}
                            className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f4f7fb] text-[#56657c] dark:bg-[#111827] dark:text-[#cbd5e1] lg:hidden"
                        >
                            <Menu className="h-5 w-5" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-3 py-4">
                        <nav className="space-y-2">
                            {sidebarMenu.map((item) => {
                                const Icon = item.icon;
                                const groupOpen = openGroups[item.label];
                                const hasActiveChild = item.children?.some((child) =>
                                    isActive(child.href)
                                );

                                if (item.children?.length) {
                                    return (
                                        <div key={item.label}>
                                            <button
                                                onClick={() => toggleGroup(item.label)}
                                                className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition
                          ${hasActiveChild
                                                        ? "bg-[#e8f7f1] text-[#0f9f72]"
                                                        : "text-[#2f3d55] hover:bg-[#f7fafc] dark:text-[#cbd5e1] dark:hover:bg-[#111827]"
                                                    }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <Icon className="h-5 w-5 shrink-0" />
                                                    {!collapsed && (
                                                        <span className="text-[17px] font-semibold">
                                                            {item.label}
                                                        </span>
                                                    )}
                                                </div>

                                                {!collapsed && (
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${groupOpen ? "rotate-180" : ""
                                                            }`}
                                                    />
                                                )}
                                            </button>

                                            {!collapsed && groupOpen && (
                                                <div className="mt-2 space-y-1 pl-4">
                                                    {item.children.map((child) => {
                                                        const ChildIcon = child.icon;
                                                        const active = isActive(child.href);

                                                        return (
                                                            <Link
                                                                key={child.href}
                                                                href={child.href}
                                                                className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-[16px] transition
                                  ${active
                                                                        ? "border-l-[3px] border-[#13c38b] bg-[#e8f7f1] font-medium text-[#0f9f72]"
                                                                        : "text-[#425168] hover:bg-[#f7fafc] dark:text-[#cbd5e1] dark:hover:bg-[#111827]"
                                                                    }`}
                                                            >
                                                                <ChildIcon className="h-4 w-4 shrink-0" />
                                                                <span>{child.label}</span>
                                                            </Link>
                                                        );
                                                    })}
                                                </div>
                                            )}
                                        </div>
                                    );
                                }

                                const active = isActive(item.href);

                                return (
                                    <Link
                                        key={item.label}
                                        href={item.href || "#"}
                                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 transition
                      ${active
                                                ? "bg-[#e8f7f1] text-[#0f9f72]"
                                                : "text-[#2f3d55] hover:bg-[#f7fafc] dark:text-[#cbd5e1] dark:hover:bg-[#111827]"
                                            }`}
                                    >
                                        <Icon className="h-5 w-5 shrink-0" />
                                        {!collapsed && (
                                            <span className="text-[17px] font-semibold">
                                                {item.label}
                                            </span>
                                        )}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="border-t border-[#eef2f7] px-3 py-4 dark:border-[#1e293b]">
                        <Link
                            href={logoutItem.href}
                            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-[#ef3b5d] transition hover:bg-[#fff5f7] dark:hover:bg-[#1f1720]"
                        >
                            <logoutItem.icon className="h-5 w-5 shrink-0" />
                            {!collapsed && (
                                <span className="text-[17px] font-semibold">
                                    {logoutItem.label}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    );
}