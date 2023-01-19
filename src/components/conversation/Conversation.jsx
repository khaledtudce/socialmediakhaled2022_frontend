import "./conversation.css";

const Conversation = () => {
  const PUBLIC_FOLDER = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="conversation">
      <img
        src={PUBLIC_FOLDER + "person/noAvater.jpeg"}
        alt=""
        className="conversationImg"
      />
      <span className="conversationName">conversationUserName</span>
    </div>
  );
};

export default Conversation;
