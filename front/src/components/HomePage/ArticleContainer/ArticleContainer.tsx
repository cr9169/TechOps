import React, { useState } from "react";
import "./ArticleContainer.scss";

const ArticleContainer: React.FC = ({}: {}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    console.log(title, content);
  };

  return (
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
  );
};

export default ArticleContainer;
