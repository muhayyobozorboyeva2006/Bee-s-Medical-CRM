"use client";

import { ReceiptTableProps } from "@/features/inventory/types/invwntory.types";
import { useRouter } from "next/navigation";

export default function ReceiptTable({
    items,
    loading,
    remove,
}: ReceiptTableProps) {

    const router = useRouter();

    return (
        <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">

            <table className="w-full min-w-[1100px] text-sm">

                <thead className="bg-gray-50 text-gray-500 text-xs">
                    <tr>
                        <th className="p-4 text-left">ID</th>
                        <th className="p-4 text-left">ISH JARAYONIDA</th>
                        <th className="p-4 text-left">MAHSULOTLAR</th>
                        <th className="p-4 text-left">AMALIYOT VAQTI</th>
                        <th className="p-4 text-left">OMBOR</th>
                        <th className="p-4 text-left">TA'MINOTCHI</th>
                        <th className="p-4 text-left">MIQDOR</th>
                        <th className="p-4 text-left">HOLATI</th>
                        <th className="p-4 text-center">AMALLAR</th>
                    </tr>
                </thead>

                <tbody>
                    {loading ? (
                        <tr>
                            <td
                                colSpan={9}
                                className="p-10 text-center"
                            >
                                Yuklanmoqda...
                            </td>
                        </tr>

                    ) : !items || items.length === 0 ? (

                        <tr>
                            <td
                                colSpan={9}
                                className="p-10 text-center text-gray-400"
                            >
                                Ma'lumot yo‘q
                            </td>
                        </tr>

                    ) : (

                        items.map((p) => (
                            <tr
                                key={p.id}
                                className="hover:bg-gray-50"
                            >

                                <td className="p-4">
                                    {p.id}
                                </td>

                                <td className="p-4">
                                    {p.status}
                                </td>

                                <td className="p-4">
                                    {p.products}
                                </td>

                                <td className="p-4">
                                    {new Date(p.date).toLocaleString()}
                                </td>

                                <td className="p-4">
                                    {p.warehouse}
                                </td>

                                <td className="p-4">
                                    {p.supplier}
                                </td>

                                <td className="p-4 font-medium">
                                    {Number(p.quantity).toLocaleString()}
                                </td>

                                <td className="p-4">
                                    <span
                                        className={`
                      px-2
                      py-1
                      rounded
                      text-xs
                      ${p.status === "Yangi"
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-green-100 text-green-600"
                                            }
                    `}
                                    >
                                        {p.status}
                                    </span>
                                </td>

                                <td className="p-4 text-center">
                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/inventory/receipts/${p.id}/edit`
                                            )
                                        }
                                        className="text-blue-500 text-sm mr-2"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => remove(p.id)}
                                        className="text-red-500 text-sm"
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