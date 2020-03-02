import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Main from './pages/Main';
import NotFoundPage from './pages/Notfoundpage'
import PrivateRoute from './PrivateRoute';

function App(props) {
  const defaultAuth = {
    userDetails: {},
    isUserLoggedIn: false
  }
  const [authTokens, setAuthTokens] = useState(defaultAuth);

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));

    setAuthTokens({
      userDetails: {
        ...data.profileObj
      },
      isUserLoggedIn: true
    });
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/main" component={Main} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;