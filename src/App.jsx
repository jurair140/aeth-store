import React from 'react';
import {  Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';


function App() {
  return (
        <>
        <Header/>
         <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
        </>
     
  
  );
}

export default App;
