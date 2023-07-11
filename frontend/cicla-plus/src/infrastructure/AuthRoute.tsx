import React from "react";
import { Navigate } from "react-router-dom";

import { store } from "../store/configureStore";

export default function AuthRoute({ children }: any) {
  const isAuthenticated = store.getState().login.authenticated;

  return isAuthenticated ? children : <Navigate replace to="/login" />;
}
