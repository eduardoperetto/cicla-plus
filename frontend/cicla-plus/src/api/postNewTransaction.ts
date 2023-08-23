import Result from "../types/Result";
import { api } from "./apiConfig";
import { handleError } from "./handleError";

export async function postNewTransaction(data: {
  user: number;
  advertisement: number;
  status: string;
}): Promise<Result.Result<{}, { message: string }>> {
  const formData = new FormData();
  formData.append("user", data.user.toString());
  formData.append("advertisement", data.advertisement.toString());
  formData.append("status", data.status);

  try {
    await api.post("/newtransaction/", formData);

    return Result.ok({});
  } catch (error) {
    return handleError(error);
  }
}
