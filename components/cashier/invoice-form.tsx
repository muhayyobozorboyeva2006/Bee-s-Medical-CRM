"use client";

import { ArrowLeft, Save } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type {
    InvoiceItem,
    InvoicePayload,
    InvoiceStatus,
} from "@/features/invoices/types/invoices.types";

interface InvoiceFormProps {
    onSubmit: (payload: InvoicePayload) => Promise<InvoiceItem>;
}


export default function InvoiceForm({ onSubmit }: InvoiceFormProps) {
    const router = useRouter();

    const [form, setForm] = useState({
        code: "",
        patient_name: "",
        total: "",
        status: "unpaid" as InvoiceStatus,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        await onSubmit({
            code: form.code,
            patient_name: form.patient_name,
            total: Number(form.total),
            status: form.status,
        });

        router.push("/cashier/invoices");
    };

    return (
        <div className="space-y-6">
            <button
                type="button"
                onClick={() => router.push("/cashier/invoices")}
                className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#64748b]"
            >
                <ArrowLeft className="h-4 w-4" />
                Hisob-fakturalarga qaytish
            </button>

            <section className="overflow-hidden rounded-[28px] border border-[#dbe7f1] bg-white shadow-[0_18px_45px_rgba(15,23,42,0.07)]">
                <div className="bg-[#111827] px-7 py-7 text-white">
                    <h1 className="text-[28px] font-extrabold">
                        Yangi Hisob-Faktura
                    </h1>
                    <p className="mt-2 text-[14px] text-white/70">
                        Hisob-faktura ma’lumotlarini kiriting
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="p-7">
                    <div className="grid gap-x-7 gap-y-6 md:grid-cols-2">
                        <Field label="Kod">
                            <input
                                value={form.code}
                                onChange={(e) => setForm({ ...form, code: e.target.value })}
                                className="form-input"
                                placeholder="INV-003"
                            />
                        </Field>

                        <Field label="Bemor">
                            <input
                                value={form.patient_name}
                                onChange={(e) =>
                                    setForm({ ...form, patient_name: e.target.value })
                                }
                                className="form-input"
                                placeholder="Bemor F.I.Sh"
                            />
                        </Field>

                        <Field label="Umumiy summa">
                            <input
                                type="number"
                                value={form.total}
                                onChange={(e) => setForm({ ...form, total: e.target.value })}
                                className="form-input"
                                placeholder="250000"
                            />
                        </Field>

                        <Field label="Holati">
                            <select
                                value={form.status}
                                onChange={(e) =>
                                    setForm({
                                        ...form,
                                        status: e.target.value as InvoiceStatus,
                                    })
                                }
                                className="form-input"
                            >
                                <option value="paid">To‘langan</option>
                                <option value="unpaid">To‘lanmagan</option>
                            </select>
                        </Field>
                    </div>

                    <div className="mt-8 flex justify-end gap-3 border-t border-[#edf2f7] pt-5">
                        <button
                            type="button"
                            onClick={() => router.push("/cashier/invoices")}
                            className="h-11 rounded-[14px] border border-[#dbe4ee] px-5 font-semibold text-[#334155]"
                        >
                            Bekor qilish
                        </button>

                        <button
                            type="submit"
                            className="flex items-center gap-2 rounded-[14px] bg-[#111827] px-5 text-white shadow-lg"
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