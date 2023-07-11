import { z } from "zod";

export const companySchema = z.object({
  id: z.number(),
  user: z.number(),
  location: z.string(),
  phone: z.string(),
  cnpj: z.string(),
});

export type Company = z.infer<typeof companySchema>;
