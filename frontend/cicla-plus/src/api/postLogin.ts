import { LoginRequest } from "../actions/login";
import { LoginData, loginDataSchema } from "../types/LoginData";
import Result from "../types/Result";
import { api } from "./apiConfig";
import { handleError } from "./handleError";

export async function postLogin(
  data: LoginRequest
): Promise<Result.Result<LoginData, { message: string }>> {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);

  try {
    const response = await api.post("/auth/login/", formData);

    const returnValue = loginDataSchema.parse(response.data);

    return Result.ok(returnValue);
  } catch (error) {
    return handleError(error);
  }
}
