import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductsListPage from './components/ProductsListPage';
import Cart from './components/Cart';
import Categories from './components/Categories';

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

      <Route
        exact
        path="/"
        component={ Categories }
      />

    </BrowserRouter>

  );
}

export default App;
