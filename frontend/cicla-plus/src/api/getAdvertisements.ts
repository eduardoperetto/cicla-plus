import Result from "../types/Result";
import { z } from "zod";
import { api } from "./apiConfig";
import { handleError } from "./handleError";
import { advertisementSchema } from "../types/Advertisement";

const getAdvertisementsSchema = z.array(advertisementSchema);

export type GetAdvertisementsResponse = z.infer<typeof getAdvertisementsSchema>;

export async function getAdvertisements(): Promise<
  Result.Result<GetAdvertisementsResponse, { message: string }>
> {
  try {
    const response = await api.get("/Advertisement");

    const returnValue = getAdvertisementsSchema.parse(response.data);
    return Result.ok(returnValue);
  } catch (error) {
    return handleError(error);
  }
}
