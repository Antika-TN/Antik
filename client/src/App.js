import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import AdminPage from "./pages/AdminPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import UserProfile from "./pages/UserProfile";
import ShoppingCard from "./pages/ShoppingCard";
import ProductPage from "./pages/ProductPage";
import ResponsiveAppBar from "./Components/Navbar/TopBar";
import Allclient from "./Components/Admin/Allclient";
import Allproduct from "./Components/Admin/Allproduct";
import Allsellers from "./Components/Admin/Allsellers";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

const AppRoutes = () => {
  const location = useLocation();

  const showNav = location.pathname === "/register" || location.pathname === "/login";

  return (
    <>
      {!showNav && <ResponsiveAppBar />}
      <Routes>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashbord" element={<AdminPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<UserProfile />} />
        <Route path="/shoppingCard" element={<ShoppingCard />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/sellers" element={<Allsellers />} />
        <Route path="/clients" element={<Allclient />} />
        <Route path="/products" element={<Allproduct />} />
        
      </Routes>
      <Footer />
    </>
  );
};

export default App;
