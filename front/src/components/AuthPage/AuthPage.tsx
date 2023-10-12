import React, { useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import GoogleIcon from "@mui/icons-material/Google";
import "./AuthPage.scss";
import UserDetailsInput from "./UserDetailsInput/UserDetailsInput";

const AuthPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(username, password);
  };

  return (
    <div className="main-container">
      <div className="article-container">
        <div className="input-section">
          <PeopleIcon style={{ color: "#80bf02" }} />
          <UserDetailsInput
            GenericMuiIcon={LockIcon}
            inputData={username}
            setInputData={setUsername}
          />
          <UserDetailsInput
            GenericMuiIcon={PersonIcon}
            inputData={password}
            setInputData={setPassword}
          />
        </div>
        <div className="inputs-special-actions-section">
          <a href="/forgot-password" className="forgot-password-link">
            Forgot Password
          </a>
        </div>
        <div className="actions-sections">
          <button className="google-login-btn">
            <GoogleIcon />
            Continue with google
          </button>
          <button className="login-button" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
