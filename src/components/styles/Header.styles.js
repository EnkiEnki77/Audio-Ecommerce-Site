import styled from "styled-components";
import { Link } from "react-router-dom";
import { vars } from "../../Css Vars/vars";

export const HeaderContainer = styled.header`
  width: 100%;
  min-height: 97px;
  background-color: #000000;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.img`
  max-width: 143px;
  max-height: 25px;
  margin-left: 9.7%;
`;

export const LogoutAndCart = styled.div`
  display: flex;
   gap: 25%;
   width: 12%;
   margin-right: 8%;
`;

export const Logout = styled(Link)`
  display: ${props => props.display};
  text-decoration: none;
  color: ${vars.color3};
`;

export const Cart = styled.img`
  max-width: 23.3%;
  max-height: 20px;
  display: ${props => props.display}
`;