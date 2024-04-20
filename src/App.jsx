import "./App.css";
import GlobalStyles from "./component/GlobalStyling";
import Header from "./component/Header";
import styled from "styled-components";
import Search from "./component/Search";
import MainCard from "./component/MainCard";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Card>
        <Header />
        <Search />
        <MainCard />
      </Card>
    </div>
  );
}

export default App;

const Card = styled.div`
  width: 778px;
`;
