"use client";

import Link from "next/link";
import { useState } from "react";
import DoctorFilters from "@/components/doctors/doctor-filters";
import DoctorTable from "@/components/doctors/doctor-table";
import { useDoctors } from "@/features/doctors/hooks/use-doctors";

export default function DoctorsPage() {
    const [search, setSearch] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [department, setDepartment] = useState("");
    const [room, setRoom] = useState("");

    const { doctors, isLoading, removeDoctor } = useDoctors({
        search,
        specialty,
        department,
        room,
    });

    return (
        <div className="space-y-5">
            <div className="flex items-center justify-between">
                <h1 className="text-[24px] font-extrabold text-[#0f172a]">
                    Shifokorlar
                </h1>

                <Link
                    href="/doctors/create"
                    className="inline-flex h-11 items-center rounded-[12px] bg-gradient-to-r from-[#009b72] to-[#0ea5e9] px-5 text-[15px] font-bold text-white shadow-sm transition hover:opacity-90"
                >
                    Shifokor qo‘shish
                </Link>
            </div>

            <DoctorFilters
                search={search}
                specialty={specialty}
                department={department}
                room={room}
                setSearch={setSearch}
                setSpecialty={setSpecialty}
                setDepartment={setDepartment}
                setRoom={setRoom}
            />

            <DoctorTable
                doctors={doctors}
                isLoading={isLoading}
                onDelete={removeDoctor}
            />
        </div>
    );
}