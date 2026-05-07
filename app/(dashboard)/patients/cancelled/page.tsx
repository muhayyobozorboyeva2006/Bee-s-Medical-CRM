"use client";

import Link from "next/link";
import { ChevronDown, RotateCcw, Search } from "lucide-react";
import { usePatients } from "@/features/patients/hooks/use-patients";
import { usePatientFiltersStore } from "@/features/patients/store/patient-filters.store";
import type { PatientGender } from "@/features/patients/types/patients.types";
import { downloadCsv } from "@/utils/download-csv";

export default function CancelledPatientsPage() {
    const {
        search,
        gender,
        source,
        doctor,
        setSearch,
        setGender,
        setSource,
        setDoctor,
    } = usePatientFiltersStore();

    const { patients, isLoading, restorePatient } = usePatients({
        search,
        gender,
        source,
        doctor,
        status: "cancelled",
    });

    const handleDownloadCsv = () => {
        downloadCsv(
            "cancelled-patients.csv",
            patients.map((patient) => ({
                Ism: patient.first_name,
                Familiya: patient.last_name,
                Telefon: patient.phone,
                Jinsi: patient.gender === "male" ? "Erkak" : "Ayol",
                Yosh: patient.age,
                "Bekor qilingan sana": patient.cancelled_at ?? "",
                Shifokor: patient.doctor_name,
                Manba: patient.source,
            }))
        );
    };

    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-extrabold text-[#0f172a]">
                    Bemorlar
                </h1>

                <div className="flex items-center gap-3">
                    <button
                        type="button"
                        onClick={handleDownloadCsv}
                        className="h-10 rounded-[8px] border border-[#dde6f0] bg-white px-4 text-[15px] font-medium text-[#0f172a] shadow-sm transition hover:bg-[#f8fafc]"
                    >
                        CSV yuklab olish
                    </button>

                    <Link
                        href="/patients/create"
                        className="inline-flex h-10 items-center rounded-[8px] bg-[#009b72] px-5 text-[15px] font-bold text-white shadow-sm transition hover:bg-[#008766]"
                    >
                        Yangi
                    </Link>
                </div>
            </div>

            <div className="rounded-[18px] border border-[#dde6f0] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                    <div className="flex h-[54px] w-full max-w-[620px] items-center gap-3 rounded-[20px] border-2 border-[#12bfa5] bg-white px-4 shadow-[0_0_0_1px_rgba(29,155,240,0.35)]">
                        <Search className="h-5 w-5 text-[#10b981]" />
                        <input
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Qidirish..."
                            className="h-full flex-1 bg-transparent text-[15px] text-[#0f172a] outline-none placeholder:text-[#94a3b8]"
                        />
                    </div>

                    <div className="grid gap-3 sm:grid-cols-3">
                        <FilterSelect
                            value={gender}
                            onChange={(value) => setGender(value as "" | PatientGender)}
                        >
                            <option value="">Barchasi</option>
                            <option value="male">Erkak</option>
                            <option value="female">Ayol</option>
                        </FilterSelect>

                        <FilterSelect value={source} onChange={setSource}>
                            <option value="">Barchasi</option>
                            <option value="Telegram">Telegram</option>
                            <option value="Instagram">Instagram</option>
                        </FilterSelect>

                        <FilterSelect value={doctor} onChange={setDoctor}>
                            <option value="">Barchasi</option>
                            <option value="Azizbek">Dr. Azizbek</option>
                            <option value="Malika">Dr. Malika</option>
                        </FilterSelect>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-[#dde6f0] bg-white shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
                <div className="overflow-x-auto">
                    <table className="w-full min-w-[1100px] border-collapse">
                        <thead>
                            <tr className="bg-[#fbfcfe] text-left text-[18px] font-extrabold text-[#34445c]">
                                <th className="px-4 py-4">Ism</th>
                                <th className="px-4 py-4">Familiya</th>
                                <th className="px-4 py-4">Telefon</th>
                                <th className="px-4 py-4">Jinsi</th>
                                <th className="px-4 py-4">Yosh</th>
                                <th className="px-4 py-4">Bekor qilingan sana</th>
                                <th className="px-4 py-4">Shifokor</th>
                                <th className="px-4 py-4">Manba</th>
                                <th className="px-4 py-4">Amallar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {isLoading ? (
                                <tr>
                                    <td
                                        colSpan={9}
                                        className="px-4 py-10 text-center text-[#64748b]"
                                    >
                                        Yuklanmoqda...
                                    </td>
                                </tr>
                            ) : patients.length ? (
                                patients.map((patient) => (
                                    <tr
                                        key={patient.id}
                                        className="border-t border-[#edf2f7] text-[15px] text-[#1d2c44]"
                                    >
                                        <td className="px-4 py-4 font-medium">
                                            {patient.first_name}
                                        </td>
                                        <td className="px-4 py-4">{patient.last_name}</td>
                                        <td className="px-4 py-4">{patient.phone}</td>
                                        <td className="px-4 py-4">
                                            {patient.gender === "male" ? "Erkak" : "Ayol"}
                                        </td>
                                        <td className="px-4 py-4">{patient.age}</td>
                                        <td className="px-4 py-4">
                                            {patient.cancelled_at ?? "—"}
                                        </td>
                                        <td className="px-4 py-4">{patient.doctor_name}</td>
                                        <td className="px-4 py-4">{patient.source}</td>
                                        <td className="px-4 py-4">
                                            <button
                                                type="button"
                                                onClick={() => restorePatient(patient.id)}
                                                className="inline-flex h-9 items-center gap-2 rounded-xl bg-[#ecfdf5] px-3 text-[14px] font-semibold text-[#009b72] transition hover:bg-[#d1fae5]"
                                            >
                                                <RotateCcw className="h-4 w-4" />
                                                Tiklash
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan={9}
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
        </div>
    );
}

function FilterSelect({
    value,
    onChange,
    children,
}: {
    value: string;
    onChange: (value: string) => void;
    children: React.ReactNode;
}) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="h-[52px] w-[185px] appearance-none rounded-[18px] border-2 border-[#12bfa5] bg-white px-4 pr-10 text-[15px] text-[#0f172a] outline-none shadow-[0_0_0_1px_rgba(29,155,240,0.35)]"
            >
                {children}
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
        </div>
    );
}