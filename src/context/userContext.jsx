import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

// Create a new context for userData
const UserDataContext = createContext();

// Create a custom hook to consume the userData context
// eslint-disable-next-line react-refresh/only-export-components
export function useUserData() {
  return useContext(UserDataContext);
}

// Create a provider component for userData context
export function UserDataProvider({ children }) {
  const [userInfo, setUserInfo] = useState({
    avatar_url: "",
    name: "",
    login: "",
    created_at: "",
    followers: "",
    following: "",
    location: "",
    bio: "",
    public_repos: "",
    blog: "",
    twitter_username: "",
    company: "",
  });
  // console.log(userInfo);
  const [LightMode, setLightMode] = useState(true);

  return (
    <UserDataContext.Provider value={{ userInfo, setUserInfo, LightMode, setLightMode }}>
      {children}
    </UserDataContext.Provider>
  );
}

// Adding prop types validation
UserDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
