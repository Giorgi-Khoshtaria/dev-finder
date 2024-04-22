import styled from "styled-components";
import { defaultTheme } from "./defaultTheme";
import loop from "../assets/icon-search.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import { useUserData } from "../contect/userContext";

function Search() {
  const [username, setUsername] = useState("octocat");
  const { setUserInfo } = useUserData();
  const [userExists, setUserExists] = useState(true); // State to track user existence

  const handleInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUsername(username);
      setUserInfo(response.data);
      setUserExists(true); // Set userExists to true if user is found
    } catch (error) {
      console.error("Error fetching data:", error);
      setUserExists(false); // Set userExists to false if user is not found
    }
  };

  useEffect(() => {
    handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Conatiner>
      <SearchDiv>
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
    </Conatiner>
  );
}

export default Search;

const Conatiner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px 10px 32px;
  width: 100%;
  background-color: ${defaultTheme.colors.white};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;

  button {
    padding: 12px 16px;
    text-transform: capitalize;
    font-weight: 700;
    font-size: 16px;
    line-height: 23.7px;
    background-color: ${defaultTheme.colors.electric};
    color: ${defaultTheme.colors.white};
    border: none;
    cursor: pointer;
    border-radius: 10px;
    margin-left: auto;
    &:hover {
      opacity: 0.5;
    }
  }
`;

const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${defaultTheme.colors.white};
  input {
    font-size: 18px;
    line-height: 25px;
    width: 254px;
    margin-left: 8px;
    border: 0;
    color: ${defaultTheme.colors.semiBlack};
    background-color: ${defaultTheme.colors.white};
    &:focus {
      outline: none;
    }

    &::placeholder {
      color: ${defaultTheme.colors.darkSky};
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
