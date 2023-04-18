import { useEffect, useState } from "react";
import "./chatOnline.css";
import axios from "axios";

const ChatOnline = ({ onlineUsers, currentId, setCurrentChat }) => {
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get("/users/friend/" + currentId);
      setFriends(res.data);
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(
      friends.filter((friend) => onlineUsers?.includes(friend._id))
    );
  }, [onlineUsers, friends]);

  const handleChatOnclick = async (onlineFriend) => {
    try {
      const res = await axios.get(
        "conversations/find/" + currentId + "/" + onlineFriend._id
      );
      setCurrentChat(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(onlineFriends);

  return (
    <div className="chatOnline">
      {onlineFriends?.map((onlineFriend) => (
        <div
          className="chatOnlineFriend"
          onClick={() => handleChatOnclick(onlineFriend)}
        >
          <div className="chatOnlineImgContainer">
            <img
              className="chatOnlineImg"
              src={
                PUBLIC_FOLDER +
                (onlineFriend?.profilePicture || "person/noAvater.jpeg")
              }
              alt=""
            ></img>
            <div className="chatOnlineBadge"></div>
          </div>
          <span className="chatOnlineName">{onlineFriend.username}</span>
        </div>
      ))}
    </div>
  );
};

export default ChatOnline;
