import styled from "styled-components";
import { defaultTheme } from "./defaultTheme";
// import logo from "../assets/logo.png";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twiter from "../assets/icon-twitter.svg";
import building from "../assets/icon-company.svg";
import { useUserData } from "./userContext";
// import { useState, useEffect } from "react";

function MainCard() {
  const { userInfo } = useUserData();
  // const [data, setData] = useState(null);

  // useEffect(() => {
  //   setData(userInfo);
  // }, [userInfo]);

  // Inside the Date styled component:

  console.log(userInfo, "Main Card");
  // console.log(userInfo, "Main Card");
  return (
    <Conatainer>
      <Avatar src={userInfo.avatar_url} alt="user-photo" />
      <div>
        <UserInfo>
          <div>
            <Name>{userInfo.name}</Name>
            <Login href={`https://github.com/${userInfo.login}`} target="_blank">
              @{userInfo.login}
            </Login>
          </div>
          <Date>{"Joined " + userInfo.created_at}</Date>
        </UserInfo>
        <Bio>{userInfo.bio ? userInfo.bio : "This profile has no bio"}</Bio>
        <Stats>
          <div>
            <h3>Repos</h3>
            <p>{userInfo.public_repos}</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p>{userInfo.followers}</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>{userInfo.following}</p>
          </div>
        </Stats>
        <Loactions>
          <Divs>
            <img src={location} alt="location" />
            <p>{userInfo.location ? userInfo.location : "Not Available"}</p>
          </Divs>
          <Divs>
            <img src={website} alt="" />
            <p>{userInfo.blog ? userInfo.blog : "Not Available"}</p>
          </Divs>
          <Divs>
            <img src={twiter} alt="" />
            <p>{userInfo.twitter_username ? userInfo.twitter_username : "Not Available"}</p>
          </Divs>
          <Divs>
            <img src={building} alt="" />
            <p>{userInfo.company ? userInfo.company : "Not Available"}</p>
          </Divs>
        </Loactions>
      </div>
    </Conatainer>
  );
}

export default MainCard;

const Conatainer = styled.div`
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding: 48px;
  background-color: ${defaultTheme.colors.white};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  margin-top: 25px;
`;
const Avatar = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;
  margin-right: 15px;
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  column-gap: 100px;
`;
const Name = styled.h2`
  font-size: 26px;
  line-height: 38.51px;
  font-weight: 700;
  color: ${defaultTheme.colors.darkblue};
`;
const Login = styled.a`
  font-size: 16px;
  line-height: 23.7px;
  font-weight: 400;
  color: ${defaultTheme.colors.electric};
  text-decoration: none;
`;
const Date = styled.p`
  font-size: 15px;
  line-height: 22.22px;
  font-weight: 400;
  color: ${defaultTheme.colors.gray};
`;

const Bio = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: ${defaultTheme.colors.darkSky};
  margin-top: 33px;
  margin-bottom: 25px;
`;
const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 80px 15px 30px;
  border-radius: 10px;
  background-color: ${defaultTheme.colors.lightbg};
  h3 {
    font-size: 13px;
    line-height: 19.25px;
    font-weight: 400;
    color: ${defaultTheme.colors.gray};
  }
  p {
    font-size: 22px;
    line-height: 32.58px;
    font-weight: 700;
    margin-top: 5px;
    color: ${defaultTheme.colors.darkblue};
  }
`;

const Loactions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;
`;
const Divs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-bottom: 20px;
`;
