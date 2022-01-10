import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import data from './data';
import { Route , BrowserRouter as Router, Routes} from 'react-router-dom';
import Cart from './components/Cart/Cart';
import ProductDetails from './components/ProductDetails/ProductDetails';
import { useState } from 'react';

function App() {
  const {products, cart} = data;
  

  

  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes>
          <Route path='/products' element={ <ProductList products = {products}/>}></Route>
          <Route path='/cart' element={ <Cart cart = {cart}/>}></Route>
          <Route path='/' element={ <ProductList products = {products}/>}></Route>
          <Route path="products/:id" element={ <ProductDetails /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
