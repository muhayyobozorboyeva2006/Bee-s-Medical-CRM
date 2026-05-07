import type { WarehousesFilters } from "@/features/inventory/types/warehouses.types";

type Props = {
    filters: WarehousesFilters;
    setFilters: React.Dispatch<
        React.SetStateAction<WarehousesFilters>
    >;
};

export default function WarehouseFilters({
    filters,
    setFilters,
}: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4">

            <input
                placeholder="Qidirish..."
                className="border rounded-xl px-4 py-2 w-full md:w-72"
                value={filters.search || ""}
                onChange={(e) =>
                    setFilters((p) => ({
                        ...p,
                        search: e.target.value,
                    }))
                }
            />
        </div>
    );
}