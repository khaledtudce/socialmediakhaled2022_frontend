import { CardGiftcard } from "@material-ui/icons";
import "./rightbar.css";

const Rightbar = ({ user }) => {
  const HomeRightbar = () => {
    return (
      <>
        <div className="homeRightbar">
          <div className="birthdayNotification">
            <CardGiftcard />
            <span className="birthdayText">
              <b>Pola Folster</b> and <b>3 friends</b> have birthday today
            </span>
          </div>
          <img src="/assets/ad.png" alt="" className="rightbarAddImg" />
          <div className="rightbarOnlineFriendList">
            <span className="rightbarOnlineFriendTitle">Online Friends</span>
            <div className="rightbarOnlineFriendItem">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarOnlineFriendImg"
              />
              <div className="rightbarOnlineBadge"></div>
              <span className="rightbarOnlineName">Janell Schrum</span>
            </div>
            <div className="rightbarOnlineFriendItem">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarOnlineFriendImg"
              />
              <div className="rightbarOnlineBadge"></div>
              <span className="rightbarOnlineName">Khaled Reza</span>
            </div>
            <div className="rightbarOnlineFriendItem">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarOnlineFriendImg"
              />
              <div className="rightbarOnlineBadge"></div>
              <span className="rightbarOnlineName">Taj Hashmi</span>
            </div>
            <div className="rightbarOnlineFriendItem">
              <img
                src="/assets/person/2.jpeg"
                alt=""
                className="rightbarOnlineFriendImg"
              />
              <div className="rightbarOnlineBadge"></div>
              <span className="rightbarOnlineName">Kanak Sarwar</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="profileRightbarContainer">
          <div className="profileUserHeadline">User Information</div>
          <div className="profileUserInformation">
            <div className="profileUserItem">
              <b>City:</b> Berlin
            </div>
            <div className="profileUserItem">
              <b>From:</b> Bangladesh
            </div>
            <div className="profileUserItem">
              <b>Relationship:</b> Married
            </div>
          </div>
          <div className="profileUserHeadline">User Friends</div>
          <div className="profileUserFriends">
            <div className="profileUserFriend">
              <img
                src="/assets/person/7.jpeg"
                alt=""
                className="profileUserFriendImg"
              />
              <span className="profileUserName">kaynatgold</span>
            </div>
            <div className="profileUserFriend">
              <img
                src="/assets/person/5.jpeg"
                alt=""
                className="profileUserFriendImg"
              />
              <span className="profileUserName">kaynatgold</span>
            </div>
            <div className="profileUserFriend">
              <img
                src="/assets/person/1.jpeg"
                alt=""
                className="profileUserFriendImg"
              />
              <span className="profileUserName">kaynatgold</span>
            </div>
            <div className="profileUserFriend">
              <img
                src="/assets/person/3.jpeg"
                alt=""
                className="profileUserFriendImg"
              />
              <span className="profileUserName">kaynatgold</span>
            </div>
            <div className="profileUserFriend">
              <img
                src="/assets/person/4.jpeg"
                alt=""
                className="profileUserFriendImg"
              />
              <span className="profileUserName">kaynatgold</span>
            </div>
            <div className="profileUserFriend">
              <img
                src="/assets/person/8.jpeg"
                alt=""
                className="profileUserFriendImg"
              />
              <span className="profileUserName">kaynatgold</span>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbarContainer">
      {user ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  );
};

export default Rightbar;
