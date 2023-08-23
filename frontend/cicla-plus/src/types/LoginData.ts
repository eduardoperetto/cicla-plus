import { z } from "zod";

export const loginDataSchema = z.object({
  user: z.string(),
  access: z.string(),
  is_admin: z.boolean(),
});

export type LoginData = z.infer<typeof loginDataSchema>;
