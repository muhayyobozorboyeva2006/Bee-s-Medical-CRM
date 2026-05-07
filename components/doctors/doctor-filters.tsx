"use client";

import { ChevronDown, Search } from "lucide-react";

interface DoctorFiltersProps {
    search: string;
    specialty: string;
    department: string;
    room: string;
    setSearch: (value: string) => void;
    setSpecialty: (value: string) => void;
    setDepartment: (value: string) => void;
    setRoom: (value: string) => void;
}

export default function DoctorFilters({
    search,
    specialty,
    department,
    room,
    setSearch,
    setSpecialty,
    setDepartment,
    setRoom,
}: DoctorFiltersProps) {
    return (
        <div className="rounded-[18px] border border-[#dde6f0] bg-white px-5 py-5 shadow-[0_8px_24px_rgba(15,23,42,0.04)]">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <div className="flex h-[54px] w-full max-w-[670px] items-center gap-3 rounded-[20px] border-2 border-[#12bfa5] bg-white px-4 shadow-[0_0_0_1px_rgba(29,155,240,0.35)]">
                    <Search className="h-5 w-5 text-[#10b981]" />

                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="Qidiruv (ism, mutaxassislik, kod, xona raqami)..."
                        className="h-full flex-1 bg-transparent text-[15px] text-[#0f172a] outline-none placeholder:text-[#94a3b8]"
                    />
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                    <FilterSelect value={specialty} onChange={setSpecialty}>
                        <option value="">Barchasi</option>
                        <option value="Terapevt">Terapevt</option>
                        <option value="Kardiolog">Kardiolog</option>
                    </FilterSelect>

                    <FilterSelect value={department} onChange={setDepartment}>
                        <option value="">Barchasi</option>
                        <option value="Terapiya">Terapiya</option>
                        <option value="Kardiologiya">Kardiologiya</option>
                    </FilterSelect>

                    <FilterSelect value={room} onChange={setRoom}>
                        <option value="">Barchasi</option>
                        <option value="101">101</option>
                        <option value="205">205</option>
                    </FilterSelect>
                </div>
            </div>
        </div>
    );
}

function FilterSelect({
    value,
    onChange,
    children,
}: {
    value: string;
    onChange: (value: string) => void;
    children: React.ReactNode;
}) {
    return (
        <div className="relative">
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="h-[52px] w-[200px] appearance-none rounded-[18px] border-2 border-[#12bfa5] bg-white px-4 pr-10 text-[15px] text-[#0f172a] outline-none shadow-[0_0_0_1px_rgba(29,155,240,0.35)]"
            >
                {children}
            </select>

            <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#64748b]" />
        </div>
    );
}