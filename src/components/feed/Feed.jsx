import { Favorite, ThumbUpAlt } from "@material-ui/icons";
import "./feed.css";

const Feed = () => {
  return (
    <div className="feedContainer">
      <div className="feedWrapper">
        <div className="postItem">
          <div className="postItemUserInfo">
            <img src="/assets/person/4.jpeg" alt="" className="postImg" />
            <span className="postUserId">genesisreza</span>
            <span className="postTimeAgo">1 hour ago</span>
          </div>
          <div className="postStatusText">They are busy at studying</div>
          <img src="/assets/post/6.jpeg" alt="" className="postItemImg" />
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
            <img src="/assets/person/4.jpeg" alt="" className="postImg" />
            <span className="postUserId">genesisreza</span>
            <span className="postTimeAgo">1 hour ago</span>
          </div>
          <div className="postStatusText">They are busy at studying</div>
          <img src="/assets/post/6.jpeg" alt="" className="postItemImg" />
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
