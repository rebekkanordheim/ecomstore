import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Products from './components/Product/Products';
import ProductDetail from './components/Product/ProductDetail';
import ContactPage from './components/Contact/ContactPage';
import Home from './Home';
import Cart from './components/Cart/Cart';
import Checkout from './components/Cart/Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };

  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
