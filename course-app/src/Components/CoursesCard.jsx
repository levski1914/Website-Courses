import React, { useState, useEffect } from "react";
import "./CoursesCard.css";

const Card = ({ imgsrc, title, text }) => {
  return (
    <>
      <div className="col-md-4 g-5 my-4 col-10">
        <div className="card  my-3">
          <img src={imgsrc} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
          </div>
        </div>
      </div>
    </>
  );
};

const CoursesCard = ({ cardData }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className="row">
        {isLoading ? (
          <div className="loaderCenter">
            <div className="circle">
              <div className="dots"></div>
            </div>
          </div>
        ) : cardData.length === 0 ? (
          <div className="nofound">No results found</div>
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

export default CoursesCard;
