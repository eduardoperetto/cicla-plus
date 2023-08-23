import { z } from "zod";
// import { companySchema } from "./Company";
// import { advertisementSchema } from "./Advertisement";
import { personSchema } from "./Person";
import { materialSchema } from "./Material";

export const statusSchema = z.union([
  z.literal("og"),
  z.literal("de"),
  z.literal("cs"),
  z.literal("ca"),
  z.literal("cm"),
]);

//TODO: CONCERTAR GAMBIARRA AQUI

const companySchema = z.object({
  id: z.number(),
  user: z.number(),
  location: z.string(),
  phone: z.string(),
  cnpj: z.number(),
});

const advertisementSchema = z.object({
  id: z.number(),
  material_description: z.string(),
  material_type: materialSchema,
  quantity: z.number(),
  acceptance_condition: z.string(),
  profit_type: z.string(),
  times_viewed: z.number(),
  hidden: z.boolean(),
  company: companySchema,
});

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
