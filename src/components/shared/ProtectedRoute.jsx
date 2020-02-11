import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import authService from 'services/auth';

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentToken = authService.getCurrentToken();
        if (!currentToken) {
          return (
            <Redirect
              to={{ pathname: '/login', state: { from: props.location } }}
            />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}
