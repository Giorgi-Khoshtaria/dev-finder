import styled from "styled-components";
import loop from "../assets/icon-search.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserData } from "../context/userContext";

function Search() {
  const [username, setUsername] = useState("octocat");
  const { setUserInfo, light } = useUserData(); // Include lightMode from context
  const [userExists, setUserExists] = useState(true);

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUsername(username);
      setUserInfo(response.data);
      setUserExists(true);
    } catch (error) {
      console.log("Error fetching data:", error);
      setUserExists(false);
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container lightMode={light}>
      <SearchDiv lightMode={light}>
        <img src={loop} alt="loop" />
        <input
          type="text"
          name="user"
          value={username}
          onChange={handleInputChange}
          placeholder="Search GitHub username..."
        />
      </SearchDiv>
      <SearchContent>
        {!userExists && <ErrorMessage>No Result</ErrorMessage>}
        <button onClick={handleSearch}>Search</button>
      </SearchContent>
    </Container>
  );
}

export default Search;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 32px;
  width: 100%;
  background-color: ${(props) =>
    props.lightMode ? props.theme.lightMode.searchContainer : props.theme.darkMode.searchContainer};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;

  button {
    padding: 18px 20px;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 18px;
    line-height: 23.7px;
    background-color: ${(props) =>
      props.lightMode ? props.theme.lightMode.button : props.theme.darkMode.button};
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.buttonColor : props.theme.darkMode.buttonColor};
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-left: auto;
    &:hover {
      opacity: 0.5;
    }
    @media (max-width: 530px) {
      font-weight: 700;
      font-size: 14px;
      line-height: 20.73px;
      padding: 12px 16px;
    }
  }
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.lightMode ? props.theme.lightMode.searchDiv : props.theme.darkMode.searchDiv};
  input {
    font-size: 18px;
    line-height: 25px;
    width: 254px;
    margin-left: 8px;
    border: 0;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.inputColor : props.theme.darkMode.inputColor};
    background-color: ${(props) =>
      props.lightMode ? props.theme.lightMode.inputBg : props.theme.darkMode.inputBg};

    @media (max-width: 530px) {
      width: 130px;
      font-weight: 400;
      font-size: 13px;
      line-height: 25px;
    }
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${(props) =>
        props.lightMode
          ? props.theme.lightMode.inputPlaceholder
          : props.theme.darkMode.inputPlaceholder};
    }
  }
`;

const SearchContent = styled.div`
  display: flex;
  align-items: center;
`;
const ErrorMessage = styled.p`
  font-size: 16px;
  line-height: 25px;
  color: red;
  margin-right: 15px;
`;
