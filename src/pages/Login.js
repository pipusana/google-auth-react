import { Button, Card, Error, Form, Input, Logo } from "../components/AuthForm";
import React, { useState } from "react";

import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom";
import logoImg from "../img/google.jpg";
import { useAuth } from "../context/auth";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();

  const responseGoogleSuccess = (response) => {
    setAuthTokens(response)
    setLoggedIn(true);
  }

  const responseGoogleFailure = (response) => {
    console.log('responseGoogleFailure', response)
    setIsError(true)
  }

  if (isLoggedIn) {
    return <Redirect to="/main" />;
  }

  return (
    <Card >
      <Logo src={logoImg} />
      <Form>
        <GoogleLogin
          clientId="Your clientId"
          buttonText="Log in with Google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFailure}
          cookiePolicy={'single_host_origin'}
        />
      </Form>
      {isError && <Error>Auth Error</Error>}
    </Card>
  )
}

export default Login;