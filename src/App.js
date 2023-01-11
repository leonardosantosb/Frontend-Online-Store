import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductsListPage from './components/ProductsListPage';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={ ProductsListPage }
      />

    </BrowserRouter>

  );
}

export default App;
