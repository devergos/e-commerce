import React from 'react';
import './App.css';

import { Route, Switch } from 'react-router-dom';

import HomePage from './pages/homepage/HomepageComponent';

const HatsPage = () => {
  return <div>HATS PAGE</div>
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
