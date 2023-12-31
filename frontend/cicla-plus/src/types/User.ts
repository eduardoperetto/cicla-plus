import { z } from "zod";

export const userSchema = z.object({
  username: z.string(),
  first_name: z.string(),
  last_name: z.string().optional(),
});

export type User = z.infer<typeof userSchema>;
