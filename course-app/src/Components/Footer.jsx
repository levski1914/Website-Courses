import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope, faFacebook } from "@fortawesome/free-solid-svg-icons";
// fontawesome.library.add(faCheckSquare, faCoffee);
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer mt-3">
      <div className="relative-background">
        <div className="d-flex flex-row justify-content-center">
          <div className="blur"></div>
        </div>
      </div>
      <div className="container d-flex justify-content-between">
        <div className="info">© Code with Mosh</div>
        <div className="social d-flex">
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <p className="px-2">Youtube</p>
          <p className="px-2">twitter</p>
          <p className="px-2">facebook</p>
        </div>
        <div className="term d-flex">
          <p className="px-2">Terms of Use</p>
          <p className="px-2">Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
