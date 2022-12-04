import {
  AddPhotoAlternate,
  Label,
  LocationOn,
  SentimentDissatisfied,
} from "@material-ui/icons";
import "./share.css";

const Share = () => {
  return (
    <div className="postShareFeed">
      <div className="postShareStatus">
        <img
          src="/assets/person/5.jpeg"
          alt=""
          className="postShareStatusImg"
        />
        <span className="postShareStatus">Whats in your mind khaledtudce?</span>
      </div>
      <hr className="hrBar" />
      <div className="postShareButtons">
        <div className="postShareButtonItem">
          <AddPhotoAlternate />
          <span>Photo or Video</span>
        </div>
        <div className="postShareButtonItem">
          <Label />
          <span>Tag</span>
        </div>
        <div className="postShareButtonItem">
          <LocationOn />
          <span>Tag</span>
        </div>
        <div className="postShareButtonItem">
          <SentimentDissatisfied />
          <span>Tag</span>
        </div>
        <div className="postShareButtonItem">
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
