import { createGlobalStyle } from "styled-components";
import bahia_flag from "../images/bahia-flag.svg.png";

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

:root{
    --color-darkBlue: #191970;
    --color-darkRed: #B22222;

    --h1-font-size: 18px;
    --h2-font-size: 16px;
    --h3-font-size: 14px;
    --h4-font-size: 12px;

    --p-font-size: 12px;
    --span-font-size: 10px;
    --button-font-size: 14px;
}

body {
    overflow: auto;
    position: relative;
    font-family: 'Nunito', sans-serif;    
}
body::before{
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    z-index: -1;
    display: block;
    background-image: url(${bahia_flag});
    background-size:cover;
    width: 100%;
    height: 100%;
    filter:grayscale(80%) blur(5px);
}

h1, h2, h3, h4, h5, h6 {
font-family: 'Dancing Script', cursive;
}

a{
    text-decoration: none;
}
li{
    list-style-type: none;
}

button{
    cursor: pointer;
}

input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px var(--color-darkBlue) inset;
    box-shadow: 0 0 0 30px var(--color-darkBlue) inset;
}

::-webkit-scrollbar{
  background-color: var(--color-darkBlue);
  width: 8px;
  height: 8px;
  border-radius: 50px;
  border: 1px solid var(--color-darkBlue);  
}

::-webkit-scrollbar-thumb{
  background-color: var(--color-darkBlue);
  border-radius: 50px;
}
`;
