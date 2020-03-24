import { Button, Card, Error, Form, Input, Logo } from "../components/AuthForm";
import React, { useState } from "react";

import { GoogleLogin } from 'react-google-login';
import { Redirect } from "react-router-dom";
import logoImg from "../img/google.jpg";
import { useAuth } from "../context/auth";

function Login(props) {
  console.log('----------- Login')
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();
  const { isUserLoggedIn } = localStorage

  let referer = '/main'
  if (props.location.state && props.location.state.referer && props.location.state.referer.pathname) {
    referer = props.location.state.referer.pathname
  }

  const responseGoogleSuccess = (response) => {
    setAuthTokens(response)
  }

  const responseGoogleFailure = (response) => {
    console.log('responseGoogleFailure', response)
    setIsError(true)
  }

  if (isUserLoggedIn) {
    return <Redirect to="/main" />;
  }

  return (
    <Card >
      <Logo src={logoImg} />
      <Form>
        <GoogleLogin
          clientId="338418438369-v797jdnmlc8m960nrf3en4iajaloer41.apps.googleusercontent.com"
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