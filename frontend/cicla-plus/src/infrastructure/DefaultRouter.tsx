import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginRoute from "./LoginRoute";
import PersonRoute from "./PersonRoute";
import { store } from "../store/configureStore";
import AccountScreen from "../screens/AccountScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreenPerson from "../screens/Register/RegisterScreenPerson";
import RegisterScreenEnterprise from "../screens/Register/RegisterScreenEnterprise";
import AdvertisementsScreen from "../screens/Advertisement/AdvertisementsScreen";
import TransactionScreen from "../screens/TransactionScreen";
import MyAdvertisementScreen from "../screens/MyAdvertisementScreen";
import CompanyRoute from "./CompanyRoute";
import AuthRoute from "./AuthRoute";
import OngoingTransactionScreen from "../screens/OngoingTransactionsScreen";
import AdminRoute from "./AdminRoute";
import AdminAdvertisementScreen from "../screens/AdminAdvertisementScreen";

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
            <AccountScreen />
          </AuthRoute>
        }
      />
      <Route
        path="/advertisements"
        element={
          <PersonRoute>
            <AdvertisementsScreen />
          </PersonRoute>
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
      <Route
        path="/account"
        element={
          <AuthRoute>
            <AccountScreen />
          </AuthRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <PersonRoute>
            <TransactionScreen />
          </PersonRoute>
        }
      />
      <Route
        path="/my-advertisements"
        element={
          <CompanyRoute>
            <MyAdvertisementScreen />
          </CompanyRoute>
        }
      />
      <Route
        path="/ongoing-transactions"
        element={
          <CompanyRoute>
            <OngoingTransactionScreen />
          </CompanyRoute>
        }
      />

      <Route
        path="/admin-advertisements"
        element={
          <AdminRoute>
            <AdminAdvertisementScreen />
          </AdminRoute>
        }
      />

      {/* no match route */}
      {/*https://reactrouter.com/docs/en/v6/getting-started/tutorial#adding-a-no-match-route*/}
      <Route
        path="*"
        element={
          store.getState().login.authenticated ? (
            <Navigate replace to={"/account"} />
          ) : (
            <Navigate replace to={"/login"} />
          )
        }
      />
    </Routes>
  );
}
