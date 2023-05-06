import { Favorite, ThumbUpAlt } from "@material-ui/icons";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useState } from "react";
import { format } from "timeago.js";
import "./post.css";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const REACT_APP_PROXY = process.env.REACT_APP_PROXY;
  const [userWhoPosted, setUserWhoPosted] = useState({});
  const [likeAmount, SetLikeAmount] = useState(post.likes.length);
  const [isLiked, SetIsLiked] = useState(false);
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    SetIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser, post.likes]);

  useEffect(() => {
    try {
      const fetchUser = async () => {
        const res = await axios.get(REACT_APP_PROXY + "/users/" + post.userId);
        setUserWhoPosted(res.data);
      };
      fetchUser();
    } catch (error) {
      console.log("Post: Could not retrieve user information");
    }
  }, [post.userId, REACT_APP_PROXY]);

  const likeHandle = async () => {
    try {
      await axios.put(REACT_APP_PROXY + "/posts/" + post._id + "/like", {
        userId: currentUser._id,
      });
      SetLikeAmount(isLiked ? likeAmount - 1 : likeAmount + 1);
      SetIsLiked(!isLiked);
    } catch (error) {
      console.log("Could not update likes");
    }
  };

  return (
    <div className="postContainer">
      <div className="postItem">
        <div className="postItemUserInfo">
          <Link to={"/profile/" + userWhoPosted.username}>
            <img
              src={
                PUBLIC_FOLDER +
                (userWhoPosted.profilePicture
                  ? userWhoPosted.profilePicture
                  : "person/noAvater.jpeg")
              }
              alt=""
              className="postImg"
            />
          </Link>
          <span className="postUserId">{userWhoPosted?.username}</span>
          <span className="postTimeAgo">{format(post.createdAt)}</span>
        </div>
        <div className="postStatusText">{post?.desc}</div>
        <img src={PUBLIC_FOLDER + post.img} alt="" className="postItemImg" />
        <div className="postLikeComment">
          <div className="postLike">
            <Favorite style={{ color: "red" }} />
            <ThumbUpAlt style={{ color: "red" }} onClick={() => likeHandle()} />
            <span className="postNumberLike">{likeAmount} people liked it</span>
          </div>
          <div className="postComment">comments</div>
        </div>
      </div>
    </div>
  );
};

export default Post;
