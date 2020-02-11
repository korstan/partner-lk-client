import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageIndex from 'pages/Index';
import PageProfile from 'pages/Profile/Profile';
import 'App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <PageProfile />
        </Route>
        <Route path="/">
          <PageIndex />
        </Route>
      </Switch>
    </Router>
  );
}
