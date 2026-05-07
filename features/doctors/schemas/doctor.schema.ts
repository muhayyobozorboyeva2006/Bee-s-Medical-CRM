import { z } from "zod";

export const doctorSchema = z.object({
    code: z.string().min(1, "Kod majburiy"),
    full_name: z.string().min(2, "F.I.Sh majburiy"),
    specialty: z.string().min(1, "Mutaxassislik majburiy"),
    room: z.string().min(1, "Xona majburiy"),
    price: z.coerce.number().min(1, "Narx noto‘g‘ri"),
    department: z.string().min(1, "Bo‘lim majburiy"),
});

export type DoctorFormValues = z.infer<typeof doctorSchema>;