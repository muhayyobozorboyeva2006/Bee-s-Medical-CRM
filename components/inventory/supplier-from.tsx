"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import type {
    SupplierPayload,
} from "@/features/inventory/types/suppliers.tpyes";

type Props = {
    onSubmit: (
        data: SupplierPayload
    ) => void;

    defaultValues?: Partial<SupplierPayload>;
};

export default function SupplierForm({
    onSubmit,
    defaultValues,
}: Props) {

    const router = useRouter();

    const form =
        useForm<SupplierPayload>({
            defaultValues: {
                name: "",
                balance: 0,
                description: "",
                phone: "",
                inn: "",
                ...defaultValues,
            },
        });

    useEffect(() => {

        if (defaultValues) {
            form.reset(defaultValues);
        }

    }, [defaultValues, form]);

    return (
        <div className="p-6 space-y-4">

            {/* HEADER */}
            <div className="bg-white p-5 rounded-2xl shadow-sm">

                <button
                    type="button"
                    onClick={() => router.back()}
                    className="
            text-gray-500
            hover:text-black
            mb-4
          "
                >
                    ← Orqaga
                </button>

                <h1 className="text-2xl font-semibold">
                    Ta'minotchi
                </h1>

                <p className="text-sm text-gray-500">
                    Ta'minotchi ma'lumotlari
                </p>

            </div>

            {/* FORM */}
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="
          bg-white
          p-6
          rounded-2xl
          shadow-sm
          space-y-4
        "
            >

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        placeholder="Nomi"
                        className="border p-3 rounded-xl"
                        {...form.register("name")}
                    />

                    <input
                        type="number"
                        placeholder="Balans"
                        className="border p-3 rounded-xl"
                        {...form.register(
                            "balance",
                            {
                                valueAsNumber: true,
                            }
                        )}
                    />

                    <input
                        placeholder="Telefon"
                        className="border p-3 rounded-xl"
                        {...form.register("phone")}
                    />

                    <input
                        placeholder="INN"
                        className="border p-3 rounded-xl"
                        {...form.register("inn")}
                    />

                </div>

                <textarea
                    placeholder="Tavsif"
                    className="
            border
            p-3
            rounded-xl
            w-full
            min-h-[120px]
          "
                    {...form.register("description")}
                />

                <button
                    type="submit"
                    className="
            bg-gradient-to-r
            from-green-400
            to-blue-500
            text-white
            px-5
            py-3
            rounded-xl
          "
                >
                    Saqlash
                </button>

            </form>
        </div>
    );
}