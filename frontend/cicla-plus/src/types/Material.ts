import { z } from "zod";

export const materialSchema = z.union([
  z.literal("pl"),
  z.literal("is"),
  z.literal("vd"),
  z.literal("pp"),
  z.literal("po"),
  z.literal("mt"),
]);

export type Material = z.infer<typeof materialSchema>;
