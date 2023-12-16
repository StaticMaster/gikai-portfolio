import React from "react";
import "./Homepage.css";
import kai from "../images/main-pfp.jpg";

function Homepage() {
  return (
    <div className="homepage-section">
      <div className="header-section">
        <h3>Hi, I'm Gikai</h3>
        <h2 className="text-start heading">
          {" "}
          I am an aspiring Front-End Developer and College Student
        </h2>
        {/* <p className="info-text">
          I have 1 year of experience in front end web development. Currently, I
          love to work on web application using technologies like React,
          Bootstrap, and Chakra UI.
        </p> */}
        <img src={kai} alt="kai-pfp" className="pfp img-fluid float-end"></img>
      </div>
    </div>
  );
}

export default Homepage;
