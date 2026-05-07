"use client";

import { useEffect, useState } from "react";
import { getPatientById } from "../api/patients.api";
import type { PatientItem } from "../types/patients.types";

export const usePatient = (id: number) => {
    const [patient, setPatient] = useState<PatientItem | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const loadPatient = async () => {
            try {
                setIsLoading(true);
                const result = await getPatientById(id);
                setPatient(result);
            } catch (error) {
                console.error("Patient load error:", error);
                setPatient(null);
            } finally {
                setIsLoading(false);
            }
        };

        loadPatient();
    }, [id]);

    return { patient, isLoading };
};