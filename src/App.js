import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomepageComponent';
import ShopPage from './pages/shop/ShopPageComponent';
import Header from './components/header/HeaderComponent';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
