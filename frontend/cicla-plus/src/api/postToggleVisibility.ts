import Result from "../types/Result";
import { api } from "./apiConfig";
import { handleError } from "./handleError";

export async function postToggleVisibility(data: {
  id: number;
  hidden: boolean;
}): Promise<Result.Result<{}, { message: string }>> {
  const formData = new FormData();
  formData.append("id", data.id.toString());
  formData.append("hidden", data.hidden ? "True" : "False");

  try {
    await api.post("/updateadvertisement/", formData);

    return Result.ok({});
  } catch (error) {
    return handleError(error);
  }
}
