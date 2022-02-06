import styled from "styled-components";
import HeroImage from '../../assets/home/desktop/image-hero.jpg';
import { vars } from "../../Css Vars/vars";


export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-flow: column nowrap;
`;

export const Hero = styled.section`
  width: 100%;
  height: 100%;
  background-image: url(${HeroImage});
  background-repeat: no-repeat;
  background-position-y: 85%;
  background-size: cover;
`;

export const NewProductCont = styled.article`
   height: 346px;
   width: 398px;
   margin-top: 128px;
   margin-bottom: 138px;
   margin-left: 10%;
`;

export const NewProduct = styled.h2`
  font-family: Manrope;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 19px;
letter-spacing: 10px;
text-transform: uppercase;
margin-bottom: 24px;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;
`;

export const NewProductName  = styled.h1`
  font-family: Manrope;
font-style: normal;
font-weight: bold;
font-size: 56px;
line-height: 58px;
margin-bottom: 24px;
margin-top: 0px;
/* or 104% */

letter-spacing: 2px;
text-transform: uppercase;

color: #FFFFFF;

`;

export const NewProductDescrip  = styled.p`
  font-family: Manrope;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
margin-bottom: 40px;

/* or 167% */


color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.75;
`;

export const HomeContent = styled.section`
  
`;

export const ProductShowcase = styled.section`
  
`;