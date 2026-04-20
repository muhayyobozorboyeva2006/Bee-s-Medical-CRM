"use client";

import { useEffect, useState } from "react";
import AppHeader from "./app-header";
import AppSidebar from "./app-sidebar";

type AppShellProps = {
    children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem("sidebar-collapsed");
        if (saved === "true") {
            setCollapsed(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("sidebar-collapsed", String(collapsed));
    }, [collapsed]);

    return (
        <div className="min-h-screen bg-[#f6f9fc] transition-colors duration-300 dark:bg-[#020617]">
            <AppSidebar
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                collapsed={collapsed}
                setCollapsed={setCollapsed}
            />

            <div
                className={`transition-all duration-300 ${collapsed ? "lg:pl-[88px]" : "lg:pl-[270px]"
                    }`}
            >
                <AppHeader setMobileOpen={setMobileOpen} />
                <main className="p-4 sm:p-6 lg:p-8">{children}</main>
            </div>
        </div>
    );
}