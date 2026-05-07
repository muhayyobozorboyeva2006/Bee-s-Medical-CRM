"use client";

import { useMemo, useState } from "react";
import CalendarToolbar from "@/components/calendar/calendar-toolbar";
import ScheduleGrid from "@/components/calendar/schedule-grid";
import { useAppointments } from "@/features/appointmenats/hooks/use-appointments.types";

function formatTitleDate(date: string) {
    const formatter = new Intl.DateTimeFormat("ru-RU", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    return formatter.format(new Date(date));
}

function shiftDate(date: string, amount: number) {
    const current = new Date(date);
    current.setDate(current.getDate() + amount);
    return current.toISOString().slice(0, 10);
}

export default function CalendarPage() {
    const [selectedDate, setSelectedDate] = useState("2026-03-11");
    const [selectedService, setSelectedService] = useState("Konsultatsiya");

    const { data, isLoading } = useAppointments({
        date: selectedDate,
        service_name: selectedService,
    });

    const appointments = data?.items ?? [];

    const subtitle = useMemo(() => formatTitleDate(selectedDate), [selectedDate]);

    return (
        <section className="space-y-5 p-5 md:p-6">
            <CalendarToolbar
                title="Kalendar"
                subtitle={subtitle}
                selectedService={selectedService}
                selectedDate={selectedDate}
                onServiceChange={setSelectedService}
                onDateChange={setSelectedDate}
                onPrevDay={() => setSelectedDate((prev) => shiftDate(prev, -1))}
                onNextDay={() => setSelectedDate((prev) => shiftDate(prev, 1))}
                onFilter={() => {
                    // keyinchalik drawer yoki modal ochish mumkin
                    console.log("filter clicked");
                }}
            />

            {isLoading ? (
                <div className="rounded-[22px] border border-slate-200 bg-white px-6 py-10 text-sm text-slate-500">
                    Yuklanmoqda...
                </div>
            ) : (
                <ScheduleGrid appointments={appointments} />
            )}
        </section>
    );
}