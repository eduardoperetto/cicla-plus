import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginRoute from "./LoginRoute";
import AuthRoute from "./AuthRoute";
import { store } from "../store/configureStore";
import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import RegisterScreenPerson from "../screens/RegisterScreenPerson";
import RegisterScreenEnterprise from "../screens/RegisterScreenEnterprise";
import AdvertisementsScreen from "../screens/Advertisement/AdvertisementsScreen";

export function DefaultRouter() {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <LoginRoute>
            <LoginScreen />
          </LoginRoute>
        }
      />
      <Route
        path="/"
        element={
          <AuthRoute>
            <HomeScreen />
          </AuthRoute>
        }
      />
      <Route
        path="/advertisements"
        element={
          <AuthRoute>
            <AdvertisementsScreen />
          </AuthRoute>
        }
      />
      <Route
        path="/register-person"
        element={
          <LoginRoute>
            <RegisterScreenPerson />
          </LoginRoute>
        }
      />
      <Route
        path="/register-enterprise"
        element={
          <LoginRoute>
            <RegisterScreenEnterprise />
          </LoginRoute>
        }
      />

      {/* no match route */}
      {/*https://reactrouter.com/docs/en/v6/getting-started/tutorial#adding-a-no-match-route*/}
      <Route
        path="*"
        element={
          store.getState().login.authenticated ? (
            <Navigate replace to={"/"} />
          ) : (
            <Navigate replace to={"/login"} />
          )
        }
      />
    </Routes>
  );
}