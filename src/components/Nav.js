import React from 'react';
import { Nav, NavLink} from './styles/Nav.styles';

const Navs = (props) => {
    return (
        <Nav footer = {props.footer}>
            <NavLink to='/home'>Home</NavLink>
            <NavLink to='/category/headphones'>Headphones</NavLink>
            <NavLink to='/category/speakers'>Speakers</NavLink>
            <NavLink to='/category/earphones'>Earphones</NavLink>
        </Nav>)
};

export default Navs;
