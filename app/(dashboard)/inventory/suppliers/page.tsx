"use client";

import { useRouter } from "next/navigation";

import {
    useSuppliers,
} from "@/features/inventory/hooks/use-suppliera";

import SupplierTable
    from "@/components/inventory/supplier-table";

export default function Page() {

    const router = useRouter();

    const {
        items,
        loading,
        remove,
        filters,
        setFilters,
    } = useSuppliers();

    return (
        <div className="p-6 space-y-4">

            {/* HEADER */}
            <div className="bg-white p-5 rounded-2xl shadow-sm">

                <div className="flex items-center justify-between gap-4">

                    <div>
                        <h1 className="text-2xl font-semibold">
                            Ta'minotchilar
                        </h1>

                        <p className="text-sm text-gray-500">
                            Ta'minotchilarni boshqarish
                        </p>
                    </div>

                    <button
                        onClick={() =>
                            router.push(
                                "/inventory/suppliers/create"
                            )
                        }
                        className="
              bg-gradient-to-r
              from-green-400
              to-blue-500
              text-white
              px-5
              py-2
              rounded-xl
            "
                    >
                        + Yaratish
                    </button>

                </div>
            </div>

            {/* FILTER */}
            <div className="bg-white p-4 rounded-2xl shadow-sm overflow-x-auto">

                <div className="flex gap-3 min-w-max">

                    <input
                        placeholder="
              Qidirish
              (ism, telefon, INN)
            "
                        className="
              border
              px-4
              py-2
              rounded-xl
              w-80
            "
                        value={filters.search || ""}
                        onChange={(e) =>
                            setFilters((p) => ({
                                ...p,
                                search: e.target.value,
                            }))
                        }
                    />

                </div>
            </div>

            {/* TABLE */}
            <SupplierTable
                items={items}
                loading={loading}
                remove={remove}
            />

        </div>
    );
}
