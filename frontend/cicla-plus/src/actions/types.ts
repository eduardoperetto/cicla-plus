import { AdvertisementsAction } from "../reducers/advertisements";
import { CompaniesAction } from "../reducers/companies";
import { LoginAction } from "../reducers/login";
import { PersonsAction } from "../reducers/persons";
import { TransactionsAction } from "../reducers/transactions";
import { RootState } from "../store/configureStore";

export type GetState = () => RootState;
export type ThunkAction<T> = (dispatch: Dispatch, getState: GetState) => T;

export interface Dispatch {
  (action: Action): void;
  <T>(action: ThunkAction<T>): T;
}

export type Action =
  | LoginAction
  | AdvertisementsAction
  | CompaniesAction
  | TransactionsAction
  | PersonsAction;
