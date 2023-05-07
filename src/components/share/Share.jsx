import {
  Cancel,
  Label,
  LocationOn,
  PermMedia,
  SentimentDissatisfied,
} from "@material-ui/icons";
import "./share.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Share = () => {
  const { user } = useContext(AuthContext);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const REACT_APP_PROXY = process.env.REACT_APP_PROXY;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const handleMediaSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      desc: desc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      file.fieldname = fileName;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;

      try {
        await axios.post(REACT_APP_PROXY + "/upload", data);
      } catch (error) {
        console.log(error);
      }
    }

    try {
      await axios.post(REACT_APP_PROXY + "/posts/create", newPost);
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postShareFeed">
      <div className="postShareStatus">
        <img
          src={PUBLIC_FOLDER + "person/2.jpeg"}
          alt=""
          className="postShareStatusImg"
        />
        <input
          className="postShareStatusInput"
          placeholder={"Whats in your mind " + user.username + " ?"}
          ref={desc}
        ></input>
      </div>
      <hr className="hrBar" />
      {file && (
        <div className="shareImgContainer">
          <img
            className="shareImg"
            src={URL.createObjectURL(file)}
            alt=""
          ></img>
          <Cancel className="cancelImg" onClick={() => setFile(null)}></Cancel>
        </div>
      )}
      <form onSubmit={(e) => handleMediaSubmit(e)}>
        <div className="postShareButtons">
          <label htmlFor="file" className="postShareButtonItem">
            <PermMedia htmlColor="tomato" className="shareIcon" />
            <span className="shareOptionText">Photo or Video</span>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png,.jpeg,.jpg"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </label>
          <div className="postShareButtonItem">
            <Label htmlColor="blue" />
            <span>Tag</span>
          </div>
          <div className="postShareButtonItem">
            <LocationOn htmlColor="green" />
            <span>Location</span>
          </div>
          <div className="postShareButtonItem">
            <SentimentDissatisfied htmlColor="goldenrod" />
            <span>Feelings</span>
          </div>
          <div className="postShareButtonItem">
            <button className="shareButton">Share</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Share;
