"use client";

import { useRouter } from "next/navigation";
import ProductForm from "../../../../../components/inventory/product-from";
import { createProduct } from "../../../../../features/inventory/api/products.api";
import { ProductFormValues } from "../../../../../features/inventory/schemas/roduct.schema";


export default function Page() {
    const router = useRouter();

    const handleSubmit = async (data: ProductFormValues) => {
        await createProduct(data);

        //  ORQAGA QAYTADI
        router.push("/inventory/products");
    };

    return (
        <div className="p-6">
            <ProductForm onSubmit={handleSubmit} />
        </div>
    );
}
