import "./login.css";

const Login = () => {
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
            <input className="loginInput" type="text" placeholder="username" />
            <input className="loginInput" type="text" placeholder="password" />
            <button className="inputButton">Log In</button>
            <span className="forgotPasswordText">Forgot Password?</span>
            <button className="createNewAccountButton">
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
