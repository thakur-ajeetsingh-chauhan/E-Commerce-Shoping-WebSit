import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useThemeHook } from "./GlobalComponents/ThemeProvider";
import Header from "./components/Header";
import { Router } from "@reach/router";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
import Registration from "./pages/Registration";
import SignIn from "./pages/SignIn";
import MyAccount from "./pages/MyAccount";

function App() {
  const [theme] = useThemeHook();
  return (
    <main
      className={theme ? "bg-black" : "bg-light-2"}
      style={{ height: "100vh", overflowY: "auto" }}
    >
      <Header />
      <Router>
        <Home path="/" />
        <ProductDetails path="product-details/:productId" />
        <Cart path="/cart" />
        <SignIn path="/sign-in" />
        <Registration path="/registration" />
        <MyAccount path="/my-account" />
      </Router>
    </main>
  );
}

export default App;
