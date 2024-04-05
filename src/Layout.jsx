/* import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route index element={<h1>Home</h1>} />
        <Route path="product" element={<h1>Product</h1>} />
        <Route path="*" element={<h1>Route not found</h1>} />
      </Routes>
      <footer className="footer">&copy; Rebekka Nordheim 2024</footer>
    </div>
  );
}

export default Layout;
 */