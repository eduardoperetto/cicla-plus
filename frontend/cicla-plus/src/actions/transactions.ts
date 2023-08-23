import { getTransactions } from "../api/getTransactions";
import { ThunkAction } from "./types";

export function getTransactionsAction(): ThunkAction<Promise<void>> {
  return async (dispatch) => {
    dispatch({ type: "GET_TRANSACTION_LOADING" });

    const result = await getTransactions();

    if (!result.ok) {
      return dispatch({ type: "GET_TRANSACTION_ERROR" });
    }

    dispatch({ type: "GET_TRANSACTION_OK", data: result.value });
  };
}
