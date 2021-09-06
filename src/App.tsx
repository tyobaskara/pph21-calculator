import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PPH21Page, Error404Page, AnotherPage } from './pages';
import './App.scss';

const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={PPH21Page} />
      <Route exact path='/another' component={AnotherPage} />
      <Route component={Error404Page} />
    </Switch>
  </div>
);

export default App;
