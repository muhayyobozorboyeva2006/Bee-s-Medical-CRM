"use client";

import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import PatientTable from "@/components/patients/patient-table";
import { usePatients } from "@/features/patients/hooks/use-patients";
import { downloadCsv } from "@/utils/download-csv";
import { usePatientFiltersStore } from "@/features/patients/store/patient-filters.store";
import { PatientGender } from "@/features/patients/types/patients.types";

export default function PatientsPage() {
    const { search, gender, source, doctor, setSearch, setGender, setSource, setDoctor } =
        usePatientFiltersStore();

    const { patients, isLoading, removePatient } = usePatients({
        search,
        gender,
        source,
        doctor,
        status: "active",
    });

    const handleDownloadCsv = () => {
        downloadCsv(
            "patients.csv",
            patients.map((patient) => ({
                Ism: patient.first_name,
                Familiya: patient.last_name,
                Telefon: patient.phone,
                Jinsi: patient.gender === "male" ? "Erkak" : "Ayol",
                Yosh: patient.age,
                Sana: patient.created_at,
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
                        <div className="relative">
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value as "" | PatientGender)}
                                className="h-[52px] w-[185px] appearance-none rounded-[18px] border-2 border-[#12bfa5] bg-white px-4 pr-10 text-[15px] text-[#0f172a] outline-none shadow-[0_0_0_1px_rgba(29,155,240,0.35)]"
                            >
                                <option value="">Barchasi</option>
                                <option value="male">Erkak</option>
                                <option value="female">Ayol</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
                        </div>

                        <div className="relative">
                            <select
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
                                className="h-[52px] w-[185px] appearance-none rounded-[18px] border-2 border-[#12bfa5] bg-white px-4 pr-10 text-[15px] text-[#0f172a] outline-none shadow-[0_0_0_1px_rgba(29,155,240,0.35)]"
                            >
                                <option value="">Barchasi</option>
                                <option value="Telegram">Telegram</option>
                                <option value="Instagram">Instagram</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
                        </div>

                        <div className="relative">
                            <select
                                value={doctor}
                                onChange={(e) => setDoctor(e.target.value)}
                                className="h-[52px] w-[185px] appearance-none rounded-[18px] border-2 border-[#12bfa5] bg-white px-4 pr-10 text-[15px] text-[#0f172a] outline-none shadow-[0_0_0_1px_rgba(29,155,240,0.35)]"
                            >
                                <option value="">Barchasi</option>
                                <option value="Azizbek">Dr. Azizbek</option>
                                <option value="Malika">Dr. Malika</option>
                            </select>
                            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
                        </div>
                    </div>
                </div>
            </div>

            <PatientTable
                patients={patients}
                isLoading={isLoading}
                onDelete={removePatient}
            />
        </div>
    );
}