import { create } from "zustand";
import type { PatientGender } from "../types/patients.types";

interface PatientFiltersState {
    search: string;
    gender: "" | PatientGender;
    source: string;
    doctor: string;

    setSearch: (value: string) => void;
    setGender: (value: "" | PatientGender) => void;
    setSource: (value: string) => void;
    setDoctor: (value: string) => void;
    reset: () => void;
}

export const usePatientFiltersStore = create<PatientFiltersState>((set) => ({
    search: "",
    gender: "",
    source: "",
    doctor: "",

    setSearch: (value) => set({ search: value }),
    setGender: (value) => set({ gender: value }),
    setSource: (value) => set({ source: value }),
    setDoctor: (value) => set({ doctor: value }),

    reset: () =>
        set({
            search: "",
            gender: "",
            source: "",
            doctor: "",
        }),
}));