import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductsListPage from './components/ProductsListPage';
import Cart from './components/Cart';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={ ProductsListPage }
      />
      <Route
        exact
        path="/shoppingCart"
        component={ Cart }
      />

    </BrowserRouter>

  );
}

export default App;
