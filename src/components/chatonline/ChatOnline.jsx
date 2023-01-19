import "./chatOnline.css";

const ChatOnline = ({ onlineUsers, setCurrentChat }) => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src={PUBLIC_FOLDER + "person/noAvater.jpeg"}
            alt=""
          ></img>
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">Khaled Reza</span>
      </div>
    </div>
  );
};

export default ChatOnline;
