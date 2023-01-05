import axios from "axios";
import { useContext, useState } from "react";
import "./login.css";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: email,
        password: password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
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
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              disabled={!email || !password}
              onClick={handleClick}
            >
              {isFetching ? "Please wait" : "Login"}
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
