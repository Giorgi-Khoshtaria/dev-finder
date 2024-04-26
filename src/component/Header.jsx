import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import styled from "styled-components";
import { useState } from "react";
import { useUserData } from "../context/userContext";

function Header() {
  const { setLight, light } = useUserData();
  const [isLightMode, setIsLightMode] = useState(true);

  const toggleDarkMode = () => {
    setIsLightMode(!isLightMode);
    setLight(!light);
  };

  return (
    <Container light={light}>
      <h1>devfinder</h1>
      <ModeDiv onClick={toggleDarkMode}>
        {isLightMode ? (
          <DarkMode light={light}>
            <h3>DARK</h3>
            <img src={moon} alt="moon" />
          </DarkMode>
        ) : (
          <LightMode light={light}>
            <h3>LIGHT</h3>
            <img src={sun} alt="sun" />
          </LightMode>
        )}
      </ModeDiv>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 100px;
  padding: 0px 24px 36px;
  /* width: 778px; */
  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 38.51px;
    color: ${(props) => (props.light ? props.theme.lightMode.title : props.theme.darkMode.title)};
  }
`;

const ModeDiv = styled.div`
  position: relative;
`;

const DarkMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  h3 {
    font-weight: 700;
    font-size: 13px;
    line-height: 19.25px;
    letter-spacing: 2.5px;
    color: ${(props) =>
      props.theme.lightMode ? props.theme.lightMode.darkButton : props.theme.darkMode.darkButton};
    margin-right: 10px;
  }
`;

const LightMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  h3 {
    font-weight: 700;
    font-size: 13px;
    line-height: 19.25px;
    letter-spacing: 2.5px;
    color: ${(props) => (props.light ? props.theme.lightMode.title : props.theme.darkMode.title)};
    margin-right: 10px;
  }
`;
