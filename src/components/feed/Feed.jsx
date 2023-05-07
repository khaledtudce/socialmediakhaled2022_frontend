import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

const Feed = ({ username }) => {
  const REACT_APP_PROXY = process.env.REACT_APP_PROXY;
  const { user } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = username
        ? await axios.get(REACT_APP_PROXY + "/posts/profile/" + username)
        : await axios.get(REACT_APP_PROXY + "/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPost();
  }, [username, user, REACT_APP_PROXY]);

  return (
    <div className="feedContainer">
      <div className="sharePost">
        {(!username || username === user.username) && <Share />}
      </div>
      <div className="feedWrapper">
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
