import { z } from "zod";

export const productSchema = z.object({
    name: z.string().min(1),
    unit: z.string().min(1),
    quantity: z.number(),
    min: z.number(),
    price: z.number(),

    type: z.string(),
    category: z.string(),
    section: z.string(),

    code: z.string(),
    supplier: z.string(),
    warehouse: z.string(),

    active: z.boolean(),
    service: z.string(),
});

export type ProductFormValues = z.infer<typeof productSchema>;