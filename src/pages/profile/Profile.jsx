import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Topbar from "../../components/topbar/Topbar";
import "./profile.css";

const Profile = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const REACT_APP_PROXY = process.env.REACT_APP_PROXY;
  const location = useLocation();
  const username = location.pathname.split("/")[2];
  const [user, setUser] = useState({});

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const res = await axios.get(
          REACT_APP_PROXY + "/users?username=" + username
        );
        setUser(res.data);
      };
      fetchUser();
    } catch (error) {
      console.log("Could not retrieve user");
    }
  }, [username, REACT_APP_PROXY]);

  return (
    <>
      <Topbar />
      <div className="profileContainer">
        <Leftbar />
        <div className="feedAndRightbarContainer">
          <div className="profileTop">
            <img
              src={
                PUBLIC_FOLDER + (user.coverPicture || "person/noAvater.jpeg")
              }
              alt=""
              className="coverPicture"
            />
            <img
              src={
                PUBLIC_FOLDER + (user.profilePicture || "person/noAvater.jpeg")
              }
              alt=""
              className="profilePicture"
            />
            <div className="profileUserName">
              <h4>{user.username}</h4>
              <span>{user.desc}</span>
            </div>
          </div>

          <div className="feedAndRightbar">
            <Feed username={username} />
            <Rightbar user={user} />
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default Profile;
