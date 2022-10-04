import React from "react";
import "./Cover.css";
import coverVideo from "../../media/Laptop_Portfolio.mp4";

const Cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>Luis Urdaneta</h1>
      <p>Full Stack Developer | Ingeniero Industrial </p>
    </div>
  );
};

export default Cover;
