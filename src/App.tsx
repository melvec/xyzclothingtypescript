import React, { useState } from 'react';
import data from "./data/products.json"
import { ProductsTable } from './components/ProductsTable'
import  ProductDetails  from './components/ProductDetails'
import { Routes, Route } from 'react-router-dom'


import './App.css';



import {
  Container

} from '@mui/material'



const App = () => {



  return (
    <Container>
      <Routes>
        <Route path="/" element={<ProductsTable />} />

        
        <Route path="productdetails/:id" element={<ProductDetails />} />

        
        
      </Routes>
    </Container>

  );
}

export default App;
