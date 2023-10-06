import React from "react";
import Cards from "./Cards";
import { useState } from "react";

//pass props from Cards.jsx
//create data for cards

const LearningPaths = () => {
  return (
    <>
      <div className="container">
        <div className="title text-center">
          <h1 className="">Learning Paths</h1>
          <p>
            Discover your optimal learning path to reach your full potential
          </p>
        </div>
        <Cards />
      </div>
    </>
  );
};

export default LearningPaths;
