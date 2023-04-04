import React from "react";
import "./SideCard.css";
import Title from "../Title/Title";

const SideCard = ({ totalTime, titles }) => {
  return (
    <div className="side-card">
      <div className="total-read-time">Spent time on read :{totalTime} min</div>
      <div className="title-container">
        <h2 className="total-bookmarked">Bookmarked Blogs:{titles.length} </h2>

        {titles.map((title) => (
          <Title  title={title}></Title>
        ))}
      </div>
    </div>
  );
};

export default SideCard;
