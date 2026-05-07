"use client";

import AppointmentCard from "./appointment-card";
import type { AppointmentItem } from "@/features/appointmenats/types/appointments.types";

interface ScheduleGridProps {
    appointments: AppointmentItem[];
}

const START_HOUR = 8;
const END_HOUR = 17;
const SLOT_HEIGHT = 56;

function generateTimeSlots() {
    const slots: string[] = [];

    for (let hour = START_HOUR; hour <= END_HOUR; hour += 1) {
        slots.push(`${String(hour).padStart(2, "0")}:00`);
        if (hour !== END_HOUR) {
            slots.push(`${String(hour).padStart(2, "0")}:30`);
        }
    }

    return slots;
}

function getMinutesFromStart(time: string) {
    const [hours, minutes] = time.split(":").map(Number);
    return (hours - START_HOUR) * 60 + minutes;
}

const timeSlots = generateTimeSlots();

export default function ScheduleGrid({ appointments }: ScheduleGridProps) {
    const gridHeight = timeSlots.length * SLOT_HEIGHT;

    return (
        <div className="overflow-hidden rounded-[22px] border border-slate-200 bg-white shadow-[0_10px_30px_rgba(15,23,42,0.04)]">
            <div className="border-b border-slate-200 px-4 py-4">
                <h3 className="text-sm font-semibold text-slate-700">Vaqt</h3>
            </div>

            <div className="relative" style={{ height: gridHeight }}>
                {timeSlots.map((slot, index) => (
                    <div
                        key={slot}
                        className="absolute inset-x-0 flex border-b border-slate-200"
                        style={{ top: index * SLOT_HEIGHT, height: SLOT_HEIGHT }}
                    >
                        <div className="w-[92px] shrink-0 px-3 py-3 text-[15px] font-medium text-slate-400">
                            {slot}
                        </div>
                        <div className="flex-1 bg-white" />
                    </div>
                ))}

                {appointments.map((appointment) => {
                    const top = (getMinutesFromStart(appointment.time) / 30) * SLOT_HEIGHT + 6;
                    const height = Math.max(
                        (appointment.duration_minutes / 30) * SLOT_HEIGHT - 12,
                        42,
                    );

                    return (
                        <AppointmentCard
                            key={appointment.id}
                            appointment={appointment}
                            top={top}
                            height={height}
                        />
                    );
                })}
            </div>
        </div>
    );
}