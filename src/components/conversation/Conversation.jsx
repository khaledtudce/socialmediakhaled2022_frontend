import { useEffect, useState } from "react";
import "./conversation.css";
import axios from "axios";

const Conversation = ({ conversation, currentUser }) => {
  const [user, setUser] = useState(null);
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  const REACT_APP_PROXY = process.env.REACT_APP_PROXY;

  useEffect(() => {
    const friendId = conversation?.members.find((m) => m !== currentUser._id);
    const getUser = async () => {
      try {
        const res = await axios.get(
          REACT_APP_PROXY + "/users?userId=" + friendId
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [conversation, currentUser, REACT_APP_PROXY]);

  return (
    <div className="conversation">
      <img
        src={PUBLIC_FOLDER + "person/noAvater.jpeg"}
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">{user?.username}</span>
    </div>
  );
};

export default Conversation;
