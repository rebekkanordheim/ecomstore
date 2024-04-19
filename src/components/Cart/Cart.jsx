import React from 'react';
import { Link } from 'react-router-dom';

function Cart({ cart }) {
  const totalPrice = cart.reduce((total, item) => {
    return total + (item.discountedPrice ? item.discountedPrice : item.price);
  }, 0).toFixed(2);
  
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
                    <p>${item.discountedPrice ? item.discountedPrice.toFixed(2) : item.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className='total-price'>Total Price: ${totalPrice}</p>
          <button className='continue-to-checkout-btn'><Link to='/checkout'>Continue to Checkout</Link></button>
        </div>
      )}
    </div>
  );
}

export default Cart;

