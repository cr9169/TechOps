import React, { useState } from "react";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    // You can handle the submit logic here.
    // For demonstration purposes, I'm just printing the title and content.
    console.log(title, content);
  };

  return (
    <div className="articleContainer">
      <input
        type="text"
        placeholder="Article Title"
        className="inputTitle"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        maxLength={80}
      />
      <textarea
        placeholder="Write your content here..."
        className="inputContent"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <div className="submitButtonContainer">
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomePage;
