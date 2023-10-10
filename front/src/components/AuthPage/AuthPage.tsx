import React, { useState } from "react";
import "./AuthPage.scss";

const AuthPage: React.FC = ({}: {}) => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <div className="input-box">
          <label>Email ID</label>
          <input type="email" placeholder="Enter your email" />
        </div>
        <div className="input-box">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>
        <button className="login-button">Login</button>
        <div className="footer">
          <span>
            Don't have an account? <a href="#">Create new</a>
          </span>
          <span>
            <a href="#">Forgot password?</a>
          </span>
        </div>
        <div className="separator">Or login with</div>
        <button className="google-button">Sign in with Google</button>
      </div>
    </div>
  );
};

export default AuthPage;
