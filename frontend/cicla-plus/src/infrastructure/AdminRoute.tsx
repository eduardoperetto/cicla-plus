import React from "react";
import { Navigate } from "react-router-dom";

import { store, useDispatch } from "../store/configureStore";
import { refreshStateAction } from "../actions/state";

export default function AdminRoute({ children }: any) {
  const dispatch = useDispatch();
  dispatch(refreshStateAction());

  const loginState = store.getState().login;
  const is_admin = loginState.is_admin;
  const isAuthenticated = loginState.authenticated;

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }

  if (!is_admin) {
    return <Navigate replace to="/account" />;
  }

  return children;
}
