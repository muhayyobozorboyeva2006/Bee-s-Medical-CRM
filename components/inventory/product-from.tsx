"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { productSchema, ProductFormValues } from "../../features/inventory/schemas/roduct.schema";

import { Input } from "../ui/input";
import { Button } from "../ui/button";

type Props = {
    onSubmit: (data: ProductFormValues) => void;
    defaultValues?: ProductFormValues;
};


export default function ProductForm({ onSubmit, defaultValues }: Props) {
    const router = useRouter();
    const form = useForm<ProductFormValues>({
        resolver: zodResolver(productSchema),
        defaultValues: {
            active: true,
        },
    });
    useEffect(() => {
        if (defaultValues) {
            form.reset(defaultValues);
        }
    }, [defaultValues, form]);

    return (
        <div>
            <button
                type="button"
                onClick={() => router.back()}
                className="text-sm text-gray-500 hover:text-black pb-[40px]"
            >
                ← Orqaga
            </button>

            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-2xl space-y-4 shadow-sm"
            >
                <h2 className="text-lg font-semibold">Mahsulot yaratish</h2>

                {/* GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    <Input placeholder="Nomi" {...form.register("name")} />
                    <Input placeholder="Birlik" {...form.register("unit")} />
                    <Input type="number" placeholder="Qoldiq" {...form.register("quantity", { valueAsNumber: true })} />

                    <Input type="number" placeholder="Min" {...form.register("min", { valueAsNumber: true })} />
                    <Input type="number" placeholder="Narx" {...form.register("price", { valueAsNumber: true })} />

                    <Input placeholder="Turi" {...form.register("type")} />
                    <Input placeholder="Toifalar" {...form.register("category")} />
                    <Input placeholder="Bo‘lim" {...form.register("section")} />

                    <Input placeholder="Kod" {...form.register("code")} />
                    <Input placeholder="Ta'minotchi" {...form.register("supplier")} />
                    <Input placeholder="Ombor" {...form.register("warehouse")} />

                    <Input placeholder="Xizmat" {...form.register("service")} />

                </div>

                {/* ACTIVE */}
                <label className="flex items-center gap-2">
                    <input type="checkbox" {...form.register("active")} />
                    Ishlatiladi
                </label>

                <Button type="submit">Saqlash</Button>
            </form>
        </div>
      
    );
}