import "./messenger.css";
import Topbar from "./../../components/topbar/Topbar";
import Conversation from "../../components/conversation/Conversation";
import { useState } from "react";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatonline/ChatOnline";

const Messenger = () => {
  const [conversation, SetConversation] = useState([]);
  const [currentChat, SetCurrentChat] = useState(null);
  const [onlineUsers, SetOnlineUsers] = useState(null);

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input className="chatMenuInput" placeholder="Search for friends" />
            <Conversation conversaion={""} key={1} />
            <Conversation conversaion={""} key={2} />
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            {currentChat ? (
              <>
                <div className="chatBoxTop">
                  <Message message={"m"} own={true} />
                  <Message message={"m"} own={false} />
                  <Message message={"m"} own={true} />
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
              setCurrentChat={SetCurrentChat}
            />
            <ChatOnline
              onlineUsers={onlineUsers}
              setCurrentChat={SetCurrentChat}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
