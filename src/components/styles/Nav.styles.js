import { Link } from "react-router-dom";
import styled from "styled-components";
import { vars } from "../../Css Vars/vars";

export const Nav = styled.nav`
  width: 30%;
  display: flex;
  align-items: center;
  gap: 30px;
  padding-left: ${props => props.footer ? '32%' : null};
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${vars.color6};
`;