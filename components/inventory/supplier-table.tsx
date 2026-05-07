"use client";

import { useRouter } from "next/navigation";

import type {
    SupplierTableProps,
} from "@/features/inventory/types/suppliers.tpyes";

export default function SupplierTable({
    items,
    loading,
    remove,
}: SupplierTableProps) {

    const router = useRouter();

    return (
        <div
            className="
        bg-white
        rounded-2xl
        shadow-sm
        overflow-x-auto
      "
        >

            <table
                className="
          w-full
          min-w-[1000px]
          text-sm
        "
            >

                <thead
                    className="
            bg-gray-50
            text-gray-500
            text-xs
          "
                >
                    <tr>

                        <th className="p-4 text-left">
                            ID
                        </th>

                        <th className="p-4 text-left">
                            ISM
                        </th>

                        <th className="p-4 text-left">
                            BALANS
                        </th>

                        <th className="p-4 text-left">
                            TAVSIF
                        </th>

                        <th className="p-4 text-left">
                            MOBIL
                        </th>

                        <th className="p-4 text-left">
                            INN
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
                                colSpan={7}
                                className="
                  p-10
                  text-center
                "
                            >
                                Yuklanmoqda...
                            </td>
                        </tr>

                    ) : !items ||
                        items.length === 0 ? (

                        <tr>
                            <td
                                colSpan={7}
                                className="
                  p-10
                  text-center
                  text-gray-400
                "
                            >
                                Ma'lumot yo‘q
                            </td>
                        </tr>

                    ) : (

                        items.map((p) => (

                            <tr
                                key={p.id}
                                className="
                  hover:bg-gray-50
                "
                            >

                                <td className="p-4">
                                    {p.id}
                                </td>

                                <td className="p-4">
                                    {p.name}
                                </td>

                                <td className="p-4 font-medium">
                                    {Number(
                                        p.balance
                                    ).toLocaleString()}
                                </td>

                                <td className="p-4">
                                    {p.description}
                                </td>

                                <td className="p-4">
                                    {p.phone}
                                </td>

                                <td className="p-4">
                                    {p.inn}
                                </td>

                                <td className="p-4 text-center">

                                    <button
                                        onClick={() =>
                                            router.push(
                                                `/inventory/suppliers/${p.id}/edit`
                                            )
                                        }
                                        className="
                      text-blue-500
                      text-sm
                      mr-2
                    "
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() =>
                                            remove(p.id)
                                        }
                                        className="
                      text-red-500
                      text-sm
                    "
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