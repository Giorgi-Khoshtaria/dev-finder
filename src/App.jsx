import "./App.css";
import GlobalStyles from "./component/GlobalStyling";
import Header from "./component/Header";
import styled from "styled-components";

function App() {
  return (
    <div>
      <GlobalStyles />
      <Card>
        <Header />
      </Card>
    </div>
  );
}

export default App;

const Card = styled.div`
  width: 778px;
`;
