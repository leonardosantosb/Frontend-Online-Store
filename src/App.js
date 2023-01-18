import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import MainPage from './components/MainPage';
import Details from './components/Details';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/"
        component={ MainPage }
      />
      <Route
        exact
        path="/cart"
        component={ Cart }
      />
      <Route
        exact
        path="/details/:id"
        render={ (props) => <Details { ...props } /> }
      />
    </BrowserRouter>

  );
}

export default App;
