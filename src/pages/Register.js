import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Form from '../components/Form';
import Header from '../components/Header';
import Input from '../components/Input';
import {  RegisterCont, Title, RegisterContent } from '../components/styles/Register.styles';

const Register = () => {
return (
    <RegisterCont>
        <Header display ='none'/>
        <RegisterContent>
        <Title>Register</Title>
        <Form>
            <Input width = '38%' label ='First Name' type='text' placeholder='Enter First Name...' name='first-name' required = 'true'/>
            <Input width = '38%' label ='Last Name' type='text' placeholder='Enter Last Name...' name='last-name' required = 'true'/>
            <Input width = '80%' label = 'Email' type='email' placeholder='Enter Email...' name='email' required = 'true'/>
            <Input width = '80%' label = 'Password' type='password' placeholder='Enter Password...' name='password' required = 'true'/>
            <Input bottom = '40px' width = '80%' label = 'Confirm Password' type='password' placeholder='Confirm Password...' name='confirm-password' required = 'true'/>
            <Link to='/'><Button text = 'Register' /></Link>
        </Form>
    </RegisterContent>
    </RegisterCont>
)
};

export default Register;

