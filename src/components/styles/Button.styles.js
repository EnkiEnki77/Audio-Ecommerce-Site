import styled from "styled-components";
import { vars } from "../../Css Vars/vars";

export const Butt = styled.button`
    width: 160px;
    height: 45px;
    font-size: 16px;
    background-color: ${props => props.btn2 ? vars.color6 : vars.color1 };
    border: ${props => props.btn2 ? vars.color7 : vars.color1 } ;
    color: ${props => props.btn2 ? vars.color7: vars.color6 };

    &:hover{
        cursor: pointer;
        background-color: ${props => props.btn2 ? vars.color7 : vars.color5 } ;
    }
`;