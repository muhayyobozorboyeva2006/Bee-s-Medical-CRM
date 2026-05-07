"use client";

import type { AppointmentItem } from "@/features/appointmenats/types/appointments.types";

const statusStyles: Record<AppointmentItem["status"], string> = {
    scheduled: "bg-sky-100 text-sky-700 border-sky-200",
    confirmed: "bg-emerald-100 text-emerald-700 border-emerald-200",
    in_progress: "bg-amber-100 text-amber-700 border-amber-200",
    completed: "bg-violet-100 text-violet-700 border-violet-200",
    cancelled: "bg-rose-100 text-rose-700 border-rose-200",
};

interface AppointmentCardProps {
    appointment: AppointmentItem;
    top: number;
    height: number;
}

export default function AppointmentCard({
    appointment,
    top,
    height,
}: AppointmentCardProps) {
    return (
        <div
            className="absolute left-[92px] right-3 z-10 overflow-visible"
            style={{ top, height }}
        >
            <div className="group relative w-full overflow-visible">
                {/* Asosiy yopiq holat */}
                <div
                    className="
                        flex min-h-[38px] w-full items-center rounded-2xl border border-slate-200
                        bg-white px-4 shadow-sm transition-all duration-200
                        hover:border-sky-200 hover:shadow-md
                    "
                >
                    <h4 className="truncate text-sm font-semibold text-slate-800">
                        {appointment.patient.first_name} {appointment.patient.last_name}
                    </h4>
                </div>

                {/* Pastga ochiladigan modal */}
                <div
                    className="
                        pointer-events-none absolute left-0 right-0 top-full z-30 mt-2
                        translate-y-2 opacity-0 transition-all duration-200 ease-out
                        group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100
                    "
                >
                    <div
                        className="
                            w-full rounded-2xl border border-slate-200 bg-white/95 p-4
                            shadow-[0_18px_50px_rgba(15,23,42,0.18)] backdrop-blur-sm
                        "
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <h4 className="truncate text-sm font-semibold text-slate-800">
                                    {appointment.patient.first_name} {appointment.patient.last_name}
                                </h4>

                                <p className="mt-2 text-xs text-slate-500">
                                    {appointment.time} • {appointment.duration_minutes} min
                                </p>

                                <p className="mt-1 truncate text-xs text-slate-500">
                                    {appointment.service_name || "Xizmat ko‘rsatilmagan"}
                                </p>

                                {appointment.notes ? (
                                    <p className="mt-2 line-clamp-2 text-xs text-slate-400">
                                        {appointment.notes}
                                    </p>
                                ) : null}
                            </div>

                            <span
                                className={`shrink-0 rounded-full border px-2 py-1 text-[11px] font-medium ${statusStyles[appointment.status]}`}
                            >
                                {appointment.status}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}