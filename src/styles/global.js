import { createGlobalStyle } from 'styled-components';
import background from '../assets/images/header.svg';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html, body, #root {
    height: 100%;
    max-width: 1020px;
    margin: 0 auto;
    padding: 0 20px 50px;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #eceff5;
    background: #191920 url(${background}) no-repeat center top;
    font-family: 'Roboto', sans-serif;
  }

  body, input, button {
    font-size: 14px;
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
