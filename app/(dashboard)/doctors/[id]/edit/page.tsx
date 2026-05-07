"use client";

import { useParams, useRouter } from "next/navigation";
import DoctorForm from "@/components/doctors/doctor-form";
import {
    useDoctor,
    useUpdateDoctor,
} from "@/features/doctors/hooks/use-doctors";

export default function EditDoctorPage() {
    const router = useRouter();
    const params = useParams();

    const id = Number(params.id);
    const { doctor, isLoading } = useDoctor(id);
    const { submitUpdateDoctor } = useUpdateDoctor();

    if (isLoading) {
        return (
            <div className="rounded-[24px] border border-[#dde6f0] bg-white p-6 text-[#64748b]">
                Yuklanmoqda...
            </div>
        );
    }

    if (!doctor) {
        return (
            <div className="rounded-[24px] border border-[#dde6f0] bg-white p-6 text-[#64748b]">
                Shifokor topilmadi
            </div>
        );
    }

    return (
        <DoctorForm
            mode="edit"
            defaultValues={{
                code: doctor.code,
                full_name: doctor.full_name,
                specialty: doctor.specialty,
                room: doctor.room,
                price: doctor.price,
                department: doctor.department,
            }}
            onSubmit={async (payload) => {
                await submitUpdateDoctor(id, payload);
                router.push("/doctors");
            }}
        />
    );
}