import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const Profile = () => {
  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Leftbar />
        <div className="feedAndRightbarContainer">
          <div className="profileTop">
            <img src="/assets/person/2.jpeg" alt="" className="coverPicture" />
            <img
              src="/assets/person/2.jpeg"
              alt=""
              className="profilePicture"
            />
            <div className="profileUserName">
              <h4>khaledtudce</h4>
              <span>Hey it is khaled reza</span>
            </div>
          </div>

          <div className="feedAndRightbar">
            <Feed username={"username"} />
            <Rightbar user={"user"} />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Profile;
