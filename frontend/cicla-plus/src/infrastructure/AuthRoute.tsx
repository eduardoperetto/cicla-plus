import React from "react";
import { Navigate } from "react-router-dom";

import { store, useDispatch } from "../store/configureStore";
import { refreshStateAction } from "../actions/state";

export default function AuthRoute({ children }: any) {
  const dispatch = useDispatch();
  dispatch(refreshStateAction());

  const isAuthenticated = store.getState().login.authenticated;

  return isAuthenticated ? children : <Navigate replace to="/login" />;
}
