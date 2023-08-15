import { RootState } from "../store/configureStore";
import { Advertisement } from "../types/Advertisement";

export type AdvertisementsState =
  | { tag: "UNLOADED" }
  | { tag: "LOADING" }
  | { tag: "ERROR" }
  | {
      tag: "LOADED";
      advertisements: Advertisement[];
    };

export type AdvertisementsAction =
  | { type: "GET_ADVERTISEMENTS_ERROR" }
  | { type: "GET_ADVERTISEMENTS_LOADING" }
  | { type: "GET_ADVERTISEMENTS_OK"; data: Advertisement[] };

const initialState: AdvertisementsState = { tag: "UNLOADED" };

export default function advertisements(
  state: AdvertisementsState = initialState,
  action: AdvertisementsAction
): AdvertisementsState {
  if (state.tag !== "LOADED") {
    switch (action.type) {
      case "GET_ADVERTISEMENTS_LOADING":
        return { tag: "LOADING" };

      case "GET_ADVERTISEMENTS_ERROR":
        return { tag: "ERROR" };

      case "GET_ADVERTISEMENTS_OK":
        return { tag: "LOADED", advertisements: action.data };

      default:
        return state;
    }
  }

  return state;
}

export const AdvertisementState = (store: RootState) => store.advertisements;

export const isAdvertisementsLoading = (
  state: AdvertisementsState
): state is { tag: "UNLOADED" } | { tag: "LOADING" } =>
  state.tag === "UNLOADED" || state.tag === "LOADING";
