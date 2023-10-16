import React, { useEffect, useState } from "react";
import MainNavBar from "./MainNavBar/MainNavBar";
import SecondaryNavBar from "./SecondaryNavBar/SecondaryNavBar";
import Zoom from "@mui/material/Zoom";
import "./HomePage.scss";

const HomePage: React.FC = ({}: {}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [delayCompleted, setDelayCompleted] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayCompleted(true);
    }, 250);
  }, []);

  const handleSubmit = () => {
    console.log(title, content);
  };

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
          <div className="home-article-container">
            <input
              type="text"
              placeholder="Article Title"
              className="home-input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={30}
            />
            <textarea
              placeholder="Write your content here..."
              className="home-input-content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <div className="home-submit-button-container">
              <button className="home-submit-button" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default HomePage;
