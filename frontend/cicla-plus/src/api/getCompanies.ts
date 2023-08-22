import Result from "../types/Result";
import { z } from "zod";
import { api } from "./apiConfig";
import { handleError } from "./handleError";
import { companySchema } from "../types/Company";

const getCompaniesSchema = z.array(companySchema);

export type GetCompaniesResponse = z.infer<typeof getCompaniesSchema>;

export async function getCompanies(): Promise<
  Result.Result<GetCompaniesResponse, { message: string }>
> {
  try {
    const response = await api.get("/company");

    const returnValue = getCompaniesSchema.parse(response.data);
    return Result.ok(returnValue);
  } catch (error) {
    return handleError(error);
  }
}
