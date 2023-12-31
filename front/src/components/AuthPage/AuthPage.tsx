import React, { useState } from "react";
import Zoom from "@mui/material/Zoom";
import PeopleIcon from "@mui/icons-material/People";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import UserDetailsInput from "./UserDetailsInput/UserDetailsInput";
import GoogleLoginButton from "./GoogleLoginButton/GoogleLoginButton";
import "./AuthPage.scss";
import "../../styles/dark.scss";

const AuthPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
  };

  return (
    <div className="auth-main-container">
      <Zoom in={true} timeout={1000}>
        <div className="auth-article-container">
          <div className="auth-input-section">
            <div className="people-icon">
              <PeopleIcon />
            </div>
            <UserDetailsInput
              GenericMuiIcon={LockIcon}
              inputData={username}
              setInputData={setUsername}
              placeHolder={"Username"}
            />
            <UserDetailsInput
              GenericMuiIcon={PersonIcon}
              inputData={password}
              setInputData={setPassword}
              placeHolder={"Password"}
            />
          </div>
          <div className="inputs-special-actions-section">
            <a href="/forgot-password" className="forgot-password-link">
              Forgot Password
            </a>
          </div>
          <div className="actions-sections">
            <GoogleLoginButton />
            <button className="login-button" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </Zoom>
    </div>
  );
};

export default AuthPage;
