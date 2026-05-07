"use client";

import { useCallback, useEffect, useState } from "react";
import {
    createDoctor,
    deleteDoctor,
    getDoctorById,
    getDoctors,
    updateDoctor,
} from "../api/doctors.api";
import type {
    DoctorItem,
    DoctorPayload,
    DoctorsFilters,
} from "../types/doctors.types";

export const useDoctors = (filters: DoctorsFilters) => {
    const [doctors, setDoctors] = useState<DoctorItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadDoctors = useCallback(async () => {
        try {
            setIsLoading(true);
            const result = await getDoctors(filters);
            setDoctors(Array.isArray(result.items) ? result.items : []);
        } catch (error) {
            console.error("Doctors load error:", error);
            setDoctors([]);
        } finally {
            setIsLoading(false);
        }
    }, [
        filters.search,
        filters.specialty,
        filters.department,
        filters.room,
    ]);

    const removeDoctor = async (id: number) => {
        const ok = window.confirm("Shifokorni o‘chirishni xohlaysizmi?");
        if (!ok) return;

        await deleteDoctor(id);
        await loadDoctors();
    };

    useEffect(() => {
        loadDoctors();
    }, [loadDoctors]);

    return {
        doctors,
        isLoading,
        removeDoctor,
        refetch: loadDoctors,
    };
};

export const useDoctor = (id: number) => {
    const [doctor, setDoctor] = useState<DoctorItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const loadDoctor = async () => {
            try {
                setIsLoading(true);
                const result = await getDoctorById(id);
                setDoctor(result);
            } catch (error) {
                console.error("Doctor load error:", error);
                setDoctor(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadDoctor();
    }, [id]);

    return { doctor, isLoading };
};

export const useCreateDoctor = () => {
    const submitDoctor = async (payload: DoctorPayload) => {
        return createDoctor(payload);
    };

    return { submitDoctor };
};

export const useUpdateDoctor = () => {
    const submitUpdateDoctor = async (id: number, payload: DoctorPayload) => {
        return updateDoctor(id, payload);
    };

    return { submitUpdateDoctor };
};