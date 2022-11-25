import { Link } from "react-router-dom";
import "./topbar.css";
import { PersonOutline, Message, NotificationsNone } from "@material-ui/icons";

const Topbar = () => {
  return (
    <div className="container">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="leftLogo">Kaynat Media</div>
        </Link>
      </div>
      <div className="middle">
        <input
          className="inputSearch"
          placeholder="Search for friend, post or video"
        />
      </div>
      <div className="right">
        <div className="pageLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="pageLink">Homepage</span>
          </Link>
          <Link to="/timeline" style={{ textDecoration: "none" }}>
            <span className="pageLink">Timeline</span>
          </Link>
        </div>
        <div className="iconLinks">
          <div className="iconLink">
            <PersonOutline />
            <span className="iconLinkBadge">1</span>
          </div>
          <div className="iconLink">
            <Message />
            <span className="iconLinkBadge">2</span>
          </div>
          <div className="iconLink">
            <NotificationsNone />
            <span className="iconLinkBadge">5</span>
          </div>
        </div>
        <div className="profileLink">
          <img className="profileLinkImg" src="/assets/person/2.jpeg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
