import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { createStore, applyMiddleware, Reducer, Action } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import {
  TypedUseSelectorHook,
  useDispatch as useDispatchUntyped,
  useSelector as useSelectorUntyped,
} from "react-redux";
import rootReducer from "../reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login"],
};

export function configureStoreTyped<State, PlainAction extends Action<any>>(
  reducer: Reducer<State, PlainAction>
) {
  const typedThunk: ThunkMiddleware<State, PlainAction, never> = thunk;

  return createStore(reducer, applyMiddleware(typedThunk));
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStoreTyped(persistedReducer);
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useDispatchUntyped<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorUntyped;
