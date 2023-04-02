import "./messenger.css";
import Topbar from "./../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import { useState } from "react";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatonline/ChatOnline";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useEffect } from "react";
import axios from "axios";

const Messenger = () => {
  const { user } = useContext(AuthContext);
  const [conversations, SetConversations] = useState([]);
  const [currentConversation, SetCurrentConversation] = useState(null);
  const [messages, SetMessages] = useState([]);
  const [onlineUsers, SetOnlineUsers] = useState(null);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get("/conversations/" + user._id);
        SetConversations(res.data);
      } catch (error) {
        console.log("Conversation load error: " + error);
      }
    };
    getConversations();
  }, [user]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get("/messages/" + currentConversation?._id);
        SetMessages(res.data);
      } catch (error) {
        console.log("Messages load error: " + error);
      }
    };
    getMessages();
  }, [currentConversation]);

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="Search for friends" />
            {conversations.map((conversation) => (
              <div onClick={() => SetCurrentConversation(conversation)}>
                <Conversation
                  conversation={conversation}
                  currentUser={user}
                  key={conversation._id}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentConversation ? (
              <>
                <div className="chatBoxTop">
                  {messages.map((message) => (
                    <Message
                      message={message}
                      own={message.sender === user._id}
                      key={message._id}
                    />
                  ))}
                </div>
              </>
            ) : (
              <span className="noConversationText">
                Open a conversation to start a chat
              </span>
            )}
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="chatMessageInput"
              placeholder="write something..."
            ></textarea>
            <button className="chatSubmitButton">Send</button>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline
              onlineUsers={onlineUsers}
              setCurrentChat={SetCurrentConversation}
            />
            <ChatOnline
              onlineUsers={onlineUsers}
              setCurrentChat={SetCurrentConversation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
