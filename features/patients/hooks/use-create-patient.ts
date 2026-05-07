"use client";

import { useEffect, useState } from "react";
import {
    cancelPatient,
    getPatients,
    restorePatient,
} from "../api/patients.api";
import type { PatientItem, PatientsFilters } from "../types/patients.types";

export const usePatients = (filters: PatientsFilters) => {
    const [patients, setPatients] = useState<PatientItem[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const loadPatients = async () => {
        try {
            setIsLoading(true);
            const result = await getPatients(filters);
            setPatients(Array.isArray(result.items) ? result.items : []);
        } catch (error) {
            console.error("Patients load error:", error);
            setPatients([]);
        } finally {
            setIsLoading(false);
        }
    };

    const removePatient = async (id: number) => {
        const ok = window.confirm("Bemorni bekor qilinganlar bo‘limiga o‘tkazaymi?");
        if (!ok) return;

        await cancelPatient(id);
        await loadPatients();
    };

    const restore = async (id: number) => {
        const ok = window.confirm("Bemorni qayta tiklaysizmi?");
        if (!ok) return;

        await restorePatient(id);
        await loadPatients();
    };

    useEffect(() => {
        loadPatients();
    }, [
        filters.search,
        filters.gender,
        filters.source,
        filters.doctor,
        filters.status,
    ]);

    return {
        patients,
        isLoading,
        removePatient,
        restorePatient: restore,
        refetch: loadPatients,
    };
};