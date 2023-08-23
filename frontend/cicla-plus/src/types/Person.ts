import { z } from "zod";
import { userSchema } from "./User";

export const personSchema = z.object({
  id: z.number(),
  user: userSchema,
  location: z.string(),
  phone: z.string(),
  cpf: z.number(),
});

export type Person = z.infer<typeof personSchema>;
