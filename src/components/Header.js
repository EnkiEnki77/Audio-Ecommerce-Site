import React from 'react'
import { HeaderContainer, Logo, Cart, Logout, LogoutAndCart } from './styles/Header.styles' 
import siteLogo from '../assets/shared/desktop/logo.svg'
import siteCart from '../assets/shared/desktop/icon-cart.svg'


const Header = (props) => {
    return (
        <HeaderContainer>
            <Logo src={siteLogo}/>
            {props.children}
            <LogoutAndCart>
                <Cart display = {props.display} src={siteCart}/>
                <Logout display = {props.display} to='/'>Logout</Logout>
            </LogoutAndCart>
        </HeaderContainer>
    )
}

export default Header
