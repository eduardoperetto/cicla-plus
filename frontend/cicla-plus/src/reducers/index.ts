import { combineReducers } from "redux";
import login from "./login";
import { Action } from "../actions/types";
import storage from "redux-persist/lib/storage";

const appReducer = combineReducers({
  login,
});

export default function rootReducer(
  state: ReturnType<typeof appReducer> | undefined,
  action: Action
) {
  if (action.type === "LOGOUT") {
    // Based on the solution from https://stackoverflow.com/a/35641992
    storage.removeItem("persist:root");
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
}
