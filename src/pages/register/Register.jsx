import "./register.css";

const Register = () => {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerTextBlock">
          <div className="registerLogo">Kaynat Social</div>
          <div className="registerText">
            Connect with friends and the world around you on Kaynat Social
          </div>
        </div>
        <div className="registerInputBlock">
          <div className="registerInputBox">
            <input
              className="registerInput"
              type="text"
              placeholder="username"
            />
            <input className="registerInput" type="text" placeholder="email" />
            <input
              className="registerInput"
              type="text"
              placeholder="password"
            />
            <input
              className="registerInput"
              type="text"
              placeholder="confirm password"
            />
            <button className="inputButton">Sign Up</button>
            <button className="createNewAccountButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
