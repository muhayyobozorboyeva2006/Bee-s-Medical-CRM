"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type { ReceiptItem } from "@/features/inventory/types/invwntory.types";

type FormValues = Omit<ReceiptItem, "id">;

type Props = {
    onSubmit: (data: FormValues) => void;
    defaultValues?: Partial<FormValues>;
};

export default function ReceiptForm({ onSubmit, defaultValues }: Props) {
    const form = useForm<FormValues>({
        defaultValues: {
            status: "Yangi",
            products: "",
            date: new Date().toISOString(),
            warehouse: "",
            supplier: "",
            quantity: 0,
            ...defaultValues , 
        },
    });

   
    useEffect(() => {
        if (defaultValues) {
            form.reset(defaultValues);
        }
    }, [defaultValues, form]);

    return (
        <div className="">
            <button
                type="button"
                onClick={() => history.back()}
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition pb-[40px] cursor-pointer"
            >
                <span className="text-lg">←</span>
                Orqaga
            </button>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-2xl shadow-sm space-y-4"
            >
                <h2 className="text-lg font-semibold">Mahsulot kelishi</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <input {...form.register("products")} placeholder="Mahsulotlar" className="border p-2 rounded-xl" />
                    <input {...form.register("supplier")} placeholder="Ta'minotchi" className="border p-2 rounded-xl" />
                    <input {...form.register("warehouse")} placeholder="Ombor" className="border p-2 rounded-xl" />

                    <input
                        type="number"
                        {...form.register("quantity", { valueAsNumber: true })}
                        placeholder="Miqdor"
                        className="border p-2 rounded-xl"
                    />

                    <input
                        {...form.register("date")}
                        type="datetime-local"
                        className="border p-2 rounded-xl"
                    />

                </div>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-xl"
                >
                    Saqlash
                </button>
            </form>
     </div>
       
    );
}