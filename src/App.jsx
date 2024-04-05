import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ContactPage from "./ContactPage";
import Home from "./Home";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
