import { Favorite, ThumbUpAlt } from "@material-ui/icons";
import Share from "../share/Share";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="sharePost">
        <Share />
      </div>
      <div className="feedWrapper">
        <div className="postItem">
          <div className="postItemUserInfo">
            <img src="/assets/person/5.jpeg" alt="" className="postImg" />
            <span className="postUserId">genesisreza</span>
            <span className="postTimeAgo">1 hour ago</span>
          </div>
          <div className="postStatusText">
            They are busy at studying (Changed here)
          </div>
          <img src="/assets/post/4.jpeg" alt="" className="postItemImg" />
          <div className="postLikeComment">
            <div className="postLike">
              <Favorite style={{ color: "red" }} />
              <ThumbUpAlt style={{ color: "red" }} />
              <span className="postNumberLike">0 people liked it</span>
            </div>
            <div className="postComment">comments</div>
          </div>
        </div>
        <div className="postItem">
          <div className="postItemUserInfo">
            <img src="/assets/person/5.jpeg" alt="" className="postImg" />
            <span className="postUserId">genesisreza</span>
            <span className="postTimeAgo">1 hour ago</span>
          </div>
          <div className="postStatusText">Lets eat together</div>
          <img src="/assets/post/5.jpeg" alt="" className="postItemImg" />
          <div className="postLikeComment">
            <div className="postLike">
              <Favorite style={{ color: "red" }} />
              <ThumbUpAlt style={{ color: "red" }} />
              <span className="postNumberLike">0 people liked it</span>
            </div>
            <div className="postComment">comments</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
