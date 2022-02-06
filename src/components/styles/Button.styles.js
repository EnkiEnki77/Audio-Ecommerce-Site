import styled from "styled-components";
import { vars } from "../../Css Vars/vars";

export const Butt = styled.button`
    width: 168px;
    height: 52px;
   
font-size: 13px;
font-style: normal;
font-weight: 700;
line-height: 18px;
letter-spacing: 1px;
padding: 0;

    background-color: ${props => props.btn2 ? vars.color6 : vars.color1 };
    border: ${props => props.btn2 ? vars.color7 : vars.color1 } ;
    color: ${props => props.btn2 ? vars.color7: vars.color6 };

    &:hover{
        cursor: pointer;
        background-color: ${props => props.btn2 ? vars.color7 : vars.color5 } ;
    }
`;