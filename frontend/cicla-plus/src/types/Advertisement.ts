import { z } from "zod";
import { companySchema } from "./Company";
import { materialSchema } from "./Material";

export const advertisementSchema = z.object({
  id: z.number(),
  material_description: z.string(),
  material_type: materialSchema,
  quantity: z.number(),
  acceptance_condition: z.string(),
  profit_type: z.string(),
  times_viewed: z.number(),
  company: companySchema,
});

export type Advertisement = z.infer<typeof advertisementSchema>;
