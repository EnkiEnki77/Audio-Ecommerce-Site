import React from 'react';
import { DescriptCont, DescriptHead, DescriptImg, DescriptImgCont, DescriptText, DescriptTextCont } from './styles/ShopDescript.styles';

const ShopDescript = () => {
    return(
        <DescriptCont>
            <DescriptTextCont>
                <DescriptHead></DescriptHead>
                <DescriptText></DescriptText>
            </DescriptTextCont>
            <DescriptImgCont>
                <DescriptImg/>
            </DescriptImgCont>
        </DescriptCont>
    )
};

export default ShopDescript;
