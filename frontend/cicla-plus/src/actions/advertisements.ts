import { getAdvertisements } from "../api/getAdvertisements";
import { ThunkAction } from "./types";

export function getAdvertisementsAction(): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({ type: "GET_ADVERTISEMENTS_LOADING" });

    const result = await getAdvertisements();

    if (!result.ok) {
      return dispatch({ type: "GET_ADVERTISEMENTS_ERROR" });
    }

    dispatch({ type: "GET_ADVERTISEMENTS_OK", data: result.value });
  };
}
