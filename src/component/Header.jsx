// import React from "react";
import moon from "../assets/icon-moon.svg";
import sun from "../assets/icon-sun.svg";
import styled from "styled-components";
import { theme } from "./theme";
function Header() {
  return (
    <Conatiner>
      <h1>devfinder</h1>
      <ModeDiv>
        <DarkMode>
          <h3>DARK</h3>
          <img src={moon} alt="moon" />
        </DarkMode>
        <LightMode>
          <h3>LIGHT</h3>
          <img src={sun} alt="moon" />
        </LightMode>
      </ModeDiv>
    </Conatiner>
  );
}

export default Header;

const Conatiner = styled.div`
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
    color: ${(props) => props.theme.lightMode.title};
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
    color: ${(props) => props.theme.lightMode.darkButton};
    margin-right: 10px;
  }
`;
const LightMode = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  display: none;
  h3 {
    font-weight: 700;
    font-size: 13px;
    line-height: 19.25px;
    letter-spacing: 2.5px;
    color: ${theme.colors.light};
    margin-right: 10px;
  }
`;
