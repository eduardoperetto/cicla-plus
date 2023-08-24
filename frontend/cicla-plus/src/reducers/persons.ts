import { RootState } from "../store/configureStore";
import { Person } from "../types/Person";

export type PersonsState =
  | { tag: "UNLOADED" }
  | { tag: "LOADING" }
  | { tag: "ERROR" }
  | {
      tag: "LOADED";
      persons: Person[];
    };

export type PersonsAction =
  | { type: "GET_PERSONS_ERROR" }
  | { type: "GET_PERSONS_LOADING" }
  | { type: "GET_PERSONS_OK"; data: Person[] }
  | { type: "REGISTER_PERSON" };

const initialState: PersonsState = { tag: "UNLOADED" };

export default function persons(
  state: PersonsState = initialState,
  action: PersonsAction
): PersonsState {
  if (state.tag !== "LOADED") {
    switch (action.type) {
      case "GET_PERSONS_LOADING":
        return { tag: "LOADING" };

      case "GET_PERSONS_ERROR":
        return { tag: "ERROR" };

      case "GET_PERSONS_OK":
        return { tag: "LOADED", persons: action.data };
      case "REGISTER_PERSON":
        return state;
      default:
        return state;
    }
  }

  return state;
}

export const PersonState = (store: RootState) => store.persons;

export const isPersonsLoading = (
  state: PersonsState
): state is { tag: "UNLOADED" } | { tag: "LOADING" } =>
  state.tag === "UNLOADED" || state.tag === "LOADING";
