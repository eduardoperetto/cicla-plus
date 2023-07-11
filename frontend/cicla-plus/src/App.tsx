import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { DefaultRouter } from "./infrastructure/DefaultRouter";
import { useSelector } from "./store/configureStore";

function App() {
  const isAuthenticated = useSelector((s) => s.login.authenticated);

  return (
    <>
      {isAuthenticated && <Navbar />}
      <div className="w-full px-3 mx-auto pb-2">
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
