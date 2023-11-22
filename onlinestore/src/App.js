import './App.css';
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom' 
import { Navbar } from './components/navbar';
import HomePage from './components/HomePage';
import React,{useState,useEffect} from 'react';

function App  () {
 const[products,setProducts]=useState([]) 
  
 useEffect(()=>{
  const fetchdata=async()=>{
    try {
      const response=await fetch('https://api.escuelajs.co/api/v1/products');
      const data=await response.json();
      setProducts(data)
    } catch (error){
      console.error('Error fetching data',error)
    }
  }
  fetchdata()
 },[])
  return (
    <>
    <div className='App'>
       
       <Router>
         <HomePage/>
         <Navbar/>
         <Routes>
           <Route path='/'/>
           <Route path='/cart'/>
         </Routes>
       </Router>
     </div>
    <div>
      <ul>
        {products.map((product)=>(
          <li key={product.id}>
            <strong>{product.title}
            </strong> - ${product.price}
            <strong>
              {product.image}
            </strong>
          </li>
        ))}
      </ul>
    </div>
    


    </>
  )
}

export default App;
