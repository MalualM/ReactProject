import React from 'react';
import './cart.css'
function Cart({ cart }) {
  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
