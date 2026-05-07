"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import type { DoctorItem } from "@/features/doctors/types/doctors.types";

interface DoctorTableProps {
    doctors: DoctorItem[];
    isLoading: boolean;
    onDelete: (id: number) => void;
}

export default function DoctorTable({
    doctors,
    isLoading,
    onDelete,
}: DoctorTableProps) {
    return (
        <div className="overflow-hidden rounded-[18px] border border-[#dde6f0] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1100px] border-collapse">
                    <thead>
                        <tr className="bg-[#fbfcfe] text-left text-[17px] font-extrabold text-[#34445c]">
                            <th className="px-4 py-4"># Kod</th>
                            <th className="px-4 py-4">F.I.Sh</th>
                            <th className="px-4 py-4">Mutaxassisligi</th>
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
                                    colSpan={7}
                                    className="px-4 py-10 text-center text-[16px] text-[#64748b]"
                                >
                                    Yuklanmoqda...
                                </td>
                            </tr>
                        ) : doctors.length ? (
                            doctors.map((doctor) => (
                                <tr
                                    key={doctor.id}
                                    className="border-t border-[#edf2f7] text-[15px] text-[#1d2c44] transition hover:bg-[#f8fafc]"
                                >
                                    <td className="px-4 py-4 font-semibold">{doctor.code}</td>
                                    <td className="px-4 py-4">{doctor.full_name}</td>
                                    <td className="px-4 py-4">{doctor.specialty}</td>
                                    <td className="px-4 py-4">{doctor.room}</td>
                                    <td className="px-4 py-4">
                                        {doctor.price.toLocaleString()} UZS
                                    </td>
                                    <td className="px-4 py-4">{doctor.department}</td>

                                    <td className="px-4 py-4">
                                        <div className="flex justify-end gap-2">
                                            <Link
                                                href={`/doctors/${doctor.id}/edit`}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#334155] transition hover:bg-[#e2e8f0]"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => onDelete(doctor.id)}
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
                                <td
                                    colSpan={7}
                                    className="px-4 py-10 text-center text-[16px] text-[#64748b]"
                                >
                                    Ma’lumot yo‘q
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}