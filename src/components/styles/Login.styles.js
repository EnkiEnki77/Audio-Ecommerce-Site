import { Link } from "react-router-dom";
import styled from "styled-components";
import { vars } from "../../Css Vars/vars";

export const LoginCont = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    /* justify-content: center; */
    align-items: center;
    background-color: ${vars.color3};
`;

export const Title = styled.h1`
  margin: 0 0 35px 0;
  color: ${vars.color7};
`;

export const RegisterLink = styled(Link)`
  margin-top: 30px;
`;

export const LoginContent = styled.div`
  width: 30%;
  background-color: ${vars.color6} ;
  display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px 50px 20px;
    border-radius: 10px;
    box-shadow: 0 60px 80px rgba(0, 0, 0, 0.32);
    margin-top: 43px;
`;