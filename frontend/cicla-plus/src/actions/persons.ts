import { getPersons } from "../api/getPersons";
import { ThunkAction } from "./types";

export function getPersonsAction(): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({ type: "GET_PERSONS_LOADING" });

    const result = await getPersons();

    if (!result.ok) {
      return dispatch({ type: "GET_PERSONS_ERROR" });
    }

    dispatch({ type: "GET_PERSONS_OK", data: result.value });
  };
}
