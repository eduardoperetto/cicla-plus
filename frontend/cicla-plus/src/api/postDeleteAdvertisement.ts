import Result from "../types/Result";
import { api } from "./apiConfig";
import { handleError } from "./handleError";

export async function postDeleteAdvertisement(data: {
  id: number;
}): Promise<Result.Result<{}, { message: string }>> {
  const formData = new FormData();
  formData.append("id", data.id.toString());

  try {
    await api.post("/deleteadvertisement/", formData);

    return Result.ok({});
  } catch (error) {
    return handleError(error);
  }
}
