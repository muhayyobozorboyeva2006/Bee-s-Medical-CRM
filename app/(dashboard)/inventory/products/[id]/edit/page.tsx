"use client";

import { useParams, useRouter } from "next/navigation";
import ProductForm from "../../../../../../components/inventory/product-from";
import { useEffect, useState } from "react";
import { getProductById, updateProduct } from "../../../../../../features/inventory/api/products.api";
import { ProductFormValues } from "../../../../../../features/inventory/schemas/roduct.schema";

export default function Page() {
    const { id } = useParams();
    const router = useRouter();

    const [data, setData] = useState<ProductFormValues | null>(null);

    //SHU YERGA QO‘YASAN
    useEffect(() => {
        (async () => {
            const res = await getProductById(Number(id));

            if (res) {
                setData({
                    name: res.name,
                    unit: res.unit,
                    quantity: res.quantity,
                    min: res.min,
                    price: res.price,

                    type: res.type,
                    category: res.category,

                    section: res.section ?? "",
                    code: res.code,

                    supplier: res.supplier,
                    warehouse: res.warehouse,

                    active: res.active,
                    service: res.service ?? "",
                });
            }
        })();
    }, [id]);

    if (!data) return <div>Yuklanmoqda...</div>;

    const handleSubmit = async (values: ProductFormValues) => {
        await updateProduct(Number(id), values);
        router.push("/inventory/products");
    };

    return (
        <div className="p-6">
            <ProductForm onSubmit={handleSubmit} defaultValues={data} />
        </div>
    );
}