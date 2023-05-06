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
import { io } from "socket.io-client";

const Messenger = () => {
  const REACT_APP_PROXY = process.env.REACT_APP_PROXY;
  const { user } = useContext(AuthContext);
  const [conversations, SetConversations] = useState([]);
  const [currentConversation, SetCurrentConversation] = useState(null);
  const [messages, SetMessages] = useState([]);
  const [newMessage, SetnewMessage] = useState("");
  const [arrivalMessage, SetArrivalMessage] = useState(null);
  const [onlineUsers, SetOnlineUsers] = useState(null);
  const socket = useRef();
  const scrollRef = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      SetArrivalMessage({
        conversationId: data.conversationId,
        sender: data.senderId,
        text: data.text,
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage?.sender) &&
      SetMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentConversation]);

  useEffect(() => {
    socket.current.emit("addUser", user._id);
    socket.current.on("getUsers", (users) => {
      SetOnlineUsers(
        user.followings.filter((f) => users.some((u) => u.userId === f))
      );
    });
  }, [user.followings, user._id]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          REACT_APP_PROXY + "/conversations/" + user._id
        );
        SetConversations(res.data);
      } catch (error) {
        console.log("Conversation load error: " + error);
      }
    };
    getConversations();
  }, [user, REACT_APP_PROXY]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          REACT_APP_PROXY + "/messages/" + currentConversation?._id
        );
        SetMessages(res.data);
      } catch (error) {
        console.log("Messages load error: " + error);
      }
    };
    getMessages();
  }, [currentConversation, REACT_APP_PROXY]);

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

    const receiverId = currentConversation.members.find(
      (member) => member !== user._id
    );

    socket.current.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage,
    });

    try {
      const res = await axios.post(REACT_APP_PROXY + "messages", message);
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
              <div
                onClick={() => SetCurrentConversation(conversation)}
                key={conversation._id}
              >
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
              currentId={user._id}
              setCurrentChat={SetCurrentConversation}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
