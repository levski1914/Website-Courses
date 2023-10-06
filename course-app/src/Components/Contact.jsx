import React from "react";
import MainTitle from "./Main-title";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <div className="container">
        <div className="title text-center">
          <MainTitle
            title="Contact Us"
            text="We're here for you: Connect with us for any questions or concerns."
          />
        </div>

        <div className="d-flex justify-content-center">
          <div className="form">
            <p>
              For technical questions, please post your questions on our forum
              where you can get help from fellow students.
            </p>
            <p>
              For course suggestions and career advice, check out our learning
              paths.
            </p>
            <form action="">
              <p>
                <label htmlFor="email">Your email:</label>
                <input type="email" id="email" className="input" />
              </p>
              <p>
                <label htmlFor="message">Your message:</label>
                <textarea
                  className="input"
                  name="message"
                  id="message"
                  maxLength={"500"}
                  required
                  rows="5"
                ></textarea>
              </p>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
