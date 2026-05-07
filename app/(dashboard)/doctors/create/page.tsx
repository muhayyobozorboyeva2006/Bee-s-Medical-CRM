"use client";

import { useRouter } from "next/navigation";
import DoctorForm from "@/components/doctors/doctor-form";
import { useCreateDoctor } from "@/features/doctors/hooks/use-doctors";

export default function CreateDoctorPage() {
    const router = useRouter();
    const { submitDoctor } = useCreateDoctor();

    return (
        <DoctorForm
            mode="create"
            onSubmit={async (payload) => {
                await submitDoctor(payload);
                router.push("/doctors");
            }}
        />
    );
}