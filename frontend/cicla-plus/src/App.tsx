import React, { useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { DefaultRouter } from "./infrastructure/DefaultRouter";
import { useDispatch, useSelector } from "./store/configureStore";
import { getCompaniesAction } from "./actions/companies";
import { getAdvertisementsAction } from "./actions/advertisements";

function App() {
  const isAuthenticated = useSelector((s) => s.login.authenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getCompaniesAction());
      dispatch(getAdvertisementsAction());
    }
  }, [isAuthenticated, dispatch]);

  return (
    <>
      {isAuthenticated && <Navbar />}
      <div className="w-full px-12 mx-auto pb-2 h-screen bg-[#fafafa]">
        <DefaultRouter />
        <br />
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </>
  );
}

export default App;
