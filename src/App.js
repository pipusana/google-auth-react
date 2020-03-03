import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { AuthContext } from "./context/auth";
import Info from './pages/Info';
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
  const { userDetails, isUserLoggedIn } = localStorage

  console.log('localStorage', localStorage)


  const setTokens = (data) => {
    const isUserLoggedIn = true
    const userDetails = {
      ...data.profileObj
    }

    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    localStorage.setItem("isUserLoggedIn", isUserLoggedIn)

    setAuthTokens({
      userDetails,
      isUserLoggedIn
    });
  }

  useEffect(() => {
    console.log('useEffect ====>', useEffect)
    if (isUserLoggedIn) {
      console.log('-------- App setAuthTokens ---------')
      setAuthTokens({
        userDetails: JSON.parse(userDetails),
        isUserLoggedIn,
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <PrivateRoute path="/info" component={Info} />
            <PrivateRoute path="/main" component={Main} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;