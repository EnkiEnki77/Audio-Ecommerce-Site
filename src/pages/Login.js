import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Input from '../components/Input';
import {  LoginCont, Title, RegisterLink, LoginContent } from '../components/styles/Login.styles';

const Login = () => {
  return (
  <LoginCont>
    <Header display ='none'/>
    <LoginContent>
      <Title>Login</Title>
      <Form>
        <Input width = '80%' label ='Email' type='email' placeholder='Enter Email...' name='email' required = 'true'/>
        <Input bottom = '40px' width = '80%' label = 'Password' type='password' placeholder='Enter Password...' name='password' required = 'true'/>
        <Link to='home'><Button text = 'Log In' /></Link>
      </Form>
      <RegisterLink to = 'register'>Don't have an account? Create one now.</RegisterLink>
    </LoginContent>
  </LoginCont>
  )
};

export default Login;
