"use client";

import Link from "next/link";
import { Pencil, Plus, Trash2 } from "lucide-react";
import type { ServiceItem } from "@/features/services/types/services.types";

interface ServiceTableProps {
    services: ServiceItem[];
    isLoading: boolean;
    onDelete: (id: number) => void;
}

export default function ServiceTable({
    services,
    isLoading,
    onDelete,
}: ServiceTableProps) {
    return (
        <div className="overflow-hidden rounded-[18px] border border-[#dde6f0] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1100px] border-collapse">
                    <thead>
                        <tr className="bg-[#fbfcfe] text-left text-[14px] font-extrabold uppercase text-[#52637a]">
                            <th className="px-4 py-4">Kod</th>
                            <th className="px-4 py-4">Nomi</th>
                            <th className="px-4 py-4">Xona</th>
                            <th className="px-4 py-4">Narx (UZS)</th>
                            <th className="px-4 py-4">Bo‘lim</th>
                            <th className="px-4 py-4 text-right">Amallar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td
                                    colSpan={6}
                                    className="px-4 py-16 text-center text-[16px] text-[#64748b]"
                                >
                                    Yuklanmoqda...
                                </td>
                            </tr>
                        ) : services.length ? (
                            services.map((service) => (
                                <tr
                                    key={service.id}
                                    className="border-t border-[#edf2f7] text-[15px] text-[#1d2c44] transition hover:bg-[#f8fafc]"
                                >
                                    <td className="px-4 py-4 font-semibold">{service.code}</td>
                                    <td className="px-4 py-4">{service.name}</td>
                                    <td className="px-4 py-4">{service.room}</td>
                                    <td className="px-4 py-4">
                                        {service.price.toLocaleString()} UZS
                                    </td>
                                    <td className="px-4 py-4">{service.department}</td>
                                    <td className="px-4 py-4">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={`/services/${service.id}/edit`}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#334155] transition hover:bg-[#e2e8f0]"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => onDelete(service.id)}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1f2] text-[#e11d48] transition hover:bg-[#ffe4e6]"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={6} className="px-4 py-16">
                                    <div className="flex flex-col items-center justify-center text-center">
                                        <div className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-[#e8fff7] text-[#009b72]">
                                            <Plus className="h-4 w-4" />
                                        </div>

                                        <p className="mt-4 text-[16px] font-extrabold text-[#0f172a]">
                                            Ma’lumot yo‘q
                                        </p>

                                        <p className="mt-2 text-[15px] text-[#64748b]">
                                            Xizmat yarating
                                        </p>

                                        <Link
                                            href="/services/create"
                                            className="mt-5 inline-flex h-11 items-center gap-2 rounded-[12px] bg-gradient-to-r from-[#009b72] to-[#0ea5e9] px-5 text-[15px] font-bold text-white shadow-lg"
                                        >
                                            <Plus className="h-4 w-4" />
                                            Xizmat yaratish
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}