"use client";

import { useRouter } from "next/navigation";
import ServiceForm from "@/components/services/service-form";
import { useCreateService } from "@/features/services/hooks/use-services";

export default function CreateServicePage() {
    const router = useRouter();
    const { submitService } = useCreateService();

    return (
        <ServiceForm
            mode="create"
            onSubmit={async (payload) => {
                await submitService(payload);
                router.push("/services");
            }}
        />
    );
}