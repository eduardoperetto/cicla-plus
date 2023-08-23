import { z } from "zod";
// import { companySchema } from "./Company";
import { advertisementSchema } from "./Advertisement";
import { personSchema } from "./Person";

export const statusSchema = z.union([
  z.literal("og"),
  z.literal("de"),
  z.literal("cs"),
  z.literal("ca"),
  z.literal("cm"),
]);

export const transactionSchema = z.object({
  id: z.number(),
  advertisement: advertisementSchema,
  user: personSchema,
  // z.union([
  //   personSchema
  //   companySchema
  // ]),
  status: statusSchema,
  last_update: z.string(),
  created_at: z.string(),
});

export type Transaction = z.infer<typeof transactionSchema>;
