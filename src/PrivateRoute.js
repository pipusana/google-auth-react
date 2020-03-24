import { Redirect, Route } from "react-router-dom";

import React from "react";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, ...rest }) {
  const { isUserLoggedIn } = localStorage
  const { authTokens } = useAuth()

  console.log('authTokens', authTokens)

  return (
    <Route
      {...rest}
      render={props =>
        isUserLoggedIn ? (
          <Component {...props} />
        ) : (
            <Redirect to={{ pathname: "/", state: { referer: props.location } }} />
          )
      }
    />
  );
}

export default PrivateRoute;