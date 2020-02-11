import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PageIndex from 'pages/Index';
import PageProfile from 'pages/Profile/Profile';
import 'App.css';
import ProtectedRoute from 'components/shared/ProtectedRoute';
import GuestRoute from 'components/shared/GuestRoute';

export default function App() {
  return (
    <Router>
      <Switch>
        <ProtectedRoute path="/profile" component={PageProfile} />
        <GuestRoute path="/" component={PageIndex} />
      </Switch>
    </Router>
  );
}
