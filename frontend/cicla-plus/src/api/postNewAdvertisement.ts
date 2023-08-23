import Result from "../types/Result";
import { api } from "./apiConfig";
import { handleError } from "./handleError";

export async function postNewAdvertisement(data: {
  material_description: any;
  material_type: any;
  quantity: any;
  acceptance_condition: any;
  profit_type: any;
  times_viewed: any;
  hidden: any;
  company: any;
}): Promise<Result.Result<{}, { message: string }>> {
  const formData = new FormData();
  formData.append("material_description", data.material_description.toString());
  formData.append("material_type", data.material_type.toString());
  formData.append("quantity", data.quantity.toString());
  formData.append("acceptance_condition", data.acceptance_condition.toString());
  formData.append("profit_type", data.profit_type.toString());
  formData.append("times_viewed", data.times_viewed.toString());
  formData.append("hidden", data.hidden ? "True" : "False");
  formData.append("company", data.company.toString());

  try {
    await api.post("/newadvertisement/", formData);

    return Result.ok({});
  } catch (error) {
    return handleError(error);
  }
}