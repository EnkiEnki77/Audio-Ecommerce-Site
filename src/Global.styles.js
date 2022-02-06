import {createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle` 

    *{
        box-sizing: border-box;
        font-family: 'Manrope', sans-serif;
    }

    body, #root, .App, html{
        width: 100%;
        padding: 0;
        margin: 0;
        min-height: 100vh   ;
    }
`

