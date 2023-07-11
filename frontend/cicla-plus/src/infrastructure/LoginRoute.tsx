import React from "react";
import { Navigate } from "react-router-dom";
import { store } from "../store/configureStore";

export default function LoginRoute({ children }: { children: any }) {
  const isAuthenticated = store.getState().login.authenticated;

  return isAuthenticated ? <Navigate replace to={"/"} /> : children;
}
