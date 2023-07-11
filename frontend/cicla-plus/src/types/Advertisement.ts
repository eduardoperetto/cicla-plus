import { z } from "zod";
import { companySchema } from "./Company";
import { materialSchema } from "./Material";

export const advertisementSchema = z.object({
  id: z.number(),
  materialDescription: z.string(),
  materialType: materialSchema,
  quantity: z.number(),
  acceptanceCondition: z.string(),
  profitType: z.string(),
  timesViewed: z.number(),
  company: companySchema,
});

export type Advertisement = z.infer<typeof advertisementSchema>;
