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
      <TopPart>
        <Avatar src={userInfo.avatar_url} alt="user-photo" />
        <UserInfo>
          <div>
            <Name lightMode={light}>{userInfo.name}</Name>
            <Login href={`https://github.com/${userInfo.login}`} target="_blank" lightMode={light}>
              @{userInfo.login}
            </Login>
          </div>
          <Date lightMode={light}>{"Joined " + formattedDate}</Date>
        </UserInfo>
      </TopPart>

      <BottomPart>
        <div>
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
            <Divs lightMode={light}>
              <img src={website} alt="website" />
              <a href={userInfo.blog} target="_blank">
                {userInfo.blog ? userInfo.blog : <span>Not Available</span>}
              </a>
            </Divs>
            <Divs lightMode={light}>
              <img src={twitter} alt="twitter" />
              <p>
                {userInfo.twitter_username ? userInfo.twitter_username : <span>Not Available</span>}
              </p>
            </Divs>
            <Divs lightMode={light}>
              <img src={building} alt="company" />
              <p>{userInfo.company ? userInfo.company : <span>Not Available</span>}</p>
            </Divs>
          </Locations>
        </div>
      </BottomPart>
    </Container>
  );
}

export default MainCard;

const Container = styled.div`
  display: flex;
  align-items: top;
  justify-content: left;
  flex-direction: column;
  padding: 48px 48px 20px 48px;
  background-color: ${(props) =>
    props.lightMode
      ? props.theme.lightMode.maincardContainer
      : props.theme.darkMode.maincardContainer};
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.198567);
  border-radius: 15px;
  margin-top: 25px;
  @media (max-width: 530px) {
    padding: 32px 24px 48px 24px;
  }
`;
const TopPart = styled.div`
  display: flex;
  align-items: top;
  justify-content: left;
`;
const BottomPart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -50px;
  margin-left: 80px;
  @media (max-width: 850px) {
    margin: 0;
  }
`;

const Avatar = styled.img`
  width: 117px;
  height: 117px;
  border-radius: 50%;
  margin-right: 30px;
  @media (max-width: 530px) {
    width: 70px;
    height: 70px;
  }
`;

const UserInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  column-gap: 100px;
  @media (max-width: 850px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Name = styled.h2`
  font-size: 26px;
  line-height: 38.51px;
  font-weight: 700;
  color: ${(props) => (props.lightMode ? props.theme.lightMode.name : props.theme.darkMode.name)};
  @media (max-width: 530px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 23.7px;
    text-transform: capitalize;
  }
`;

const Login = styled.a`
  font-size: 16px;
  line-height: 23.7px;
  font-weight: 400;
  color: ${(props) => (props.lightMode ? props.theme.lightMode.login : props.theme.darkMode.login)};
  text-decoration: none;
  @media (max-width: 530px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 19.25px;
  }
`;

const Date = styled.p`
  font-size: 15px;
  line-height: 22.22px;
  font-weight: 400;
  color: ${(props) => (props.lightMode ? props.theme.lightMode.date : props.theme.darkMode.date)};
  @media (max-width: 530px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 19.25px;
    margin-top: 6px;
  }
`;

const Bio = styled.p`
  font-size: 15px;
  line-height: 25px;
  font-weight: 400;
  color: ${(props) => (props.lightMode ? props.theme.lightMode.bio : props.theme.darkMode.bio)};
  margin-top: 50px;
  margin-bottom: 25px;
  @media (max-width: 530px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 25px;
  }
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
  @media (max-width: 850px) {
    width: 490px;
  }
  @media (max-width: 650px) {
    width: 350px;
  }
  @media (max-width: 530px) {
    width: 280px;
    column-gap: 40px;
  }
  h3 {
    font-size: 14px;
    line-height: 19.25px;
    font-weight: 500;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.statsTitle : props.theme.darkMode.statsTitle};
    @media (max-width: 530px) {
      font-weight: 400;
      font-size: 11px;
      line-height: 16.29px;
    }
  }
  p {
    font-size: 22px;
    line-height: 32.58px;
    font-weight: 700;
    margin-top: 5px;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.statsText : props.theme.darkMode.statsText};
    cursor: pointer;
    @media (max-width: 530px) {
      font-weight: 700;
      font-size: 16px;
      line-height: 23.7px;
      margin-top: 8px;
    }
  }
`;

const Locations = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 30px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
  p {
    font-size: 16px;
    line-height: 20.58px;
    font-weight: 500;
    margin-top: 5px;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.locationsP : props.theme.darkMode.locationsP};
    @media (max-width: 530px) {
      font-weight: 400;
      font-size: 13px;
      line-height: 19.25px;
    }
  }
  span {
    font-size: 16px;
    line-height: 20.58px;
    font-weight: 500;
    margin-top: 5px;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.notavaliable : props.theme.darkMode.notavaliable};
    @media (max-width: 530px) {
      font-weight: 400;
      font-size: 13px;
      line-height: 19.25px;
    }
  }
`;

const Divs = styled.div`
  display: flex;
  align-items: center;
  column-gap: 15px;
  margin-bottom: 20px;
  cursor: pointer;
  a {
    text-decoration: none;
    font-size: 16px;
    line-height: 20.58px;
    font-weight: 500;
    margin-top: 5px;
    color: ${(props) =>
      props.lightMode ? props.theme.lightMode.locationsP : props.theme.darkMode.locationsP};
    @media (max-width: 530px) {
      font-weight: 400;
      font-size: 13px;
      line-height: 19.25px;
    }
  }
`;
