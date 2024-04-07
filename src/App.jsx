import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Products from './Products';
import ProductDetail from './ProductDetail';
import ContactPage from './ContactPage';
import Home from './Home';
import Cart from './Cart';
import Checkout from './Checkout';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
    console.log('Product added to cart:', product);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail addToCart={addToCart} />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;