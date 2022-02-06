import React from 'react'
import { Container, HeroImg, Hero, NewProductCont, NewProduct, NewProductDescrip, NewProductName, HomeContent, ProductShowcase} from '../components/styles/Home.styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navs from '../components/Nav'
import Button from '../components/Button'
import Shops from '../components/Shops'
import ShopDescript from '../components/ShopDescript'



const Home = () => {
    return (
        <Container>
            <Header>
                <Navs/>
            </Header>
            <Hero>
                <NewProductCont>
                    <NewProduct>New product</NewProduct>
                    <NewProductName>XX99 Mark II Headphones</NewProductName>
                    <NewProductDescrip>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</NewProductDescrip>
                    <Button text ='SEE PRODUCT'/>
                </NewProductCont>
            </Hero>
            <HomeContent>
                <Shops/>
                <ProductShowcase/>
                <ShopDescript/>
            </HomeContent>
            <Footer/>
        </Container>
    )
}

export default Home
