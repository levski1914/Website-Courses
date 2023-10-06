import React from "react";
import "./Main-title.css";

const MainTitle = ({ title, text }) => {
  return (
    <>
      <div className="title">
        <h1 className="">{title}</h1>
        <p>{text}</p>
      </div>
    </>
  );
};

export default MainTitle;
