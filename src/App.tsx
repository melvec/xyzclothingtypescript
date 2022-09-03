import React, {useState} from 'react';
import data from "./products.json"
import {ProductsTable} from './components/ProductsTable'



import './App.css';

const App = () =>{



  return (
    <div className="App">
      <ProductsTable />
    </div>
  );
}

export default App;
