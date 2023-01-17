import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductsListPage from './components/ProductsListPage';
import Cart from './components/Cart';
import Card from './components/Card';

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
        render={ (props) => <Cart { ...props } /> }
      />
      <Route
        exact
        path="/card/:id"
        component={ Card }
      />

    </BrowserRouter>

  );
}

export default App;
