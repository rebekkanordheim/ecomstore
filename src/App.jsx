import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import ContactPage from "./ContactPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
