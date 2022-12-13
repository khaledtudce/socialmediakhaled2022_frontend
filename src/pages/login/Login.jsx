import { useState } from "react";
import "./login.css";

const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    setLoading(true);
    setError(false);
  };

  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginTextBlock">
          <div className="loginLogo">Kaynat Social</div>
          <div className="loginText">
            Connect with friends and the world around you on Kaynat Social
          </div>
        </div>
        <div className="loginInputBlock">
          <div className="loginInputBox">
            <input
              className="loginInput"
              type="text"
              placeholder="username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            <input
              className="loginInput"
              type="text"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="inputButton"
              data-testid="loginButton"
              disabled={!user || !password}
              onClick={handleClick}
            >
              {loading ? "Please wait" : "Login"}
            </button>
            <span className="forgotPasswordText">Forgot Password?</span>
            <button className="createNewAccountButton">
              Create New Account
            </button>
            <span
              data-testid="error"
              style={{ visibility: error ? "visible" : "hidden" }}
            >
              Something went wrong
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
