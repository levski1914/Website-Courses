import React, { useState, useEffect } from "react";
import "./Cards.css";
//dynamicly load 5 cards

//create data for cards
const cardData = [
  {
    imgsrc:
      "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/fundamentals.svg",
    title: "Fundamentals",
    text: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
  },
  {
    imgsrc:
      "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/front-end.svg",
    title: "Fundamentals",
    text: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
  },
  {
    imgsrc:
      "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/back-end.svg",
    title: "Fundamentals",
    text: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
  },
  {
    imgsrc:
      "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/mobile.svg",
    title: "Fundamentals",
    text: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
  },
  {
    imgsrc:
      "http://res.cloudinary.com/codewithmosh/image/upload/v1685118742/images/game.svg",
    title: "Fundamentals",
    text: "Essential courses that anyone pursuing a career as a professional software engineer should take. Data structures, algorithms, design patterns, and more!",
  },
];

//create card component

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10">
        <div className="card my-3">
          <img src={props.imgsrc} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </div>
    </>
  );
};
// where have to pass props to card component

const Cards = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="row g-5 my-5">
        {isLoading ? (
          <div className="loaderCenter">
            <div className="ring">
              Loading
              <span></span>
            </div>
          </div>
        ) : (
          cardData.map((val, ind) => (
            <Card
              key={ind}
              imgsrc={val.imgsrc}
              title={val.title}
              text={val.text}
            />
          ))
        )}
      </div>
    </>
  );
};

export default Cards;
