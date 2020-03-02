import { Redirect, Route } from "react-router-dom";

import React from "react";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={props =>
        authTokens.isUserLoggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect exact to="/" />
          )
      }
    />
  );
}

export default PrivateRoute;