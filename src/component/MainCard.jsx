import styled from "styled-components";
import { useUserData } from "../context/userContext";
import moment from "moment";
import location from "../assets/icon-location.svg";
import website from "../assets/icon-website.svg";
import twitter from "../assets/icon-twitter.svg";
import building from "../assets/icon-company.svg";

function MainCard() {
  const { userInfo, light } = useUserData();
  const formattedDate = moment(userInfo.created_at).format("MMM D, YYYY");

  return (
    <Container lightMode={light}>
      <Avatar src={userInfo.avatar_url} alt="user-photo" />
      <div>
        <UserInfo>
          <div>
            <Name lightMode={light}>{userInfo.name}</Name>
            <Login href={`https://github.com/${userInfo.login}`} target="_blank" lightMode={light}>
              @{userInfo.login}
            </Login>
          </div>
          <Date lightMode={light}>{"Joined " + formattedDate}</Date>
        </UserInfo>
        <Bio lightMode={light}>{userInfo.bio ? userInfo.bio : "This profile has no bio"}</Bio>
        <Stats lightMode={light}>
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
        <Locations lightMode={light}>
          <Divs lightMode={light}>
            <img src={location} alt="location" />
            <p>{userInfo.location ? userInfo.location : <span>Not Available</span>}</p>
          </Divs>
          <Divs>
            <img src={website} alt="website" />
            <p>{userInfo.blog ? userInfo.blog : <span>Not Available</span>}</p>
          </Divs>
          <Divs>
            <img src={twitter} alt="twitter" />
            <p>
              {userInfo.twitter_username ? userInfo.twitter_username : <span>Not Available</span>}
            </p>
          </Divs>
          <Divs>
            <img src={building} alt="company" />
            <p>{userInfo.company ? userInfo.company : <span>Not Available</span>}</p>
          </Divs>
        </Locations>
      </div>
    </Container>
  );
}

export default MainCard;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: left;
  padding: 48px;
  background-color: ${(props) =>
    props.lightMode
      ? props.theme.lightMode.maincardContainer
      : props.theme.darkMode.maincardContainer};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  margin-top: 25px;
`;

const Avatar = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;
  margin-right: 30px;
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
  color: ${(props) => (props.lightMode ? props.theme.lightMode.name : props.theme.darkMode.name)};
`;

const Login = styled.a`
  font-size: 16px;
  line-height: 23.7px;
  font-weight: 400;
  color: ${(props) => (props.lightMode ? props.theme.lightMode.login : props.theme.darkMode.login)};
  text-decoration: none;
`;

const Date = styled.p`
  font-size: 15px;
  line-height: 22.22px;
  font-weight: 400;
  color: ${(props) => (props.lightMode ? props.theme.lightMode.date : props.theme.darkMode.date)};
`;

const Bio = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: ${(props) => (props.lightMode ? props.theme.lightMode.bio : props.theme.darkMode.bio)};
  margin-top: 33px;
  margin-bottom: 25px;
`;

const Stats = styled.div`
  width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 80px 15px 30px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.lightMode ? props.theme.lightMode.statsBackground : props.theme.darkMode.statsBackground};
  h3 {
    font-size: 13px;
    line-height: 19.25px;
    font-weight: 500;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.statsTitle : props.theme.darkMode.statsTitle};
  }
  p {
    font-size: 22px;
    line-height: 32.58px;
    font-weight: 700;
    margin-top: 5px;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.statsText : props.theme.darkMode.statsText};
  }
`;

const Locations = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;

  p {
    font-size: 16px;
    line-height: 20.58px;
    font-weight: 500;
    margin-top: 5px;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.locationsP : props.theme.darkMode.locationsP};
  }
  span {
    font-size: 16px;
    line-height: 20.58px;
    font-weight: 500;
    margin-top: 5px;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.notavaliable : props.theme.darkMode.notavaliable};
  }
`;

const Divs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-bottom: 20px;
`;
