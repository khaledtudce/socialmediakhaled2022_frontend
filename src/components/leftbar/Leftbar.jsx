import {
  RssFeed,
  PlayCircleOutline,
  Group,
  Bookmarks,
  Help,
  Work,
  EventAvailable,
  School,
} from "@material-ui/icons";
import "./leftbar.css";

const Leftbar = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="leftContainer">
      <div className="leftWrapper">
        <div className="leftbarEventList">
          <div className="leftbarEventItem">
            <RssFeed />
            <span className="leftbarEventItemText">Feed</span>
          </div>
          <div className="leftbarEventItem">
            <PlayCircleOutline />
            <span className="leftbarEventItemText">Videos</span>
          </div>
          <div className="leftbarEventItem">
            <Group />
            <span className="leftbarEventItemText">Groups</span>
          </div>
          <div className="leftbarEventItem">
            <Bookmarks />
            <span className="leftbarEventItemText">Bookmarks</span>
          </div>
          <div className="leftbarEventItem">
            <Help />
            <span className="leftbarEventItemText">Questions</span>
          </div>
          <div className="leftbarEventItem">
            <Work />
            <span className="leftbarEventItemText">Jobs</span>
          </div>
          <div className="leftbarEventItem">
            <EventAvailable />
            <span className="leftbarEventItemText">Events</span>
          </div>
          <div className="leftbarEventItem">
            <School />
            <span className="leftbarEventItemText">Courses</span>
          </div>
          <button className="showMoreButton">Show More</button>
          <hr className="leftSidebarHr" />
        </div>
        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/1.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Khaled Reza</span>
        </div>
        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/2.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Ahnab Reza</span>
        </div>

        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/3.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Kaynat Reza</span>
        </div>
        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/4.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Sawlat Reza</span>
        </div>
        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/5.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Mamun Reza</span>
        </div>
        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/6.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Amma Reza</span>
        </div>
        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/7.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Sabrina Reza</span>
        </div>
        <div className="leftbarFriendList">
          <img
            crossOrigin="anonymous"
            className="leftabarFriendImg"
            src={PUBLIC_FOLDER + "person/8.jpeg"}
            alt=""
          />
          <span className="leftbarFriendItemText">Shirin Reza</span>
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
