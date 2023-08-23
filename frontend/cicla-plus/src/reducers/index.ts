import { combineReducers } from "redux";
import login from "./login";
import { Action } from "../actions/types";
import storage from "redux-persist/lib/storage";
import advertisements from "./advertisements";
import companies from "./companies";
import transactions from "./transactions";
import persons from "./persons";

const appReducer = combineReducers({
  login,
  advertisements,
  companies,
  transactions,
  persons,
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
