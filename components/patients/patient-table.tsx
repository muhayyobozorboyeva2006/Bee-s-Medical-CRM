"use client";

import Link from "next/link";
import { FileText, Pencil, Trash2 } from "lucide-react";
import type { PatientItem } from "@/features/patients/types/patients.types";

interface PatientTableProps {
    patients?: PatientItem[];
    isLoading: boolean;
    onDelete: (id: number) => void;
}

export default function PatientTable({
    patients = [],
    isLoading,
    onDelete,
}: PatientTableProps) {
    const safePatients = Array.isArray(patients) ? patients : [];

    return (
        <div className="overflow-hidden rounded-[18px] border border-[#dde6f0] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="overflow-x-auto">
                <table className="w-full min-w-[1150px] border-collapse">
                    <thead>
                        <tr className="bg-[#fbfcfe] text-left text-[18px] font-extrabold text-[#34445c]">
                            <th className="px-4 py-4">Ism</th>
                            <th className="px-4 py-4">Familiya</th>
                            <th className="px-4 py-4">Telefon</th>
                            <th className="px-4 py-4">Jinsi</th>
                            <th className="px-4 py-4">Yosh</th>
                            <th className="px-4 py-4">Sana</th>
                            <th className="px-4 py-4">Shifokor</th>
                            <th className="px-4 py-4">Manba</th>
                            <th className="px-4 py-4">PDF</th>
                            <th className="px-4 py-4">Amallar</th>
                        </tr>
                    </thead>

                    <tbody>
                        {isLoading ? (
                            <tr>
                                <td
                                    colSpan={10}
                                    className="px-4 py-10 text-center text-[17px] text-[#64748b]"
                                >
                                    Yuklanmoqda...
                                </td>
                            </tr>
                        ) : safePatients.length ? (
                            safePatients.map((patient) => (
                                <tr
                                    key={patient.id}
                                    className="border-t border-[#edf2f7] text-[15px] text-[#1d2c44] transition hover:bg-[#f8fafc]"
                                >
                                    <td className="px-4 py-4 font-medium">{patient.first_name}</td>
                                    <td className="px-4 py-4">{patient.last_name}</td>
                                    <td className="px-4 py-4">{patient.phone}</td>
                                    <td className="px-4 py-4">
                                        {patient.gender === "male" ? "Erkak" : "Ayol"}
                                    </td>
                                    <td className="px-4 py-4">{patient.age}</td>
                                    <td className="px-4 py-4">{patient.created_at}</td>
                                    <td className="px-4 py-4">{patient.doctor_name}</td>
                                    <td className="px-4 py-4">{patient.source}</td>
                                    <td className="px-4 py-4">
                                        {patient.pdf_url ? (
                                            <a
                                                href={patient.pdf_url}
                                                target="_blank"
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#eef8ff] text-[#1d9bf0]"
                                            >
                                                <FileText className="h-4 w-4" />
                                            </a>
                                        ) : (
                                            "—"
                                        )}
                                    </td>
                                    <td className="px-4 py-4">
                                        <div className="flex items-center gap-2">
                                            <Link
                                                href={`/patients/${patient.id}/edit`}
                                                className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#f1f5f9] text-[#334155] transition hover:bg-[#e2e8f0]"
                                            >
                                                <Pencil className="h-4 w-4" />
                                            </Link>

                                            <button
                                                type="button"
                                                onClick={() => onDelete(patient.id)}
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
                                    colSpan={10}
                                    className="px-4 py-10 text-center text-[18px] text-[#64748b]"
                                >
                                    Hech narsa topilmadi
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}