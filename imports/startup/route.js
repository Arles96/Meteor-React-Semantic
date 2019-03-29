import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../ui/pages/HomePage/HomePage';
import Login from '../ui/pages/Login/Login';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={Login} />
    </React.Fragment>
  </BrowserRouter>
);

export default App;

