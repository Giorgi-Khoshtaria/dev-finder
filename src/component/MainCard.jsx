import styled from "styled-components";
import { defaultTheme } from "./defaultTheme";
import logo from "../assets/logo.png";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twiter from "../assets/icon-twitter.svg";
import building from "../assets/icon-company.svg";

function MainCard() {
  return (
    <Conatainer>
      <Avatar src={logo} alt="user-photo" />
      <div>
        <UserInfo>
          <div>
            <Name>the OctoCat</Name>
            <Login>@OctoCat</Login>
          </div>
          <Date>Joined 25 Jan 2011</Date>
        </UserInfo>
        <Bio>This profile has no bio</Bio>
        <Stats>
          <div>
            <h3>Repos</h3>
            <p>2</p>
          </div>
          <div>
            <h3>Followers</h3>
            <p>2333</p>
          </div>
          <div>
            <h3>Following</h3>
            <p>23333</p>
          </div>
        </Stats>
        <Loactions>
          <Divs>
            <img src={location} alt="location" />
            <p>Not Available</p>
          </Divs>
          <Divs>
            <img src={website} alt="" />
            <p>Not Available</p>
          </Divs>
          <Divs>
            <img src={twiter} alt="" />
            <p>Not Available</p>
          </Divs>
          <Divs>
            <img src={building} alt="" />
            <p>Not Available</p>
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
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  column-gap: 150px;
`;
const Name = styled.h2`
  font-size: 26px;
  line-height: 38.51px;
  font-weight: 700;
  color: ${defaultTheme.colors.darkblue};
`;
const Login = styled.h3`
  font-size: 16px;
  line-height: 23.7px;
  font-weight: 400;
  color: ${defaultTheme.colors.electric};
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
