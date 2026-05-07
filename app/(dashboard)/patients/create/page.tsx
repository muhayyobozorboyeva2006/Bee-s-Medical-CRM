"use client";

import { createPatient } from "@/features/patients/api/patients.api";
import { usePatientFiltersStore } from "@/features/patients/store/patient-filters.store";
import type { PatientGender } from "@/features/patients/types/patients.types";
import {
    ArrowLeft,
    CalendarDays,
    Phone,
    Save,
    UserPlus,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreatePatientPage() {
    const router = useRouter();
    const resetFilters = usePatientFiltersStore((state) => state.reset);

    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        phone: "",
        age: "",
        gender: "female" as PatientGender,
        doctor_name: "",
        source: "",
        created_at: new Date().toISOString().slice(0, 10),
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await createPatient({
            first_name: form.first_name,
            last_name: form.last_name,
            phone: form.phone,
            age: Number(form.age),
            gender: form.gender,
            doctor_name: form.doctor_name,
            source: form.source,
            created_at: form.created_at,
        });

        resetFilters();
        router.push("/patients");
    };

    return (
        <div className="space-y-6">
            <button
                type="button"
                onClick={() => router.push("/patients")}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#64748b] transition hover:text-[#0f172a]"
            >
                <ArrowLeft className="h-4 w-4" />
                Bemorlar ro‘yxatiga qaytish
            </button>

            <section className="overflow-hidden rounded-[28px] border border-[#dbe7f1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                <div className="bg-gradient-to-r from-[#10b981] via-[#10a8c9] to-[#1d9bf0] px-7 py-7 text-white">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white/20">
                            <UserPlus className="h-7 w-7" />
                        </div>

                        <div>
                            <h1 className="text-[28px] font-extrabold">
                                Yangi bemor qo‘shish
                            </h1>
                            <p className="mt-2 text-[14px] text-white/80">
                                Bemor ma’lumotlarini to‘ldiring
                            </p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-7">
                    <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
                        <Field label="Ism">
                            <input
                                value={form.first_name}
                                onChange={(e) =>
                                    setForm({ ...form, first_name: e.target.value })
                                }
                                className="form-input"
                                placeholder="Aliya"
                            />
                        </Field>

                        <Field label="Familiya">
                            <input
                                value={form.last_name}
                                onChange={(e) =>
                                    setForm({ ...form, last_name: e.target.value })
                                }
                                className="form-input"
                                placeholder="Karimova"
                            />
                        </Field>

                        <Field label="Telefon">
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                <input
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({ ...form, phone: e.target.value })
                                    }
                                    className="form-input pl-12"
                                    placeholder="+998..."
                                />
                            </div>
                        </Field>

                        <Field label="Yosh">
                            <input
                                type="number"
                                value={form.age}
                                onChange={(e) => setForm({ ...form, age: e.target.value })}
                                className="form-input"
                                placeholder="22"
                            />
                        </Field>

                        <Field label="Jinsi">
                            <select
                                value={form.gender}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        gender: e.target.value as PatientGender,
                                    })
                                }
                                className="form-input"
                            >
                                <option value="female">Ayol</option>
                                <option value="male">Erkak</option>
                            </select>
                        </Field>

                        <Field label="Shifokor">
                            <input
                                value={form.doctor_name}
                                onChange={(e) =>
                                    setForm({ ...form, doctor_name: e.target.value })
                                }
                                className="form-input"
                                placeholder="Dr. Azizbek"
                            />
                        </Field>

                        <Field label="Manba">
                            <select
                                value={form.source}
                                onChange={(e) => setForm({ ...form, source: e.target.value })}
                                className="form-input"
                            >
                                <option value="">Tanlang</option>
                                <option value="Telegram">Telegram</option>
                                <option value="Instagram">Instagram</option>
                                <option value="Sayt">Sayt</option>
                                <option value="Tavsiya">Tavsiya</option>
                            </select>
                        </Field>

                        <Field label="Sana">
                            <div className="relative">
                                <CalendarDays className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                                <input
                                    type="date"
                                    value={form.created_at}
                                    onChange={(e) =>
                                        setForm({ ...form, created_at: e.target.value })
                                    }
                                    className="form-input pl-12"
                                />
                            </div>
                        </Field>
                    </div>

                    <div className="mt-8 flex justify-end gap-3 border-t border-[#edf2f7] pt-5">
                        <button
                            type="button"
                            onClick={() => router.push("/patients")}
                            className="h-11 rounded-[14px] border border-[#dbe4ee] px-5 font-semibold text-[#334155] hover:bg-[#f8fafc]"
                        >
                            Bekor qilish
                        </button>

                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-[14px] bg-[#009b72] px-5 text-white shadow-lg hover:bg-[#008766]"
                        >
                            <Save className="h-4 w-4" />
                            Saqlash
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

function Field({
    label,
    children,
}: {
    label: string;
    children: React.ReactNode;
}) {
    return (
        <label className="flex flex-col gap-2.5">
            <span className="text-[14px] font-semibold text-[#334155]">
                {label}
            </span>
            {children}
        </label>
    );
}