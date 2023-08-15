import { RootState } from "../store/configureStore";
import { Company } from "../types/Company";

export type CompaniesState =
  | { tag: "UNLOADED" }
  | { tag: "LOADING" }
  | { tag: "ERROR" }
  | {
      tag: "LOADED";
      companies: Company[];
    };

export type CompaniesAction =
  | { type: "GET_COMPANIES_ERROR" }
  | { type: "GET_COMPANIES_LOADING" }
  | { type: "GET_COMPANIES_OK"; data: Company[] };

const initialState: CompaniesState = { tag: "UNLOADED" };

export default function companies(
  state: CompaniesState = initialState,
  action: CompaniesAction
): CompaniesState {
  if (state.tag !== "LOADED") {
    switch (action.type) {
      case "GET_COMPANIES_LOADING":
        return { tag: "LOADING" };

      case "GET_COMPANIES_ERROR":
        return { tag: "ERROR" };

      case "GET_COMPANIES_OK":
        return { tag: "LOADED", companies: action.data };

      default:
        return state;
    }
  }

  return state;
}

export const CompanyState = (store: RootState) => store.companies;

export const isCompaniesLoading = (
  state: CompaniesState
): state is { tag: "UNLOADED" } | { tag: "LOADING" } =>
  state.tag === "UNLOADED" || state.tag === "LOADING";
