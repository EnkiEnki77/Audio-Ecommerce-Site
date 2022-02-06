import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterCont  = styled.footer`
  min-height: 365px;
  width: 100%;
  background-color: #000000;
  display: flex;
  padding: 76px 10% 0 10%;
  /* position: absolute;
  bottom: 0; */
`;

export const FooterInfo  = styled.div`
  flex-basis: 50%;
`;

export const FooterLogo  = styled.img`
  max-width: 143px;
  max-height: 25px;
`;

export const FooterDescript  = styled.p`
font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */

width: 540px;
color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;
margin-top: 45px;
margin-bottom: 61px;
`;

export const Copywrite  = styled.p`
  font-size: 15px;
  color: #ffffff;
  opacity: 0.5;
`;

export const FooterLinks  = styled.div`
 flex-basis: 50%;
 display: flex;
 flex-flow: column nowrap;
`;

export const FooterNavLink  = styled(Link)`
  
`;

export const SocialLinks  = styled.div`
  display: flex;
  gap: 4%;
  padding-right: 5%;
  display: flex;
  justify-content: flex-end;
  margin-top: 118px;
`;

export const SocialLink  = styled.img`
  
`;

