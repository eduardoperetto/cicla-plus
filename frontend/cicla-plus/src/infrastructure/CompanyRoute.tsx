import React from "react";
import { Navigate } from "react-router-dom";

import { store, useDispatch } from "../store/configureStore";
import { refreshStateAction } from "../actions/state";

export default function CompanyRoute({ children }: any) {
  const dispatch = useDispatch();
  dispatch(refreshStateAction());

  const loginState = store.getState().login;
  const is_company = loginState.is_company;
  const isAuthenticated = loginState.authenticated;

  if (!isAuthenticated) {
    return <Navigate replace to="/login" />;
  }

  if (!is_company) {
    return <Navigate replace to="/account" />;
  }

  return children;
}
