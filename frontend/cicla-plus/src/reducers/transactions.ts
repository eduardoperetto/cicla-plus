import { RootState } from "../store/configureStore";
import { Transaction } from "../types/Transaction";

export type TransactionsState =
  | { tag: "UNLOADED" }
  | { tag: "LOADING" }
  | { tag: "ERROR" }
  | {
      tag: "LOADED";
      transactions: Transaction[];
    };

export type TransactionsAction =
  | { type: "GET_TRANSACTION_ERROR" }
  | { type: "GET_TRANSACTION_LOADING" }
  | { type: "GET_TRANSACTION_OK"; data: Transaction[] }
  | {
      type: "POST_NEW_TRANSACTION";
    };

const initialState: TransactionsState = { tag: "UNLOADED" };

export default function transactions(
  state: TransactionsState = initialState,
  action: TransactionsAction
): TransactionsState {
  if (state.tag !== "LOADED") {
    switch (action.type) {
      case "GET_TRANSACTION_LOADING":
        return { tag: "LOADING" };

      case "GET_TRANSACTION_ERROR":
        return { tag: "ERROR" };

      case "GET_TRANSACTION_OK":
        return { tag: "LOADED", transactions: action.data };

      default:
        return state;
    }
  }

  switch (action.type) {
    case "POST_NEW_TRANSACTION":
      return state;
    default:
      return state;
  }
}

export const TransactionState = (store: RootState) => store.transactions;

export const isTransactionsLoading = (
  state: TransactionsState
): state is { tag: "UNLOADED" } | { tag: "LOADING" } =>
  state.tag === "UNLOADED" || state.tag === "LOADING";
