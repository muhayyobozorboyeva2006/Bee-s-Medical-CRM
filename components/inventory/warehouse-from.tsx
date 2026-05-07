"use client";

import {
    useEffect,
} from "react";

import {
    useRouter,
} from "next/navigation";

import {
    useForm,
} from "react-hook-form";

type Props = {
    onSubmit: (data: any) => void;
    defaultValues?: any;
};

export default function WarehouseForm({
    onSubmit,
    defaultValues,
}: Props) {

    const router = useRouter();

    const form = useForm({
        defaultValues: {
            name: "",
            status: "",
            saleStatus: "",
            queue: "",
        },
    });

    useEffect(() => {
        if (defaultValues) {
            form.reset(defaultValues);
        }
    }, [defaultValues, form]);

    return (
        <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="bg-white rounded-2xl shadow-sm p-4 md:p-6 space-y-5"
        >

            {/* TOP */}
            <div className="flex items-center justify-between">

                <button
                    type="button"
                    onClick={() => router.back()}
                    className="text-sm text-gray-500 hover:text-black   cursor-pointer"
                >
                    ← Orqaga
                </button>

                <h2 className="text-xl font-semibold">
                    Ombor yaratish
                </h2>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                <input
                    placeholder="Nomi"
                    className="border rounded-xl px-4 py-3"
                    {...form.register("name")}
                />

                <input
                    placeholder="Holat"
                    className="border rounded-xl px-4 py-3"
                    {...form.register("status")}
                />

                <input
                    placeholder="Sotuv ombori holati"
                    className="border rounded-xl px-4 py-3"
                    {...form.register("saleStatus")}
                />

                <input
                    placeholder="Hisobdan chiqarish"
                    className="border rounded-xl px-4 py-3"
                    {...form.register("queue")}
                />

            </div>

            <button
                type="submit"
                className="bg-gradient-to-r cursor-pointer from-green-400 to-blue-500 text-white px-5 py-3 rounded-2xl"
            >
                Saqlash
            </button>

        </form>
    );
}