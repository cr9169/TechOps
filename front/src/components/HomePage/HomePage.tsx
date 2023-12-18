import React, { useEffect, useState } from "react";
import MainNavBar from "./MainNavBar/MainNavBar";
import SecondaryNavBar from "./SecondaryNavBar/SecondaryNavBar";
import Zoom from "@mui/material/Zoom";
import "./HomePage.scss";
import ArticleContainer from "./ArticleContainer/ArticleContainer";

const HomePage: React.FC = ({}: {}) => {
  const [delayCompleted, setDelayCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayCompleted(true);
    }, 250);
  }, []);

  return (
    <div className="home-main-container">
      <MainNavBar />
      <div className="home-windows-section">
        <Zoom in={true} timeout={1000}>
          <div className="zoom-second-nav-wrapper">
            <SecondaryNavBar />
          </div>
        </Zoom>
        <Zoom in={delayCompleted} timeout={1000}>
          <div className="zoom-article-container-wrapper">
            <ArticleContainer />
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default HomePage;
