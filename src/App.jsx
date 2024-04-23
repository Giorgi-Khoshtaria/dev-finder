import "./App.css";
import GlobalStyles from "./component/GlobalStyling";
import Header from "./component/Header";
import styled, { ThemeProvider } from "styled-components";
import Search from "./component/Search";
import MainCard from "./component/MainCard";
import { UserDataProvider } from "./context/userContext";
import { theme } from "./component/theme";

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

        <UserDataProvider>
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
`;
