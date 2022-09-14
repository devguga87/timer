import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html{
    font-size: 62.5%;
  }

  body {
    background-color:#333;
    color:#fff;
  }

  body, input, text-area, button{
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size:1.6rem;
  }
`