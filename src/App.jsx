import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageHome from 'pages/Home';
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
          <PageHome />
        </Route>
      </Switch>
    </Router>
  );
}
