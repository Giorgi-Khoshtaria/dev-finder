// GlobalStyling.js
import { createGlobalStyle } from "styled-components";
import { useUserData } from "../context/userContext"; // Import the useUserData hook

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) =>
      props.light ? props.theme.lightMode.bg : props.theme.darkMode.bg};
    font-family: ${(props) => props.theme.fonts.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 24px;
  }
`;

const GlobalStylesWrapper = () => {
  const { light } = useUserData(); // Access the light state from context

  return <GlobalStyles light={light} />; // Pass the light state as a prop to GlobalStyles
};

export default GlobalStylesWrapper;
