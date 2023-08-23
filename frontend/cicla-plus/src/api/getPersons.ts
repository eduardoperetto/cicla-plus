import Result from "../types/Result";
import { z } from "zod";
import { api } from "./apiConfig";
import { handleError } from "./handleError";
import { personSchema } from "../types/Person";

const getPersonsSchema = z.array(personSchema);

export type GetPersonsResponse = z.infer<typeof getPersonsSchema>;

export async function getPersons(): Promise<
  Result.Result<GetPersonsResponse, { message: string }>
> {
  try {
    const response = await api.get("/person");

    const returnValue = getPersonsSchema.parse(response.data);
    return Result.ok(returnValue);
  } catch (error) {
    return handleError(error);
  }
}
