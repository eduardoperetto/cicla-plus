import { getAdvertisements } from "../api/getAdvertisements";
import { postDeleteAdvertisement } from "../api/postDeleteAdvertisement";
import { postToggleVisibility } from "../api/postToggleVisibility";
import Result from "../types/Result";
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

export function toggleVisibilityAction(
  id: number,
  hidden: boolean
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postToggleVisibility({ id, hidden });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "TOGGLE_VISIBILITY", data: { id, hidden } });
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}

export function deleteAdvertisementAction(
  id: number
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postDeleteAdvertisement({ id });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "DELETE_ADVERTISEMENT", data: id });
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}
