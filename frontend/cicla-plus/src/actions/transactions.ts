import { getAdvertisements } from "../api/getAdvertisements";
import { getTransactions } from "../api/getTransactions";
import { postNewTransaction } from "../api/postNewTransaction";
import { postUpdateTransaction } from "../api/postUpdateTransaction";
import { store } from "../store/configureStore";
import Result from "../types/Result";
import { Transaction } from "../types/Transaction";
import { toggleVisibilityAction } from "./advertisements";
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

export function postNewTransactionAction(
  advertisement: number
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    const personState = store.getState().persons;
    const companiesState = store.getState().companies;
    const loginState = store.getState().login;
    if (personState.tag !== "LOADED" || companiesState.tag !== "LOADED") {
      console.log("AQUI N DEU");
      return Result.err({});
    }

    const tgPerson = personState.persons.find(
      (p) => p.user.username === loginState.user
    );

    const user = tgPerson?.id ?? undefined;

    if (!user) {
      console.log("não acho o user");
      return Result.err({});
    }

    try {
      const result = await postNewTransaction({
        user,
        advertisement,
        status: "og",
      });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "POST_NEW_TRANSACTION" });
      await dispatch(getTransactionsAction);
      await dispatch(getAdvertisements);
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}

export function postUpdateTransactionAction(
  transaction: Transaction,
  status: string
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postUpdateTransaction({
        id: transaction.id,
        status: status,
      });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "UPDATE_TRANSACTION" });
      await dispatch(getTransactions);
      await dispatch(
        toggleVisibilityAction(transaction.advertisement.id, status !== "cs")
      );
      await dispatch(getAdvertisements);
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}

export function postFinishTransactionAction(
  transaction: Transaction,
  token: string
): ThunkAction<Promise<Result.Result<{}, {}>>> {
  return async (dispatch) => {
    try {
      const result = await postUpdateTransaction({
        id: transaction.id,
        status: "de",
        token,
      });

      if (!result.ok) {
        return Result.err({});
      }

      dispatch({ type: "UPDATE_TRANSACTION" });
      await dispatch(getTransactions);
      await dispatch(getAdvertisements);
      return Result.ok({});
    } catch {
      return Result.err({});
    }
  };
}
