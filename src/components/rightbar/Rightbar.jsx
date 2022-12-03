import { CardGiftcard } from "@material-ui/icons";
import "./rightbar.css";

const Rightbar = () => {
  return (
    <div className="rightbarContainer">
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
  );
};

export default Rightbar;
