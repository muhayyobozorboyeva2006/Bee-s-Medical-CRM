"use client";

import { ArrowLeft, Plus, Save, UserPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { ServicePayload } from "@/features/services/types/services.types";

interface ServiceFormProps {
    mode: "create" | "edit";
    defaultValues?: ServicePayload;
    onSubmit: (payload: ServicePayload) => Promise<void>;
}

export default function ServiceForm({
    mode,
    defaultValues,
    onSubmit,
}: ServiceFormProps) {
    const router = useRouter();

    const [form, setForm] = useState({
        code: defaultValues?.code ?? "",
        name: defaultValues?.name ?? "",
        room: defaultValues?.room ?? "",
        price: defaultValues?.price ? String(defaultValues.price) : "",
        department: defaultValues?.department ?? "",
    });

    const isEdit = mode === "edit";

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await onSubmit({
            code: form.code,
            name: form.name,
            room: form.room,
            price: Number(form.price),
            department: form.department,
        });
    };

    return (
        <div className="space-y-6">
            <button
                type="button"
                onClick={() => router.push("/services")}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#64748b] transition hover:text-[#0f172a]"
            >
                <ArrowLeft className="h-4 w-4" />
                Xizmatlar ro‘yxatiga qaytish
            </button>

            <section className="overflow-hidden rounded-[28px] border border-[#dbe7f1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                <div className="bg-gradient-to-r from-[#10b981] via-[#10a8c9] to-[#1d9bf0] px-7 py-7 text-white">
                    <div className="flex items-center gap-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-white/20">
                            {isEdit ? (
                                <UserPen className="h-7 w-7" />
                            ) : (
                                <Plus className="h-7 w-7" />
                            )}
                        </div>

                        <div>
                            <h1 className="text-[28px] font-extrabold">
                                {isEdit ? "Xizmatni tahrirlash" : "Yangi xizmat"}
                            </h1>
                            <p className="mt-2 text-[14px] text-white/80">
                                {isEdit
                                    ? "Xizmat ma’lumotlarini o‘zgartiring"
                                    : "Xizmat ma’lumotlarini to‘ldiring"}
                            </p>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="p-7">
                    <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
                        <Field label="Kod">
                            <input
                                value={form.code}
                                onChange={(e) => setForm({ ...form, code: e.target.value })}
                                className="form-input"
                                placeholder="X-001"
                            />
                        </Field>

                        <Field label="Nomi">
                            <input
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="form-input"
                                placeholder="Konsultatsiya"
                            />
                        </Field>

                        <Field label="Xona">
                            <input
                                value={form.room}
                                onChange={(e) => setForm({ ...form, room: e.target.value })}
                                className="form-input"
                                placeholder="101"
                            />
                        </Field>

                        <Field label="Narx (UZS)">
                            <input
                                type="number"
                                value={form.price}
                                onChange={(e) => setForm({ ...form, price: e.target.value })}
                                className="form-input"
                                placeholder="120000"
                            />
                        </Field>

                        <Field label="Bo‘lim">
                            <input
                                value={form.department}
                                onChange={(e) =>
                                    setForm({ ...form, department: e.target.value })
                                }
                                className="form-input"
                                placeholder="Terapiya"
                            />
                        </Field>
                    </div>

                    <div className="mt-8 flex justify-end gap-3 border-t border-[#edf2f7] pt-5">
                        <button
                            type="button"
                            onClick={() => router.push("/services")}
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