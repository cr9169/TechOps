import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import "./AuthPage.scss";

const AuthPage: React.FC = () => {
  return (
    <div className="main-container">
      <div className="article-container">
        <div className="input-section">
          <PeopleIcon />
        </div>  
        <div className="inputs-special-actions-section"></div>
        <div className="actions-sections"></div>
      </div>
    </div>
  );
};

export default AuthPage;
