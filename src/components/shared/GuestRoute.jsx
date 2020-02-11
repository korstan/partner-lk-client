import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import authService from 'services/auth';

export default function GuestRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        const currentToken = authService.getCurrentToken();
        if (currentToken) {
          return (
            <Redirect
              to={{ pathname: '/profile', state: { from: props.location } }}
            />
          );
        }

        return <Component {...props} />;
      }}
    />
  );
}
