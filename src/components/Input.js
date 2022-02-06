import React from 'react';
import { Inp, InputLabel, InputCont } from './styles/Input.styles';

const Input = (props) => {
    return (
        <InputCont width = {props.width} >
            <InputLabel htmlFor = {props.id}>{props.label}</InputLabel>
            <Inp bottom = {props.bottom} type = {props.type} placeholder = {props.placeholder} name = {props.name} required = {props.required ? true : false}/>
        </InputCont>
    )
};

export default Input;
