// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import HomePage from './components/HomePage';
import Cart from './components/cart';


function App() {
  
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const buyProduct = (product) => {
    
    console.log(`Buying ${product.title}`);
  };

const onRemoveFromCart=(index)=>{
  const updatedCart=[...cart]
  updatedCart.splice(index,1);
  setCart(updatedCart)
}

  return (
    <>
      <div className='App'>
        <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/cart'
              element={<Cart cart={cart} onRemoveFromCart={onRemoveFromCart} />}
            />
          </Routes>

        </Router>
        
      </div>
      <div>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> - ${product.price}
              <img src={product.images} alt={product.title} style={{width: '30%',height: '10%'}}/>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
              <button onClick={() => buyProduct(product)}>Buy</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  
}

export default App;