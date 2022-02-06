import React from 'react';
import { Butt } from './styles/Button.styles';

const Button = (props) => {
    return(
        <Butt type = 'submit'>{props.text}</Butt>
    )
};

export default Button;
