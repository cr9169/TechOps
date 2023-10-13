import React, { useState } from "react";
import "./HomePage.scss";

const HomePage: React.FC = ({}: {}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    console.log(title, content);
  };

  return (
    <div className="home-main-container">
      <div className="home-article-container">
        <input
          type="text"
          placeholder="Article Title"
          className="input-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={30}
        />
        <textarea
          placeholder="Write your content here..."
          className="input-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <div className="submit-button-container">
          <button className="submit-button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
