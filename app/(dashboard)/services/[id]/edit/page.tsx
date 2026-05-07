"use client";

import { useParams, useRouter } from "next/navigation";
import ServiceForm from "@/components/services/service-form";
import {
    useService,
    useUpdateService,
} from "@/features/services/hooks/use-services";

export default function EditServicePage() {
    const router = useRouter();
    const params = useParams();

    const id = Number(params.id);
    const { service, isLoading } = useService(id);
    const { submitUpdateService } = useUpdateService();

    if (isLoading) {
        return (
            <div className="rounded-[24px] border border-[#dde6f0] bg-white p-6 text-[#64748b]">
                Yuklanmoqda...
            </div>
        );
    }

    if (!service) {
        return (
            <div className="rounded-[24px] border border-[#dde6f0] bg-white p-6 text-[#64748b]">
                Xizmat topilmadi
            </div>
        );
    }

    return (
        <ServiceForm
            mode="edit"
            defaultValues={{
                code: service.code,
                name: service.name,
                room: service.room,
                price: service.price,
                department: service.department,
            }}
            onSubmit={async (payload) => {
                await submitUpdateService(id, payload);
                router.push("/services");
            }}
        />
    );
}