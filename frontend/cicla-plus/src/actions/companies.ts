import { getCompanies } from "../api/getCompanies";
import { postRegisterCompany } from "../api/postRegisterCompany";
import Result from "../types/Result";
import { ThunkAction } from "./types";

export function getCompaniesAction(): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({ type: "GET_COMPANIES_LOADING" });

    const result = await getCompanies();

    if (!result.ok) {
      return dispatch({ type: "GET_COMPANIES_ERROR" });
    }

    dispatch({ type: "GET_COMPANIES_OK", data: result.value });
  };
}


export function RegisterCompanyAction(
  username: any,
  email: any, 
  first_name: any,
  last_name: any,
  password: any,
  password2: any,
  location: any,
  phone: any,
  cnpj: any,
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postRegisterCompany({
        username,
        email,
        first_name,
        last_name,
        password,
        password2,
        location,
        phone,
        cnpj,
      });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "REGISTER_COMPANY" });
      await dispatch(getCompanies);
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}

