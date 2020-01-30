import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PagesHome from 'pages/Home';
import PagesProfile from 'pages/Profile';
import 'App.css';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/profile">
          <PagesProfile />
        </Route>
        <Route path="/">
          <PagesHome />
        </Route>
      </Switch>
    </Router>
  );
}
