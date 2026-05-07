"use client";

import { useProducts } from "../../features/inventory/hooks/use-products";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { Package } from "lucide-react";

export default function ProductTable() {
    const router = useRouter();

    const { items, loading, filters, setFilters, remove } = useProducts();

    return (
        <div className="space-y-4">

            {/* FILTER (RESPONSIVE) */}
            <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-wrap gap-3 items-center">

                <Input
                    placeholder="Qidirish"
                    className="w-full sm:w-[250px]"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFilters((p) => ({ ...p, search: e.target.value }))
                    }
                />

                <Input
                    placeholder="Turi"
                    className="w-full sm:w-[140px]"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFilters((p) => ({ ...p, type: e.target.value }))
                    }
                />

                <Input
                    placeholder="Toifalar"
                    className="w-full sm:w-[160px]"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFilters((p) => ({ ...p, category: e.target.value }))
                    }
                />

                <Input
                    placeholder="Bo‘lim"
                    className="w-full sm:w-[140px]"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFilters((p) => ({ ...p, warehouse: e.target.value }))
                    }
                />

                <div className="ml-auto w-full sm:w-auto">
                    <Button
                        onClick={() => router.push("/inventory/products/create")}
                        className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    >
                        + Yaratish
                    </Button>
                </div>
            </div>

            {/* TABLE */}
            <div className="bg-white border border-gray-200 rounded-2xl overflow-x-auto">

                <table className="w-full text-sm min-w-[900px]">

                    <thead className="bg-[#f1f5f9] text-gray-500 text-xs uppercase">
                        <tr>
                            <th className="p-4 text-left">NOMI</th>
                            <th className="p-4">BIRLIK</th>
                            <th className="p-4">QOLDIQ</th>
                            <th className="p-4">MIN</th>
                            <th className="p-4">NARX (UZS)</th>
                            <th className="p-4">TURI</th>
                            <th className="p-4">TOIFALAR</th>
                            <th className="p-4">BO‘LIM</th>
                            <th className="p-4">KOD</th>
                            <th className="p-4">TA'MINOTCHI</th>
                            <th className="p-4">OMBOR</th>
                            <th className="p-4">ISHLATADI</th>
                            <th className="p-4">XIZMATLAR</th>
                            <th className="p-4">TEZKOR</th>
                        </tr>
                    </thead>

                    <tbody>

                        {loading ? (
                            <tr>
                                <td colSpan={11}>
                                    <div className="flex justify-center py-12 text-gray-400">
                                        Yuklanmoqda...
                                    </div>
                                </td>
                            </tr>
                        ) : items.length === 0 ? (
                            <tr>
                                <td colSpan={11}>
                                    <div className="flex flex-col items-center py-16 text-gray-400">
                                        <div className="w-14 h-14 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                                            <Package />
                                        </div>
                                        Ma'lumot yo‘q
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            items.map((p) => (
                                <tr
                                    key={p.id}
                                    className=" hover:bg-gray-50 transition"
                                >
                                    <td className="p-4 font-medium">{p.name}</td>
                                    <td className="p-4 text-center">{p.unit}</td>
                                    <td className="p-4 text-center">{p.quantity}</td>
                                    <td className="p-4 text-center">{p.min}</td>
                                    <td className="p-4 text-center font-medium">
                                        {(p.price ?? 0).toLocaleString()} UZS
                                    </td>
                                    <td className="p-4 text-center">{p.type}</td>
                                    <td className="p-4 text-center">{p.category}</td>
                                    <td className="p-4 text-center">{p.category}</td>
                                    <td className="p-4 text-center">{p.code}</td>
                                    <td className="p-4 text-center">{p.supplier}</td>
                                    <td className="p-4 text-center">{p.warehouse}</td>

                                    {/* STATUS */}
                                    <td className="p-4 text-center">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs ${p.active
                                                    ? "bg-green-100 text-green-600"
                                                    : "bg-gray-100 text-gray-400"
                                                }`}
                                        >
                                            {p.active ? "Faol" : "No faol"}
                                        </span>
                                    </td>
                                    <td className="p-4 text-center">Xizmat</td>
                                    {/* ACTION */}
                                    <td className="p-4 text-center">
                                        <div className="flex justify-center gap-2">
                                            <button
                                                onClick={() => router.push(`/inventory/products/${p.id}/edit`)}
                                                className="text-blue-500 hover:text-blue-700 text-sm"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={async () => {
                                                    const ok = confirm("Rostdan ham o‘chirmoqchimisiz?");
                                                    if (!ok) return;

                                                    await remove(p.id);
                                                }}
                                                className="text-red-500 hover:text-red-700 text-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}

                    </tbody>
                </table>
            </div>
        </div>
    );
}