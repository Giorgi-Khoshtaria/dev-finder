import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./defaultTheme";

const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    background-color: ${defaultTheme.colors.lightbg};
    font-family: ${defaultTheme.fonts.primary};
    display: flex;
    /* align-items: center; */
    justify-content: center;
    height: 100vh;
  
    padding: 0 24px;

}


`;
export default GlobalStyles;
