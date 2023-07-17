import { getCompanies } from "../api/getCompanies";
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
