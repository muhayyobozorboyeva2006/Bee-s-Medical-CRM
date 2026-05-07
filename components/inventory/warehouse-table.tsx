"use client";

import { useRouter } from "next/navigation";

import type {
    WarehouseTableProps,
} from "@/features/inventory/types/warehouses.types";

export default function WarehouseTable({
    items,
    loading,
    remove,
}: WarehouseTableProps) {
    const router = useRouter();

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">

            <table className="w-full min-w-[900px] text-sm">

                <thead className="bg-gray-50 text-gray-500">
                    <tr>
                        <th className="p-4 text-left">NOMI</th>
                        <th className="p-4 text-left">HOLAT</th>
                        <th className="p-4 text-left">
                            SOTUV OMBORI HOLATI
                        </th>
                        <th className="p-4 text-left">
                            HISOBDAN CHIQARISH
                        </th>
                        <th className="p-4 text-center">
                            AMALLAR
                        </th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr>
                            <td
                                colSpan={5}
                                className="p-10 text-center"
                            >
                                Yuklanmoqda...
                            </td>
                        </tr>
                    ) : items.length === 0 ? (
                        <tr>
                            <td
                                colSpan={5}
                                className="p-10 text-center text-gray-400"
                            >
                                Ma'lumot yo‘q
                            </td>
                        </tr>
                    ) : (
                        items.map((w) => (
                            <tr
                                key={w.id}
                                className=" hover:bg-gray-50"
                            >
                                <td className="p-4">{w.name}</td>

                                <td className="p-4">
                                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded text-xs">
                                        {w.status}
                                    </span>
                                </td>

                                <td className="p-4">
                                    {w.saleStatus}
                                </td>

                                <td className="p-4">
                                    {w.queue}
                                </td>

                                <td className="p-4 text-center">
                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/inventory/warehouses/${w.id}/edit`
                                            )
                                        }
                                        className="text-blue-500 mr-3 cursor-pointer"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => remove(w.id)}
                                        className="text-red-500 cursor-pointer"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    );
}