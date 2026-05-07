"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useWastes } from "../../features/inventory/hooks/use-wastes";

export default function WasteForm() {
    const router = useRouter();
    const { add } = useWastes();

    const [form, setForm] = useState({
        warehouse: "",
        reason: "",
        product: "",
        unit: "dona",
        quantity: 0,
        date: new Date().toISOString(),
    });

    const handleSubmit = async () => {
        await add(form);
        router.push("/inventory/wastes");
    };

    return (
        <div className="p-4 md:p-6 space-y-6">

            {/* HEADER */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
                <h2 className="text-lg font-semibold">
                    Yo‘q qilish (chiqindilar) / Yaratish
                </h2>

                <p className="text-sm text-gray-500">
                    Chiqim hujjatini ombor va sabab bilan rasmiylashtirish
                </p>
            </div>

            {/* FORM */}
            <div className="bg-white p-6 rounded-2xl shadow-sm space-y-4">

                {/* TOP */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                    <input
                        placeholder="Ombor"
                        className="border p-2 rounded-xl w-full"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                warehouse: e.target.value,
                            })
                        }
                    />

                    <input
                        type="datetime-local"
                        className="border p-2 rounded-xl w-full"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                date: e.target.value,
                            })
                        }
                    />
                </div>

                {/* SABAB */}
                <input
                    placeholder="Sabab"
                    className="border p-2 rounded-xl w-full"
                    onChange={(e) =>
                        setForm({
                            ...form,
                            reason: e.target.value,
                        })
                    }
                />

                <div className="flex flex-col min-[700px]:flex-row gap-2">

                    <div className="flex-1">
                        <input
                            placeholder="Mahsulot"
                            className="border p-2 rounded-xl w-full"
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    product: e.target.value,
                                })
                            }
                        />
                    </div>

                    <input
                        value={form.unit}
                        className="border p-2 rounded-xl min-[700px]:w-20 flex-shrink-0"
                        readOnly
                    />

                    <input
                        type="number"
                        className="border p-2 rounded-xl min-[700px]:w-24 flex-shrink-0"
                        onChange={(e) =>
                            setForm({
                                ...form,
                                quantity: Number(e.target.value),
                            })
                        }
                    />

                    <button
                        onClick={handleSubmit}
                        className="
          bg-gradient-to-r
          from-red-500
          to-green-500
          text-white
          px-4
          py-2
          rounded-xl
          w-full
          min-[700px]:w-auto
          flex-shrink-0
        "
                    >
                        + Yo‘q qilish
                    </button>

                </div>
            </div>
        </div>
    );
}