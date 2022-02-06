import React from 'react';
import { FormCont } from './styles/Form.styles';

const Form = (props) => {
    return(
        <FormCont action = {props.action} method = {props.method} encType = 'multipart/form-data'>
            {props.children}
        </FormCont>
    )
};

export default Form;
