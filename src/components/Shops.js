import React from 'react';
import Shop from './Shop';
import { ShopsContainer } from './styles/Shops.styles';

const Shops = () => {
    return(
        <ShopsContainer>
            <Shop/>
            <Shop/>
            <Shop/>
        </ShopsContainer>
    )
};

export default Shops;
