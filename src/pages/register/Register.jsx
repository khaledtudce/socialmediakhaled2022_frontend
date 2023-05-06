import axios from "axios";
import { useState } from "react";
import "./register.css";

const Register = () => {
  const REACT_APP_PROXY = process.env.REACT_APP_PROXY;
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");
  const [success, setSuccess] = useState(false);

  const handleClick = async (e) => {
    setErrorText("");
    setSuccess(false);
    e.preventDefault();
    try {
      const res = await axios.post(REACT_APP_PROXY + "/auth/register", {
        username: username,
        email: email,
        password: password,
      });
      if (res.data) setSuccess(true);
    } catch (error) {
      setErrorText("Failed: " + error);
    }
  };

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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="registerInput"
              type="text"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="registerInput"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="registerInput"
              type="text"
              placeholder="confirm password"
            />
            <button className="inputButton" onClick={handleClick}>
              Sign Up
            </button>
            <span
              className="successLabel"
              style={{ visibility: success ? "visible" : "hidden" }}
            >
              Registered successfully
            </span>
            <span
              className="errorLabel"
              style={{ visibility: errorText ? "visible" : "hidden" }}
            >
              {errorText}
            </span>
            <button className="createNewAccountButton">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
