import Result from "../types/Result";
import { api } from "./apiConfig";
import { handleError } from "./handleError";

export async function postRegisterCompany(data: {
  username: any,
  email: any, 
  first_name: any,
  last_name: any,
  password: any,
  password2: any, 
  location: any;
  phone: any;
  cnpj: any;
}): Promise<Result.Result<{}, { message: string }>> {
  const formData = new FormData();
  formData.append("username", data.username.toString());
  formData.append("email", data.email.toString());
  formData.append("first_name", data.first_name.toString());
  formData.append("last_name", data.last_name.toString());
  formData.append("password", data.password.toString());
  formData.append("password2", data.password2.toString());
  formData.append("location", data.location.toString());
  formData.append("phone", data.phone.toString());
  formData.append("cnpj", data.cnpj.toString());

  try {
    await api.post("/register/company/", formData);

    return Result.ok({});
  } catch (error) {
    return handleError(error);
  }
}