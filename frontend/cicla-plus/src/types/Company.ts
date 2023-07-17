import { z } from "zod";
import { userSchema } from "./User";

export const companySchema = z.object({
  id: z.number(),
  user: userSchema,
  location: z.string(),
  phone: z.string(),
  cnpj: z.number(),
});

export type Company = z.infer<typeof companySchema>;
