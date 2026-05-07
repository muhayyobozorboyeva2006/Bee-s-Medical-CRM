import { z } from "zod";

export const patientSchema = z.object({
    first_name: z.string().min(1, "Ism majburiy"),
    last_name: z.string().min(1, "Familiya majburiy"),
    phone: z.string().min(9, "Telefon raqam noto‘g‘ri"),
    gender: z.enum(["male", "female"]),
    age: z.coerce.number().min(1, "Yosh noto‘g‘ri"),
    doctor_name: z.string().min(1, "Shifokor majburiy"),
    source: z.string().min(1, "Manba majburiy"),
    created_at: z.string().min(1, "Sana majburiy"),
});

export type PatientFormValues = z.infer<typeof patientSchema>;