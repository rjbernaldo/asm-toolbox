import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from './components/App';
import Login from './components/Login';

const routes = () => (
  <Switch>
    <Route path="/login" component={Login} />
    <Route path="/" component={App} />
  </Switch>
);

export default routes;
