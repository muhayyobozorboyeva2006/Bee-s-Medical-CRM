import ProductTable from "../../../../components/inventory/product-table";

export default function Page() {
    return (
        <div className=" min-h-screen ">

            <div className=" space-y-6">

                {/* HEADER */}
                <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5">
                    <h1 className="text-[18px] font-semibold text-gray-800">
                        Mahsulotlar
                    </h1>
                    <p className="text-[13px] text-gray-500 mt-1">
                        Qidiruv, filtr va tezkor harakatlar bilan ombor tovarlari boshqaruvi
                    </p>
                </div>

                {/* TABLE SECTION */}
                <ProductTable />

            </div>
        </div>
    );
}