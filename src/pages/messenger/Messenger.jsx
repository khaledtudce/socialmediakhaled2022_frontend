import "./messenger.css";
import Topbar from "./../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import { useRef, useState } from "react";
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
  const [newMessage, SetnewMessage] = useState(null);
  const [onlineUsers, SetOnlineUsers] = useState(null);
  const scrollRef = useRef();

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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  });

  const sendButtonHandler = async (e) => {
    e.preventDefault();
    const message = {
      conversationId: currentConversation._id,
      sender: user._id,
      text: newMessage,
    };
    try {
      const res = await axios.post("messages", message);
      SetMessages([...messages, res.data]);
      SetnewMessage("");
    } catch (error) {}
  };

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
                    <div ref={scrollRef} key={message._id}>
                      <Message
                        message={message}
                        own={message.sender === user._id}
                        key={message._id}
                      />
                    </div>
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
              onChange={(e) => SetnewMessage(e.target.value)}
              value={newMessage}
              className="chatMessageInput"
              placeholder="write something..."
            ></textarea>
            <button
              className="chatSubmitButton"
              onClick={(e) => sendButtonHandler(e)}
            >
              Send
            </button>
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
