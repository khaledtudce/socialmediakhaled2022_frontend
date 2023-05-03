import { Add, CardGiftcard, Remove } from "@material-ui/icons";
import "./rightbar.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { Link } from "react-router-dom";

const Rightbar = ({ user }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, ditchpatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?._id)
  );

  useEffect(() => {
    const fetchFriend = async () => {
      const askedUserId = user?._id ? user._id : currentUser._id;
      console.log(askedUserId);
      try {
        const res = await axios.get("/users/friend/" + askedUserId);
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFriend();
  }, [currentUser, user]);

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
          <img
            crossOrigin="anonymous"
            src={PUBLIC_FOLDER + "ad.png"}
            alt=""
            className="rightbarAddImg"
          />
          <div className="rightbarOnlineFriendList">
            <span className="rightbarOnlineFriendTitle">Online Friends</span>
            {friends.map((friend) => (
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
                key={friend._id}
              >
                <div className="rightbarOnlineFriendItem">
                  <img
                    crossOrigin="anonymous"
                    src={
                      PUBLIC_FOLDER +
                      (friend?.profilePicture || "person/noAvater.jpeg")
                    }
                    alt=""
                    className="rightbarOnlineFriendImg"
                  />
                  <div className="rightbarOnlineBadge"></div>
                  <span className="rightbarOnlineName">{friend.username}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    const handleFollowButton = async (e, userId) => {
      e.preventDefault();
      try {
        if (followed) {
          await axios.put("/users/" + userId + "/unfollow", {
            userId: currentUser._id,
          });
          ditchpatch({ type: "UNFOLLOW", payload: userId });
        } else {
          await axios.put("/users/" + userId + "/follow", {
            userId: currentUser._id,
          });
          ditchpatch({ type: "FOLLOW", payload: userId });
        }
        setFollowed(!followed);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <>
        {currentUser.username !== user.username && (
          <button
            className="followButtonStyle"
            onClick={(e) => handleFollowButton(e, user._id)}
          >
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
          </button>
        )}
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
            {friends.map((friend) => (
              <Link
                to={"/profile/" + friend.username}
                style={{ textDecoration: "none" }}
                key={friend._id}
              >
                <div className="profileUserFriend">
                  <img
                    crossOrigin="*"
                    src={
                      PUBLIC_FOLDER +
                      (friend?.profilePicture || "person/noAvater.jpeg")
                    }
                    alt=""
                    className="profileUserFriendImg"
                  />
                  <span className="profileUserName">{friend.username}</span>
                </div>
              </Link>
            ))}
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
