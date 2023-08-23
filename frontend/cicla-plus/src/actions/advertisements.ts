import { getAdvertisements } from "../api/getAdvertisements";
import { postDeleteAdvertisement } from "../api/postDeleteAdvertisement";
import { postNewAdvertisement } from "../api/postNewAdvertisement";
import { postToggleVisibility } from "../api/postToggleVisibility";
import { store } from "../store/configureStore";
import Result from "../types/Result";
import { postUpdateTransactionAction } from "./transactions";
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

      const transactionsState = store.getState().transactions;

      if (transactionsState.tag === "LOADED") {
        const transaction = transactionsState.transactions
          .sort(
            (a, b) =>
              new Date(a.last_update).getTime() -
              new Date(b.last_update).getTime()
          )
          .find((t) => t.advertisement.id === id);

        if (transaction) {
          dispatch(postUpdateTransactionAction(transaction, "ca"));
        }
      }
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}

export function NewAdvertisementAction(
  material_description: any,
  material_type: any,
  quantity: any,
  acceptance_condition: any,
  profit_type: any,
  times_viewed: any,
  hidden: any,
  company: any
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postNewAdvertisement({
        material_description,
        material_type,
        quantity,
        acceptance_condition,
        profit_type,
        times_viewed,
        hidden,
        company,
      });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "NEW_ADVERTISEMENT" });
      await dispatch(getAdvertisements);
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}
