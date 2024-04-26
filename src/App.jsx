// App.js
// import GlobalStyles from "./component/GlobalStyling";
import Header from "./component/Header";
import styled, { ThemeProvider } from "styled-components";
import Search from "./component/Search";
import MainCard from "./component/MainCard";
import { UserDataProvider } from "./context/userContext";
import { theme } from "./component/theme";
// import { useUserData } from "./context/userContext";
import GlobalStylesWrapper from "./component/GlobalStyling";

function App() {
  // const { light } = useUserData(); // Access light state from context

  return (
    <div>
      <ThemeProvider theme={theme}>
        <UserDataProvider>
          <GlobalStylesWrapper />

          <Card>
            <Header />
            <Search />
            <MainCard />
          </Card>
        </UserDataProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;

const Card = styled.div`
  width: 778px;
  @media (max-width: 850px) {
    width: 575px;
  }
  @media (max-width: 650px) {
    width: 450px;
  }
  @media (max-width: 530px) {
    width: 360px;
    padding: 0 20px;
  }
`;
