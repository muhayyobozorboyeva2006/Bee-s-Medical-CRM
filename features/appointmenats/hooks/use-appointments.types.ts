"use client";

import { useQuery } from "@tanstack/react-query";
import { getAppointments } from "../api/appointments.api";
import type { AppointmentListParams } from "../types/appointments.types";

export const useAppointments = (params: AppointmentListParams) => {
    return useQuery({
        queryKey: ["appointments", params.date, params.doctor_id, params.service_name],
        queryFn: () => getAppointments(params),
    });
};