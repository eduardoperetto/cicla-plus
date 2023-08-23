import Result from "../types/Result";
import { api } from "./apiConfig";
import { handleError } from "./handleError";

export async function postUpdateTransaction(data: {
  id: number;
  status: string;
  token?: string;
}): Promise<Result.Result<{}, { message: string }>> {
  const formData = new FormData();
  formData.append("id", data.id.toString());
  formData.append("status", data.status);
  if (data.token) {
    formData.append("token", data.token);
  }

  try {
    await api.post("/updatetransaction/", formData);

    return Result.ok({});
  } catch (error) {
    return handleError(error);
  }
}
