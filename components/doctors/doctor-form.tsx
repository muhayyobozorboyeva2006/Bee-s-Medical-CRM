"use client";

import { ArrowLeft, Save, Stethoscope, UserPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { DoctorPayload } from "@/features/doctors/types/doctors.types";

interface DoctorFormProps {
    mode: "create" | "edit";
    defaultValues?: DoctorPayload;
    onSubmit: (payload: DoctorPayload) => Promise<void>;
}

export default function DoctorForm({
    mode,
    defaultValues,
    onSubmit,
}: DoctorFormProps) {
    const router = useRouter();

    const [form, setForm] = useState({
        code: defaultValues?.code ?? "",
        full_name: defaultValues?.full_name ?? "",
        specialty: defaultValues?.specialty ?? "",
        room: defaultValues?.room ?? "",
        price: defaultValues?.price ? String(defaultValues.price) : "",
        department: defaultValues?.department ?? "",
    });

    const isEdit = mode === "edit";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await onSubmit({
            code: form.code,
            full_name: form.full_name,
            specialty: form.specialty,
            room: form.room,
            price: Number(form.price),
            department: form.department,
        });
    };

    return (
        <div className="space-y-6">
            <button
                type="button"
                onClick={() => router.push("/doctors")}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#64748b] transition hover:text-[#0f172a]"
            >
                <ArrowLeft className="h-4 w-4" />
                Shifokorlar ro‘yxatiga qaytish
            </button>

            <section className="overflow-hidden rounded-[28px] border border-[#dbe7f1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                <div className="bg-gradient-to-r from-[#10b981] via-[#10a8c9] to-[#1d9bf0] px-7 py-7 text-white">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white/20">
                            {isEdit ? (
                                <UserPen className="h-7 w-7" />
                            ) : (
                                <Stethoscope className="h-7 w-7" />
                            )}
                        </div>

                        <div>
                            <h1 className="text-[28px] font-extrabold">
                                {isEdit ? "Shifokorni tahrirlash" : "Shifokor qo‘shish"}
                            </h1>
                            <p className="mt-2 text-[14px] text-white/80">
                                {isEdit
                                    ? "Shifokor ma’lumotlarini o‘zgartiring"
                                    : "Shifokor ma’lumotlarini to‘ldiring"}
                            </p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-7">
                    <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
                        <Field label="# Kod">
                            <input
                                value={form.code}
                                onChange={(e) => setForm({ ...form, code: e.target.value })}
                                className="form-input"
                                placeholder="D-003"
                            />
                        </Field>

                        <Field label="F.I.Sh">
                            <input
                                value={form.full_name}
                                onChange={(e) =>
                                    setForm({ ...form, full_name: e.target.value })
                                }
                                className="form-input"
                                placeholder="Dr. Sardor Tursunov"
                            />
                        </Field>

                        <Field label="Mutaxassisligi">
                            <input
                                value={form.specialty}
                                onChange={(e) =>
                                    setForm({ ...form, specialty: e.target.value })
                                }
                                className="form-input"
                                placeholder="Nevropatolog"
                            />
                        </Field>

                        <Field label="Xona">
                            <input
                                value={form.room}
                                onChange={(e) => setForm({ ...form, room: e.target.value })}
                                className="form-input"
                                placeholder="301"
                            />
                        </Field>

                        <Field label="Narx (UZS)">
                            <input
                                type="number"
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                                className="form-input"
                                placeholder="150000"
                            />
                        </Field>

                        <Field label="Bo‘lim">
                            <input
                                value={form.department}
                                onChange={(e) =>
                                    setForm({ ...form, department: e.target.value })
                                }
                                className="form-input"
                                placeholder="Nevrologiya"
                            />
                        </Field>
                    </div>

                    <div className="mt-8 flex justify-end gap-3 border-t border-[#edf2f7] pt-5">
                        <button
                            type="button"
                            onClick={() => router.push("/doctors")}
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