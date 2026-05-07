type Props = {
    total: number;
    onCreate: () => void;
};

export default function WarehouseHeader({
    total,
    onCreate,
}: Props) {
    return (
        <div className="bg-white rounded-2xl shadow-sm p-4 md:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <div>
                <h1 className="text-2xl font-bold">
                    Omborlar {total}
                </h1>

                <p className="text-sm text-gray-500 mt-1">
                    Omborlar, holat va navbatlarni boshqarish
                </p>
            </div>

            <button
                onClick={onCreate}
                className="bg-gradient-to-r cursor-pointer from-green-400 to-blue-500 text-white px-5 py-3 rounded-2xl text-sm font-medium"
            >
                + Yaratish
            </button>
        </div>
    );
}