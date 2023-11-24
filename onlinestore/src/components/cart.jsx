import React from 'react';
import './cart.css';


function Cart({ cart, onRemoveFromCart }) {
  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>{item.title}
          <button onClick={()=>
          onRemoveFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cart;
