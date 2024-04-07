import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart }) {
  return (
    <div className='cart-products'>
      <h1>Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                <div className='specific-cart-products'>
                  <img src={item.image.url} alt={item.title} style={{ width: '100px', height: '100px', marginRight: '10px' }} />
                  <div>
                    <p>{item.title}</p>
                    <p>${item.discountedPrice ? item.discountedPrice : item.price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <button className='continue-to-checkout-btn'><Link to="/checkout">Continue to Checkout</Link></button>
        </div>
      )}
    </div>
  );
}

export default Cart;
